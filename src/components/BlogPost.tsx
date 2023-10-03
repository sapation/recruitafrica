import Image from 'next/image'
import React from 'react'

const BlogPost = () => {
  return (
    <div className='flex flex-col gap-5 flex-1'>
        <div className="relative">
            <Image src="/blog1.jpg" width={350} height={150} alt='' />
        </div>
        <div className="flex flex-col gap-2">
            <p>October 3, 2023</p>
            <h4 className='text-[18px] font-bold'>Attract Sales And Profits</h4>
        </div>
    </div>
  )
}

export default BlogPost