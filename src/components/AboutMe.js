import React from 'react';
import './AboutMe.css';
import * as faIcons from 'react-icons/fa';
import * as siIcons from 'react-icons/si';
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
            <a
              target='_blank'
              rel='noreferrer'
              href='https://developer.mozilla.org/en-US/docs/Web/HTML'
              className='skill-links'
            >
              <faIcons.FaHtml5 className='skill-icon' />
              <p>HTML5</p>
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://developer.mozilla.org/en-US/docs/Web/CSS'
            >
              <faIcons.FaCss3Alt className='skill-icon' />
              <p>CSS3</p>
            </a>
            <a target='_blank' rel='noreferrer' href='https://sass-lang.com/'>
              <faIcons.FaSass className='skill-icon' />
              <p>Sass</p>
            </a>
            <a target='_blank' rel='noreferrer' href='https://redux.js.org/'>
              <siIcons.SiRedux className='skill-icon' />
              <p>Redux</p>
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://firebase.google.com/'
            >
              <siIcons.SiFirebase className='skill-icon' />
              <p>Firebase</p>
            </a>

            <a
              target='_blank'
              rel='noreferrer'
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
            >
              <faIcons.FaJsSquare className='skill-icon' />
              <p>JavaScript</p>
            </a>
            <a target='_blank' rel='noreferrer' href='https://reactjs.org/'>
              <faIcons.FaReact className='skill-icon' />
              <p>ReactJS</p>
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://getbootstrap.com/'
            >
              <faIcons.FaBootstrap className='skill-icon' />
              <p>Bootstrap</p>
            </a>
            <a target='_blank' rel='noreferrer' href='https://figma.com'>
              <faIcons.FaFigma className='skill-icon' />
              <p>Figma</p>
            </a>
          </div>
          <a
            href='https://drive.google.com/file/d/16ZjQd8suozDiJ6y0kZqwHBEBXBWajUhH/view?usp=sharing'
            className='about-me-resume'
            target='_blank'
            rel='noreferrer'
          >
            Download Resume
          </a>
        </div>
        <div className='about-me-img-container'>
          <img
            src='./images/foto-cuadrada.jpg'
            alt='nemo pic'
            className='about-me-img'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
