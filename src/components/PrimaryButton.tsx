import React from 'react'
import { PrimaryButtonProps } from '../types'

const PrimaryButton = ({title, background = false}: PrimaryButtonProps) => {

  return (
        <button className={`btn_base w-full sm:w-fit text-primary-black border-2  border-primary-green font-bold ${background ? 'bg-white text-black hover:bg-slate-200' : 'bg-primary-green text-white'} rounded-lg py-3 px-5
           hover:border-primary-green hover:bg-white hover:text-black transition-all ease-in duration-400`}>
            {title}
        </button>
  )
}

export default PrimaryButton