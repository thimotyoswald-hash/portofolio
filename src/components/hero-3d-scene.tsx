"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";
import { Eye, RotateCcw } from "lucide-react";

export function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [wireframeMode, setWireframeMode] = useState<boolean>(false);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const wireframeModeRef = useRef<boolean>(wireframeMode);
  wireframeModeRef.current = wireframeMode;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let isVisible = true;
    const isDark = resolvedTheme !== "light";

    // Scene & Camera setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.2;

    // Renderer setup with anti-aliasing & alpha
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch {
      // Graceful fallback if WebGL is unavailable
      return;
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(isDark ? 0x223048 : 0xffffff, isDark ? 1.4 : 1.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(isDark ? 0x38bdf8 : 0x0284c7, 3.5, 20);
    pointLight1.position.set(4, 4, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(isDark ? 0x34d399 : 0x0369a1, 2.5, 20);
    pointLight2.position.set(-4, -3, 3);
    scene.add(pointLight2);

    // Group for all core 3D objects
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner Nucleus Core (Faceted Dodecahedron)
    const nucleusGeometry = new THREE.DodecahedronGeometry(1.2, 0);
    const nucleusMaterial = new THREE.MeshPhysicalMaterial({
      color: isDark ? 0x0f172a : 0xe2e8f0,
      metalness: 0.15,
      roughness: 0.25,
      clearcoat: 0.6,
      clearcoatRoughness: 0.2,
      flatShading: true,
      wireframe: false,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    coreGroup.add(nucleusMesh);

    // 2. Outer Architectural Lattice (Icosahedron Wireframe Cage)
    const latticeGeometry = new THREE.IcosahedronGeometry(1.9, 1);
    const latticeMaterial = new THREE.MeshStandardMaterial({
      color: isDark ? 0x38bdf8 : 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.85 : 0.7,
      roughness: 0.4,
    });
    const latticeMesh = new THREE.Mesh(latticeGeometry, latticeMaterial);
    coreGroup.add(latticeMesh);

    // 3. Floating Node Particle Constellation
    const particleCount = 48;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 0.7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: isDark ? 0x38bdf8 : 0x0284c7,
      size: 0.065,
      transparent: true,
      opacity: isDark ? 0.9 : 0.8,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    coreGroup.add(particles);

    // Mouse & Touch interaction state
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Pointer move listener
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      if (isDragging) {
        const deltaX = clientX - previousPointerX;
        const deltaY = clientY - previousPointerY;
        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;
        previousPointerX = clientX;
        previousPointerY = clientY;
      } else {
        const rect = container.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((clientY - rect.top) / rect.height) * 2 - 1);
        targetRotationX = y * 0.45;
        targetRotationY = x * 0.7;
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      previousPointerX = clientX;
      previousPointerY = clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener("mousedown", handlePointerDown);
    container.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    container.addEventListener("touchstart", handlePointerDown, { passive: true });
    container.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerUp);

    // Resize observer
    const handleResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Intersection observer: Pause render loop when scrolled offscreen
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    intersectionObserver.observe(container);

    // Animation Render Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible || !renderer) return;

      const delta = clock.getDelta();

      // Update wireframe state dynamically
      nucleusMaterial.wireframe = wireframeModeRef.current;

      // Base rotation if reduced-motion is not requested
      if (!prefersReducedMotion && !isDragging) {
        coreGroup.rotation.y += 0.35 * delta;
        latticeMesh.rotation.x -= 0.15 * delta;
        particles.rotation.y += 0.18 * delta;
      }

      // Smooth lerp towards pointer/drag target rotation
      coreGroup.rotation.x += (targetRotationX - coreGroup.rotation.x) * 0.08;
      if (isDragging) {
        coreGroup.rotation.y += (targetRotationY - coreGroup.rotation.y) * 0.12;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      container.removeEventListener("mousedown", handlePointerDown);
      container.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      container.removeEventListener("touchstart", handlePointerDown);
      container.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
      nucleusGeometry.dispose();
      nucleusMaterial.dispose();
      latticeGeometry.dispose();
      latticeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [resolvedTheme]);

  return (
    <div className="relative w-full aspect-square max-w-[440px] mx-auto select-none flex items-center justify-center">
      {/* 3D Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing rounded-2xl touch-none focus:outline-none"
        aria-label="Interactive 3D Engineering Lattice Model"
        role="region"
      />

      {/* Floating 3D Controls Badge */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 p-1 rounded-xl bg-brand-surface/85 backdrop-blur-sm border border-brand-border text-xs text-brand-muted shadow-sm">
        <button
          type="button"
          onClick={() => setWireframeMode(!wireframeMode)}
          aria-label={wireframeMode ? "Nonaktifkan mode wireframe" : "Aktifkan mode wireframe"}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
            wireframeMode
              ? "bg-brand-accent text-white"
              : "hover:text-brand-text hover:bg-brand-surface-hover"
          }`}
        >
          <Eye className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{wireframeMode ? "Shaded" : "Wireframe"}</span>
        </button>
      </div>

      {/* Interaction status hint */}
      <div className="sr-only" aria-live="polite">
        {isInteracting ? "Sedang memutar model 3D" : "Model 3D diam"}
      </div>
    </div>
  );
}
