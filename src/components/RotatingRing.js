"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RotatingYinYang = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create yin-yang geometry
    const radius = 5;
    const segments = 64;
    const yinYangGeometry = new THREE.CircleGeometry(radius, segments);

    // Materials
    const whiteMaterial = new THREE.MeshPhongMaterial({ color: 0xEEC9B6, side: THREE.DoubleSide });
    const blackMaterial = new THREE.MeshPhongMaterial({ color: 0x0F2B42, side: THREE.DoubleSide });

    // Create yin-yang mesh
    const yinYang = new THREE.Object3D();

    // White half
    const whiteHalf = new THREE.Mesh(yinYangGeometry, whiteMaterial);
    whiteHalf.position.z = 0.01;
    yinYang.add(whiteHalf);

    // Black half
    const blackHalf = new THREE.Mesh(yinYangGeometry, blackMaterial);
    blackHalf.rotation.y = Math.PI;
    blackHalf.position.z = -0.01;
    yinYang.add(blackHalf);

    // Small circles
    const smallRadius = radius / 2;
    const smallCircleGeometry = new THREE.CircleGeometry(smallRadius, segments);

    const whiteSmallCircle = new THREE.Mesh(smallCircleGeometry, whiteMaterial);
    whiteSmallCircle.position.set(0, radius / 2, 0.02);
    yinYang.add(whiteSmallCircle);

    const blackSmallCircle = new THREE.Mesh(smallCircleGeometry, blackMaterial);
    blackSmallCircle.position.set(0, -radius / 2, 0.02);
    yinYang.add(blackSmallCircle);

    scene.add(yinYang);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    camera.position.z = 15;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      yinYang.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default RotatingYinYang;