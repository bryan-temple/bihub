"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              Redefining Digital Experiences
            </h1>
            <p className="text-xl md:text-2xl text-beige mb-12">
              Where innovation meets accessibility. Bihub Technology crafts digital solutions that push boundaries while ensuring inclusivity.
            </p>
            <div className="flex space-x-4">
              <Link href="/services" className="btn btn-primary">
                Explore Services
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-navy/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-beige mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Web Design', icon: '🎨', description: 'Crafting visually stunning and user-friendly websites tailored to your brand.' },
              { title: 'Digital Marketing', icon: '📈', description: 'Boosting your online presence with data-driven marketing strategies.' },
              { title: 'Accessibility Solutions', icon: '♿', description: 'Ensuring your digital products are inclusive and accessible to all users.' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy/50 p-6 rounded-lg backdrop-blur-sm hover:bg-navy/70 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-orange mb-2">{service.title}</h3>
                <p className="text-beige">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-orange/20 to-green/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-beige mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-beige mb-8 max-w-2xl mx-auto">
              Let's collaborate to create accessible, innovative, and impactful digital solutions for your business.
            </p>
            <Link href="/contact" className="btn btn-primary text-lg">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}