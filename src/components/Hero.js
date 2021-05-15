import React from "react";
import "./Hero.css";

const Hero = () => {
  const backgroundSvg = "./images/background-top-720.svg";
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${backgroundSvg})` }}
    >
      <div className="hero-text">
        <h1 className="hero-title">Hi! I am Tobias</h1>
        <p className="hero-p">a software developer from argentina</p>
        <button className="hero-btn">SEE WORK!</button>
      </div>
    </div>
  );
};

export default Hero;
