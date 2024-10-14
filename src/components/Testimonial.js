"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Maria Carey',
    role: 'C.E.O at Mandras',
    content: 'I had an amazing experience working with Bihub. My website is now optimised and drives in more sales',
    rating: 5,
    color: 'bg-gradient-to-br from-[#ffeee0] to-[#ffcbb5]'
  },
  {
    id: 2,
    name: 'Maria Carey',
    role: 'C.E.O at Mandras',
    content: 'I had an amazing experience working with Bihub. My website is now optimised and drives in more sales',
    rating: 4,
    color: 'bg-gradient-to-br from-[#ffe4d0] to-[#ffc59b]'
  },
  {
    id: 3,
    name: 'Maria Carey',
    role: 'C.E.O at Mandras',
    content: 'I had an amazing experience working with Bihub. My website is now optimised and drives in more sales',
    rating: 3,
    color: 'bg-gradient-to-br from-[#d0e6ff] to-[#a7c7ff]'
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') nextTestimonial();
      if (event.key === 'ArrowLeft') prevTestimonial();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full max-w-screen mx-auto p-8 px-4 py-6 bg-white">
      <div className="relative overflow-hidden w-full bg-white rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16">
      <h2 className="text-3xl md:text-4xl font-thin text-center mb-12 text-navy">What Our Clients Say</h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className={`${testimonials[currentIndex].color} rounded-3xl p-8 md:p-10 lg:p-12 shadow-md md:w-2/3 lg:w-3/4`}
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-orange fill-current mr-1" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-2xl font-bold">{testimonials[currentIndex].rating.toFixed(1)}</span>
              </div>
              <p className="text-xl lg:text-2xl mb-6 font-light leading-relaxed">{testimonials[currentIndex].content}</p>
              <p className="font-bold text-lg lg:text-xl">{testimonials[currentIndex].name}</p>
              <p className="text-base text-gray-600">{testimonials[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col items-center mt-8 md:mt-0 md:ml-8">
            <div className="flex space-x-4 mb-6">
              <button
                onClick={prevTestimonial}
                className="bg-white rounded-lg p-2 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f0ad4e] transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white rounded-lg p-2 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f0ad4e] transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
            <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#f0ad4e]"
                initial={{ width: '0%' }}
                animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;