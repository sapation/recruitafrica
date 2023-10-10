"use client";

import { FormInput } from '@/components'
import { inputProps, loginValuesProps } from '@/types';
import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { SignInResponse, signIn } from "next-auth/react"
import {useRouter } from "next/navigation"
import Toast from '@/components/Toast';

const LoginForm = () => {
  const [loading, setLoading] = useState<Boolean>(false)
  const [error, setError] = useState<Boolean>(false)
  const [message, setMessage] = useState<string | null>(null)
   const [values, setValues] = useState<loginValuesProps>({
    email: "",
    password: ""
   });

   const router = useRouter();
   //pattern: "^[A-Za-z0-9]{3,16}$"

  const inputs: Array<inputProps> = [
    {
      id: 1,
      label: "Email",
      name: "email",
      type : "email",
      placeholder: "Enter Email",
      errorMessage: "Please enter a valid email",
      required: true,
    },
     {
      id: 2,
      label: "Password",
      name: "password",
      type : "password",
      placeholder: "Enter Password",
      errorMessage: "Please enter password",
      required: true,
    }
  ]

   const handleSubmit = async (e: FormEvent<HTMLFormElement>)=> {
      e.preventDefault();
      const { email, password } = values;

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

        router.replace('dashboard');
      } catch (error) {
        console.log("Error during registration: ", error)
      } finally {
         setLoading(false);
      }
   }

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
      setValues({...values,  [e.target.name] : e.target.value});
   }

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
            <div className="bg-white w-full lg:w-1/2  items-center justify-center p-[2.5rem]  flex flex-col rounded-lg">

        
                <h2 className='text-center font-bold text-[28px] mb-5 head_text'>Welcome <span className='green_text'>Back</span></h2>
                <form action="" className='w-full' onSubmit={handleSubmit}>
                  {inputs.map((input) =>(
                     <FormInput key={input.id} {...input} value={values[input.name as keyof loginValuesProps]} onChange={onChange} onFocus/>
                  ))}

                 <div className="mb-5 w-3/4 mx-auto flex gap-2 flex-row justify-between">
                    <div className="flex gap-2">
                        <input type="checkbox" name="rememberme" id="" />
                        <label htmlFor="">Keep me signed in</label>
                    </div>

                    <Link className="hover:underline" href="">Forgotten Password?</Link>
                 </div>

                  <div className="mb-5 w-3/4 mx-auto flex gap-2 flex-row">
                    <button type='submit' className={`btn_base w-full  text-primary-black border-2  border-primary-green font-bold bg-primary-green text-white rounded-lg py-3 px-5
                    hover:border-primary-green hover:bg-white hover:text-black`}>
                      {!loading ? 'Login' :
                        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>}
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