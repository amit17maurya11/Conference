import React, { useRef } from 'react';
import Card from './Card';
import './Section2.css';

function Section2() {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  const cardsData = [
    { date: 'October 3, 2022', title: 'Speakers', image: 'https://jthemes.net/themes/wp/eventor/wp-content/themes/eventor/assets/images/banner-slider/3.jpg' },
    { date: 'October 4, 2022', title: 'Speakers', image:  'https://jthemes.net/themes/wp/eventor/wp-content/themes/eventor/assets/images/banner-slider/3.jpg' },
    { date: 'October 12, 2022', title: 'Speakers', image: 'https://jthemes.net/themes/wp/eventor/wp-content/themes/eventor/assets/images/banner-slider/3.jpg' },
    { date: 'October 12, 2022', title: 'Speakers', image: 'https://jthemes.net/themes/wp/eventor/wp-content/themes/eventor/assets/images/banner-slider/3.jpg' },
    { date: 'October 12, 2022', title: 'Speakers', image: 'https://jthemes.net/themes/wp/eventor/wp-content/themes/eventor/assets/images/banner-slider/3.jpg' },
    { date: 'October 12, 2022', title: 'Speakers', image: 'https://jthemes.net/themes/wp/eventor/wp-content/themes/eventor/assets/images/banner-slider/3.jpg' },
    { date: 'October 12, 2022', title: 'Speakers', image: 'https://jthemes.net/themes/wp/eventor/wp-content/themes/eventor/assets/images/banner-slider/3.jpg' },
    { date: 'October 12, 2022', title: 'Speakers', image: 'https://jthemes.net/themes/wp/eventor/wp-content/themes/eventor/assets/images/banner-slider/3.jpg' },
    { date: 'October 12, 2022', title: 'Speakers', image: 'https://jthemes.net/themes/wp/eventor/wp-content/themes/eventor/assets/images/banner-slider/3.jpg' },
    { date: 'October 12, 2022', title: 'Speakers', image: 'https://jthemes.net/themes/wp/eventor/wp-content/themes/eventor/assets/images/banner-slider/3.jpg' },
    { date: 'October 12, 2022', title: 'Speakers', image: 'https://jthemes.net/themes/wp/eventor/wp-content/themes/eventor/assets/images/banner-slider/3.jpg' },

  ];

  return (
    <section className="section2">
      <h2>The conference on the design, and engineering is focused on programming topics</h2>
      <p className='section2-para'>Eventor Collaborative, brought to you by IBM, Google and AWS, is where the most inventive and forward-thinking nonprofit leaders come together to discover emerging trends in fundraising and technology.</p>
      
      <div className="carousel-buttons">
        <button onClick={() => scroll(-300)} className="scroll-button">◀</button>
          {/* ←  */}
        <button onClick={() => scroll(300)} className="scroll-button">▶</button>
          {/* → */}
      </div>
      
      <div className="card-container" ref={scrollRef}>
        {cardsData.map((card, index) => (
          <Card key={index} date={card.date} title={card.title} image={card.image} />
        ))}
      </div>
    </section>
  );
}

export default Section2;
