import Image from 'next/image'
import React from 'react'

const BlogPost = () => {
  return (
    <div className='flex flex-col gap-5'>
        <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image src="/blog1.jpg" alt='' width={450} height={150} className='object-fit rounded-lg'/>
        </div>
        <div className="flex flex-col gap-2">
            <p>October 3, 2023</p>
            <h4 className='text-[18px] font-bold'>Attract Sales And Profits</h4>
        </div>
    </div>
  )
}

export default BlogPost