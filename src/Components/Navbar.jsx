
// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTicketAlt, faGlobe, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };



  return (
    <nav className='navbar-fixed '>
      <div className="navbar-content">
        <motion.div
          className="logo"
        >
          FamilyPark
        </motion.div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menu"
          >
            <motion.div className="menu-background" />
            <Link to="/" onClick={toggleMenu}>
              <motion.li variants={item} className="menu-item home">
                <FontAwesomeIcon icon={faHome} /> Home
              </motion.li>
            </Link>
            <Link to="/ticket" onClick={toggleMenu}>
              <motion.li variants={item} className="menu-item ticket">
                <FontAwesomeIcon icon={faTicketAlt} /> Tickets
              </motion.li>
            </Link>
            {/* <Link to="/food" onClick={toggleMenu}>
              <motion.li variants={item} className="menu-item food">
                <FontAwesomeIcon icon={faUtensils} /> Food
              </motion.li>
            </Link> */}
            <Link to="/attraction" onClick={toggleMenu}>
              <motion.li variants={item} className="menu-item attraction">
                <FontAwesomeIcon icon={faGlobe} /> Attraktion
              </motion.li>
            </Link>
            <Link to="/aboutUs" onClick={toggleMenu}>
              <motion.li variants={item} className="menu-item about-us">
                <FontAwesomeIcon icon={faInfoCircle} /> About Us
              </motion.li>
            </Link>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

