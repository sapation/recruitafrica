import React from 'react'
import Link from "next/link"
import { z } from 'zod'
import { WorkForm } from '@/validationSchema'


type workForm = z.infer<typeof WorkForm>

const WorkExperience = ({work, id}:{work:workForm, id:Number}) => {

    const formtDate = (date:string) => {
        const newDate = new Date(date);
        const year = newDate.getFullYear();
        const month = newDate.getMonth();

        return `${month}/${year}`
    }

  return (
     <div className="bg-white shadow-md py-10 px-[50px] mt-10 flex flex-col gap-10 lg:flex-row justify-between">
            <div className="flex flex-col">
                <h3 className='font-bold text-[24px] font-kalam'>{work.jobTitle}</h3>
                <h4 className='text-[18px] '>{work.companyName}</h4>
                <p className=''>{`[ ${formtDate(work.startDate)} – ${formtDate(work.endDate)} ]`}</p>
                <p>Country: {work.country}</p>
                <p><Link href={work.companyWebsite} className='text-blue-700'>{work.companyWebsite}</Link></p>
                <p className='mt-3'>
                   {work.jobDescription}
                </p>
            </div>
            <div className="flex gap-10">
                <Link href={`/profile/edit/work/[key]`} as={`/profile/edit/work/${work.id}`} className='text-[18px] hover:bg-primary-green w-max h-max py-2 px-4 rounded-lg hover:text-white border-2 bg-transparent text-black '>Edit</Link>
                <button className='text-[18px] hover:bg-red-500 w-max h-max py-2 px-4 rounded-lg hover:text-white border-2 bg-transparent text-black '>Delete</button>
            </div>
        </div>
  )
}

export default WorkExperience