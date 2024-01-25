import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          Family Park
        </div>

        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/ticket">Tickets</Link>
          {/* <Link to="/food">Food</Link> */}
          <Link to="/attraction">Attractions</Link>
          <Link to="/aboutUs">About Us</Link>
        </div>

        <div className="footer-rights">
          &copy; {new Date().getFullYear()} Family Park. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
