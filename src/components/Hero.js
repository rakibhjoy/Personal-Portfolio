import "./HeroStyle.css";
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";

import{ Link } from "react-router-dom"
const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img"
        src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
          <p>HI, I'M MD RAKIB HASAN</p>
          <h1>React Developer.</h1>
          <div>
            <Link to ="/project"
            className="btn">Projects</Link>
             <Link to ="/contack"
            className="btn btn-light">Contack</Link>

          </div>
        </div>
    </div>
  );
};

export default Hero;