import React from 'react'
// import logo from './assets/react.svg'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HomeCards from './components/HomeCards.jsx'
import JobListings from './components/JobListings.jsx'

const App = () => {
  return (
    <>
    <Navbar />
    

    <Hero title="Become a React developer" subtitle="Find a suitable job according to your skills."/>

    <HomeCards/>
   

    <JobListings/>    

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >view all jobs</a
      >
    </section>
    </>
  )
}

export default App