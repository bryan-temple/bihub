import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesShowcase from '@/components/ServicesShowcase';
// import TestimonialCarousel from '@/components/Testimonial';
import CompanyIntro from '@/components/RichText';
import { SEOHead, HomePageSchema } from '@/components/Seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BiHub Technology: Inclusive Digital Solutions for All',
  description: 'BiHub Technology offers accessible and innovative web solutions for your digital presence. We specialize in user-centric digital products that prioritize accessibility and inclusivity.',
};

export default function Home() {
  return (
    <>
      <HomePageSchema />
      
      <div className='flex flex-col min-h-screen bg-[#eec9b6]'>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-navy">
          Skip to main content
        </a>
        <main id="main-content" className='flex-1 mt-10 sm:mt-9 pt-2'>
          <HeroSection 
            image="/developer-image.jpg"
            heading="We launch visionary brands and build exceptional digital experiences"
            subheading=""
            buttonLabel=""
            buttonLink=""
            // subheading="Inclusive Digital Solutions for All"

          />
          
          <section >
            <CompanyIntro 
              tagline="Brand Mission "
              description="BiHub Technology is dedicated to creating user-centric digital products that prioritize accessibility and inclusivity"
              className="p-6 max-w-screen-xl mx-auto  "
            />
          </section>
          
          <section aria-labelledby="our-services">
            <h2 id="our-services" className="sr-only">Our Services</h2>
            <ServicesShowcase />
          </section>
          
          
          {/* <section aria-labelledby="client-testimonials">
            <h2 id="client-testimonials" className="sr-only">Client Testimonials</h2>
            <TestimonialCarousel />
          </section> */}
        </main>
      </div>
    </>
  );
}
