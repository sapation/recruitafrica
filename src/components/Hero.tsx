import React from 'react'
import { BsSearch,BsCaretDown } from "react-icons/bs"


const Hero = () => {
  return (
    <div className="bg-[url('/slider15.jpg')] bg-cover bg-no-repeat lg:h-[800px] flex items-center justify-start py-10">
       <div className="wrapper py-20 mt-24 md:mt-36">
             <div className="flex flex-col gap-5">
                <h1 className="head_text items-center">Welcome to Recruit <span className='green_text'>Africa.</span></h1>
               <p className="text-light-color font-bold">Find Jobs, Employment & Career Opportunities</p>

                {/* Search section */}
                <div className="bg-white flex flex-col w-full xl:flex-row gap-5 mt-5 border-[1px] p-[15px] shadow-sm rounded-lg ">
                    <div className='flex-1 flex relative border-b-2 xl:border-b-0 xl:border-r-2 z-[1]'>
                        <BsSearch className="absoulte text-[20px] left-3 top-1/2 translate-y-1/2 text-gray-300" />
                        <input type="text" className='bg-transparent bottom-0 right-0 text-dark-gray placeholder-subtitle-gray 
                        text-sm focus-visible:border-none outline-none w-full h-full border-none py-4  pl-4 ' 
                        placeholder='Search candidate by Job title ...'/>
                    </div>
                    <div className='flex-1 flex relative border-b-2  xl:border-b-0 xl:border-r-2 pr-3'>
                        <input type="text" className='bg-transparent bottom-0 right-0 text-dark-gray placeholder-subtitle-gray 
                        text-sm focus-visible:border-none outline-none w-full h-full border-none py-4  pl-4' 
                        placeholder='Select Category ...'/>
                        <BsCaretDown className="absoulte text-[20px] right-3 top-1/2 translate-y-1/2 cursor-pointer text-gray-300" />
                    </div>
                    <div className=''>
                        <button className='bg-primary-green py-3 px-5 text-white rounded-lg w-full xl:w-fit hover:bg-primary-green-deep'>
                            Submit
                        </button>
                    </div>
                </div>

                {/* statistics */}
                <div className="p-5 flex flex-col lg:flex-row gap-10">
                    <div className="">
                        <h3 className='text-[32px] font-bold font-kalam'>650 million</h3>
                        <p className='green_text text-[16px]'>Active Youth</p>
                    </div>

                     <div className="">
                        <h3 className='text-[32px] font-bold font-kalam'>375 million</h3>
                        <p className='green_text text-[16px]'>Youth workforce</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero