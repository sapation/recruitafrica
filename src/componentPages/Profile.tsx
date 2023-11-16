"use client";

import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Education, Footer, Navigation, Referee, WorkExperience } from '@/components';
import { profileImg } from '../../public';


import "../css/profile.css"
import { z } from 'zod';
import { WorkForm,EducationForm,RefereeForm } from '@/validationSchema';


// Function for capitalising words
// function capitalizeFirstLetter(value: string) {
//     return value.charAt(0).toUpperCase() + value.slice(1);
// }

type workForm = z.infer<typeof WorkForm>
type educationForm = z.infer<typeof EducationForm>
type refereeForm = z.infer<typeof RefereeForm>


const Profile = ({data}: {data:any}) => {
    const [toggle, setToggle] = useState<number>(1);

  return (
    <div className="min-h-screen">
        <Navigation />
        <div className="main">
            <div className="topSection"></div>
            <div className="wrapper ">
                <div className="relative flex justify-between pt-36">
                    <div className="bg-white rounded-full profileImgContainer absolute">
                        <Image src={profileImg} alt="" fill className='rounded-full p-2 flex items-center justify-center'/>
                    </div>
                    <Link href={`/profile/[key]/edit`} as={`/profile/${data.id}/edit`} className='btn_base absolute right-0 border-2 py-2 px-5 editProfileBtn font-bold rounded-lg hover:bg-primary-green
                        hover:text-white transition-all ease-in duration-300'>Edit Profile</Link>
                </div>
                {/* Personal Details  */}
                
                <div className="infoContainer flex gap-2 flex-col">
                    {data && (
                        <>
                        <h2 className='text-[32px] font-bold capitalize'>{data.firstName} {data.lastName}</h2>
                        <p className='text-[22px]'><span>Email:</span> {data.email}</p>

                        {(data.profile.phoneNumber || data.profile.country) && (
                            <>
                                <p className='text-[22px]'><span>Phone Number:</span> {data.profile.phoneNumber}</p>
                                <p className='text-[22px]'><span>Country:</span> {data.profile.country}</p>
                                <p className='text-[22px]'><span>Gender:</span> {data.profile.gender}</p>
                            </>
                        )}
                        </>
                    )}
                </div>
                {/* Tabs for the other details */}
                <div className="my-10">
                    <ul className='flex justify-between border-b-2'>
                        <li onClick={() => setToggle(1)} className={`py-4 tab-link ${toggle === 1 ? "bg-slate-200" : ""} hover:bg-slate-200 w-full text-center font-bold cursor-pointer`}>Work Experience</li>
                        <li onClick={() => setToggle(2)} className={`py-4 tab-link ${toggle === 2 ? 'bg-slate-200' : ""} hover:bg-slate-200 w-full text-center font-bold cursor-pointer`}>Education</li>
                        <li onClick={() => setToggle(3)} className={`py-4 tab-link ${toggle === 3 ? "bg-slate-200" : ""} hover:bg-slate-200 w-full text-center font-bold cursor-pointer`}>Digital Skills</li>
                        <li onClick={() => setToggle(4)} className={`py-4 tab-link ${toggle === 4 ? "bg-slate-200" : ""} hover:bg-slate-200 w-full text-center font-bold cursor-pointer`}>Referee</li>
                    </ul>

                    <div className={`py-10 ${toggle === 1 ? 'block' : 'hidden'}`}>
                        <div className='flex items-center justify-between'>
                            <h4 className='font-bold'>Work Experience</h4>
                            <Link href={`/profile/[key]/work`} as={`/profile/${data.id}/work`} className='btn_base flex items-center w-14 justify-center border-2 py-2 px-5 font-bold rounded-lg bg-primary-green
                        hover:text-white'>Add Work</Link>
                        </div>
                        {data.works.length > 0 ? (
                            <>
                            {data.works?.map((work:workForm) =>(
                                <WorkExperience work={work} id={data.id} />
                            ))}
                            </>
                        ):(
                            <Link href={`/profile/[key]/work`} as={`/profile/${data.id}/work`} className='hover:underline flex items-center justify-center'>Add work experience</Link>
                        )}
                        
                    </div>
                    <div className={`py-10 ${toggle === 2 ? 'block' : 'hidden'}`}>
                        {data.educations.length > 0 ? (
                            <>
                            {data.education?.map((education:educationForm) =>(
                                <Education />
                            ))}
                            </>
                        ):(
                            <Link href={`/profile/[key]/eduction`} as={`/profile/${data.id}/education`} className='btn_base flex items-center w-14 justify-center border-2 py-2 px-5 font-bold rounded-lg bg-primary-green
                        hover:text-white'>Add Education</Link>
                        )}
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
                        {data.referee.length > 0 ? (
                            <>
                            {data.referee?.map((referee:refereeForm) =>(
                                <Referee />
                            ))}
                            </>
                        ):(
                            <Link href={`/profile/[key]/referee`} as={`/profile/${data.id}/referee`} className='btn_base flex items-center w-14 justify-center border-2 py-2 px-5 font-bold rounded-lg bg-primary-green
                        hover:text-white'>Add Referee</Link>
                        )}
                
                    </div>
                </div>
            </div>
        
        </div>
        <Footer />
    </div>
  )
}

export default Profile