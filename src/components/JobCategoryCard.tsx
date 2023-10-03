import Image from 'next/image'
import React from 'react'
import { GrMoney } from 'react-icons/gr'

const JobCategoryCard = () => {
  return (
    <div className='flex flex-row gap-5 items-center bg-white p-5 rounded-lg'>
        <div className=" p-5 bg-gray-200 text-primary-green-deep rounded-lg">
            <GrMoney className="text-[36px] text-primary-green"/>
        </div>
        <div className="flex flex-col gap-2">
            <h4 className='text-[16px] font-bold'>Accounting / Finance</h4>
            <p className='text-gray-500'>(1 open postions)</p>
        </div>
    </div>
  )
}

export default JobCategoryCard