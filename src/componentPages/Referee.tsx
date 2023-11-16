"use client";

import { Footer, Navigation } from '@/components'
import Errormessage from '@/components/Errormessage'
import Spinner from '@/components/Spinner';
import { RefereeForm } from '@/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';


type refereeForm = z.infer<typeof RefereeForm>

const Referee = () => {
    const [loading, setLoading] = useState(false);
    const {register, handleSubmit,setValue, formState: { errors }} = useForm<refereeForm>({
        resolver: zodResolver(RefereeForm),
    });


  return (
    <div className="min-h-screen bg-light-gray-200">
        <Navigation />
        <div className='pt-20 wrapper flex items-center justify-center'>
            <div className='bg-white w-full lg:w-1/2 my-10 px-10'>
                <h3 className='text-center font-bold text-[28px] pt-20 head_text'>Add <span className='green_text'>Referee</span></h3>
                <form className='px-10 py-20' onSubmit={handleSubmit((data)=>console.log(data))}>
                    <div className='mb-3 flex flex-col'>
                        <label className='text-gray-700 capitalize'>Referee Name<span className='text-red-400 text-xl'>*</span></label>
                        <input 
                        type='text'
                        placeholder='Enter referee name'
                        className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.name?.message ? 'border-red-400' : ''}`}
                        {...register("name")}
                        />
                        <Errormessage>{errors.name?.message}</Errormessage>
                    </div>

                    <div className='mb-3 flex flex-col'>
                        <label className='text-gray-700 capitalize'>Referee Title<span className='text-red-400 text-xl'>*</span></label>
                        <input 
                        type='text'
                        placeholder='Enter referee title'
                        className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.title?.message ? 'border-red-400' : ''}`}
                        {...register("title")}
                        />
                        <Errormessage>{errors.title?.message}</Errormessage>
                    </div>

                    <div className='mb-3 flex flex-col'>
                        <label className='text-gray-700 capitalize'>Email<span className='text-red-400 text-xl'>*</span></label>
                        <input 
                        type='text'
                        placeholder='Enter referee email'
                        className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.email?.message ? 'border-red-400' : ''}`}
                        {...register("email")}
                        />
                        <Errormessage>{errors.email?.message}</Errormessage>
                    </div>

                  <div className='mb-3 flex flex-col'>
                        <label className='text-gray-700 capitalize'>Contact<span className='text-red-400 text-xl'>*</span></label>
                        <input 
                        type='text'
                        placeholder='Enter referee contact'
                        className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.contact?.message ? 'border-red-400' : ''}`}
                        {...register("contact")}
                        />
                        <Errormessage>{errors.contact?.message}</Errormessage>
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

export default Referee;