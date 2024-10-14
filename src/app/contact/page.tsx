"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import Head from 'next/head';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);
  const contentRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [pageTitle, setPageTitle] = useState('Contact Us | Bihub Technology');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.title = pageTitle;
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID!);
  }, [pageTitle]);

  const handleSkipLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    contentRef.current?.focus();
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      from_name: formData.get('name') as string,
      from_email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams
      );

      if (response.status === 200) {
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
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Contact Bihub Technology for expert solutions tailored to your needs. Let's create something extraordinary together." />
      </Head>

      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-white focus:text-black focus:p-4" onClick={handleSkipLink}>
        Skip to main content
      </a>

      <section 
        className="relative h-screen flex items-center justify-center"
        aria-label="Contact Us hero section"
      >
        <Image
          src="/contact-us.jpg"
          alt="arrow pointing downward to the form fields "
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" aria-hidden="true" />
        <h1 className="relative z-10 text-orange text-6xl font-thin">
          Contact Us
        </h1>
      </section>

      <motion.main 
        ref={contentRef}
        id="main-content"
        className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8"
        tabIndex={-1}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 100 ? 1 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
      >
        <div className="max-w-7xl mx-auto p-4">
          <motion.h2 
            className="text-4xl md:text-6xl font-light mb-12 text-center text-navy"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let&apos;s create extraordinary experience
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 gap-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-3xl font-light mb-8 text-navy">Hey there! We&apos;re here to answer any questions you have - about Bihub&apos;s services and beyond. Fill out the form and you&apos;ll receive an email from our team within two business days or less.</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-4">Your Name <span className="text-red-500">*</span></label>
                <input type="text" id="name" name="name" className="w-full px-4 py-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 border border-t-0 border-l-0 border-r-0 border-b-navy" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-4">Your Email <span className="text-red-500">*</span></label>
                <input type="email" id="email" name="email" className="w-full px-4 py-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 border border-t-0 border-l-0 border-r-0 border-b-navy" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-4">Your Message <span className="text-red-500">*</span></label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 border border-t-0 border-l-0 border-r-0 border-b-navy" required></textarea>
              </div>
              <button type="submit" className="relative inline-block">
                  <svg width="180" height="180" viewBox="0 0 180 180" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <motion.circle
                      cx="90"
                      cy="90"
                      r="85"
                      fill="none"
                      stroke="#0F2B42"
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
                    className="bg-navy text-white font-medium w-40 h-40 rounded-full flex items-center justify-center relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Send message"
                  >
                    <span className="text-[16px] uppercase relative z-10 px-4 py-2">Send Message</span>
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
              <h3 className="text-2xl font-semibold mb-6 text-navy">Contact Information</h3>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-orange" />
                <span className="text-navy">hello@bihub.tech</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl text-orange" />
                <span className="text-navy">+1 (----) ------</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-2xl text-orange" />
                <span className="text-navy">123 Innovation Drive, Tech Valley, CA 94000</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </>
  );
}