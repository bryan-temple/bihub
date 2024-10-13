import React from 'react';
import Image from 'next/image';

export default function HeroSection({ image, heading, subheading, buttonLabel, buttonLink }) {
  return (
    <div className=" max-w-screen-xl mx-auto h-screen content-center md:p-6">
      <div className="flex flex-col md:flex-row items-center  justify-between ">

      <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8 px-2 ">
        <h1 className="text-5xl md:text-6xl font-thin mb-4 text-navy  md:p-4 max-w-md md:max-w-xl">
          {heading}
        </h1>
        <p className="text-xl mb-6 text-gray-600 p-6">
          {subheading}
        </p>
        {buttonLabel && buttonLink && (
          <a
            href={buttonLink}
            className="inline-block px-2 py-4 rounded bg-emerald-400 text-white border border-collapse font-semibold hover:bg-emerald-500 transition-colors"
          >
            {buttonLabel}
          </a>
        )}
      </div>
      <div className="md:w-1/2 relative h-[400px] md:h-[500px] w-full">
        {image && (
          <Image
            src={image}
            alt={heading || 'Hero image'}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        )}
         <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      </div>
      </div>
      
    </div>
  );
}