import React from 'react';
import { motion } from 'framer-motion';

interface ImageFilledOutlinedTextProps {
  text: string;
  imageUrl: string;
  backgroundColor?: string;
  outlineColor?: string;
}

const ImageFilledOutlinedText: React.FC<ImageFilledOutlinedTextProps> = ({
  text,
  imageUrl,
  backgroundColor = '#e6f4ea', // Light mint green background
  outlineColor = '#d1e7dd', // Slightly darker mint for the outline
}) => {
  return (
    <div className="w-full overflow-hidden" style={{ backgroundColor }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] mx-auto"
      >
        <svg
          className="w-full h-auto"
          viewBox={`0 0 ${text.length * 100} 120`}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <mask id="textMask">
              <rect width="100%" height="100%" fill="white" />
              <text
                x="50%"
                y="50%"
                fontSize="120"
                fontFamily="'Our Founder Grotesk', sans-serif"
                fontWeight="300"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="black"
              >{text}</text>
            </mask>
          </defs>
          
          <image
            href={imageUrl}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#textMask)"
          />
          
          <text
            x="50%"
            y="50%"
            fontSize="120"
            fontFamily="'Our Founder Grotesk', sans-serif"
            fontWeight="300"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="none"
            stroke={outlineColor}
            strokeWidth="1"
          >{text}</text>
        </svg>
      </motion.div>
    </div>
  );
};

export default ImageFilledOutlinedText;