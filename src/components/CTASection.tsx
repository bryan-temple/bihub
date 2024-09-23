"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Transform Your Digital Presence?
        </motion.h2>
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's create something amazing together.
        </motion.p>
        <Link href="/contact">
          <motion.button
            className="bg-orange text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;