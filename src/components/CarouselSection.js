// import React from 'react';
// import Slider from 'react-slick';
// import './CarouselSection.css';

// function CarouselSection() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };

//   return (
//     <section className="styled-carousel">
//       <Slider {...settings}>
//         <div className="carousel-slide">
//           <div className="carousel-content">
//             <div className="left-content">
//               <h1>The leading nonprofit conference of the year</h1>
//               <p>Join us for Eventor Collaborative: Virtual Sessions on October 2023</p>
//               <div className="buttons">
//                 <button className="register-button">Register</button>
//                 <button className="watch-video-button">Watch Video</button>
//               </div>
//             </div>
//             <div className="right-content">
//               <img src="https://via.placeholder.com/300" alt="Conference" className="right-image" />
//               Alternatively, you can use a video here
//             </div>
//           </div>
//         </div>
//         You can add more slides in the same way if needed
//       </Slider>
//     </section>
//   );
// }

// export default CarouselSection;

// CustomCarousel.js
import React, { useState, useEffect } from 'react';
import './CarouselSection.css';
import { NavLink } from 'react-router-dom';

const slides = [
  {
    title: "NLP Teaching Conference",
    // subtitle: "Join us for Eventor Collaborative: Virtual Sessions on October 2023",
    subtitle:"Let's rethink and explore the ways we teach NLP in light of LLMs and the Transformer architecture. It aims to raise questions about what topicsremain relevant, what can be de-emphasized, and how we can better equip studentswith the skills they need to thrive in a rapidly evolving field.",
    buttonText: "Register",
    videoUrl: "https://jthemes.net/themes/wp/eventor/wp-content/themes/eventor/assets/images/banner-slider/3.jpg",
  },
  {
    title: "Learn from industry experts",
    subtitle: "Gain insights and practical skills from top speakers",
    buttonText: "Watch Video",
    videoUrl: "https://jthemes.net/themes/wp/eventor/wp-content/themes/eventor/assets/images/banner-slider/2.jpg",
  },
  {
    title: "Network with peers",
    subtitle: "Expand your professional network in interactive sessions",
    buttonText: "Learn More",
    videoUrl: "https://jthemes.net/themes/wp/eventor/wp-content/themes/eventor/assets/images/banner-slider/3.jpg",
  },
];

const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <div className="carousel-content">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].subtitle}</p>
          <button className="carousel-button">
           <NavLink to='/register' style={{textDecoration:'none',color:"#fff"}}>Register</NavLink>
            </button>
          {/* <button className="carousel-button">{slides[currentSlide].buttonText}</button> */}
        </div>
        <div className="carousel-media">
          <img src={slides[currentSlide].videoUrl} alt="Slide media" />
        </div>
      </div>
      {/* <div className="carousel-controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}> &gt;</button>
      </div> */}
    </div>
  );
};

export default CarouselSection;

