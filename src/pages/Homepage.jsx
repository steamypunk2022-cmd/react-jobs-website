import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'
const Homepage = () => {
  return (
    <>
    <Hero title="Test Title" subtitle="Test Subtitle"/>
    <HomeCards />
    <JobListings isHome={true} />
     <ViewAllJobs />
    </>
    
  )
}

export default Homepage