'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ClientSideHome = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-orange">
          Innovate. Include. Inspire.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          At Bihub Technology, we&apos;re not just building websites. We&apos;re crafting digital experiences that welcome everyone, inspire innovation, and drive your business forward.
        </p>
        <Link href="/contact" passHref>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-green text-navy font-bold py-3 px-6 rounded-full text-lg transition duration-300 hover:bg-green-600"
          >
            Start Your Journey
          </motion.a>
        </Link>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose Bihub Technology?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Inclusive Design',
              description: 'We believe the web is for everyone. Our solutions ensure that all users, regardless of abilities, can access and enjoy your digital presence.',
            },
            {
              title: 'Cutting-Edge Technology',
              description: 'Stay ahead of the curve with our innovative approaches. We leverage the latest in web technology to create fast, responsive, and engaging experiences.',
            },
            {
              title: 'Results-Driven Approach',
              description: 'Your success is our priority. We align our solutions with your business goals, ensuring measurable impact and ROI.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
              className="bg-navy/30 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4 text-orange">{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
        <p className="text-xl mb-8">Let&apos;s create something extraordinary together.</p>
        <Link href="/contact" passHref>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-orange text-navy font-bold py-3 px-6 rounded-full text-lg transition duration-300 hover:bg-orange-600"
          >
            Get in Touch
          </motion.a>
        </Link>
      </motion.section>
    </>
  );
};

export default ClientSideHome;