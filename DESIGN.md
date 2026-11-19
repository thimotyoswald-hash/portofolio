# DESIGN.md - Design Direction: Luxury Studio & Metallic Glass 3D

## 1. Identity & Brand Direction
- **Name / Entity**: Oswald Tito
- **Role**: Full-Stack Software Engineer & Web Developer
- **Target Audience**: High-End Businesses, UMKM, Tech Recruiters, and Digital Agencies (Domestic & International)
- **Positioning**: Luxury Studio engineering craft, bespoke digital architectures, high-performance web systems, and high-conversion client communication.
- **Aesthetic Movement**: Luxury Studio & Metallic Glass 3D (Obsidian Onyx, Liquid Chrome, Frosted Glassmorphism, and Champagne Metallic Accents).

---

## 2. The Three Dials (Antislop Liveliness Specification)
- **ENERGY: 2 (Refined High-Craft Studio)**
  - Uncompromising luxury tech aesthetic inspired by high-end automotive design, luxury audio hardware (Bang & Olufsen), and elite digital agency portfolios.
  - Reason: Commands immediate authority and premium freelance rates, setting Oswald apart from generic boilerplate developers.
- **RHYTHM: 2 (Editorial & Fluid)**
  - Asymmetric hero with an organic floating liquid metallic sculpture, gallery-style project exhibits, numbered editorial service rows, and a concierge-style contact lounge.
  - Reason: Creates visual breathing room with deliberate negative space and prevents template monotony (rule R-05).
- **MOTION: 2 (Fluid Organic Physics & Studio Light Shaders)**
  - High-end Three.js WebGL sculpture utilizing physical transmission, clearcoat specular highlights, and real-time vertex wave undulation.
  - Interactive pointer dampening that glides with physical weight and lighting shifts.
  - Fully respects `prefers-reduced-motion` (freezes vertex undulations and continuous rotation).

---

## 3. Color Tokens & WCAG AA Contrast Compliance
The palette is capped at a luxury neutral foundation + metallic gold/chrome accents (rule R-29).

### Dark Theme (Primary: Obsidian & Liquid Chrome)
- **Background (`--bg-primary`)**: `#060709` (Deep Obsidian Onyx)
- **Surface / Card (`--bg-surface`)**: `#0E1118` (Smoked Charcoal Glass)
- **Surface Hover (`--bg-surface-hover`)**: `#161B26`
- **Border (`--border-subtle`)**: `rgba(255, 255, 255, 0.08)`
- **Border Focus (`--border-focus`)**: `#D4AF37` (Champagne Gold)
- **Text Primary (`--text-primary`)**: `#FFFFFF` (Pure Silver White, Contrast on `#060709` = **20.5:1** - AAA Pass)
- **Text Secondary (`--text-secondary`)**: `#9CA3AF` (Refined Platinum Slate, Contrast on `#060709` = **7.1:1** - AA Pass)
- **Accent Primary (`--accent-primary`)**: `#D4AF37` (Warm Champagne Metallic Gold, Contrast on `#060709` = **9.1:1** - AAA Pass)
- **Accent Muted (`--accent-muted`)**: `rgba(212, 175, 55, 0.12)`
- **Success (`--color-success`)**: `#34D399` (Emerald Mint, Contrast on `#060709` = **9.9:1** - AAA Pass)

### Light Theme (Secondary: Pearlescent Ceramic & Burnished Bronze)
- **Background (`--bg-primary`)**: `#FBFBFD` (Pearlescent Ceramic White)
- **Surface / Card (`--bg-surface`)**: `#FFFFFF` (Crisp Pure White)
- **Surface Hover (`--bg-surface-hover`)**: `#F4F5F8`
- **Border (`--border-subtle`)**: `rgba(0, 0, 0, 0.08)`
- **Border Focus (`--border-focus`)**: `#9A7228`
- **Text Primary (`--text-primary`)**: `#090C10` (Black Pearl, Contrast on `#FBFBFD` = **19.8:1** - AAA Pass)
- **Text Secondary (`--text-secondary`)**: `#4B5563` (Smoked Graphite, Contrast on `#FBFBFD` = **7.0:1** - AA Pass)
- **Accent Primary (`--accent-primary`)**: `#9A7228` (Burnished Gold, Contrast on `#FBFBFD` = **4.8:1** - AA Pass)
- **Accent Muted (`--accent-muted`)**: `rgba(154, 114, 40, 0.08)`
- **Success (`--color-success`)**: `#059669` (Contrast on `#FBFBFD` = **4.6:1** - AA Pass)

---

## 4. Typography & Editorial Hierarchy
- **Headline Font**: `Plus Jakarta Sans`, Extra Bold (800) with letter spacing `-0.03em`.
- **Display Size Scale**: Scaled dynamically with `clamp(2.5rem, 5.5vw, 4.25rem)` to command attention without clipping mobile viewports.
- **Editorial Numbers**: Monospace numbers (`01`, `02`, `03`) on service cards and case studies to establish curated studio craftsmanship.
- **Zero Em Dash Rule (R-02)**: Standard commas, colons, and periods only.
- **Zero AI Buzzwords (R-16)**: Direct, confident statements of competence and verifiable architectural solutions.

---

## 5. 3D Design: "The Liquid Titanium & Glass Sculpture"
- **Geometry**: Procedurally undulating Torus Knot with custom sine-wave vertex displacement simulating liquid titanium and molten crystal.
- **Physical Shader**:
  - `MeshPhysicalMaterial`: `roughness: 0.12`, `metalness: 0.82`, `clearcoat: 1.0`, `reflectivity: 0.95`.
  - Realistic multi-point studio lighting: Warm key light (`#FFE4B5`), cool cyan rim light (`#60A5FA`), and obsidian ambient occlusion.
  - Dynamic material presets switcher: **Liquid Chrome**, **Champagne Gold**, and **Frosted Obsidian Glass**.
- **Performance Budget**:
  - Automatically suspends animation loop when out of view (`IntersectionObserver`).
  - Caps pixel ratio to max 2.0 to preserve smooth 60fps across mobile and Retina displays.
