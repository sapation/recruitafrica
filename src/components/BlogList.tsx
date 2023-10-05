import React from 'react'
import BlogPost from './BlogPost'
import { PrimaryButton } from '.'

const BlogList = () => {
  return (
    <div className='my-36'>
       <div className="wrapper items-center flex flex-col gap-10">
            <div className="flex flex-col text-center items-center justify-center ">
              <h2 className='text-center font-bold font-kalam text-[32px] hover:border-b-2 border-primary-green'>Recent <span className='green_text'>News</span></h2>
              <p className='text-[16px] text-gray-500'>Fresh job related news content posted each day.</p>
            </div>
            <div className="grid grid-cols-1 items-center lg:grid-cols-3 gap-5">
                <BlogPost />
                <BlogPost />
                <BlogPost />
            </div>
            <PrimaryButton title='Read More' background={false} />
       </div>
    </div>
  )
}

export default BlogList