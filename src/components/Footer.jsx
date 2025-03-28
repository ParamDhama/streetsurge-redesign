import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }} 
          className="flex flex-col md:flex-row justify-between items-start"
        >
          {/* Brand Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold">Street Surge</h3>
            <p className="text-gray-400 mt-2">Leading Innovation &amp; Excellence</p>
            <p className="text-gray-400 mt-4 text-sm">© 2025 Street Surge. All rights reserved.</p>
          </div>

          {/* Information Sections */}
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-12">
            {/* Contact Details */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Contact</h4>
              <p className="text-gray-400 text-sm">
                123 Innovation Drive,<br />
                Tech City, TX 75001
              </p>
              <p className="text-gray-400 text-sm mt-2">Phone: (123) 456-7890</p>
              <p className="text-gray-400 text-sm">Email: info@streetsurge.com</p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Social</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, rotate: 10 }} 
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <FaFacebookF size={20} />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, rotate: 10 }} 
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <FaTwitter size={20} />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, rotate: 10 }} 
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <FaLinkedinIn size={20} />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, rotate: 10 }} 
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <FaInstagram size={20} />
                </motion.a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-2">Subscribe to get our latest updates.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-3 py-2 rounded-l-md focus:outline-none" 
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
