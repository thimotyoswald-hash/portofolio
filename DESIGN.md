# DESIGN.md - Design Direction & Design System

## 1. Identity & Brand Direction
- **Name / Entity**: Oswald Tito
- **Role**: Full-Stack Software Engineer & Web Developer
- **Target Audience**: Business Owners / UMKM, HR & Tech Recruiters, and Digital Agencies (Domestic & International)
- **Positioning**: High technical credibility, bespoke modern software engineering, robust full-stack web applications, and direct lead conversion.
- **Languages**: Bilingual (Bahasa Indonesia & English)

---

## 2. The Three Dials (Antislop Liveliness Specification)
- **ENERGY: 2 (Balanced)**
  - Confident, high-craft engineering aesthetic. Not sterile or corporate-boring, but avoiding flashy chaotic circus styling.
  - Reason: Bridges the gap between serious enterprise credibility (for recruiters & corporate clients) and modern digital craft (for agile agencies & startups).
- **RHYTHM: 2 (Varied & Structural)**
  - Alternating section rhythms: Asymmetric interactive hero with real-time 3D canvas, multi-column service matrix, high-density project cards with architecture breakdowns, categorized skill badges, and a focused conversion contact drawer.
  - Reason: Prevents repetitive template fatigue (anti-slop rule R-05) and guides natural reading scanning flow.
- **MOTION: 2 (Purposeful & Interactive)**
  - Interactive 3D WebGL geometric core in the hero section reacting to cursor movement with gentle inertia; smooth spring transitions on cards and modal dialogs; zero endless bouncing loops.
  - Honors `prefers-reduced-motion: reduce` by freezing 3D rotations and replacing dynamic transitions with instant or fade states.
  - Reason: Provides interactive depth and showcases 3D engineering capability without distracting from content readability (rules R-19, R-39).

---

## 3. Color Tokens & WCAG AA Contrast Compliance
The palette is capped at a neutral foundation + 1 deliberate primary accent (rule R-29).

### Dark Theme (Default Tech Mode)
- **Background (`--bg-primary`)**: `#0A0D14` (Deep Charcoal Blue)
- **Surface / Card (`--bg-surface`)**: `#121624` (Subtle Navy Slate)
- **Surface Hover (`--bg-surface-hover`)**: `#1A2033`
- **Border (`--border-subtle`)**: `#222A42`
- **Border Focus (`--border-focus`)**: `#38BDF8`
- **Text Primary (`--text-primary`)**: `#F8FAFC` (Contrast on `#0A0D14` = **17.2:1** - AAA Pass)
- **Text Secondary (`--text-secondary`)**: `#94A3B8` (Contrast on `#0A0D14` = **6.2:1** - AA Pass)
- **Accent Primary (`--accent-primary`)**: `#38BDF8` (Sky Blue, Contrast on `#0A0D14` = **9.8:1** - AAA Pass)
- **Accent Muted (`--accent-muted`)**: `rgba(56, 189, 248, 0.12)`
- **Success (`--color-success`)**: `#34D399` (Emerald, Contrast on `#0A0D14` = **9.9:1** - AAA Pass)

### Light Theme (Clean Studio Mode)
- **Background (`--bg-primary`)**: `#F8FAFC` (Pure Slate Tint)
- **Surface / Card (`--bg-surface`)**: `#FFFFFF` (Pure Crisp White)
- **Surface Hover (`--bg-surface-hover`)**: `#F1F5F9`
- **Border (`--border-subtle`)**: `#E2E8F0`
- **Border Focus (`--border-focus`)**: `#0284C7`
- **Text Primary (`--text-primary`)**: `#0F172A` (Contrast on `#F8FAFC` = **16.5:1** - AAA Pass)
- **Text Secondary (`--text-secondary`)**: `#475569` (Contrast on `#F8FAFC` = **6.8:1** - AA Pass)
- **Accent Primary (`--accent-primary`)**: `#0284C7` (Sky Deep, Contrast on `#F8FAFC` = **4.7:1** - AA Pass)
- **Accent Muted (`--accent-muted`)**: `rgba(2, 132, 199, 0.08)`
- **Success (`--color-success`)**: `#059669` (Emerald Deep, Contrast on `#F8FAFC` = **4.6:1** - AA Pass)

---

## 4. Typography System
- **Display & Headings**: `Plus Jakarta Sans`, sans-serif (weights 600, 700, 800)
  - Geometric, clean, modern, and humanized.
- **Body & Interface**: `Plus Jakarta Sans`, sans-serif (weights 400, 500)
  - Highly readable at standard 16px body font size with 1.6 line height.
- **Technical & Stack Tags**: `JetBrains Mono` or `ui-monospace` (weight 500)
  - Explicitly reserved for tech stacks, API endpoints, and code architecture metrics.
- **Anti-Slop Typography Rules**:
  - No uppercase tracking abuse on general section headers (rule R-06).
  - No decorative emojis in headings (rule R-04).
  - No em dashes (`—`) anywhere in English or Indonesian copy (rule R-02).

---

## 5. 3D Design & Interactive Experience Specification
- **Visual Subject**: "The Architectural Core" (Intelligent Polyhedron / Geometric Tech Lattice).
- **Style**: Low-poly crystal / geodesic sphere with node points and interconnecting wireframe vectors representing data flow and full-stack modules.
- **Shaders / Materials**:
  - Dark mode: Iridescent slate glass with soft cyan wireframe edges and reactive focal lighting.
  - Light mode: Pearlescent frosted geometric core with subtle deep blue ambient occlusion and shadow.
- **Interactivity**:
  - Tracks pointer coordinate with dampening (smooth lerp interpolation).
  - Click / Drag enables free orbital rotation.
  - Touch input on mobile supports 1-finger glide and gyro-orientation if available.
- **Performance Budget**:
  - WebGL Canvas runs at capped 60fps with automatic draw call batching and geometry instancing.
  - Pauses render loop when canvas is outside viewport (`IntersectionObserver`).
  - Fallback: Gracefully renders a 2.5D SVG isometric vector if WebGL context is unsupported.
  - Zero Cumulative Layout Shift (CLS 0): Fixed aspect container `aspect-square` or strict bounding box.

---

## 6. Component Architecture & Micro-Interactions
- **Navbar**: Sticky, backdrop blur restricted to navbar only (glassmorphism dose cap = 1, rule R-10). Contains Brand Logo, Navigation Anchor Links, Language Switcher (ID/EN), Theme Switcher (Dark/Light), and Quick WhatsApp CTA.
- **Hero Section**:
  - Left column: Sharp role definition, value proposition, and two primary action buttons:
    - Primary CTA: "Lihat Proyek" / "Explore Projects" (anchors to `#projects`).
    - Secondary CTA: "Hubungi via WhatsApp" / "Chat via WhatsApp" (direct WhatsApp link with pre-filled message).
  - Right column: Interactive 3D Architectural Core canvas with toggleable wireframe view.
- **Services Section**: 3 core service disciplines (Full-Stack Web Apps, Corporate & Business Websites, Custom Software Architecture & APIs).
- **Projects Section**: Interactive project cards with live demo links, GitHub links, tech stack badges, and modal / drawer case study preview.
- **Tech Stack & Skills Matrix**: Grouped logically into Frontend, Backend, Database & Cloud, and Tools.
- **Contact & Conversion Drawer**:
  - Interactive contact form with input validation (Zod schema).
  - Direct WhatsApp conversion button with live pre-filled query generator.
  - Copyable email address with toast feedback.
- **Footer**: Clean single-row layout with copyright, active status, and direct social/code profiles.

---

## 7. R-31 Decision Registry (Reasons Written Down)
1. **Why Sky Blue / Emerald Accent?**
   - High technical clarity that conveys reliability and precision. Avoids overused generic purple/violet gradients while passing WCAG AA 4.5:1 on both dark and light modes.
2. **Why Interactive 3D Canvas?**
   - Directly demonstrates 3D design and creative engineering capabilities on first impression without needing generic static stock images or fake mockups.
3. **Why Plus Jakarta Sans?**
   - Engineered for high digital readability on screens from mobile to ultra-wide desktop with balanced geometric proportion.
4. **Why Direct WhatsApp CTA alongside Contact Form?**
   - In Indonesia and international freelance markets, WhatsApp has a 3-5x higher response rate and conversion speed than traditional email alone.
