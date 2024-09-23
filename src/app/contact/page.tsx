"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('https://bihub.tech/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Email sent successfully');
        form.reset();
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email');
    }
  };

  return (
    <div className=" text-navy min-h-screen bg-slate z-0 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl md:text-6xl font-light mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s Create Something Extraordinary
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 gap-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-light mb-8">Get in Touch</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-4">Your Name <span className="text-red-500">*</span></label>
                <input type="text" id="name" name="name" className="w-full px-4 py-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 border border-t-0 border-l-0  border-r-0 border-b-navy " required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-4">Your Email <span className="text-red-500">*</span></label>
                <input type="email" id="email" name="email" className="w-full px-4 py-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 border border-t-0 border-l-0  border-r-0 border-b-navy " required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-4"> Your Message <span className="text-red-500">*</span></label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 border border-t-0 border-l-0  border-r-0 border-b-navy  " required></textarea>
              </div>
              <button type="submit" className="relative inline-block">
              <svg width="180" height="180" viewBox="0 0 180 180" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.circle
                cx="90"
                cy="90"
                r="85"
                fill="none"
                stroke="#D67530"
                strokeWidth="2"
                strokeDasharray="0.3,8"
                strokeLinecap="round"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 13,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />
            </svg>
            <motion.button
              className="bg-[#D67530] text-white font-medium w-40 h-40 rounded-full flex items-center justify-center relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contact us to book a consultation"
            >
              <span className="text-[14px] uppercase relative z-10 px-4 py-2">Send Message</span>
            </motion.button>
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-orange" />
              <span>hello@bihub.tech</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-orange" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-orange" />
              <span>123 Innovation Drive, Tech Valley, CA 94000</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}