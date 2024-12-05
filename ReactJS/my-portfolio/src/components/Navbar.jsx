import React from 'react'

const Navbar = () => {
    return(
        <>
            <div className="container nav_bar"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-easing="ease-in-out-quint"
            data-aos-mirror="true"
            data-aos-once="true"
            
            >
                <div className="left nav_items" >Portfolio</div>
                <div className="right">
                    <a href="#home" className="nav_items">Home</a>
                    <a href="#experience" className="nav_items">Experience</a>
                    <a href="#skills" className="nav_items">Skills</a>
                    <a href="#projects" className="nav_items">Projects</a>
                    <a href="#contact" className="nav_items">Contact</a>
                </div>
            </div>


        </>
    )
}

export default Navbar