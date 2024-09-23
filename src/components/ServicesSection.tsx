"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaPalette, FaSearch, FaChartLine } from 'react-icons/fa';

const services = [
  { icon: FaCode, title: 'Web Development', description: 'Cutting-edge web applications tailored for industry leaders' },
  { icon: FaPalette, title: 'UI/UX Design', description: 'Intuitive and accessible interfaces for seamless user experiences' },
  { icon: FaSearch, title: 'SEO Optimization', description: 'Data-driven strategies to amplify your digital presence' },
  { icon: FaChartLine, title: 'Digital Marketing', description: 'Comprehensive digital marketing solutions for global reach' },
];

const ServiceDiagram = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r to-navy from-white flex items-center justify-center p-8">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
      
      <div className="relative w-full max-w-6xl">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.button
                className="w-full flex items-center bg-white bg-opacity-10 rounded-lg p-6 cursor-pointer backdrop-blur-md transition-colors duration-300 hover:bg-opacity-20"
                onClick={() => setActiveService(activeService === service ? null : service)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <service.icon className="text-3xl text-white mr-4 flex-shrink-0" />
                <h3 className="text-white text-xl font-semibold text-left">{service.title}</h3>
              </motion.button>
              <AnimatePresence>
                {activeService === service && (
                  <motion.div
                    className="mt-4 p-4 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-white text-lg">{service.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDiagram;