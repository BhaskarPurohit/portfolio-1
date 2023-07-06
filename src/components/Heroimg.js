import React from 'react'
import "./heroimg.css";
import bgImg from "../assets/pngwing.com.png"
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={bgImg} alt='IntroImg'/>
        </div>
        <div className="content">
            <p>Hi, I'm a Web Developer</p>
            <h1>MERN Stack Developer.</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
                </div>
        </div>

    </div>
  )
}

export default Heroimg