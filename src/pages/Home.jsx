// Home.js
import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../images/background.jpg';
import bg from '../images/bg.jpg';
import videoSrc from '../Videos/vecteezy_3d-amusement-park-concept-with-tea-cup-ride-pilot_20603602.mp4';

import './Home.css';
import Card from '../Components/Card';
import Footer from '../Components/Footer';

const Home = () => {
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
          src={backgroundImage}
          alt="BackgroundImage"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 4, ease: 'easeInOut' }}
        />
      </div>

      <div className="card-container">
        <Card
          title="Experience the Adventure"
          description="Embark on an unforgettable journey filled with excitement and thrills. Discover the magic of our theme park, where every moment is a new adventure waiting to unfold. From thrilling rides to delightful attractions, there's something for everyone."
          buttonText="Get Tickets"
          buttonLink="/ticket"
        />

        <Card
          title="Delicious Culinary Delights"
          description="Indulge in a culinary adventure where every bite is a journey of flavors. Our diverse range of delicious dishes will tantalize your taste buds and leave you craving for more. Experience the joy of exceptional food in the heart of our theme park."
          buttonText="Explore Food"
        />
      </div>

      <div className="video-container">
        {/* Video section */}
        <video className="video-background" autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="card-container m-card">
        <Card
          title="Exciting Attractions Await"
          description="Explore our theme park's exciting attractions, from heart-pounding roller coasters to enchanting shows. We promise an unforgettable experience for adventure seekers of all ages."
          buttonText="Discover Attractions"
          buttonLink="/attraction"
        />

        <Card
          title="About Us"
          description="Learn more about our theme park and the team behind the magic. Discover our rich history, our mission to create lasting memories, and our dedication to providing an unforgettable experience for every visitor."
          buttonText="Learn More"
          buttonLink="/aboutUs"
        />
      </div>
     
        <div className='bg-img-container'>
      <img className='bg-img' src={bg} alt="Background" />
      <div className='overlay'>
        <p className='discount-text'>Special Discount: 20% OFF</p>
      </div>
    </div>
    
      <div className="news-container">

<Card 
  title="Latest News: Thrilling Announcements"
  description="Stay tuned for the latest updates and thrilling announcements from our theme park.
   Discover what's happening behind the scenes and be the first to know about upcoming events.
    Explore the magic that awaits you and your family in every corner of FamilyPark. 
    Join us on this extraordinary journey filled with joy, excitement, and unforgettable moments."
  buttonText="Subscribe"
  additionalClass="wider-card"
 
 
/>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
