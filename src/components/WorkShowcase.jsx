"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const CaseStudyItem = ({ title, subtitle, imageUrl, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = imageUrl;
  }, [imageUrl]);

  return (
    <div className={`relative overflow-hidden ${className} group`}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
      )}
      <Image 
        src={imageUrl} 
        alt={title} 
        className={`w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-focus-within:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-white text-sm">{subtitle}</p>
      </div>
      <a href="#" className="absolute inset-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50" aria-label={`View case study for ${title}`}></a>
    </div>
  );
};

const WorkShowcase = () => {
  return (
    <div className="bg-purple-900 min-h-screen p-8">
      <header className="flex justify-between items-center mb-12">
        <div className="text-white text-2xl font-bold">BiHub</div>
        <div className="flex space-x-4">
          <button className="bg-white text-purple-900 px-4 py-2 rounded transition-colors duration-300 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">Let&apos;s Talk</button>
          <button className="text-white transition-colors duration-300 hover:text-purple-200 focus:outline-none focus:text-purple-200">☰</button>
        </div>
      </header>

      <main>
        <h2 className="text-white text-xl mb-2">Case Studies</h2>
        <h1 className="text-white text-7xl font-bold mb-12">Work</h1>

        <div className="grid grid-cols-5 gap-4 h-[1600px]">
          <CaseStudyItem
            title="LiveNation"
            subtitle="Bold, Interactive Live Entertainment"
            imageUrl="/api/placeholder/800/400"
            className="col-span-3 row-span-2 bg-red-600"
          />
          <CaseStudyItem
            title="Razor USA"
            subtitle="A Great Ride Gets a New Vibe"
            imageUrl="/developer-image.jpg"
            className="col-span-2 row-span-3 bg-orange-500"
          />
          <CaseStudyItem
            title="Razor USA"
            subtitle="A Great Ride Gets a New Vibe"
            imageUrl="/hero-image.webp"
            className="col-span-2 row-span-3 bg-orange-500"
          />
          <CaseStudyItem
            title="LiveNation"
            subtitle="Bold, Interactive Live Entertainment"
            imageUrl="/dev.jpg"
            className="col-span-3 row-span-2 bg-red-600"
          />
        </div>
      </main>
    </div>
  );
};

export default WorkShowcase;