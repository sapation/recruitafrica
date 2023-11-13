"use client";

import Image from 'next/image';
import React, {useState} from 'react'
import { TbMenuDeep } from "react-icons/tb"
import { IoClose } from "react-icons/io5"
import Link from 'next/link';
import { signOut, useSession } from "next-auth/react"
import { Logo } from '../../public';


const Navigation = () => {
  const [open, setOpen] = useState(false);
   const openMenu = () => {
    document.body.style.overflowY = "hidden";
    setOpen(true);
  }

  const closeMenu = () => {
    document.body.style.overflowY = "scroll";
    setOpen(false);
  }

  const {data, status } = useSession();

  return (
    <div className="bg-white fixed w-full shadow-sm z-30">
    <div className="wrapper flex justify-between items-center py-5 relative">
      <Link href="/">
        <Image src={Logo} alt='' width={200} height={100} />
      </Link>
        {/* <a>RecruitAfrica.</a> */}

        <div className="hidden lg:block">
          <ul className="flex items-center gap-10">
            <li className="link border-primary-green">Home</li>
            <li className="link border-transparent">About</li>
            <li className="link border-transparent">Blog</li>
            <li className="link border-transparent">Services</li>
            <li className="link border-transparent">Contact</li>
          </ul>
        </div>
        <TbMenuDeep className="block lg:hidden cursor-pointer h-10 w-10" onClick={openMenu} />

        {/* Mobile Nav */}
        <div className={`fixed top-0 right-0 h-full w-full bg-black z-[1000] ${open ? 'visible' : 'hidden'} opacity-[0.5] transition-all duration-400 ease-in`} />
        <div className={`px-12 py-12 bg-white shadow-lg w-full sm:w-[300px] min-h-screen ${open ? 'left-0' : '-left-full'} top-0 rounded-r-lg flex flex-col gap-16 lg:hidden absolute z-[999991] transition-all duration-500 ease-in`}>
          <div className="">
            <Link href="/">
              <Image src='./logo.svg' alt='' width={200} height={100} />
            </Link>
            <IoClose className="absolute right-4 top-4 h-8 w-8 cursor-pointer" onClick={closeMenu}/>
          </div>

          <ul className="flex flex-col text-white items-start gap-10">
            <li className="link border-primary-green">Home</li>
            <li className="link border-transparent">About</li>
            <li className="link border-transparent">Blog</li>
            <li className="link border-transparent">Services</li>
            <li className="link border-transparent">Contact</li>
          </ul>

          <div className="flex flex-col items-start gap-[30px]">
              {status === "authenticated" ? (
                <div className='flex'>
                <Link href={`/profile/[key]`} as={`/profile/${data.user.id}`} className='text-black'>View Profile</Link>
                <button onClick={() =>signOut()} className="btn_base w-full text-primary-black  text-center border-2 text-white border-primary-green bg-primary-green rounded-lg py-2 px-5
                  hover:border-primary-green  hover:bg-white transition-all ease-in duration-400 hover:text-black">Logout</button>
                </div>
                
              ) : (
                <>
                  <Link href="/login" className="btn_base  w-full text-primary-black text-center border-2 py-2 px-5 border-primary-green
                  hover:bg-primary-green hover:text-white transition-all ease-in duration-400 rounded-lg" >Login</Link>
                  <Link href="/register" className="btn_base w-full text-primary-black  text-center border-2 text-white border-primary-green bg-primary-green rounded-lg py-2 px-5
                  hover:border-primary-green  hover:bg-white transition-all ease-in duration-400 hover:text-black">Sign Up</Link>
                </>
                
              )}
        </div>

          <p>&copy; RecruitAfrica 2023.</p>
        </div>

        <div className="hidden lg:flex items-center gap-[30px]">
           {status === "authenticated" ? (
            <>
             <Link href={`/profile/${data.user.id}`} className='link bg-transparent btn_base'>Profile</Link>
            <button onClick={() =>signOut()} className="btn_base text-primary-black border-2 text-white border-primary-green bg-primary-green rounded-lg py-2 px-5
              hover:border-primary-green  hover:bg-white hover:text-black">Logout</button>
              </>
           ) : (
            <>
              <Link href="/login" className="btn_base text-primary-black border-2 py-2 px-5 border-primary-green
              hover:bg-primary-green hover:text-white rounded-lg" >Login</Link>
              <Link href="/register" className="btn_base text-primary-black border-2 text-white border-primary-green bg-primary-green rounded-lg py-2 px-5
              hover:border-primary-green  hover:bg-white hover:text-black">Sign Up</Link>
           </>
           )}
        </div>
    </div>
    </div>
  )
}

export default Navigation