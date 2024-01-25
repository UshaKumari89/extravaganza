// Button.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({ text, link }) {
  return (
    <Link to={link}>
      <button className="clay-btn">{text}</button>
    </Link>
  );
}

export default Button;
