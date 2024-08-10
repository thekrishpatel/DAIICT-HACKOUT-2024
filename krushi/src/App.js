import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Farmer/home'; // Adjust path if necessary
import AboutUs from './Farmer/aboutUs'; // Adjust path if necessary
import Profile from './Farmer/farmer_profile'; // Adjust path if necessary

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
