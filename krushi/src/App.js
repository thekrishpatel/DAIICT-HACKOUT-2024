import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Farmer/home'; // Adjust path if necessary
import AboutUs from './Farmer/aboutUs'; // Adjust path if necessary
import Profile from './Farmer/farmer_profile'; // Adjust path if necessary
import Add_product from './Farmer/add_product'
import FarmerSignUp from './FarmerSignUp';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<FarmerSignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/add_product" element={<Add_product />} />
    </Routes>
  );
};

export default App;
