// File: src/app/page.tsx

import HeroSection from '@/components/HeroSection'

import TestimonialCarousel from '@/components/Testimonial'


import CompanyIntro from '@/components/RichText'


export default function Home() {
  return (
    <div className='flex flex-col'>
      {/* <Header /> */}
      <main className='flex-1'>
        
      <section className="min-h-screen"><HeroSection /></section>
        {/* <section className="min-h-screen"><MainContent /></section> */}
        {/* <section className="min-h-screen"><TrustedBy /></section> */}
        <section>
          <CompanyIntro tagline=""
            description='BiHub Technology is dedicated to creating User-centric digital products that prioritize accessibility and inclusivity'
        //  description="BiHub Technology is a cutting-edge tech company specializing in creating seamless digital solutions. We blend creativity with technology to solve complex problems and drive digital transformation across industries."
         className="p-6 max-w-screen z-0 bg-white-100 max-h-[40vh]" />
        </section>
        <section className=""><TestimonialCarousel /></section>
        {/* <section className="min-h-screen"><BookConsultation /></section> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}