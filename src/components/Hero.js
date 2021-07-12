import React from 'react';
import './Hero.css';

const Hero = () => {
  const backgroundSvg = './images/background-top-720-1.svg';
  return (
    <div
      className='hero-container'
      style={{ backgroundImage: `url(${backgroundSvg})` }}
      id='home'
    >
      <div className='hero-text'>
        <h1 className='hero-title'>Hi! I am Tobias</h1>
        <p className='hero-p'>a software developer from Argentina</p>
        <a href='#contact'>
          <button className='hero-btn'>CONTACT ME</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
