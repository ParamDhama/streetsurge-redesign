import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const clients = [
  { name: 'Delhi Metro', logo: '/delhi-metro-logo.png' },
  { name: 'Delhi Transport Corporation', logo: '/delhi-transport-logo.png' },
  { name: 'Pimpri Chinchwad Municipal Corporation', logo: '/muncipal-corporation.png' },
];

const Clients = () => {
  return (
    <section id="clients" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Clients
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm"
            >
              <img src={client.logo} alt={client.name} className="h-40" />
              <h1 className='text-3xl text-center font-semibold h-20 mt-5'>{client.name}</h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
