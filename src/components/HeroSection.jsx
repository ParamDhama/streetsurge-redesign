import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: "url('/herosection.jpg')", // Path to your background image
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Welcome to Street Surge
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-gray-300 mb-8 max-w-xl"
        >
          Experience the future of urban digital solutions.
        </motion.p>
        
        <motion.a
          href="#about"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full"
        >
          Discover More
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
