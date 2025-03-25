// src/components/Hero.jsx
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold">Street Surge Technologies</h1>
        <p className="mt-4 text-xl">
          Tech solutions to unblock the transformation of India’s urban infrastructure.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
