import React , {useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import {FaBars} from "react-icons/fa"

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
  return (
    <div className='header'>
        <Link to={"/"}>
            <h1>Bhaskar.</h1>
        </Link>
        <ul className='nav-menu'>
            <li>
                <Link to="/">Home</Link>
                
            </li>
            <li>
            <Link to="/projects">Projects</Link>
                
            </li>

            <li>
            <Link to="/about">About</Link>
            </li>

            <li>
               <Link to="/contact">Contact</Link>

            </li>
        </ul>
        <div className="hamburger">
            <FaBars size={20} style={{color: "#fff" }}/>
        </div>
    </div>
  )
}

export default Navbar