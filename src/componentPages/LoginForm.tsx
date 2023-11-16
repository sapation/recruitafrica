"use client";

import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { SignInResponse, signIn, useSession } from "next-auth/react"
import {useRouter } from "next/navigation"
import Toast from '@/components/Toast';
import Spinner from '@/components/Spinner';
import { useForm } from 'react-hook-form';
import { loginSchema } from '@/validationSchema';
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import Errormessage from '@/components/Errormessage';

type loginForm = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [loading, setLoading] = useState<Boolean>(false)
  const [error, setError] = useState<Boolean>(false)
  const [message, setMessage] = useState<string | null>(null)
   const {register, handleSubmit, formState: { errors }} = useForm<loginForm>({
      resolver: zodResolver(loginSchema)
   });

   const router = useRouter();

   const onSubmit = handleSubmit(async(data:loginForm)=> {

      const { email, password } = data;

      try {
        setLoading(true);

        const res: SignInResponse | undefined = await signIn("credentials", {
          email,
          password,
          redirect: false
        });
        if(res?.error){
          setError(true);
          setMessage("Invalid Credentials");
          setLoading(false);
          return;
        }

        router.replace('/');
      } catch (error) {
        console.log("Error during registration: ", error)
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
    <div className='bg-light-gray min-h-screen'>
       {error && <Toast message={message} error={error} onclick={closeToast}/>}
        <div className="wrapper flex flex-col gap-10 min-h-screen items-center justify-center">
            <div className="bg-white w-full lg:w-1/2  items-center justify-center p-5  flex flex-col rounded-lg">

                <h2 className='text-center font-bold text-[28px] mb-5 head_text'>Welcome <span className='green_text'>Back</span></h2>
                <form action="" className='w-full' onSubmit={onSubmit}>
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
                          placeholder='Enter Password'
                          className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${errors.password?.message ? 'border-red-400' : ''}`}
                          {...register('password')}
                          />
                        <Errormessage>{errors.password?.message}</Errormessage>
                  </div>

                 <div className="mb-5 w-full mx-auto flex gap-2 flex-row justify-between">
                    <div className="flex gap-2">
                        <input type="checkbox" name="rememberme" id="" />
                        <label htmlFor="">Keep me signed in</label>
                    </div>

                    <Link className="hover:underline" href="">Forgotten Password?</Link>
                 </div>

                  <div className="mb-5 w-full mx-auto flex gap-2 flex-row">
                    <button type='submit' className={`btn_base w-full  text-primary-black border-2  border-primary-green font-bold bg-primary-green text-white rounded-md py-2 px-5
                    hover:border-primary-green hover:bg-white hover:text-black`}>
                     Login {loading && <Spinner />}
                    </button>
                  </div>

                  </form>
                  <div className="mb-5 w-3/4 mx-auto flex gap-2 flex-row items-center justify-center">
                    <p>Don't you have an account? <Link href="/register" className='font-bold text-primary-green hover:underline'>Register</Link></p>
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

export default LoginForm