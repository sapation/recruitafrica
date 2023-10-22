"use client";

import { inputProps, loginValuesProps } from '@/types';
import { FormInput } from '.';
import {useState, ChangeEvent} from "react"

type props = {
 show: Boolean, 
 onClose:()=> void,
 inputs: Array<inputProps>

}

const Modal = ({show, onClose, inputs}:props) => {
    const [values, setValues] = useState<loginValuesProps>({
    email: "",
    password: ""
   });
    if(!show) return null;

    const handleClose = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.id === "background") onClose();
    }

     const onChange = (e:ChangeEvent<HTMLInputElement>) => {
      setValues({...values,  [e.target.name] : e.target.value});
   }

  return (
    <div id='background' className=' fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex
    justify-center items-center z-40 transition-all ease-in duration-500'>
        <div className="bg-white p-5 rounded-lg w-3/4 lg:w-1/2 transition-all ease-in duration-500">
            <div className="flex justify-between">
                <h4 className='font-bold text-[24px]'>Edit profile</h4>
                <button className='font-bold text-[24px] bg-gray-200 p-3 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-400' onClick={onClose}>X</button>
            </div>
            <div className="mt-3">
               {inputs.map((input) =>(
                     <FormInput key={input.id} {...input} value={values[input.name as keyof loginValuesProps]} onChange={onChange} onFocus/>
                  ))}
            </div>
        </div>
    </div>
  )
}

export default Modal