import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesShowcase from '@/components/ServicesShowcase';
import TestimonialCarousel from '@/components/Testimonial';
import CompanyIntro from '@/components/RichText';
import AgencyFooter from '@/components/AgencyFooter';
import { SEOHead, HomePageSchema } from '@/components/Seo';




export const metadata = {
  title: ' BiHub Technology: Inclusive Digital Solutions for All ',
  description: 'BiHub Technology offers accessible and innovative web solutions for your digital presence. We specialize in user-centric digital products that prioritize accessibility and inclusivity.',
};

export default function Home() {
  return (
    <>
      <SEOHead 
        title={metadata.title}
        description={metadata.description}
        canonicalUrl="https://www.bihub.tech"
        ogImage="https://www.bihub.tech/og-image.jpg"
      />
      <HomePageSchema />
      
      <div className='flex flex-col min-h-screen bg-[#eec9b6]'>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-navy">
          Skip to main content
        </a>
        
        <main id="main-content" className='flex-1'>
          <HeroSection 
            image="/developer-image.jpg"
            heading="We launch visionary brands and build exceptional digital experiences"
            // buttonLabel="Learn More"
            // buttonLink="/about"
            // subheading="Inclusive Digital Solutions for All"

          />
          
          <section >
            <CompanyIntro 
              tagline=" "
              description="BiHub Technology is dedicated to creating user-centric digital products that prioritize accessibility and inclusivity"
              className="p-6 max-w-screen-xl mx-auto  "
            />
          </section>
          
          <section aria-labelledby="our-services">
            <h2 id="our-services" className="sr-only">Our Services</h2>
            <ServicesShowcase />
          </section>
          
          
          <section aria-labelledby="client-testimonials">
            <h2 id="client-testimonials" className="sr-only">Client Testimonials</h2>
            <TestimonialCarousel />
          </section>
        </main>
        
        <AgencyFooter />
      </div>
    </>
  );
}