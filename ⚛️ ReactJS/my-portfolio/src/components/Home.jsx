import React, { useEffect, useRef } from "react";
import pdf from "../pdf/mypdf.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const option = {
      strings: [
        "Welcome to my Profile",
        "My name is Ahmad Raza",
        "I'm a Full Stack Developer",
        "Web Application Developer (React JS)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed(typedRef.current, option);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container home" id="home">
        <div className="left "
        data-aos="fade-up-right"
        data-aos-duration="1000"
                  


        >
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img"
            data-aos="fade-up-left"
        data-aos-duration="1000"

          >
            <img src={`/Images/${hero.imgSrc}`} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
