import React from 'react'
import Link  from "next/link"

const Sidebar = () => {
  return (
    <div className='pt-20 bg-white h-screen w-60 text-gray-700 border-r-2'>
        <div className='mt-10 scroll-px-10 flex flex-col gap-10'>
            <div>
                <h4 className='font-bold w-full p-2 shadow-sm bg-gray-100'>Dashboard</h4>
                <ul className='p-2 flex flex-col gap-3'>
                    <li className='py-2 w-full link border-transparent transition-all ease-in'>
                        <Link href="" className='text-[18px] '>Profile</Link>
                    </li>
                    <li className='py-2 w-full link border-transparent'>
                        <Link href="" className='text-[18px] '>Work Experience</Link>
                    </li>
                    <li className='py-2 w-full link border-transparent'>
                        <Link href="" className='text-[18px] '>Education</Link>
                    </li>
                    <li className='py-2 w-full link border-transparent'>
                        <Link href="" className='text-[18px] '>Digital Skills</Link>
                    </li>
                    <li className='py-2 w-full link border-transparent'>
                        <Link href="" className='text-[18px] '>Referee</Link>
                    </li>
                </ul>
            </div>

              <div>
                <h4 className='font-bold w-full p-2 shadow-sm bg-gray-100'>Settings</h4>
                <ul className='p-2 flex flex-col gap-3'>
                    <li className='py-2 w-full link border-transparent transition-all ease-in'>
                        <Link href="" className='text-[18px] '>Edit Profile</Link>
                    </li>
                    <li className='py-2 w-full link border-transparent transition-all ease-in'>
                        <Link href="" className='text-[18px] '>Change Password</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar