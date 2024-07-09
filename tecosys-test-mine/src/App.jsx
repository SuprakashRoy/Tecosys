import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css';
import FeaturesSection from './components/FeaturesSection';
import AIHospitalManagementSystem from './components/AIHospitalManagementSystem';
import AIEducationManagementSystem from './components/AIEducationManagementSystem';
import AIEventManagementSystem from './components/AIEventManagementSystem';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => (
  <div className="app">
    <Navbar />
    <HeroSection />
    <FeaturesSection/>
    <AIHospitalManagementSystem/>
    <AIEducationManagementSystem/>
    <AIEventManagementSystem/>
    <Gallery/>
    <Footer/>
  </div>
);

export default App;