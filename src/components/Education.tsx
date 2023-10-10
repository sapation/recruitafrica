import React from 'react'
import Link from 'next/link'

const Education = () => {
  return (
        <div className="bg-white shadow-md py-10 px-[50px] mt-10 flex flex-col gap-10 lg:flex-row justify-between">
            <div className="flex flex-col">
                <h3 className='font-bold text-[24px] font-kalam'>BSc Computer Science</h3>
                <h4 className='text-[18px] '>University for Development</h4>
                <p className=''>[ 09/2012 – 05/2016 ]</p>
                <p>P. O. Box TL1350, 0233 Tamale (Ghana)</p>
                <p><Link href="https://www.uds.edu.gh/" className='text-blue-700'>https://www.uds.edu.gh/</Link></p>
            </div>
            <div className="flex gap-10">
                <button className='text-[18px] hover:bg-primary-green w-max h-max py-2 px-4 rounded-lg hover:text-white border-2 bg-transparent text-black '>Edit</button>
                <button className='text-[18px] hover:bg-red-500 w-max h-max py-2 px-4 rounded-lg hover:text-white border-2 bg-transparent text-black '>Delete</button>
            </div>
        </div>
  )
}

export default Education