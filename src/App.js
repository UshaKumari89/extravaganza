// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Ticket from './pages/Ticket';
// import Food from './pages/Food';
import Attraction from './pages/Attraction';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket" element={<Ticket />} />
          {/* <Route path="/food" element={<Food />} /> */}
          <Route path="/attraction" element={<Attraction />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
