import React from 'react'
import "./footer.css"
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

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
                        <a href='tel:+91-950-962-7038'>+91 950-962-7038</a>
                    </h4>
                </div>

                <div className="email" >
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                        <a href='mailto:bhaskarpurohit22@gmail.com'>bhaskarpurohit22@gmail.com</a>
                    </h4>
                </div>

                <div className="github" >
                    <h4>
                        <FaGithub size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                        <a href='https://github.com/BhaskarPurohit'>My GitHub Profile</a>
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is me Bhaskar Purohit. A tech geek, self taught web developer. I enjoy designing new MERN stack projects and I am always up for new design challenges. I aspire to be the best of the best in the industry and update and hone my skills through continuous learning and implementation of new technologies in this sector</p>
                <div className="social">
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer