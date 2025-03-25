// src/components/About.jsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4 text-lg">
          We are a technology solutions provider modernizing India’s urban infrastructure through on-demand Big Data, AI-driven planning, and actionable insights. We quantify ROI and create sustainable cities.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
