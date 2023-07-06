import React from 'react'
import "../components/Heroimg.css"
import bgImg from "../assets/bg-image.jpg"
import { Link } from 'react-router-dom'

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img className="into-img" src={bgImg} alt="bhaskar purohit" />
        </div>

        <div className="content">
            <p>Hi, I am Bhaskar Purohit</p>
            <h1>Web Developer</h1>
            <div>
                <Link to="/projects" className='btn'>Projects</Link>
                <Link to="/contact" className='btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg