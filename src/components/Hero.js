import React from "react";
import "./Hero.css";

const Hero = () => {
  const backgroundSvg = "./images/background-top-720.svg";
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${backgroundSvg})` }}
    >
      <div className="textito">
        <h1 className="hero-title">
          Hi! I am Tobias a software developer from argentina
        </h1>
        <p>a software developer from argentina</p>
      </div>
    </div>
  );
};

export default Hero;
