import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Intelligent Road Design',
    description:
      'Leverage our AI-driven urban road design toolbox, quantify ROI & unblock execution',
    icon : '/Intelligent.jpg'
  },
  {
    title: 'Public Transport Design',
    description:
      'Optimize network performance, routing & scheduling using AI planning models',
    icon : "/public-transport.jpg",
  },
  {
    title: 'Big Data for Mobility',
    description:
      'On-demand insights without the cost and limitations of counters and surveys',
    icon : "/bigdata.jpg"
  },
];

const Solutions = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0.5, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.5, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg flex flex-col items-center text-center shadow-md"
            >
                <ServiceCard service={service}/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
