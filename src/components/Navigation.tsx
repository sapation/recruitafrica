"use client";

import React from 'react'
// import { Button } from "@material-tailwind/react";

const Navigation = () => {
  return (
    <div className="wrapper flex justify-between items-center py-5">
        {/* <img src={logo} alt="" /> */}
        <a>RecruitAfrica.</a>

        <div className="hidden lg:block">
          <ul className="flex items-center gap-10">
            <li className="link border-primary-green">Home</li>
            <li className="link border-transparent">About</li>
            <li className="link border-transparent">Blog</li>
            <li className="link border-transparent">Services</li>
            <li className="link border-transparent">Contact</li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-[30px]">
          <button className="btn_base text-primary-black border-2 py-2 px-5 border-primary-green
          hover:bg-primary-green hover:text-white rounded-lg" >Login</button>
          <button className="btn_base text-primary-black border-2 text-white border-primary-green bg-primary-green rounded-lg py-2 px-5
           hover:border-primary-green  hover:bg-white hover:text-black">Sign Up</button>
        </div>
    </div>
  )
}

export default Navigation