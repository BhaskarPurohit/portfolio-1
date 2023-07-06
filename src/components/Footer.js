import React from 'react'
import "./footer.css"
import { FaHome, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Marunji Road Hinjewadi</p>
                        <p>Pune, India</p>
                    </div>
                </div>
                <div className="phone" >
                    <h4>
                        <FaPhone size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                        +91 950-962-7038
                    </h4>
                </div>
            </div>
            <div className="right"></div>
        </div>
    </div>
  )
}

export default Footer