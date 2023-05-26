import React from 'react'
import './footer.css'
import  {BsLinkedin} from 'react-icons/bs'
import  {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JENNA</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href='https://linkedin.com' target='blank'><BsLinkedin/> </a>
      <a href='https://facebook.com' target='blank'><FaFacebookF/> </a>
      <a href='https://twitter.com' target='blank'><FaTwitter/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JENNA Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer