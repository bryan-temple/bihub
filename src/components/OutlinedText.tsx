import React from 'react';
import * as motion from "framer-motion/client"

interface OutlinedTextProps {
  text: string;
  outlineColor?: string;
  opacity?: number;
}

const OutlinedText: React.FC<OutlinedTextProps> = ({
  text,
  outlineColor = '#EEC9B6',
  opacity = 0.5, // Default opacity value, adjust as needed
}) => {
  // Convert the hexadecimal color to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgb = hexToRgb(outlineColor);
  const outlineColorWithOpacity = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})` : outlineColor;

  return (
    <div className="w-full overflow-hidden absolute inset-1 flex justify-center items-center mt-[2rem] md:mt-[3rem]">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="w-full"
      >
        <svg
          className="w-full h-auto"
          viewBox={`0 0 ${text.length * 60} 100`}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            x="0"
            y="80"
            fontSize="110"
            fontFamily={`var(--font-founder-grotesk)`}
            fontWeight="500"
            fill="none"
            stroke={outlineColorWithOpacity}
            strokeWidth="0.2"
          >
            {text}
          </text>
        </svg>
      </motion.div>
    </div>
  );
};

export default OutlinedText;