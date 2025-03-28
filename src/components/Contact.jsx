import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaBriefcase, 
  FaBuilding, 
  FaComment, 
  FaPaperPlane,
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
    organization: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your submission logic (e.g., API call)
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      designation: '',
      organization: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="p-6 bg-gray-100 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Contact Us
      </motion.h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - Contact Info */}
        <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="md:w-1/2 w-full px-8 py-6 space-y-6 hidden md:block"
>
  <h2 className="text-3xl font-bold text-center text-gray-800">Let's Connect</h2>
  <p className="text-lg text-gray-700">
    Fill out the form and our experts will get back to you within 24 hours. We’re here to help you transform your ideas into reality.
  </p>
  <p className="text-lg text-gray-700">
    You can also reach us at <span className="font-medium text-gray-800">info@streetsurge.in</span>.
  </p>
  <p className="text-base text-gray-600">
    At StreetSurge, we are dedicated to delivering innovative solutions in traffic engineering and urban planning. Our experienced team works passionately to ensure smoother, safer, and more efficient urban mobility. Whether you're looking for expert advice or a comprehensive consultation, we're committed to transforming your challenges into opportunities.
  </p>
  <ul className="text-base text-gray-600 space-y-2">
    <li>
      <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
    </li>
    <li>
      <strong>Phone:</strong> +91 (1234) 567-890
    </li>
    <li>
      <strong>Location:</strong> Gurugram, Haryana, India
    </li>
  </ul>
  <p className="text-center text-gray-600 mt-4">
    Follow us on social media for the latest updates and insights!
  </p>
  <div className="flex justify-center space-x-4 text-3xl">
    <a href="#" className="text-blue-600 hover:text-blue-800">
      <FaFacebook />
    </a>
    <a href="#" className="text-blue-400 hover:text-blue-600 ">
      <FaTwitter />
    </a>
    <a href="#" className="text-pink-600 hover:text-pink-800 ">
      <FaInstagram />
    </a>
    <a href="#" className="text-blue-700 hover:text-blue-900 ">
      <FaLinkedin />
    </a>
  </div>
</motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full p-8 bg-white shadow-lg rounded-lg space-y-6"
        >
          {/* Name */}
          <div className="relative">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2 flex items-center">
              <FaUser className="mr-2" /> Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
          {/* Email & Phone in one row */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative md:w-1/2 w-full">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2 flex items-center">
                <FaEnvelope className="mr-2" /> Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
            <div className="relative md:w-1/2 w-full">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 flex items-center">
                <FaPhone className="mr-2 rotate-y-180" /> Phone *
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
          </div>
          {/* Designation & Organization in one row */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative md:w-1/2 w-full">
              <label htmlFor="designation" className="block text-gray-700 font-medium mb-2 flex items-center">
                <FaBriefcase className="mr-2" /> Designation
              </label>
              <input
                type="text"
                name="designation"
                id="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Your designation"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
            <div className="relative md:w-1/2 w-full">
              <label htmlFor="organization" className="block text-gray-700 font-medium mb-2 flex items-center">
                <FaBuilding className="mr-2" /> Organization
              </label>
              <input
                type="text"
                name="organization"
                id="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Your organization"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
          </div>
          {/* Message */}
          <div className="relative">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2 flex items-center">
              <FaComment className="mr-2" /> Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="5"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            ></textarea>
          </div>
          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded flex items-center justify-center transition-all"
          >
            <FaPaperPlane className="mr-2" /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
