
// Card.js
import React from 'react';
import './Card.css';
import Button from './Button';

function Card({ title, description, buttonText, buttonLink }) {
  return (
    <div className="card-container">
      <div className="card">
        <p className="card-title">{title}</p>
        <p className="card-text">{description}</p>
        <Button text={buttonText} link={buttonLink} />
        <div className="go-corner"></div>
      </div>
    </div>
  );
}

export default Card;
