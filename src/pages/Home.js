// pages/Home.js
import React from 'react';
import CarouselSection from '../components/CarouselSection';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import ConferenceNews from '../components/ConferenceNews';

function Home() {
  return (
    <div>
        <CarouselSection/>
        <Section2/>
        <Section3/>
        <ConferenceNews/>
      {/* <h1>Home Page</h1> */}
      {/* <p>Welcome to the Home Page</p> */}
    </div>
  );
}

export default Home;
