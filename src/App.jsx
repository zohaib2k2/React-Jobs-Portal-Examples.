import React from 'react'
// import logo from './assets/react.svg'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HomeCards from './components/HomeCards.jsx'
import JobListings from './components/JobListings.jsx'
import ViewAllJobs from './components/ViewAllJobs.jsx'

const App = () => {
  return (
    <>
      <Navbar />
    

      <Hero title="Become a React developer" subtitle="Find a suitable job according to your skills."/>

     <HomeCards/>
   

      <JobListings/>    

      <ViewAllJobs/>
    </>
  )
}

export default App