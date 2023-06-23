import React, { useEffect, useState } from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import axios from 'axios';



const data = [
  {
  id: 1,
  image: IMG1,
  title: 'Mario World: HTML/CSS animations',
  github: 'https://github.com/Jenna0430/MarioWorld.git',
  demo: '',
},
{
  id: 2,
  image: IMG2,
  title: 'Libary Management System with Java',
  github: 'https://github.com/Jenna0430/Libary-Mangement-System.git',
  demo: '',
},
{
  id: 3,
  image: IMG3,
  title: 'Operating Sytems with C/C++',
  github: 'https://github.com/Jenna0430/Operating-System.git',
  demo: '',
},
{
  id: 4,
  image: IMG4,
  title: 'Responsive Cofffee Shop website: HTML, CSS, and JavaScript',
  github: 'https://github.com/Jenna0430/Coffee-shop.git',
  demo: '',
},
{
  id: 5,
  image: IMG5,
  title: 'Distortion Effect Landing Page using GSAP',
  github: 'https://github.com/Jenna0430/GSAP-tutorial.git',
  demo: '',
}
]
 

const Portfolio = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    axios
      .get('https://weary-erin-badger.cyclic.app/api/portfolio')
      .then((res) => {
        const formattedData = res.data.data.map((item) => ({
          id: item._id,
          image: item.image,
          title: item.github,
          demo: item.demo,
        }));
        console.log(`Here I am: ${formattedData}`);
        setTestimonialData(formattedData);
      })
      .catch((error) => console.error(error));


  }, []);

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className=" container portfolio__container">
        {
        data.map(({id, image, title, github, demo}) => {

          return (

          <article key={id} className='portfolio__item'>

            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>

            <h3>{title}</h3>

            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         
         </article>  
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio