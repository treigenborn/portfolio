import React from 'react';
import './Footer.css';
import * as fiIcons from 'react-icons/fi';
import * as faIcons from 'react-icons/fa';
const Footer = () => {
  const footerBackground = './images/footer-background.svg';
  return (
    <footer className='footer-container'>
      <svg
        version='1.1'
        id='Layer_1'
        x='0px'
        y='0px'
        viewBox='0 0 1366 768'
        className='footer-white'
        fill='#e5e5e5'
      >
        <path
          class='st0'
          d='M0,321V0h1366v344c0,0-242.5-27.5-332.5-182.5S793.5-25.5,683,84S502.5,425.5,339,344S73.5,283.5,36.5,302.5
	S0,321,0,321z'
        />
      </svg>
      <img
        className='footer-dash'
        src='./images/footer-background-dashes.svg'
        alt=''
      />
      <div className='footer-links'>
        <a
          href='http://www.github.com/treigenborn'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          <fiIcons.FiGithub className='footer-link' />{' '}
        </a>
        <a
          href='https://www.linkedin.com/in/tobias-reigenborn-2822b81b7/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          <faIcons.FaLinkedinIn className='footer-link' />{' '}
        </a>
        <a
          href='http://www.instagram.com/treigenborn'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          <faIcons.FaInstagram className='footer-link' />{' '}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
