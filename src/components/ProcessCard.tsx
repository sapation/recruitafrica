import Image from 'next/image'
import React from 'react'
import { ProcessCardProps } from '../../types'

const ProcessCard = ({iconUrl, firstTitle,secondTitle, desc}: ProcessCardProps) => {
  return (
    <div className='flex-1 flex flex-col items-center py-10 justify-center gap-10 hover:shadow-lg transition-all duration-150 ease-in'>
      <div className="bg-light-green w-20 h-20 rounded-full flex items-center justify-center">
       <Image src={iconUrl} alt=''/>
      </div>

      <div className="text-center">
        <h3 className='text-black text-[22px] font-bold font-kalam'>
            {firstTitle}
            <br />
            {secondTitle}
        </h3>
        <p className='text-gray-400 mx-20'>{desc}</p>
      </div>
    </div>
  )
}

export default ProcessCard