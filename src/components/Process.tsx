import React from 'react'
import ProcessCard from './ProcessCard'
import accountIcon from "../../public/account.svg"
import searchIcon from "../../public/searchbag.svg"
import resumeIcon from "../../public/resumeicon.svg"

const Process = () => {
  return (
    <div className='my-36'>
      <div className="wrapper flex flex-col items-center justify-center lg:flex-row gap-[20px]">
          <ProcessCard 
          iconUrl={accountIcon} 
          firstTitle="Register an account " 
          secondTitle='to start'
          desc="Get acces to intellengent and hardworking force" 
          />
          <ProcessCard 
          iconUrl={searchIcon} 
          firstTitle="Explore over thousands " 
          secondTitle='of resumes'
          desc="Search through over thousands of resumes in our directory" 
          />
          <ProcessCard 
          iconUrl={resumeIcon} 
          firstTitle="Find the most suitable" 
          secondTitle ="candidate"
          desc="Working with the most suitable candidates from africa." 
          />
      </div>
        
    </div>
  )
}

export default Process