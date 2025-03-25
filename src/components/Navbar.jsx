// src/components/Navbar.jsx
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-white shadow-lg p-6 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Street Surge</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#solutions" className="hover:text-blue-600">Solutions</a>
          <a href="#careers" className="hover:text-blue-600">Careers</a>
          <a href="#contact" className="hover:text-blue-600">Contact Us</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
