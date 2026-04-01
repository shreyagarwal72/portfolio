

# Plan: Clone MoncyDev Portfolio Elements into Home Page

## What MoncyDev's Portfolio Has

After analyzing the full source code, the site features:
1. **3D animated character** sitting at a desk, whose head follows the mouse cursor (loaded from an encrypted `.glb` model -- we cannot use this exact model)
2. **Physics-based TechStack section** -- bouncing 3D spheres with tech logos that react to mouse pointer, using `@react-three/rapier`
3. **Big bold landing typography** with GSAP split-text line reveal animations
4. **Animated glowing gradient circles** (pink/purple blurred orbs) as background decoration
5. **Interactive "What I Do" cards** that expand/collapse on hover with flicker animation
6. **Loading screen** with progress bar and scrolling marquee text
7. **GSAP ScrollTrigger** for scroll-based section reveals

## What We'll Build (Adapted to Your Site)

Since the 3D character model is encrypted and proprietary, we'll use a free alternative. Everything else gets cloned and adapted.

### 1. Interactive 3D Hero Scene (replaces current Floating3D)

**New component: `src/components/Hero3DScene.tsx`**
- Replace the simple distort sphere with an interactive scene containing:
  - Multiple floating geometric shapes (icosahedron, torus, octahedron) with glassmorphism materials
  - **Mouse-following behavior**: shapes gently rotate/drift toward the cursor position (like the character's head tracking)
  - Soft ambient lighting with a colored point light that follows the mouse
  - Post-processing bloom/glow effect for the Moncy-style aesthetic
- Uses existing `@react-three/fiber` and `@react-three/drei` (already installed)
- Lazy-loaded, desktop-only (skip on mobile for performance)

### 2. Physics TechStack Section

**New component: `src/components/PhysicsTechStack.tsx`**
- Install `@react-three/rapier` for physics
- 20-30 bouncing spheres with your skill icons (Premiere Pro, After Effects, FL Studio, Minecraft, etc.) mapped as textures
- Mouse pointer acts as a kinematic rigid body that pushes spheres apart
- Spheres have gravity pulling them toward center, creating a satisfying cluster effect
- Title "MY SKILLS" overlaid on top
- Activated only when scrolled into view (performance optimization)
- Add skill icon images to `public/images/` (webp format)

### 3. Glowing Background Circles

**New component: `src/components/GlowingCircles.tsx`**
- Two animated gradient orbs (pink/purple blur) positioned at top-left and mid-right
- CSS-only: `filter: blur(60px)`, rotating animation via `@keyframes`
- Fixed position, z-index behind content
- Adds the moody atmospheric feel from MoncyDev

### 4. GSAP Split-Text Hero Animation

**Modify: `src/components/Hero.tsx`**
- Replace Framer Motion character reveal with GSAP-powered split-line animation
- Each line of text slides up from behind a clipping mask (the `split-line` / `overflow: hidden` pattern from MoncyDev)
- Add the large, bold typography style: `calc(4vw + 25px)` responsive sizing
- Add "Hello! I'm" subtitle above the name (smaller, italic)
- Keep the rotating roles subtitle but animate with GSAP instead of Framer

### 5. "What I Do" Expandable Cards Section

**New component: `src/components/WhatIDo.tsx`**
- Two cards side by side: "VIDEO EDITING" and "MUSIC PRODUCTION"
- Hover/click to expand (desktop hover, mobile tap)
- Expanded state shows description + skill tags with a flicker-in animation
- Sibling card shrinks when one expands
- CSS-driven transitions (no heavy JS)

### 6. Enhanced Scroll Animations (Index.tsx)

**Modify: `src/pages/Index.tsx`**
- Add GSAP ScrollTrigger for section reveal animations (text lines sliding up from clipping masks)
- Replace Framer Motion `whileInView` with GSAP for consistency with the Moncy style
- Staggered reveals on all section headings

## Section Order on Home Page

```text
1. Hero (3D scene + GSAP split-text + glowing circles)
2. Video Showreel (existing)
3. What I Do (new expandable cards)
4. Physics TechStack (new bouncing spheres)
5. Achievements (existing, with GSAP scroll reveals)
6. Clients (existing)
7. Testimonials (existing)
8. CTA (existing)
```

## Files to Create
| File | Purpose |
|------|---------|
| `src/components/Hero3DScene.tsx` | Interactive mouse-following 3D shapes |
| `src/components/PhysicsTechStack.tsx` | Physics bouncing skill spheres |
| `src/components/GlowingCircles.tsx` | Animated gradient orb backgrounds |
| `src/components/WhatIDo.tsx` | Expandable skill cards |
| `src/components/WhatIDo.css` | Styles for expandable cards |

## Files to Modify
| File | Changes |
|------|---------|
| `src/components/Hero.tsx` | GSAP split-text animation, integrate Hero3DScene, add glowing circles |
| `src/pages/Index.tsx` | Add WhatIDo + PhysicsTechStack sections, GSAP ScrollTrigger |
| `src/components/Floating3D.tsx` | May be replaced by Hero3DScene |

## Dependencies to Install
| Package | Purpose |
|---------|---------|
| `@react-three/rapier@^1.5.0` | Physics engine for TechStack spheres |
| `@react-three/postprocessing@^2.16.3` | Bloom/glow effects for 3D scenes |

## Important Notes
- The original 3D character model is encrypted and cannot be reused. The interactive geometric shapes scene will provide a similar "wow factor" with mouse tracking.
- Skill icon images (8-10 webp files) will need to be added to `public/images/` for the physics spheres. We'll use simple colored spheres with text labels as a fallback.
- All new 3D components will be lazy-loaded and desktop-only to maintain mobile performance.

