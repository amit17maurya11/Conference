import React from 'react';
import './Card.css';

function Card({ date, title, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <p className="card-date">{date}</p>
        <h3 className="card-title">{title}</h3>
        <button className="play-button">▶</button>
      </div>
    </div>
  );
}

export default Card;
