import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand Name */}
        <div className="text-2xl font-bold">
          Street Surge
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            className="hover:text-gray-300"
          >
            Home
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.1 }}
            className="hover:text-gray-300"
          >
            About
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.1 }}
            className="hover:text-gray-300"
          >
            Services
          </motion.a>
          <motion.a
            href="#clients"
            whileHover={{ scale: 1.1 }}
            className="hover:text-gray-300"
          >
            Clients
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            className="hover:text-gray-300"
          >
            Contact
          </motion.a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-gray-800"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            <motion.a href="#home" whileHover={{ scale: 1.05 }} className="block hover:text-gray-300">
              Home
            </motion.a>
            <motion.a href="#about" whileHover={{ scale: 1.05 }} className="block hover:text-gray-300">
              About
            </motion.a>
            <motion.a href="#services" whileHover={{ scale: 1.05 }} className="block hover:text-gray-300">
              Services
            </motion.a>
            <motion.a href="#clients" whileHover={{ scale: 1.05 }} className="block hover:text-gray-300">
              Client
            </motion.a>
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} className="block hover:text-gray-300">
              Contact
            </motion.a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
