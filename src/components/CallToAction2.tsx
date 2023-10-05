import React from 'react'
import PrimaryButton  from './PrimaryButton'

const CallToAction2 = () => {
  return (
    <div className='mb-36'>
        <div className="wrapper bg-primary-green h-[400px] rounded-3xl relative flex justify-center gap-5 overflow-hidden">
            <div className="absolute h-[350px] w-[350px] -left-[50px] -top-[50px] rounded-full bg-white opacity-[0.1]" />
            <div className="absolute h-[350px] w-[350px] -left-[50px] -bottom-[50px] rounded-full bg-white opacity-[0.1]" />
            <div className="absolute h-[350px] w-[350px] -right-[100px] -bottom-[50px] rounded-full bg-white opacity-[0.1]" />

            <div className="flex items-center gap-5 flex-col text-center text-white justify-center lg:px-36">
                <h2 className='text-white lg:text-[36px] font-bold'>Get Matched The Most Valuable Jobs, Just Drop Your Cv at Recruit Africa</h2>
                <p className='lg:text-[24px]'>All the most Valuable jobs you can think of is availabel</p>

                <PrimaryButton title='Upload your CV' background={true} />
            </div>
        </div>
    </div>
  )
}

export default CallToAction2