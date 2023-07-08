import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Heroimg2 from '../components/Heroimg2'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="About" text="A passionate Web Developer"/>
      <Footer/>
    </div>
  )
}

export default About