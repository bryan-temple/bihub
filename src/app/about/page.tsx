

'use client'

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const contentRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSkipLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    contentRef.current?.focus();
  };

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only" onClick={handleSkipLink}>
        Skip to main content
      </a>

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center"
        aria-label="About Us hero image"
        role="banner"
      >
        <Image
          src="/dev.jpg"
          alt="Team working together"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <h1 className="relative z-10 text-orange text-6xl font-bold">
          About Us
        </h1>
      </section>

      {/* Content Section */}
      <motion.section 
        ref={contentRef}
        id="main-content"
        className="bg-white py-16 px-4 sm:px-6 lg:px-8"
        tabIndex={-1}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 100 ? 1 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
        role="main"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="mb-6">
            Our mission is to create innovative solutions that improve people&apos;s lives and contribute to a sustainable future.
          </p>
        </div>
      </motion.section>
    </>
  );
}