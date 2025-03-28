import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          About Street Surge
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image / Illustration */}
          <motion.div
            initial={{ opacity: 0.5, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <img
              src="/aboutsection.jpg"
              alt="About Street Surge"
              className="rounded-lg shadow-lg object-cover w-full h-64 md:h-auto"
            />
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Who We Are
            </h3>
            <p className="mb-4 leading-relaxed">
              We’re Street Surge, a digital solutions company
              focused on transforming urban landscapes through
              innovative tech and visionary design. Our team
              believes in delivering cutting-edge experiences
              that merge creativity with practicality.
            </p>
            <h3 className="text-2xl font-semibold mb-4">
              What We Do
            </h3>
            <p className="mb-4 leading-relaxed">
              From web and mobile app development to strategic
              consulting, we tackle the biggest challenges
              facing modern businesses. Our mission is simple:
              to build seamless digital products that thrive
              in the fast-paced urban environment.
            </p>
            <p className="leading-relaxed">
              Ready to experience the surge?
              <span className="font-semibold"> Join us.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
