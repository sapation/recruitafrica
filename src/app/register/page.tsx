"use client";
import { FormInput } from '@/components'
import Link from 'next/link'
import React, {ChangeEvent,FormEvent, useState} from 'react'
import { AiOutlineArrowLeft, AiOutlineUser } from "react-icons/ai"
import { BsBriefcase } from "react-icons/bs"

const page = () => {
  const [isEmployer, setisEmployer] = useState(false);
  const [values, setValues] = useState({
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

  //Note pattern for names and password => pattern: "^[A-Za-z0-9]{3,16}$"
  //password : `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
  //confirm password: values.password

  const candidateInputs = [
     {
      id: 1,
      name: "firstName",
      label: "First Name",
      type : "text",
      placeholder: "Enter First Name",
      errorMessage: "Please enter Firstname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
     {
       id: 2,
      name: "lastName",
      label: "Last Name",
      type : "text",
      placeholder: "Enter Last Name",
      errorMessage: "Please enter Lastname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
       id: 3,
      name: "email",
      label: "Email",
      type : "email",
      placeholder: "Enter Email",
      errorMessage: "Please enter a valid email",
      required: true
    },
     {
       id: 4,
      name: "password",
      label: "Password",
      type : "password",
      placeholder: "Enter Password",
      errorMessage: "Please Enter password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: 5,
      name: "passwordConfirm",
      label: "Confirm Password",
      type : "password",
      placeholder: "Enter Password",
      errorMessage: "Password do not match",
      pattern: values.password,
      required: true
    }
  ]

  const employerInputs = [
    {
       id: 1,
      name: "companyName",
      label: "Company Name",
      type : "text",
      placeholder: "Enter Company Name",
      errorMessage: "Please enter Company Name",
      pattern: "^[A-Za-z0-9]{3,30}$",
      required: true
    },
    {
       id: 2,
      name: "email",
      label: "Email",
      type : "email",
      placeholder: "Enter Email",
      errorMessage: "Please enter a valid email",
      required: true
    },
     {
       id: 3,
      name: "password",
      label: "Password",
      type : "password",
      placeholder: "Enter Password",
      errorMessage: "Please Enter password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: 4,
      name: "passwordConfirm",
      label: "Confirm Password",
      type : "password",
      placeholder: "Enter Password",
      errorMessage: "Password do not match",
      pattern: values.password,
      required: true
    }
  ]

   const handleSubmit = (e: FormEvent<HTMLFormElement>)=> {
      e.preventDefault();
      console.log("submitted")
   }

   const onChange = (e:ChangeEvent<HTMLInputElement>) => {
      setValues({...values,  [e.target.name] : e.target.value});
   }

   const inputs = !isEmployer ? candidateInputs : employerInputs;

  return (
    <div className='bg-light-gray min-h-screen'>
        <div className="wrapper flex flex-col gap-10 min-h-screen items-center justify-center">
            <div className="bg-white w-full lg:w-1/2 mt-[50px]  py-10 flex flex-col rounded-lg">

                <h2 className='text-center font-bold text-[28px] mb-5 head_text'>Welcome to <span className='green_text'>Recruit Africa</span></h2>
                <form  className='w-full' onSubmit={handleSubmit}>
                <div className='mb-5 w-3/4 mx-auto flex flex-row item-center gap-5 justify-between'>
                  <button 
                  className={`py-3 w-1/2 px-10 rounded-lg ${!isEmployer ? 'bg-primary-green'  : 'bg-light-green'} text-white flex items-center justify-center gap-3`}
                   onClick={()=> setisEmployer(false)}
                  >
                  
                  <AiOutlineUser/>
                  Candidate
                  </button>
                  <button 
                  className={`py-3 w-1/2 px-10 rounded-lg ${isEmployer ? 'bg-primary-green'  : 'bg-light-green'}  text-white flex items-center justify-center gap-3`}
                  onClick={()=> setisEmployer(true)}
                  > 
                  <BsBriefcase/>
                  Employer
                  </button>
                </div>

                {inputs.map((input)=> (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}

                <div className="mb-5 w-3/4 mx-auto flex gap-2 flex-row">
                  <button  className={`btn_base w-full  text-primary-black border-2  border-primary-green font-bold bg-primary-green text-white rounded-lg py-3 px-5
                  hover:border-primary-green hover:bg-white hover:text-black`}>
                      Register
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

export default page