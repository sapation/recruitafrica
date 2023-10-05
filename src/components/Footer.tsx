import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLogoFacebook, BiLogoLinkedin,BiLogoInstagramAlt } from "react-icons/bi"

const Footer = () => {
  return (
    <div className='py-24 bg-light-gray'>
      <div className="wrapper flex flex-col gap-10 lg:flex-row justify-between mb-2">
        <div className="flex gap-10 justify-between">
         <div className="flex flex-col gap-5">
            <h4 className='font-bold mb-3 text-[18px] '>For Candidate</h4>
            <ul className="flex flex-col items-start gap-5 mx-auto lg:mx-0">
              <li className="link border-transparent">Browse Jobs</li>
              <li className="link border-transparent">Candidate Dashboard</li>
              <li className="link border-transparent">Browse Companies</li>
            </ul>
         </div>

         <div className="flex flex-col gap-5">
          <h4 className='font-bold mb-3 text-[18px]'>For Employers</h4>
           <ul className="flex flex-col items-start gap-5 mx-auto lg:mx-0">
            <li className="link border-transparent">Browse Candidates</li>
            <li className="link border-transparent">Employer Dashboard</li>
            <li className="link border-transparent">Employer Profile</li>
          </ul>
         </div>
        </div>
        <div className="flex flex-col gap-5">
         <Link href="/">
              <Image src='./logo.svg' alt='' width={200} height={100} />
          </Link>

          <p className='max-w-[400px]'>Recruit Africa is a US Base recruitment Company passion about helping the youth in africa to make good use of their talent through recruitment.</p>

          <p>Toll Free Customer Care <br />
            <span className='text-xl font-bold'>+(1) 123 456 7890</span>
            </p>

             <p>Need live support? <br />
            <span className='text-xl font-bold'>hi@recruitafrica.com</span>
            </p>
        </div>
      </div>

      <div className="border-t-2 border-gray-100">
        <div className="wrapper flex justify-between pt-3">
          <p>2023 &copy; RecruitAfrica.</p>
          <div className="flex gap-5">
            <Link href="">
                <BiLogoFacebook className="text-[36px]" />
            </Link>

            <Link href="">
                <BiLogoLinkedin className="text-[36px]" />
            </Link>

            <Link href="">
                <BiLogoInstagramAlt className="text-[36px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer