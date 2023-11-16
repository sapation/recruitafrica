"use client";

import { Footer, Navigation } from '@/components'
import Errormessage from '@/components/Errormessage'
import Spinner from '@/components/Spinner';
import { EducationForm } from '@/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';


type educationForm = z.infer<typeof EducationForm>

const Education = () => {
    const [loading, setLoading] = useState(false);
    const {register, handleSubmit,setValue, formState: { errors }} = useForm<educationForm>({
        resolver: zodResolver(EducationForm),
    });


  return (
    <div className="min-h-screen bg-light-gray-200">
        <Navigation />
        <div className='pt-20 wrapper flex items-center justify-center'>
            <div className='bg-white w-full lg:w-1/2 my-10 px-10'>
                <h3 className='text-center font-bold text-[28px] pt-20 head_text'>Add <span className='green_text'>Education</span></h3>
                <form className='px-10 py-20'>
                    <div className='mb-3 flex flex-col'>
                        <label className='text-gray-700 capitalize'>Coarse Offered<span className='text-red-400 text-xl'>*</span></label>
                        <input 
                        type='text'
                        placeholder='Enter coarse offered'
                        className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.coarseOffered?.message ? 'border-red-400' : ''}`}
                        
                        />
                        <Errormessage>{errors.coarseOffered?.message}</Errormessage>
                    </div>

                    <div className='mb-3 flex flex-col'>
                        <label className='text-gray-700 capitalize'>University Name<span className='text-red-400 text-xl'>*</span></label>
                        <input 
                        type='text'
                        placeholder='Enter university name'
                        className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.universityName?.message ? 'border-red-400' : ''}`}
                        
                        />
                        <Errormessage>{errors.universityName?.message}</Errormessage>
                    </div>

                    <div className='mb-3 flex flex-col'>
                        <label className='text-gray-700 capitalize'>University Address<span className='text-red-400 text-xl'>*</span></label>
                        <input 
                        type='text'
                        placeholder='Enter university address'
                        className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.universityAddress?.message ? 'border-red-400' : ''}`}
                        
                        />
                        <Errormessage>{errors.universityAddress?.message}</Errormessage>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-2'>
                      <div className='mb-3 flex flex-col lg:w-1/2'>
                        <label className='text-gray-700 capitalize'>Start Date</label>
                          <input 
                            type='date'
                            placeholder='Enter Start date'
                            className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.startDate?.message ? 'border-red-400' : ''}`}
                            
                            />
                          <Errormessage>{errors.startDate?.message}</Errormessage>
                      </div>
                      <div className='mb-3 flex flex-col lg:w-1/2'>
                        <label className='text-gray-700 capitalize'>End Date</label>
                          <input 
                            type='text'
                            placeholder='Enter Lastname'
                            className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.endDate?.message ? 'border-red-400' : ''}`}

                            />
                          <Errormessage>{errors.endDate?.message}</Errormessage>
                      </div>
                  </div>

                  <div className='mb-3 flex flex-col'>
                        <label className='text-gray-700 capitalize'>University Website<span className='text-red-400 text-xl'>*</span></label>
                        <input 
                        type='text'
                        placeholder='Enter university website'
                        className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.universityWebsite?.message ? 'border-red-400' : ''}`}
                        
                        />
                        <Errormessage>{errors.universityWebsite?.message}</Errormessage>
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

export default Education