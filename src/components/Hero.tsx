import React from 'react'
import { LabelInput } from '.'
import { BsSearch,BsCaretDown } from "react-icons/bs"


const Hero = () => {
  return (
    <div className="bg-[url('/hero.jpg')] bg-cover bg-no-repeat h-[600px] flex items-center justify-start">
       <div className="wrapper">
             <div className="">
                <h1 className="head_text ">Welcome to Recruit <span className='green_text'>Africa.</span></h1>

               <p className="text-light-color font-bold">Get Matched with The Most Valuable Jobs in US, 
               Just Drop Your Cv.</p>

                {/* Search section */}
                <div className="bg-white flex flex-col items-center xl:flex-row gap-5 mt-5 border-[1px] p-[15px] shadow-sm rounded-lg">
                    <div className='flex-1 flex relative border-r-2'>
                        <BsSearch className="absoulte text-[20px] left-3 top-1/2 translate-y-1/2" />
                        <input type="text" className='bottom-0 right-0 text-dark-gray placeholder-subtitle-gray 
                        text-sm focus-visible:border-none outline-none w-full h-full border-none py-4  pl-4' 
                        placeholder='Search candidate by Job title ...'/>
                    </div>
                    <div className='flex-1 flex relative border-r-2 pr-3'>
                        <input type="text" className='bottom-0 right-0 text-dark-gray placeholder-subtitle-gray 
                        text-sm focus-visible:border-none outline-none w-full h-full border-none py-4  pl-4' 
                        placeholder='Select Category ...'/>
                        <BsCaretDown className="absoulte text-[20px] right-3 top-1/2 translate-y-1/2 cursor-pointer" />
                    </div>
                    <div className=''><button className='bg-primary-green py-3 px-5 text-white rounded-lg hover:bg-primary-green-deep'>Submit</button></div>
                </div>

                {/* statistics */}
                <div className="p-5">
                    <div className="">
                        <h3>1.3 million</h3>
                        <p>Active Youth</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero