import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";




const Contact = () => {
    return(
        <>
        <div className="container contact" id='contact'>
            <h1>CONTACT ME</h1> 
            <div className="contact-icon"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            
            >
                <a href="https://www.instagram.com/arahmadraza5570/" target="_blank" className="items">
                <FaInstagram className="icons" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100075894878915" target="_blank" className="items">
                <CiFacebook className="icons" />

                </a>
                <a href="https://www.linkedin.com/in/ar-ahmad-raza/" target="_blank" className="items">
                <CiLinkedin className="icons" />

                </a>
                <a href="https://x.com/ar1008264" className="items">
                <FaSquareXTwitter className="icons" />

                </a>
                <a href="https://github.com/ArAhmadRaza" target="_blank" className="items">
                <FaGithubSquare className="icons" />

                </a>
                <a href="mailto:arahmadraza5570@gmail.com" target="_blank" className="items">
                <BiLogoGmail className="icons"/>

                </a>
            </div>
        </div>
        
        
        
        </>
    )
}

export default Contact