"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaCopy, FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image'

const AgencyFooter = () => {
  const [copied, setCopied] = useState(false);
  const email = 'hello@bihub.tech';

  const socialIcons = [
    { Icon: FaLinkedinIn, label: 'LinkedIn', url: 'https://www.linkedin.com/company/bihub-technology' },
    { Icon: FaFacebookF, label: 'Facebook', url: 'https://facebook.com/Bi Hub' },
    { Icon: FaTwitter, label: 'Twitter', url: 'https://x.com/bihub_tech' },
    { Icon: FaInstagram, label: 'Instagram', url: 'https://www.instagram.com/bihub_tech/' }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="bg-[#FBF1EA] text-navy py-6 px-4" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <motion.section 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          aria-labelledby="cta-heading"
        >
          <h2 id="cta-heading" className="text-4xl md:text-5xl font-light my-4">
            Book a Consultation<br /><span>session!</span>
          </h2>
          <Link href="/contact" passHref legacyBehavior>
            <motion.a
              className="relative inline-block mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contact us to book a consultation"
            >
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
              <span className="bg-[#D67530] text-white font-medium w-40 h-40 rounded-full flex items-center justify-center relative overflow-hidden">
                <span className="text-[14px] uppercase relative z-10 px-4 py-2">Contact us</span>
              </span>
            </motion.a>
          </Link>
        </motion.section>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-x-[5rem] text-xl py-[5rem]">
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            aria-labelledby="contact-heading"
          >
            <h3 id="contact-heading" className="text-orange mb-4 font-medium">Reach us</h3>
            <div className="flex items-center">
              <span className="mr-2">{email}</span>
              <motion.button
                onClick={copyToClipboard}
                className="bg-purple-100 text-navy p-2 rounded-full hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={copied ? "Email copied to clipboard" : "Copy email to clipboard"}
              >
                {copied ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
              </motion.button>
            </div>
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            aria-labelledby="social-heading"
          >
            <h3 id="social-heading" className="text-orange font-medium mb-4">Follow us</h3>
            <ul className="flex flex-wrap justify-start items-center gap-4">
              {socialIcons.map(({ Icon, label, url }, index) => (
                <li key={index}>
                  <motion.a
                    href={url}
                    className="flex items-center justify-center w-10 h-10 bg-navy text-white rounded-full focus:outline-none focus:ring-2 focus:ring-orange"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Follow us on ${label}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon size={20} aria-hidden="true" />
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
            <h3 id="legal-heading" className="text-orange mb-4 font-medium">Legal</h3>
            <Link href="/privacy-policy" passHref legacyBehavior>
              <motion.a 
                className="text-navy hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Privacy Policy
              </motion.a>
            </Link>
          </motion.section>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <Image width={40} height={40} src="/logo.png" alt="BiHub Technology logo" />
        <p className="text-navy mt-4 text-center">
          ©{new Date().getFullYear()} BiHub Technology. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default AgencyFooter;