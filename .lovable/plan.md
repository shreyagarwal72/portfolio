## Goal
Layer in more cinematic 3D elements across the site using the existing `@react-three/fiber` + `drei` stack. Keep performance friendly with low DPR everywhere.

## What gets added

### 1. Hero — scroll-reactive 3D centerpiece (replace current sphere)
- Update `src/components/Floating3D.tsx` to a richer scene:
  - Big distorted **icosahedron** as primary shape, plus a slow-orbiting **torus knot** and a **wireframe ring**.
  - Rotation tied to scroll progress (`useScroll` from framer-motion → passed as prop) so the geometry rotates as the user scrolls the hero.
  - Soft `Environment preset="city"` + bloom-free lighting, theme-aware color (reads `documentElement.classList`).
- Increase opacity in `Hero.tsx` from `0.2` → `0.35` and let it occupy the right half on `lg+` so it reads as a real visual, not just a tint.

### 2. Skills page — interactive 3D skills cloud
- New `src/components/SkillsCloud3D.tsx`:
  - Uses drei `Billboard` + `Text` to render skill names on a sphere (fibonacci distribution).
  - Drag-to-rotate via `OrbitControls` (zoom disabled, autoRotate slow).
  - Pulls the existing skill list from `Skills.tsx`.
- Mount it in the Skills page hero column (desktop: side-by-side with copy; mobile: stacked, height 320px).

### 3. Portfolio & About — hero 3D accents
- New `src/components/AccentShape3D.tsx` (lightweight): a single floating shape (torus knot for Portfolio, distorted box for About) with `Float` + slow auto-rotate.
- Drop into Portfolio header (top-right, absolute, opacity ~0.4) and About hero (next to portrait area, opacity ~0.5).

### 4. More particle backgrounds on dark sections
- Reuse `FloatingParticles` (already lazy) in:
  - **Index CTA** (already there) — keep.
  - **YouTube page** hero — count 25, color `#ef4444`.
  - **Contact page** background — count 30, color `#5B9FED`.
  - **VanshuBot** behind the chat panel — count 20, color `#a855f7`.
- All wrapped in `Suspense` + `pointer-events-none` + low opacity (0.2–0.3).

### 5. Performance (everywhere, low DPR)
- Every `<Canvas>` gets `dpr={[1, 1.5]}` and `frameloop="demand"` where static (Portfolio/About accents).
- Lazy-load every 3D component with `React.lazy` + `Suspense fallback={null}`.
- Skip nothing on mobile per user choice, but particle counts halved under 768px via a `useMobile` check inside each wrapper.

## Files

```text
NEW   src/components/SkillsCloud3D.tsx
NEW   src/components/AccentShape3D.tsx
EDIT  src/components/Floating3D.tsx        # richer scrollable scene
EDIT  src/components/Hero.tsx              # bigger 3D presence, scroll progress
EDIT  src/components/FloatingParticles.tsx # accept dpr prop, mobile count halving
EDIT  src/pages/Skills.tsx                 # mount SkillsCloud3D
EDIT  src/pages/Portfolio.tsx              # mount AccentShape3D
EDIT  src/pages/About.tsx                  # mount AccentShape3D
EDIT  src/pages/YouTube.tsx                # add FloatingParticles bg
EDIT  src/pages/Contact.tsx                # add FloatingParticles bg
EDIT  src/pages/VanshuBot.tsx              # add FloatingParticles bg
```

No new dependencies — `@react-three/fiber`, `drei`, and `three` are already installed.

## Notes
- All colors via existing semantic tokens / current palette (`#5B9FED` primary).
- Theme-aware: 3D materials read `dark` class and switch base color (lighter tint in light theme).
- Respects existing constraints (no testimonials, no extra nav items, no global sound toggle).
