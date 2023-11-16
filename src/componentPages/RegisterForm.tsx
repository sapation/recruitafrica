"use client";

import Link from 'next/link'
import React, {useState} from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useRouter } from 'next/navigation';
import Toast from '@/components/Toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'
import { registerSchema } from '@/validationSchema';
import Errormessage from '@/components/Errormessage';
import axios from 'axios';

type registerForm = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<Boolean>(false)
  const [message, setMessage] = useState<string | null>(null)
  const {register, handleSubmit, formState: { errors }} = useForm<registerForm>({
    resolver: zodResolver(registerSchema)
  });

  const router = useRouter();

   const onSubmit = handleSubmit(async(data: registerForm)=> {

      const {firstName,lastName, email, password, isEmployer} = data;
      const body = {
        firstName,
        lastName,
        email,
        password,
        employer:isEmployer,
      };

      try {
        setLoading(true);
        const response = await axios.post("api/register", body);
        console.log(response);
        if(response.status === 201) {
            setMessage(response.data.message)
            router.push("/login");
        } else {
            setError(true);
            setLoading(false);
            console.log(response.data.message)
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

  return (
    <div className='bg-light-gray min-h-screen'>
      {error && <Toast message={message} error={error} onclick={closeToast}/>}
        <div className="wrapper flex flex-col gap-10 min-h-screen items-center justify-center">
            <div className="bg-white w-full  lg:w-1/2 mt-[50px]  p-5 flex flex-col rounded-lg">

                <h2 className='text-center font-bold text-[28px] mb-5 head_text'>Welcome to <span className='green_text'>Recruit Africa</span></h2>

                <form  className='' onSubmit={onSubmit}>
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
                    <label className='text-gray-700 capitalize'>Email<span className='text-red-400 text-xl'>*</span></label>
                    <input 
                      type='email'
                      placeholder='Enter email'
                      className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.email?.message ? 'border-red-400' : ''}`}
                      {...register('email')}
                      />
                    <Errormessage>{errors.email?.message}</Errormessage>
                </div>

                  <div className='mb-3 flex flex-col'>
                    <label className='text-gray-700 capitalize'>Password<span className='text-red-400 text-xl'>*</span></label>
                    <input 
                      type='password'
                      placeholder='Enter password'
                      className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.password?.message ? 'border-red-400' : ''}`}
                      {...register('password')}
                      />
                    <Errormessage>{errors.password?.message}</Errormessage>
                </div>

                  <div className='mb-3 flex flex-col'>
                    <label className='text-gray-700 capitalize'>Confirm Password<span className='text-red-400 text-xl'>*</span></label>
                    <input 
                      type='password'
                      placeholder='Confirm password'
                      className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.email?.message ? 'border-red-400' : ''}`}
                      {...register('confirmPassword')}
                      />
                    <Errormessage>{errors.confirmPassword?.message}</Errormessage>
                </div>

                <div className="mb-5 w-full mx-auto">
                    <div className="flex gap-2">
                        <input type="checkbox" className='checked:bg-primary-green' {...register('isEmployer')}/>
                        <label className='text-gray-500 capitalize' htmlFor="employer">I you an Employer.</label>
                    </div>
                 </div>

                <div className="mb-5 w-full mx-auto flex gap-2 flex-row">
                  <button  className={`btn_base w-full  text-primary-black border-2  border-primary-green font-bold bg-primary-green text-white rounded-lg py-3 px-5
                  hover:border-primary-green hover:bg-white hover:text-black`} >
                      {!loading ? 'Register' :
                        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>}
                  </button>
                </div>

                </form>
                  <div className="mb-5 w-3/4 mx-auto flex gap-2 flex-row items-center justify-center">
                    <p>Already have an account? <Link href="/login" className='font-bold text-primary-green hover:underline'>Login</Link></p>
                  </div>
            </div>

            <div className="flex w-full lg:w-1/2 items-center justify-center">
                <Link href="/" className='text-center bg-primary-green p-3 rounded-full'>
                    <AiOutlineArrowLeft className="text-white text-[32px]" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default RegisterForm