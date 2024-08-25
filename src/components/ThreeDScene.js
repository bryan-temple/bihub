"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeDScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create icosahedron
    const geometry = new THREE.IcosahedronGeometry(5, 1);
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x3AB87D });
    const wireframe = new THREE.LineSegments(edges, lineMaterial);
    scene.add(wireframe);

    // Create electric current effect
    const currentGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(2 * 3); // Two points for a line
    currentGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const currentMaterial = new THREE.LineBasicMaterial({ color: 0xD67530 });
    const currentLine = new THREE.Line(currentGeometry, currentMaterial);
    scene.add(currentLine);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(25, 25, 25);
    scene.add(pointLight);

    camera.position.z = 15;

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;

    // Animation
    let currentEdgeIndex = 0;
    const edgePositions = edges.attributes.position.array;
    const animate = () => {
      requestAnimationFrame(animate);

      // Update electric current position
      const startIndex = currentEdgeIndex * 3;
      const endIndex = (currentEdgeIndex + 1) * 3;
      for (let i = 0; i < 3; i++) {
        positions[i] = edgePositions[startIndex + i];
        positions[i + 3] = edgePositions[endIndex + i];
      }
      currentGeometry.attributes.position.needsUpdate = true;

      // Move to next edge
      currentEdgeIndex = (currentEdgeIndex + 1) % (edgePositions.length / 3 - 1);

      wireframe.rotation.x += 0.001;
      wireframe.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
};

export default ThreeDScene;