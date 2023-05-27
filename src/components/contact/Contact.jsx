import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ymegzsc', 'template_ywg10g2', form.current, 'gi-Cx6Y2GPVoK_tND')
         
      
      e.target.reset() 
    };

  return (
    <section id = "contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className=" container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jennaagbor013@gmail.com</h5>
            <a href="mailto:jennaagbor013@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+237 671649793</h5>
            <a href="https://api.whatsapp.com/send?phone=+237671649793" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <FaTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>agbor_jenna</h5>
            <a href="https://www.twitter.com/agbor_jenna" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="Name" placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your email' required />
          <textarea name="message" id="" cols="7" placeholder='Your message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact