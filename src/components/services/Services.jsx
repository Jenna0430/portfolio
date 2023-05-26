import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id = "services">
      
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className = "container services__container">
        <article className = "service">
          <div className = "service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className = 'service__list'>
            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Mobile app UX and UI design services.</p>
            </li>

            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Cross platform experiences design.</p>
            </li>

            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>UI and UX consulting.</p>
            </li>

            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Prototyping and Wireframing.</p>
            </li>

            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Web UI/UX design.</p>
            </li>
          </ul>
        </article>

        <article className = "service">
          <div className = "service__head">
            <h3>Web Development</h3>
          </div>

          <ul className = 'service__list'>
            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Blog/News management.</p>
            </li>

            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Web hosting.</p>
            </li>

            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Web site maintainance.</p>
            </li>

            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Full stack development.</p>
            </li>

            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Landing Pages.</p>
            </li>

            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Graphics, Animations, Banners and Advertisement.</p>
            </li>
          </ul>
        </article>

        <article className = "service">
          <div className = "service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Copy writing services.</p>
            </li>

            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Graphic design services.</p>
            </li>

            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Video Marketing Services.</p>
            </li>

            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Blog writing services.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services