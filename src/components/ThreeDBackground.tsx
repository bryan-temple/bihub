'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const ThreeDBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionPreference = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionPreference);
    return () => mediaQuery.removeEventListener('change', handleMotionPreference);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Function to generate positions for a letter
    const generateLetterPositions = (letter: string, offsetX: number, offsetY: number, scale: number = 0.1) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return [];

      canvas.width = 100;
      canvas.height = 100;
      ctx.font = 'bold 80px Arial';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(letter, 50, 50);

      const imageData = ctx.getImageData(0, 0, 100, 100);
      const positions = [];

      for (let y = 0; y < imageData.height; y += 2) {
        for (let x = 0; x < imageData.width; x += 2) {
          const alpha = imageData.data[(y * imageData.width + x) * 4 + 3];
          if (alpha > 128) {
            positions.push(
              (x / imageData.width - 0.5) * scale + offsetX,
              (-y / imageData.height + 0.5) * scale + offsetY,
              0
            );
          }
        }
      }

      return positions;
    };

    // Generate positions for "BIHUB"
    const letterSpacing = 0.12;
    const bPositions = generateLetterPositions('B', -2 * letterSpacing, 0);
    const iPositions = generateLetterPositions('I', -letterSpacing, 0);
    const hPositions = generateLetterPositions('H', 0, 0);
    const uPositions = generateLetterPositions('U', letterSpacing, 0);
    const b2Positions = generateLetterPositions('B', 2 * letterSpacing, 0);

    const letterPositions = [...bPositions, ...iPositions, ...hPositions, ...uPositions, ...b2Positions];

    // Generate random positions for scattered state
    const particleCount = letterPositions.length;
    const scatteredPositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      scatteredPositions[i] = (Math.random() - 0.5) * 2;
      scatteredPositions[i + 1] = (Math.random() - 0.5) * 2;
      scatteredPositions[i + 2] = (Math.random() - 0.5) * 2;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(scatteredPositions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0xD67530, // Orange color
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 1;

    // Animation
    let formingLetters = false;
    const animateParticles = () => {
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      const targetPositions = formingLetters ? letterPositions : scatteredPositions;

      gsap.to(positions, {
        duration: 2,
        endArray: targetPositions,
        ease: "power2.inOut",
        onUpdate: () => {
          particlesGeometry.attributes.position.needsUpdate = true;
        },
        onComplete: () => {
          formingLetters = !formingLetters;
          setTimeout(animateParticles, 2000); // Wait 2 seconds before next animation
        }
      });
    };

    animateParticles();

    const animate = () => {
      requestAnimationFrame(animate);
      if (!isReducedMotion) {
        particlesMesh.rotation.y += 0.001;
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [isReducedMotion]);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-[-1]" aria-hidden="true" />;
};

export default ThreeDBackground;