"use client";

import { Footer, Navigation } from '@/components'
import Errormessage from '@/components/Errormessage';
import { profileForm } from '@/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import countryList from 'react-select-country-list';

type registerForm = z.infer<typeof profileForm>;

const EditProfile = ({data, id}:{data:Object, id:Number}) => {
    const [loading, setLoading] = useState<Boolean>(false);
    const [error, setError] = useState<Boolean>(false)
    const [message, setMessage] = useState<string | null>(null)
    const {register, handleSubmit,setValue, formState: { errors }} = useForm<registerForm>({
    resolver: zodResolver(profileForm),
    defaultValues: data
  });


  const countryOptions = useMemo(() => countryList().getData(), [])

  const router = useRouter();

  const onSubmit = handleSubmit(async(editData:registerForm)=> {

      const {phoneNumber, country, gender} = editData;
      const body = {
        phoneNumber,
        country,
        gender
      };

      try {
        setLoading(true);
        const response = await axios.post(`/api/profile/${id}/edit`, body);
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

   const closeToast = ()=> {
      setError(false);
  }

   setTimeout(()=> {
      setError(false);
   },10000)

  return (
    <main className="min-h-screen bg-light-gray-200">
        <Navigation />
            <div className='pt-20 wrapper flex items-center justify-center'>
                <div className='bg-white w-full lg:w-1/2 my-10 px-10'>

                    <h3 className='text-center font-bold text-[28px] pt-20 head_text'>Update <span className='green_text'>Profile</span></h3>
                    <form  className='px-10 py-20' onSubmit={onSubmit}>
                    <div className='flex flex-col lg:flex-row gap-2'>
                      <div className='mb-3 flex flex-col lg:w-1/2'>
                        <label className='text-gray-700 capitalize'>Firstname<span className='text-red-400 text-xl'>*</span></label>
                          <input 
                            type='text'
                            placeholder='Enter Firstname'
                            className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.firstName?.message ? 'border-red-400' : ''}`}
                            {...register('firstName')}
                            />
                          <Errormessage>{errors.firstName?.message}</Errormessage>
                      </div>
                      <div className='mb-3 flex flex-col lg:w-1/2'>
                        <label className='text-gray-700 capitalize'>Lastname<span className='text-red-400 text-xl'>*</span></label>
                          <input 
                            type='text'
                            placeholder='Enter Lastname'
                            className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.lastName?.message ? 'border-red-400' : ''}`}
                            {...register('lastName')}
                            />
                          <Errormessage>{errors.lastName?.message}</Errormessage>
                      </div>
                  </div>
                <div className='mb-3 flex flex-col'>
                    <label className='text-gray-700 capitalize'>Phone Number<span className='text-red-400 text-xl'>*</span></label>
                    <input 
                      type='text'
                      placeholder='Enter phone number'
                      className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.phoneNumber?.message ? 'border-red-400' : ''}`}
                      {...register('phoneNumber')}
                      />
                    <Errormessage>{errors.phoneNumber?.message}</Errormessage>
                </div>

                  <div className='flex flex-col lg:flex-row gap-2'>
                      <div className='mb-3 flex flex-col lg:w-1/2'>
                        <label className='text-gray-700 capitalize'>Gender<span className='text-red-400 text-xl'>*</span></label>
                          <select 
                            placeholder='Select Gender'
                            className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.gender?.message ? 'border-red-400' : ''}`}
                            {...register('gender')}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                          <Errormessage>{errors.gender?.message}</Errormessage>
                      </div>
                      <div className='mb-3 flex flex-col lg:w-1/2'>
                        <label className='text-gray-700 capitalize'>Country<span className='text-red-400 text-xl'>*</span></label>
                            <select 
                            placeholder='Select Country'
                            className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.country?.message ? 'border-red-400' : ''}`}
                            {...register('country')}
                            >
                                <option value="">Select Country</option>
                                {countryOptions?.map((country)=>(
                                    <option key={country.value} value={country.value}>{country.label}</option>
                                ))}
                            </select>
                          <Errormessage>{errors.country?.message}</Errormessage>
                      </div>
                  </div>

                <div className="mb-5 mt-5 w-full mx-auto flex gap-2 flex-row">
                  <button  className={`btn_base w-fit  text-primary-black border-2  border-primary-green font-bold bg-primary-green text-white rounded-lg py-3 px-5
                  hover:border-primary-green hover:bg-white hover:text-black`} >
                      {!loading ? 'Edit Profile' :
                        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>}
                  </button>
                </div>

                </form>
                </div>
            </div>
        <Footer />
    </main>
  )
}

export default EditProfile