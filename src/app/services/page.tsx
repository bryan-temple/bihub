"use client"
import { motion } from 'framer-motion';


const services = [
  {
    title: 'Accessible Web Design',
    description: 'We create beautiful, functional websites that are accessible to all users, regardless of their abilities.',
    icon: '🎨'
  },
  {
    title: 'Custom Web Applications',
    description: 'From complex e-commerce platforms to innovative web apps, we build tailored solutions to meet your unique needs.',
    icon: '💻'
  },
  {
    title: 'Accessibility Audits & Remediation',
    description: 'We evaluate your existing digital properties and provide actionable recommendations to improve accessibility.',
    icon: '🔍'
  },
  {
    title: 'Performance Optimization',
    description: 'We fine-tune your web presence for lightning-fast load times and smooth user experiences.',
    icon: '⚡'
  },
  {
    title: 'SEO & Digital Marketing',
    description: 'Boost your online visibility and reach your target audience with our data-driven digital marketing strategies.',
    icon: '📈'
  },
  {
    title: 'Ongoing IT Support & Maintenance',
    description: 'We provide continuous support to ensure your digital assets remain secure, up-to-date, and performing at their best.',
    icon: '🛠️'
  }
];

const Services = () => {
  return (
   
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-orange text-center">Our Services</h1>
        
        <p className="text-lg mb-12 max-w-3xl mx-auto text-center">
          At Bihub Technology, we offer a comprehensive range of web services designed to help your business thrive in the digital world. From accessible design to cutting-edge development, we&apos;ve got you covered.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-navy/30 p-6 rounded-lg backdrop-blur-sm"
            >
              <div className="text-4xl mb-4" aria-hidden="true">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4 text-green">{service.title}</h2>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to elevate your digital presence?</h2>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-orange text-navy font-bold py-3 px-6 rounded-full text-lg transition duration-300 hover:bg-orange-600"
          >
            Let&apos;s Get Started
          </motion.a>
        </motion.div>
      </motion.div>

  );
};

export default Services;