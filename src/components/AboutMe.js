import React from 'react';
import './AboutMe.css';
import * as faIcons from 'react-icons/fa';
const AboutMe = () => {
  return (
    <section className='about-me-container' id='about'>
      <div className='about-me-wrapper'>
        <div className='about-me-info'>
          <h1 className='info-title'>About Me</h1>
          <p className='info-text'>
            My name is Tobias Reigenborn and I am a 21 years old web developer
            from La Plata, Argentina. I am currently a computer science student
            at the University of La Plata and I'm always looking to learn new
            useful skills.
          </p>
          <p className='info-text'>
            I strive to be one of the best in my field and to adapt to the
            constantly changing tecnology environment
          </p>
          <h3 className='skills-title'>My skills are:</h3>
          <div className='skills'>
            <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
              <faIcons.FaHtml5 className='skill-icon' />
            </a>
            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'>
              <faIcons.FaCss3Alt className='skill-icon' />
            </a>
            <a href='https://sass-lang.com/'>
              <faIcons.FaSass className='skill-icon' />
            </a>
            <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
              <faIcons.FaJsSquare className='skill-icon' />
            </a>
            <a href='https://reactjs.org/'>
              <faIcons.FaReact className='skill-icon' />
            </a>
            <a href='https://getbootstrap.com/'>
              <faIcons.FaBootstrap className='skill-icon' />
            </a>
            <a href='https://figma.com'>
              <faIcons.FaFigma className='skill-icon' />
            </a>
          </div>
        </div>
        <div className='about-me-img-container'>
          <img
            src='./images/foto-perfil-cuadrada.jpg'
            alt='nemo pic'
            className='about-me-img'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
