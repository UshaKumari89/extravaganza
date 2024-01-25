// Attraction.js
import React from 'react';
import videoSrc from '../Videos/attraction.webm';
import Footer from '../Components/Footer';
import './Attraction.css'; // Create a new CSS file for styling
import image_1 from "../images/rollercoaster.jpg"
import image_2 from "../images/enhantedShows.jpg"
import image_3 from "../images/aquatic.jpg"
import image_4 from "../images/funfamily.jpg"
import image_5 from "../images/skyhigh.jpeg"
import image_6 from "../images/magicalGarden.png"
import image_7 from "../images/adventeture.avif"
import { motion } from 'framer-motion';

function Attraction() {
  // Define the attractions data
  const attractionsData = [
    {
      title: 'Roller Coaster Madness',
      description: 'Experience the thrill of our high-speed roller coasters that will leave you breathless and exhilarated. Our roller coasters are a symphony of twists, turns, and loops designed to push the limits of excitement. Feel the rush as you ascend to towering heights, anticipating the impending drop that will send your senses into overdrive. The wind in your hair, the screams of fellow thrill-seekers, and the sheer force of speed will transport you to a world where gravity seems to take a backseat.',
      imageUrl: image_1 ,
    },
    {
      title: 'Enchanting Shows',
      description: 'Be captivated by our enchanting shows, featuring talented performers and magical performances for all ages. If you are seeking a more sophisticated experience, our evening performances offer a blend of elegance and mystique. Immerse yourself in the artistry of world-class musicians, dancers, and illusionists as they weave a tapestry of entertainment that transcends the ordinary.',
      imageUrl: image_2,
    },
    {
      title: 'Aquatic Adventure',
      description: 'Dive into a world of aquatic wonders with our water-themed attractions, perfect for a refreshing adventure. If relaxation is more your style, indulge in our Lazy River, a gentle waterway that meanders through the park, offering a peaceful retreat for those looking to unwind. Grab a float, soak up the sun, and let the current carry you away as you enjoy the scenic beauty that surrounds provides a safe and entertaining space where little ones can splash, play, and explore interactive water features. ',
      imageUrl: image_3,
    },
    {
      title: 'Adventurous Corner',
      description: 'Embark on adventurous expeditions through our themed landscapes, uncovering hidden treasures and surprises.The voice of Princess Tiana and Tony Award-winning actress, Anika Noni Rose, shared, “It is really exciting to know that Princess Tianas presence in both Disneyland and Magic Kingdom will finally be fully realized! As passionate as I am about what we created. The Imagineers are giving us The Princess and the Frog Mardi Gras celebration we have been waiting for, and Im here for it!', 
       imageUrl: image_7,
    },
    {
      title: 'Family Fun Zone',
      description: 'Enjoy quality family time at our Family Fun Zone, filled with exciting activities for everyone to enjoy together. where family fun takes center stage at our dedicated Family Fun Zone! Step into a world designed for all ages, where the spirit of togetherness and joy comes alive. Our Family Fun Zone is the perfect destination for creating lasting memories, fostering laughter, and strengthening the bonds that make family time truly special.',
      imageUrl: image_4,
    },
    {
      title: 'Sky High Thrills',
      description: 'Soar to new heights with our sky-high attractions, offering breathtaking views and adrenaline-pumping excitement.Welcome to the pinnacle of excitement at Roller Coaster Madness – the Sky High Thrills zone! Brace yourself for an exhilarating adventure that will take you to new heights, both literally and figuratively. Our sky-high attractions are designed to push the boundaries of thrill-seeking, offering breathtaking views and adrenaline-pumping excitement that will leave you on cloud nine.',
      imageUrl: image_5,
    },
    {
      title: 'Magical Gardens',
      description: 'Immerse yourself in the beauty of our magical gardens, where nature meets enchantment in a serene setting.Indulge your senses and escape into a world of natural wonder at Roller Coaster Madness enchanting Magical Gardens. Here, we invite you to take a break from the heart-pounding excitement and immerse yourself in a serene oasis where natures beauty intertwines with the enchantment of whimsical landscapes. Its a haven for those seeking a tranquil retreat amidst the exhilarating thrills of the theme park.',
      imageUrl: image_6,
    },
   
 
    // Add more attraction items as needed
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
    
    <div className="attraction-container">
      {/* Video section */}
      <video className="video-background" autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      {/* <div className='attraction-content'>
        <h1>Welcome to Our Exciting Attractions</h1>
        <div className='attraction-cards'>
          {attractionsData.map((attraction, index) => (
            <div className='attraction-card' key={index}>
              <img src={attraction.imageUrl} alt={attraction.title} className='attraction-image' />
              <div className='attraction-card-details'>
                <h2>{attraction.title}</h2>
                <p>{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <motion.div initial='hidden' animate='visible' variants={cardVariants} className='attraction-content'>
      <h1>Welcome to Our Exciting Attractions</h1>
      <motion.div className='attraction-cards'>
        {attractionsData.map((attraction, index) => (
          <motion.div
            variants={cardVariants}
            key={index}
            className='attraction-card'
            whileHover={{ scale: 1.05 }}
          >
            <img src={attraction.imageUrl} alt={attraction.title} className='attraction-image' />
            <div className='attraction-card-details'>
              <h2>{attraction.title}</h2>
              <p>{attraction.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
    </div>
    <Footer/>
    </>
  );
}

export default Attraction;
