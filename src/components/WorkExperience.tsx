import React from 'react'
import Link from "next/link"

const WorkExperience = () => {
  return (
     <div className="bg-white shadow-md py-10 px-[50px] mt-10 flex flex-col gap-10 lg:flex-row justify-between">
            <div className="flex flex-col">
                <h3 className='font-bold text-[24px] font-kalam'>Software developer</h3>
                <h4 className='text-[18px] '>BeeIT LLC</h4>
                <p className=''>[ 09/2012 – 05/2016 ]</p>
                <p>City: Novi Sad</p>
                <p>Country: Serbia</p>
                <p><Link href="https://www.uds.edu.gh/" className='text-blue-700'>https://www.uds.edu.gh/</Link></p>
                <p className='mt-3'>
                    I worked as an assistant data officer and some of the work I handle is as follows:
                    worked with some health systems like DHIMS and E-Tracker for data management. 
                </p>
            </div>
            <div className="flex gap-10">
                <button className='text-[18px] hover:bg-primary-green w-max h-max py-2 px-4 rounded-lg hover:text-white border-2 bg-transparent text-black '>Edit</button>
                <button className='text-[18px] hover:bg-red-500 w-max h-max py-2 px-4 rounded-lg hover:text-white border-2 bg-transparent text-black '>Delete</button>
            </div>
        </div>
  )
}

export default WorkExperience