import * as motion from "framer-motion/client"

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className=""
    >
      <div className="text-left mx-auto w-screen text-3xl md:text-5xl">
        
          <h1>
          We offer{''}
            <span className="text-orange-500">Accessible</span>
          </h1>
    </div>
        We offer <span className="text-orange-500">Accessible</span> and{' '}Innovative web solutions for your Digital Presence
    </motion.section>
  );
}