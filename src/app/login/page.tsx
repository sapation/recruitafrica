"use client";

import { FormInput, PrimaryButton } from '@/components'
import Link from 'next/link'
import { type } from 'os';
import React, { FormEvent, useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai"



const page = () => {
   const [values, setValues] = useState({
    email: "",
    password: ""
   });

   //pattern: "^[A-Za-z0-9]{3,16}$"

  const inputs = [
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

   const handleSubmit = (e: FormEvent<HTMLFormElement>)=> {
      e.preventDefault();
   }

   const onChange = (e: FormEvent<HTMLFormElement>) => {
      setValues({...values, [e.target.name] : e.target.value})
   }

   console.log(values);

  return (
    <div className='bg-light-gray min-h-screen'>
        <div className="wrapper flex flex-col gap-10 min-h-screen items-center justify-center">
            <div className="bg-white w-full lg:w-1/2  items-center justify-center py-10 flex flex-col rounded-lg">

        
                <h2 className='text-center font-bold text-[28px] mb-5 head_text'>Welcome <span className='green_text'>Back</span></h2>
                <form action="" className='w-full' onSubmit={handleSubmit}>
                  {inputs.map((input) =>(
                     <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                  ))}

                 <div className="mb-5 w-3/4 mx-auto flex gap-2 flex-row justify-between">
                    <div className="flex gap-2">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Keep me signed in</label>
                    </div>

                    <Link className="hover:underline" href="">Forgotten Password?</Link>
                 </div>

                  <div className="mb-5 w-3/4 mx-auto flex gap-2 flex-row">
                    <button type='submit' className={`btn_base w-full  text-primary-black border-2  border-primary-green font-bold bg-primary-green text-white rounded-lg py-3 px-5
                    hover:border-primary-green hover:bg-white hover:text-black`}>
                        Login
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

export default page