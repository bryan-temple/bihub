"use client"
import { useState, useEffect } from 'react';

export const useScrollColorChange = (threshold: number = 90) => {
  const [bgColor, setBgColor] = useState('bg-transparent');
  const [textColor, setTextColor] = useState('text-white');

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= threshold) {
        setBgColor('bg-white');
        setTextColor('text-navy');
      } else {
        setBgColor('bg-transparent');
        setTextColor('text-white');
      }
    };

    window.addEventListener('scroll', changeColor);
    return () => window.removeEventListener('scroll', changeColor);
  }, [threshold]);

  return { bgColor, textColor };
};