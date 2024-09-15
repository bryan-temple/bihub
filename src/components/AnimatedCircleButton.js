import React, { useState } from 'react';
import { motion } from "framer-motion";
// import { ArrowRight } from 'lucide-react';

const AnimatedCircleButton = ({ onClick, className = "" }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <motion.button 
        className={`group flex flex-col mt-[8.5rem] items-center gap-y-[5rem] focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 ${className}`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        aria-label="Start a project"
      >
        <div className="relative mt-[3rem]">
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full cursor-pointer shadow-lg"
            animate={{
              scale: isHovered ? 0.9 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-red-400"
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
            {/* <ArrowRight size={24} /> */}
          </motion.div>
        </div>
        <motion.div 
          className="mt-4 flex items-center"
          animate={{
            y: isHovered ? -5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-2xl md:text-4xl mt-6 font-light transform rotate-90 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
            Start a project
          </span>
        </motion.div>
      </motion.button>
    );
};

export default AnimatedCircleButton;