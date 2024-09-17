"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const AgencyFooter = () => {
  const socialIcons = [
    { Icon: FaFacebookF, label: 'Facebook', url: 'https://facebook.com' },
    { Icon: FaTwitter, label: 'Twitter', url: 'https://twitter.com' },
    { Icon: FaLinkedinIn, label: 'LinkedIn', url: 'https://linkedin.com' },
    { Icon: FaInstagram, label: 'Instagram', url: 'https://instagram.com' }
  ];

  return (
    <footer className="bg-rose-100 text-gray-900 py-16 px-4" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <motion.section 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          aria-labelledby="cta-heading"
        >
          <h2 id="cta-heading" className="text-4xl font-semibold mb-4">Book a Consultation</h2>
          <p className="text-3xl mb-8">session now!</p>
          <div className="relative inline-block">
            <svg width="180" height="180" viewBox="0 0 180 180" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.circle
                cx="90"
                cy="90"
                r="85"
                fill="none"
                stroke="#D67530"
                strokeWidth="2"
                strokeDasharray="10,10"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, rotate: 360 }}
                transition={{
                  duration: 8,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />
            </svg>
            <motion.button
              className="bg-[#D67530] text-white font-bold w-40 h-40 rounded-full flex items-center justify-center relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contact us to book a consultation"
            >
              <span className="text-2xl relative z-10">Contact</span>
            </motion.button>
          </div>
        </motion.section>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xl">
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            aria-labelledby="contact-heading"
          >
            <h3 id="contact-heading" className="text-orange-800 mb-4 font-semibold">Reach us</h3>
            <motion.a 
              href="mailto:info@bihub.tech" 
              className="underline text-orange-700 hover:text-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              info@bihub.tech
            </motion.a>
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            aria-labelledby="social-heading"
          >
            <h3 id="social-heading" className="text-orange-800 mb-4 font-semibold">Follow us</h3>
            <ul className="space-y-2">
              {socialIcons.map(({ Icon, label, url }, index) => (
                <li key={index}>
                  <motion.a
                    href={url}
                    className="flex items-center text-orange-700 hover:text-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Follow us on ${label}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon size={20} aria-hidden="true" className="mr-2" />
                    <span>{label}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            aria-labelledby="legal-heading"
          >
            <h3 id="legal-heading" className="text-orange-800 mb-4 font-semibold">Legal</h3>
            <Link href="/privacy-policy" passHref>
              <motion.a 
                className="underline text-orange-700 hover:text-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Privacy Policy
              </motion.a>
            </Link>
            <p className="text-gray-700 mt-4">
              ©{new Date().getFullYear()} Bihub technology.<br />
              All rights reserved.
            </p>
          </motion.section>
        </div>
      </div>
    </footer>
  );
};

export default AgencyFooter;