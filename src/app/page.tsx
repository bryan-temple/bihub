// File: src/app/page.tsx

import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialCarousel from '@/components/Testimonial'
import CompanyIntro from '@/components/RichText'
import CTASection from '@/components/CTASection'
import AgencyFooter from '@/components/AgencyFooter'
import ServicesShowcase from '@/components/ServicesShowcase'

export default function Home() {
  return (
    <div className='flex flex-col'>
      {/* Skip to main content link */}
      <a href="#main-content" className="skip-to-main-content">Skip to main content</a>
      <main id="main-content" className='flex-1'>
        <HeroSection />
        {/* <ServicesSection /> */}
        <section>
          <CompanyIntro 
            tagline="Our Mission"
            description='BiHub Technology is dedicated to creating user-centric digital products that prioritize accessibility and inclusivity'
            className="p-6 max-w-screen md:w-full z-0 bg-white-100 py-16"
          />
        </section>
        {/* <CTASection /> */}
        <section>
          <ServicesShowcase />
        </section>
        <TestimonialCarousel />
      </main>
      <footer>
        <AgencyFooter />
      </footer>
    </div>
  )
}