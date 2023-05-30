import React from 'react'
import './about.css'
import me from '../../assets/me-image.jpg' 
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id = "about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className = "container about__container">
        <div className = "about__me">
          <div className="about__me-image">
            <img src={me} alt="about image" />
          </div>
        </div>
        <div className = "about__content">
          <div className="about__cards">
            <article className = 'about__card'>
              <FaAward className = 'about__icon'/>
              <h5>Experience</h5>
              <small> No working</small>
            </article>

            <article className = 'about__card'>
              <FiUsers className = 'about__icon'/>
              <h5>Clients</h5>
              <small>None</small>
            </article>

            <article className = 'about__card'>
              <VscFolderLibrary className = 'about__icon'/>
              <h5>Projects</h5>
              <small>7+ completed</small>
            </article>
          </div>

          <p>I am a young full stack developer being trained at the Faculty of Enginneering and 
            Technology at the University of Buea(FET). I am looking forward to getting my B.Eng in 2025.
            Being on demand for experience, i applied to work at Camsol.io which accepted me and gave me the 
            the chance to work on real business projects in order to gain experience. From July 2022 to today, I learned
            technologies as react, react native, in short the MERN stack and also have experience in version control systems
            such as github. I am still learning and counting on the support of Camsol to increase my knowledge at end of being an 
            engineer and not just graduate. Being a Cameroonian , a bilingual speaking  country, I understand and speak both English
            and French.
          </p>

          <a href="#contact" className = 'btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
