import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const NavbarCTAButton = () => {
  return (
    
      <motion.button
        className="flex items-center space-x-2  text-navy px-4 py-2 uppercase hover:text-goo text-sm md:text-lg font-medium hover:shadow-lg transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Start a project"
      ><Link href="/project-proposal">
        <span>Start a project</span></Link>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <ArrowRight size={16} />
        </motion.div>
      </motion.button>
    
  );
};

export default NavbarCTAButton;