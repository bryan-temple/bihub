// File: src/app/page.tsx
import Header from '../components/Header'
import HeroSection from '@/components/HeroSection'
import MainContent from '@/components/MainContent'
import TestimonialCarousel from '@/components/Testimonial'
import TrustedBy from '@/components/TrustedBy'
import BookConsultation from '@/components/BookConsultation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col'>
      {/* <Header /> */}
      <main className='flex-1'>
        
      <section className="min-h-screen"><HeroSection /></section>
        {/* <section className="min-h-screen"><MainContent /></section> */}
        {/* <section className="min-h-screen"><TrustedBy /></section> */}
        <section className="min-h-screen"><TestimonialCarousel /></section>
        <section className="min-h-screen"><BookConsultation /></section>
      </main>
      <Footer />
    </div>
  )
}