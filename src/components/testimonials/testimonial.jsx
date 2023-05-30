 import React from 'react'
 import './testimonial.css'
 import AVTR1 from '../../assets/avatar1.jpeg'
 import AVTR2 from '../../assets/avatar2.jpeg'
 import AVTR3 from '../../assets/avatar3.jpeg'
 import AVTR4 from '../../assets/avatar4.jpeg'
 
 import { Pagination } from 'swiper';

 import { Swiper, SwiperSlide } from 'swiper/react';
 
 // Import Swiper styles
 import 'swiper/css';
 
 import 'swiper/css/pagination';



 const data = [
  {
  avatar: AVTR1,
  name: 'Elma Jackson',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit,  Itaque minus a totam at, cumque nisi facilis. Lorem ipsum dolor sit amet consectetur rerum molestiae dolores maxime dolore fugit adipisci ex voluptates!' 
  },
  {
    avatar: AVTR2,
    name: 'Avery Simpson',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit,  Itaque minus a totam at, cumque nisi facilis. Lorem ipsum dolor sit amet consectetur rerum molestiae dolores maxime dolore fugit adipisci ex voluptates!' 
    },
    {
      avatar: AVTR3,
      name: 'Nathaniel Blanco',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit,  Itaque minus a totam at, cumque nisi facilis. Lorem ipsum dolor sit amet consectetur rerum molestiae dolores maxime dolore fugit adipisci ex voluptates!' 
      },
      {
        avatar: AVTR4,
        name: 'Cody Lynch',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit,  Itaque minus a totam at, cumque nisi facilis. Lorem ipsum dolor sit amet consectetur rerum molestiae dolores maxime dolore fugit adipisci ex voluptates!' 
        },

]



 const testimonial = () => {
   return (
     <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

       <Swiper className=" container testimonial__container"
           
           // install Swiper modules
           modules={[ Pagination ]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}
       >
        {
          data.map(({avatar, name, review}, index) => {
            return(

            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
              <img src={avatar}/>
            </div>

            <h5 className='client__name'>{name}</h5>
              <small className="client__review">
               {review}
              </small>
          </SwiperSlide>

            )
          })
        }
          
       </Swiper>


     </section>
   )
 }
 
 export default testimonial

