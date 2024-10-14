import React, { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AnimatedCircleButton = ({ className = "" }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <Link 
        href="/contact"
        className={`group flex flex-col items-center gap-y-4 md:gap-y-12 mt-[5.5rem] md:mt-[8.5rem] ${className} ml-10`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <motion.div 
          className="relative ml-[7rem]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-orange to-beige rounded-full cursor-pointer shadow-lg"
            animate={{
              scale: isHovered ? 0.9 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-orange"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              opacity: isHovered ? [1, 0, 1] : 1,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
          <motion.div 
            className="absolute inset-0 flex items-center justify-center text-white"
            animate={{
              rotate: isHovered ? 90 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.div>
        </motion.div>
        <motion.div 
          className="flex items-center"
          animate={{
            y: isHovered ? -5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl mt-10 md:mt-[4rem] ml-[7rem] font-light transform rotate-90 text-navy group-hover:text-beige transition-colors duration-300">
            Start a project
          </span>
        </motion.div>
      </Link>
    );
};

export default AnimatedCircleButton;