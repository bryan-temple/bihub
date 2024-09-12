'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const ClientAbout = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="bg-navy text-beige min-h-screen font-sans ">
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ 
          backgroundImage: 'url("/abstract-network.svg")', 
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          y: backgroundY
        }}
      />

      <header className="relative z-10 py-16 md:py-24 px-4 bg-gradient-to-b from-navy via-navy to-transparent">
        <div className="container mx-auto max-w-6xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-orange"
            style={{ y: textY }}
          >
            Bihub Technology
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl leading-relaxed text-green"
            style={{ y: textY }}
          >
            We're not just building websites. We're crafting digital experiences that everyone can enjoy.
          </motion.p>
        </div>
      </header>

      <main className="relative z-10 container mx-auto max-w-6xl px-4 py-16">
        <Section title="Our Mission" color="text-orange">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Remember the last time a website frustrated you? Yeah, we hate that too. At Bihub, we're on a mission to make the internet a friendlier place for everyone. Whether you're a tech wizard or just figuring out this whole internet thing, we believe you deserve a great online experience.
              </p>
              <motion.div 
                className="w-32 h-1 bg-orange"
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                viewport={{ once: true }}
              />
            </div>
            <motion.div
              className="relative h-64 md:h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <svg className="absolute inset-0 w-full h-full text-orange opacity-20" viewBox="0 0 200 200">
                <path fill="currentColor" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-orange">Web for All</span>
              </div>
            </motion.div>
          </div>
        </Section>

        <Section title="What We Believe In" color="text-green">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Inclusivity', desc: "The web should be for everyone. Period." },
              { title: 'Innovation', desc: "We're always tinkering, because there's always a better way." },
              { title: 'Integrity', desc: "We're upfront and honest. No tech jargon or hidden fees." },
              { title: 'Impact', desc: "We measure success by the smiles we put on users' faces." }
            ].map(({ title, desc }, index) => (
              <motion.div 
                key={title}
                className="bg-darkBlue p-6 rounded-lg shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-3 text-green">{title}</h3>
                <p className="text-beige">{desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section title="How We Make Magic" color="text-orange">
          <div className="relative">
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <svg className="w-full h-full max-w-2xl text-orange opacity-10" viewBox="0 0 200 200">
                <path fill="currentColor" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
              </svg>
            </motion.div>
            <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Listen', desc: "We start by understanding you and your users. Really understanding." },
                { title: 'Sketch', desc: "We draw up plans that put a smile on your face (and your users' too)." },
                { title: 'Build', desc: "We roll up our sleeves and bring those plans to life, pixel by pixel." },
                { title: 'Test', desc: "We poke, prod, and perfect until everything works like a charm." },
                { title: 'Launch', desc: "3... 2... 1... We have liftoff! Your site goes live, smooth as butter." },
                { title: 'Support', desc: "We're always here, making sure your digital home stays comfy and cozy." }
              ].map(({ title, desc }, index) => (
                <motion.div 
                  key={title}
                  className="bg-darkBlue p-6 rounded-lg shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-orange">{`${index + 1}. ${title}`}</h3>
                  <p className="text-beige">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Want to Join the Fun?" color="text-green">
          <div className="text-center">
            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              Are you passionate about making the web a better place? Do you dream in code or design in your sleep? We're always on the lookout for talented folks who want to make a real difference in the digital world.
            </p>
            <Link href="/careers" passHref>
              <motion.a
                className="inline-block bg-green text-navy font-bold py-3 px-8 rounded-full text-lg transition duration-300"
                whileHover={{ scale: 1.05, backgroundColor: '#4ADE80' }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Crew
              </motion.a>
            </Link>
          </div>
        </Section>
      </main>

      <footer className="relative z-10 bg-darkBlue text-center py-8 mt-16">
        <p className="text-beige">&copy; 2024 Bihub Technology. Making the web awesome for everyone.</p>
        <nav className="mt-4">
          <Link href="/privacy" className="mx-2 text-green hover:text-orange transition duration-300">Privacy (it's important)</Link>
          <Link href="/terms" className="mx-2 text-green hover:text-orange transition duration-300">Terms (the fun stuff)</Link>
          <Link href="/contact" className="mx-2 text-green hover:text-orange transition duration-300">Say Hello!</Link>
        </nav>
      </footer>
    </div>
  );
};

const Section = ({ title, color, children }) => (
  <motion.section 
    className="mb-24"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${color}`}>
      {title}
    </h2>
    {children}
  </motion.section>
);

export default ClientAbout;