import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const NavbarCTAButton = () => {
  return (
    <Link href="/project-proposal" passHref legacyBehavior>
      <motion.button
        className="flex items-center space-x-2 text-navy px-4 py-2 uppercase hover:text-goo text-sm md:text-lg font-medium hover:shadow-lg transition-shadow duration-300 bg-transparent border-none cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Start a project"
      >
        <span>Start a project</span>
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <ArrowRight size={16} />
        </motion.span>
      </motion.button>
    </Link>
  );
};

export default NavbarCTAButton;