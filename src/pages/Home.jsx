import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Solutions from '../components/Solutions';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* About Us Section */}
      <AboutUs />
      {/* Solutions Section */}
      <Solutions />
      {/* Clients Section */}
      <Clients />
      {/* Contact Section */}
      <Contact/>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
