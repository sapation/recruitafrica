"use client";

import React, { FormEvent, useState } from 'react'
import Errormessage from './Errormessage';
import { useForm } from 'react-hook-form';

interface Props {
  placeholder: string,
  required: boolean,
  type: string
}
const TextField = ({placeholder, required, type, ...input}: Props) => {
  const [focused, setFocused] = useState(false);

 const handleFocus = (e: FormEvent) => {
      setFocused(true)
  }

  return (
        
        <input 
        type={type || 'text'}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        className={`py-2 px-5 border-[1px] border-gray-600 rounded-md outline-0 focus:border-primary-green peer ${focused ? 'invalid:border-red-400' : ''}`}  
        onBlur={handleFocus}
        />
  )
}

export default TextField