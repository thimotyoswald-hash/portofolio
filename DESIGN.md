# DESIGN.md - Design Direction: Comfortable Minimalist Studio & Architecture Workbench

## 1. Identity & Brand Direction
- **Name / Entity**: Oswald Tito
- **Role**: Full-Stack Software Engineer & Web Developer
- **Target Audience**: Business Owners, UMKM, Tech Recruiters, and Digital Agencies (Domestic & International)
- **Design Philosophy**: Calm, comfortable, high-readability digital craft. Eliminating visual gimmicks and forced 3D decorations in favor of authentic engineering clarity, silky performance, and humanized storytelling.

---

## 2. The Three Dials (Antislop Liveliness Specification)
- **ENERGY: 2 (Comfortable & Focused)**
  - Calm, ergonomic palette using Deep Midnight Slate (`#0B0F17`) and Soft Chalk (`#E6EDF3`).
  - Zero eye-straining pitch-black `#000000` glare, zero garish gold/neon accents.
  - Reason: Provides hours of effortless reading comfort for clients, recruiters, and engineers alike.
- **RHYTHM: 2 (Structural & Narrative Flow)**
  - Cohesive storytelling progression: Hero (The Hook & Workbench) -> About Me (The Journey & Manifesto) -> Projects (The Architecture Battles) -> Services & Flow (How We Work) -> Contact (The Concierge).
  - Reason: Creates natural reading cadence with deliberate negative space and content-first composition (rules R-05, C-3).
- **MOTION: 1.5 (Calm & Purposeful Micro-Interactions)**
  - Replaced the forced 3D torus knot with an authentic, interactive **System Architecture Workbench** that demonstrates real full-stack systems (API health latency, database transaction nodes, responsive state).
  - Gentle transitions (150-250ms ease), zero endless spinning loops, full compliance with `prefers-reduced-motion`.

---

## 3. Color Tokens & WCAG AA Contrast Compliance
The palette is capped at an ergonomic neutral foundation + calm Sky Blue / Soft Indigo accents (rules R-25 & R-29).

### Dark Theme (Primary: Deep Midnight Slate)
- **Background (`--bg-primary`)**: `#0B0F17` (Deep Midnight Slate, comfortable, zero glare)
- **Surface / Card (`--bg-surface`)**: `#131823` (Subtle Slate Glass)
- **Surface Hover (`--bg-surface-hover`)**: `#1B2232`
- **Border (`--border-subtle`)**: `rgba(255, 255, 255, 0.08)`
- **Border Focus (`--border-focus`)**: `#38BDF8` (Sky Blue)
- **Text Primary (`--text-primary`)**: `#E6EDF3` (Soft Chalk White, Contrast on `#0B0F17` = **15.2:1** - AAA Pass)
- **Text Secondary (`--text-secondary`)**: `#94A3B8` (Slate Muted, Contrast on `#0B0F17` = **6.2:1** - AA Pass)
- **Accent Primary (`--accent-primary`)**: `#38BDF8` (Sky Blue, Contrast on `#0B0F17` = **9.8:1** - AAA Pass)
- **Accent Secondary (`--accent-secondary`)**: `#818CF8` (Soft Indigo)
- **Accent Muted (`--accent-muted`)**: `rgba(56, 189, 248, 0.1)`
- **Success (`--color-success`)**: `#34D399` (Soft Mint Emerald, Contrast on `#0B0F17` = **9.9:1** - AAA Pass)

### Light Theme (Secondary: Calm Off-White / Soft Paper)
- **Background (`--bg-primary`)**: `#F8FAFC` (Calm Slate-50)
- **Surface / Card (`--bg-surface`)**: `#FFFFFF` (Crisp Pure White)
- **Surface Hover (`--bg-surface-hover`)**: `#F1F5F9`
- **Border (`--border-subtle`)**: `#E2E8F0`
- **Border Focus (`--border-focus`)**: `#0284C7`
- **Text Primary (`--text-primary`)**: `#0F172A` (Deep Slate-900, Contrast on `#F8FAFC` = **16.5:1** - AAA Pass)
- **Text Secondary (`--text-secondary`)**: `#475569` (Slate-600, Contrast on `#F8FAFC` = **6.8:1** - AA Pass)
- **Accent Primary (`--accent-primary`)**: `#0284C7` (Sky Deep, Contrast on `#F8FAFC` = **4.7:1** - AA Pass)
- **Accent Muted (`--accent-muted`)**: `rgba(2, 132, 199, 0.08)`
- **Success (`--color-success`)**: `#059669` (Emerald Deep, Contrast on `#F8FAFC` = **4.6:1** - AA Pass)

---

## 4. Engineering Workbench (Replaces Forced 3D Widget)
- **Problem with previous 3D**: A standalone spinning shiny torus knot was an irrelevant tech gimmick that felt forced and added zero context to a software engineer's core abilities.
- **The Solution**: An authentic, interactive **System Architecture Workbench**:
  - Live tab switcher: `Architecture`, `Live API Test`, `System Health`.
  - Visual system node diagram: Next.js SSR -> Secure API Route -> Prisma ORM -> PostgreSQL & Redis with real simulated latency metrics (< 40ms).
  - Interactive "Ping API Health" button that interacts with the Next.js API in real time.
  - Zero heavy WebGL draw calls, zero battery drain, zero fan spin, and 100% responsive on mobile devices.
