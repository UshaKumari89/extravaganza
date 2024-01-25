import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling
import Footer from '../Components/Footer';
import img from "../images/aboutUs.jpg"
import { motion } from 'framer-motion';

const AboutUs = () => {
  const imageVariants = {
    hidden: { y: '-100%' },
    visible: { y: '0%' },
  };
  return (
    <>
 
     <div className="home-container">
        {/* Animated image */}
        <motion.img
          className="image-background"
          src={img}
          alt="BackgroundImage"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
      </div>
    
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>
        Welcome to <span className="park-name">FamilyPark</span>, where joy, laughter, and unforgettable moments come together to create a haven for families seeking adventure, relaxation, and quality time. Nestled in the heart of <span className="location">Stockhom</span>, our park is designed to be a haven for families, providing a perfect blend of thrilling experiences and tranquil escapes.
      </p>

      <h2>Our Vision</h2>
      <p>
        At <span className="park-name"> Family Park</span>, we envision a place where families can escape the hustle and bustle of daily life and immerse themselves in a world of shared experiences. Our vision is to create lasting memories for every member of the family, from the youngest adventurers to the young at heart.
      </p>

      <h2>What Sets Us Apart</h2>
      <ul>
        <li>
          <strong>Family-Focused Atmosphere:</strong> Our park is more than just attractions; it's a welcoming environment that caters to the unique needs and desires of families. We prioritize creating an atmosphere where every member of the family feels at home.
        </li>
        <li>
          <strong>Diverse Attractions:</strong> From heart-pounding roller coasters to serene gardens, we offer a diverse range of attractions to cater to varying interests. There's something for everyone, ensuring that each visit is a new and exciting experience.
        </li>
        <li>
          <strong>Safety First:</strong> The safety and well-being of our visitors are our top priorities. Our park is equipped with state-of-the-art safety measures, ensuring that families can enjoy their time together with peace of mind.
        </li>
      </ul>

      <h2>Our Commitment</h2>
      <ul>
        <li>
          <strong>Community Engagement:</strong> <span className="park-name">FamilyPark
          </span> is committed to being an active member of the community. We regularly host events, collaborate with local businesses, and participate in initiatives that contribute to the well-being of our community.
        </li>
        <li>
          <strong>Environmental Stewardship:</strong> We recognize the importance of preserving the environment for future generations. <span className="park-name">FamilyPark</span> is dedicated to implementing eco-friendly practices and initiatives, striving to be a responsible steward of the natural surroundings.
        </li>
      </ul>

      <h2>Join Us for Family Fun</h2>
      <p>
        Whether you're seeking the thrill of roller coasters, the tranquility of gardens, or the joy of family-friendly activities, <span className="park-name">FamilyPark</span> invites you to join us on this incredible journey. Come and experience the magic of family fun, where every moment is an opportunity to create cherished memories that last a lifetime.
      </p>

      <p>
        Thank you for choosing <span className="park-name"> FamilyPark</span> as your destination for family adventures. We look forward to welcoming you and your loved ones to our park!
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
