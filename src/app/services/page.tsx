'use client'

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import Head from 'next/head';
import ServicesShowcase from '@/components/ServicesShowcase';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const contentRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [pageTitle, setPageTitle] = useState('Our Services | Company Name');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update the document title when the component mounts
    document.title = pageTitle;
  }, [pageTitle]);

  const handleSkipLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    contentRef.current?.focus();
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Explore our range of services at Bihub Technology. We offer expert solutions tailored to your needs." />
      </Head>

      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-white focus:text-black focus:p-4" onClick={handleSkipLink}>
        Skip to main content
      </a>


      <section 
        className="relative h-screen flex items-center justify-center  "
        aria-label="About Us hero section"
      >
        <Image
          src="/hero-image.webp"
          alt="Team collaborating on a project"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" aria-hidden="true" />
        <h1 className="relative z-10 text-orange text-6xl font-bold">
          Our Services
        </h1>
      </section>

      {/* Content Section */}
      <motion.main 
        ref={contentRef}
        id="main-content"
        className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8"
        tabIndex={-1}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 100 ? 1 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <ServicesShowcase />
        </div>
      </motion.main>
    </>
  );
}