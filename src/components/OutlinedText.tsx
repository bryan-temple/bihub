import React from 'react';
import * as motion from "framer-motion/client"


interface OutlinedTextProps {
  text: string;
  outlineColor?: string;
}

const OutlinedText: React.FC<OutlinedTextProps> = ({
  text,
  outlineColor = '#EEC9B6', // Light pink outline color, adjust as needed
}) => {
  return (
    <div className=" w-full overflow-hidden absolute inset-1 flex justify-center items-center mt-[5rem] md:mt-[8rem]">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="w-full"
      >
        <svg
          className="w-full  h-auto "

          viewBox={`0 0 ${text.length * 60} 100`}
          // className="w-full h-auto"
          // viewBox={`0 0 ${text.length * 100} 120`}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            x="0"
            y="80"
            fontSize="110"
            fontFamily={`var(--font-founder-grotesk)`}
            fontWeight="500"
            // textAnchor="start"
            fill="none"
            stroke={outlineColor}
            strokeWidth="0.2"
            // className=" w-full"
            // dominantBaseline="middle"
          >
            {text}
          </text>
        </svg>
      </motion.div>
    </div>
  );
};

export default OutlinedText;