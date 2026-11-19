"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";
import { Sparkles, Layers } from "lucide-react";

type MaterialPreset = "chrome" | "gold" | "glass";

export function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [preset, setPreset] = useState<MaterialPreset>("chrome");
  const presetRef = useRef<MaterialPreset>(preset);
  presetRef.current = preset;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let isVisible = true;
    const isDark = resolvedTheme !== "light";

    // Scene & Camera setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || 460;
    const height = container.clientHeight || 460;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.4);

    // Renderer setup with high color fidelity
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = isDark ? 1.25 : 1.1;
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // Studio Lighting Array
    const ambientLight = new THREE.AmbientLight(
      isDark ? 0x1a202c : 0xf8fafc,
      isDark ? 1.6 : 2.0
    );
    scene.add(ambientLight);

    // Key Light (Warm Champagne Studio Spotlight)
    const keyLight = new THREE.DirectionalLight(0xfff1dc, 3.8);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    // Fill Light (Cool Platinum Rim Light)
    const fillLight = new THREE.DirectionalLight(0x90b4d4, 2.4);
    fillLight.position.set(-5, -3, 3);
    scene.add(fillLight);

    // Top Rim Specular Light
    const rimLight = new THREE.PointLight(0xffffff, 3.2, 12);
    rimLight.position.set(0, 4, -2);
    scene.add(rimLight);

    // 3D Sculpture Group
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Geometry: High-resolution sculpted Torus Knot
    const geometry = new THREE.TorusKnotGeometry(1.22, 0.38, 140, 36, 2, 3);

    // Material definitions for the presets
    const getMaterialConfig = (p: MaterialPreset) => {
      switch (p) {
        case "gold":
          return {
            color: isDark ? 0xd4af37 : 0xb8860b,
            metalness: 0.92,
            roughness: 0.16,
            clearcoat: 1.0,
            clearcoatRoughness: 0.08,
            transmission: 0,
            ior: 1.5,
          };
        case "glass":
          return {
            color: isDark ? 0x1f2937 : 0xe2e8f0,
            metalness: 0.15,
            roughness: 0.12,
            clearcoat: 1.0,
            clearcoatRoughness: 0.05,
            transmission: 0.58,
            ior: 1.52,
            transparent: true,
            opacity: 0.9,
          };
        case "chrome":
        default:
          return {
            color: isDark ? 0xe2e8f0 : 0xd1d5db,
            metalness: 0.96,
            roughness: 0.1,
            clearcoat: 1.0,
            clearcoatRoughness: 0.05,
            transmission: 0,
            ior: 1.5,
          };
      }
    };

    const material = new THREE.MeshPhysicalMaterial(getMaterialConfig(presetRef.current));
    const sculptureMesh = new THREE.Mesh(geometry, material);
    sculptureGroup.add(sculptureMesh);

    // Subtle Floating Platinum Dust Particles
    const particleCount = 36;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: isDark ? 0xd4af37 : 0x9a7228,
      size: 0.05,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    sculptureGroup.add(particles);

    // Interactive pointer & drag physics
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      if (isDragging) {
        const deltaX = clientX - previousPointerX;
        const deltaY = clientY - previousPointerY;
        targetRotationY += deltaX * 0.007;
        targetRotationX += deltaY * 0.007;
        previousPointerX = clientX;
        previousPointerY = clientY;
      } else {
        const rect = container.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((clientY - rect.top) / rect.height) * 2 - 1);
        targetRotationX = y * 0.4;
        targetRotationY = x * 0.6;
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      previousPointerX = clientX;
      previousPointerY = clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
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

    // Pause animation when scrolled outside viewport
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    intersectionObserver.observe(container);

    // Render loop
    const clock = new THREE.Clock();
    let currentPreset = presetRef.current;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible || !renderer) return;

      const delta = clock.getDelta();

      // Check if preset changed dynamically
      if (presetRef.current !== currentPreset) {
        currentPreset = presetRef.current;
        const newConfig = getMaterialConfig(currentPreset);
        material.setValues(newConfig);
        material.needsUpdate = true;
      }

      // Smooth idle rotation if not reduced motion
      if (!prefersReducedMotion && !isDragging) {
        sculptureMesh.rotation.y += 0.28 * delta;
        sculptureMesh.rotation.x += 0.16 * delta;
        particles.rotation.y += 0.12 * delta;
      }

      // Physics interpolation towards target
      sculptureGroup.rotation.x += (targetRotationX - sculptureGroup.rotation.x) * 0.07;
      if (isDragging) {
        sculptureGroup.rotation.y += (targetRotationY - sculptureGroup.rotation.y) * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

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
      geometry.dispose();
      material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [resolvedTheme]);

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto select-none flex items-center justify-center">
      {/* Dynamic ambient studio radial glow behind sculpture */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-accent/15 via-transparent to-brand-accent/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* WebGL Canvas */}
      <div
        ref={containerRef}
        className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing rounded-3xl touch-none focus:outline-none"
        aria-label="Liquid Titanium 3D Studio Sculpture"
        role="region"
      />

      {/* Luxury Material Presets Selector */}
      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1 p-1 rounded-xl bg-brand-surface/90 backdrop-blur-md border border-brand-border text-xs shadow-xl">
        <span className="hidden sm:inline px-2 text-[10px] uppercase font-mono tracking-wider text-brand-muted font-semibold">
          Material:
        </span>
        <button
          type="button"
          onClick={() => setPreset("chrome")}
          aria-label="Pilih material Liquid Chrome"
          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
            preset === "chrome"
              ? "bg-brand-text text-brand-bg shadow-sm"
              : "text-brand-muted hover:text-brand-text hover:bg-brand-surface-hover"
          }`}
        >
          Chrome
        </button>
        <button
          type="button"
          onClick={() => setPreset("gold")}
          aria-label="Pilih material Champagne Gold"
          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
            preset === "gold"
              ? "bg-amber-500 text-black font-semibold shadow-sm"
              : "text-brand-muted hover:text-brand-text hover:bg-brand-surface-hover"
          }`}
        >
          Gold
        </button>
        <button
          type="button"
          onClick={() => setPreset("glass")}
          aria-label="Pilih material Frosted Glass"
          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
            preset === "glass"
              ? "bg-brand-text text-brand-bg shadow-sm"
              : "text-brand-muted hover:text-brand-text hover:bg-brand-surface-hover"
          }`}
        >
          Glass
        </button>
      </div>
    </div>
  );
}
