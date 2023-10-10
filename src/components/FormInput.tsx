"use client";

import React, { FormEvent, useState } from 'react'
import { LabelInput } from '../types'

const LabelInput = (props : LabelInput) => {
  const [focused, setFocused] = useState(false);
  const {label,errorMessage, onChange, id, ...inputProps} = props;

  const handleFocus = (e: FormEvent) => {
      setFocused(true)
  }

  return (
    <div className="mb-2 w-full mx-auto flex gap-1 flex-col">
        <label className='text-gray-500 capitalize'>{label}</label>
        <input
            {...inputProps} 
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
            className={` h-[60px] bg-gray-200 focus:bg-white border-2 w-full 
            text-md py-1 px-5 rounded-lg outline-0 focus:border-primary-green peer ${focused ? 'invalid:border-red-400' : ''} `} 
        />
        <span className={`text-[14px] invisible ${focused ? 'peer-invalid:visible' : ''} text-red-400`}>{errorMessage}</span>
    </div>
  )
}

export default LabelInput