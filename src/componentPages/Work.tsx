"use client";

import { Footer, Navigation } from '@/components'
import Errormessage from '@/components/Errormessage'
import Spinner from '@/components/Spinner';
import { WorkForm } from '@/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import axios from 'axios';
import countryList from 'react-select-country-list';


type workForm = z.infer<typeof WorkForm>

const Work = ({id}:{id:Number}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Boolean>(false)
    const [message, setMessage] = useState<string | null>(null)
    const {register, handleSubmit,setValue, formState: { errors }} = useForm<workForm>({
        resolver: zodResolver(WorkForm),
    });

    const router = useRouter();
    const countryOptions = useMemo(() => countryList().getData(), [])

    const onSubmit = handleSubmit(async(data)=> {

      try {
        setLoading(true);
        const response = await axios.post(`/api/profile/${id}/work`, data);
        console.log(response);
        if(response.status === 201) {
            setMessage(response.data.message)
            router.push(`/profile/${id}`);
        } else {
            setError(true);
            setLoading(false);
            setMessage(response.data.message);
            return;
        }

      } catch (error) {
        setError(true);
        setMessage("error occurred");
      } finally {
          setLoading(false);
      }
   })


  return (
    <div className="min-h-screen bg-light-gray-200">
        <Navigation />
        <div className='pt-20 wrapper flex items-center justify-center'>
            <div className='bg-white w-full lg:w-1/2 my-10 px-10'>
                <h3 className='text-center font-bold text-[28px] pt-20 head_text'>Add <span className='green_text'>Work</span></h3>
                <form className='px-10 py-20' onSubmit={onSubmit}>
                    <div className='mb-3 flex flex-col'>
                        <label className='text-gray-700 capitalize'>Job Title<span className='text-red-400 text-xl'>*</span></label>
                        <input 
                        type='text'
                        placeholder='Enter job title'
                        className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.jobTitle?.message ? 'border-red-400' : ''}`}
                        {...register("jobTitle")}
                        />
                        <Errormessage>{errors.jobTitle?.message}</Errormessage>
                    </div>

                    <div className='mb-3 flex flex-col'>
                        <label className='text-gray-700 capitalize'>Company Name<span className='text-red-400 text-xl'>*</span></label>
                        <input 
                        type='text'
                        placeholder='Enter company name'
                        className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.companyName?.message ? 'border-red-400' : ''}`}
                        {...register("companyName")}
                        />
                        <Errormessage>{errors.companyName?.message}</Errormessage>
                    </div>

                    <div className='mb-3 flex flex-col'>
                      <label className='text-gray-700 capitalize'>Country<span className='text-red-400 text-xl'>*</span></label>
                          <select 
                          placeholder='Select Country'
                          className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.country?.message ? 'border-red-400' : ''}`}
                          {...register('country')}
                          >
                              <option value=''>Select Country</option>
                              {countryOptions?.map((country)=>(
                                  <option key={country.value} value={country.value}>{country.label}</option>
                              ))}
                          </select>
                        <Errormessage>{errors.country?.message}</Errormessage>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-2'>
                      <div className='mb-3 flex flex-col lg:w-1/2'>
                        <label className='text-gray-700 capitalize'>Start Date</label>
                          <input 
                            type='date'
                            placeholder='Enter Start date'
                            className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.startDate?.message ? 'border-red-400' : ''}`}
                            {...register("startDate")}
                            />
                          <Errormessage>{errors.startDate?.message}</Errormessage>
                      </div>
                      <div className='mb-3 flex flex-col lg:w-1/2'>
                        <label className='text-gray-700 capitalize'>End Date</label>
                          <input 
                            type='date'
                            placeholder='Enter end date'
                            className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.endDate?.message ? 'border-red-400' : ''}`}
                            {...register("endDate")}
                            />
                          <Errormessage>{errors.endDate?.message}</Errormessage>
                      </div>
                  </div>

                  <div className='mb-3 flex flex-col'>
                        <label className='text-gray-700 capitalize'>Company Website</label>
                        <input 
                        type='text'
                        placeholder='Enter company website'
                        className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.companyWebsite?.message ? 'border-red-400' : ''}`}
                        {...register("companyWebsite")}
                        />
                        <Errormessage>{errors.companyWebsite?.message}</Errormessage>
                    </div>

                    <div className='mb-3 flex flex-col'>
                        <label className='text-gray-700 capitalize'>Job Description</label>
                        <textarea 
                        placeholder='Enter job description'
                        className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.jobDescription?.message ? 'border-red-400' : ''}`}
                        {...register("jobDescription")}
                        ></textarea>
                        <Errormessage>{errors.jobDescription?.message}</Errormessage>
                    </div>

                    <div className="mb-5 w-full mx-auto flex gap-2 flex-row">
                    <button type='submit' className={`btn_base w-fit  text-primary-black border-2  border-primary-green font-bold bg-primary-green text-white rounded-md py-2 px-5
                    hover:border-primary-green hover:bg-white hover:text-black`}>
                     Save Changes {loading && <Spinner />}
                    </button>
                  </div>
                </form>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Work