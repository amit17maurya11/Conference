import React from 'react';
import './Section3.css';
import { NavLink } from 'react-router-dom';

function Section3() {
  return (
    <section className="inspiration-section">
      <div className="content-container">
        <div className="image-group">
          <img
            src="https://jthemes.net/themes/wp/eventor/wp-content/themes/eventor/assets/images/banner-slider/3.jpg"
            alt="Speaker"
            className="main-image"
          />
          {/* <img
            src="https://jthemes.net/themes/wp/eventor/wp-content/themes/eventor/assets/images/banner-slider/3.jpg"
            alt="Event"
            className="sub-image"
          /> */}
          <button className="play-button">▶</button>
        </div>
        <div className="text-content">
          <h2>Be inspired by expert speakers in design, video, and more</h2>
          <p>
            Plan your week to make the most of all the sessions and labs,
            Community Eventor activities, and fun ways to connect with other creatives.
          </p>
          <div className="event-info">
            <div className="event-detail">
              <span>07</span>
              <p>Days Event</p>
            </div>
            <div className="event-detail">
              <span>20+</span>
              <p>Speakers</p>
            </div>
          </div>
          <button className="register-button">
           <NavLink to='/register' style={{textDecoration:'none',color:"#fff"}}>Register</NavLink>
            </button>
          {/* <button className="register-button">Register Now</button> */}
        </div>
      </div>
    </section>
  );
}

export default Section3;
