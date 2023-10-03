import React from 'react'

const CallToAction = () => {
  return (
    <div className="bg-[url('/bg-h15.jpg')] bg-cover bg-no-repeat bg-center bg-fixed py-[50px] flex justify-center">
        <div className="wrapper flex flex-col items-center text-white gap-10">
            <h2 className='text-capitalize font-bold text-[32px]'>Recruit Africa Make's Recruiting Your Competitive Advantage</h2>
            <p className='text-[20px]'>We make recruiting the best and hard working candidates from africa a 
                competitive advantage for companies in US 
            </p>
             <button className="btn_base w-full lg:w-fit text-primary-black border-2 text-white border-primary-green font-bold bg-primary-green rounded-lg py-3 px-5
           hover:border-primary-green  hover:bg-white hover:text-black">Get Started</button>
        </div>
    </div>
  )
}

export default CallToAction