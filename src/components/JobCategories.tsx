import React from 'react'
import JobCategoryCard from './JobCategoryCard'

const FeaturedCities = () => {
  return (
    <div className='py-36 bg-light-gray'>
        <div className="wrapper flex gap-20 flex-col ">
            <div className="flex text-center items-center justify-center ">
              <h2 className='text-center font-bold font-kalam text-[32px] hover:border-b-2 border-primary-green'>Popular Job <span className='green_text'>Categories</span></h2>
            </div>
            <div className="flex gap-5 flex-wrap">
              <JobCategoryCard
              />
              <JobCategoryCard />
              <JobCategoryCard />
              <JobCategoryCard />

              <JobCategoryCard
              />
              <JobCategoryCard />
              <JobCategoryCard />
              <JobCategoryCard />
            </div>
        </div>
    </div>
  )
}

export default FeaturedCities