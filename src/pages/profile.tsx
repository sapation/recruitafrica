"use client";

import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Education, Modal, Referee, WorkExperience } from '@/components';
import { inputProps, loginValuesProps } from '@/types';

type Props = {
    inputs : Array<inputProps>
}

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

const profile = ({inputs}: Props) => {
    const [toggle, setToggle] = useState<number>(1)
    const [showModal, setShowModal] = useState(false)
    

    const handleShow = ()=> {
         document.body.style.overflowY = "hidden";
         setShowModal(true);
    }
    const handleOnClose = () => {
        document.body.style.overflowY = "scroll";
        setShowModal(false)
    }

  return (
    <div className='pt-20'>
        <div className='h-[200px] bg-slate-200'/>
        <div className="wrapper ">
            <div className="relative flex justify-between">
                <div className="bg-white rounded-full w-[150px] h-[150px] absolute -top-20">
                    <Image src="/blog2.jpg" alt="" fill className='rounded-full p-2'/>
                </div>
                <button onClick={handleShow} className='btn_base absolute right-0 border-2 py-2 px-5 top-3 font-bold rounded-lg hover:bg-primary-green
                 hover:text-white transition-all ease-in duration-300'>Edit Profile</button>
            </div>
            {/* Personal Details  */}
            <div className="mt-20 flex gap-2 flex-col">
                <h2 className='text-[32px] font-bold'>Iddrisu Sumaila</h2>
                <p className='text-[22px]'><span>Email:</span> sumaila129@gmail.com</p>
                <p className='text-[22px]'><span>Phone Number:</span> +233548497005</p>
                <p className='text-[22px]'><span>Country:</span> Ghana</p>
                <p className='text-[22px]'><span>Gender:</span> Male</p>
            </div>

            {/* Tabs for the other details */}
            <div className="my-10">
                <ul className='flex justify-between border-b-2'>
                    <li onClick={() => setToggle(1)} className={`py-4 tab-link ${toggle === 1 ? "bg-slate-200" : ""} hover:bg-slate-200 w-full text-center font-bold`}>Work Experience</li>
                    <li onClick={() => setToggle(2)} className={`py-4 tab-link ${toggle === 2 ? 'bg-slate-200' : ""} hover:bg-slate-200 w-full text-center font-bold`}>Education</li>
                    <li onClick={() => setToggle(3)} className={`py-4 tab-link ${toggle === 3 ? "bg-slate-200" : ""} hover:bg-slate-200 w-full text-center font-bold`}>Digital Skills</li>
                    <li onClick={() => setToggle(4)} className={`py-4 tab-link ${toggle === 4 ? "bg-slate-200" : ""} hover:bg-slate-200 w-full text-center font-bold`}>Referee</li>
                </ul>

                <div className={`py-10 ${toggle === 1 ? 'block' : 'hidden'}`}>
                     <WorkExperience />
                     <WorkExperience />
                </div>
                <div className={`py-10 ${toggle === 2 ? 'block' : 'hidden'}`}>
                    <Education />
                    <Education />
                </div>

                <div className={`py-10 ${toggle === 3 ? 'block' : 'hidden'}`}>
                    <h1 className='text-[36px]'>Digital Skill</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Officia, ducimus tempore? Ducimus earum quisquam harum non at facere modi fugiat quidem id 
                         nulla ullam blanditiis iure perferendis, natus possimus! Iste dolores quibusdam porro facilis
                          ea quasi veniam modi officia esse.
                    </p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Officia, ducimus tempore? Ducimus earum quisquam harum non at facere modi fugiat quidem id 
                         nulla ullam blanditiis iure perferendis, natus possimus! Iste dolores quibusdam porro facilis
                          ea quasi veniam modi officia esse.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Officia, ducimus tempore? Ducimus earum quisquam harum non at facere modi fugiat quidem id 
                         nulla ullam blanditiis iure perferendis, natus possimus! Iste dolores quibusdam porro facilis
                          ea quasi veniam modi officia esse.
                    </p>
                </div>

                 <div className={`py-10 ${toggle === 4 ? 'block' : 'hidden'}`}>
                     <Referee />
                     <Referee />
                </div>
            </div>
        </div>
        <Modal onClose={handleOnClose} show={showModal} inputs={inputs}/>
    </div>
  )
}

export default profile