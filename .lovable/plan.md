

# Plan: Copy Sujit Pradhan's Animation Style to Home Page

## What We're Replicating

From sujitpradhan.com, the key animation patterns are:

1. **Hero text reveal**: Title appears with a smooth character-by-character or word-by-word fade-up animation (not all at once)
2. **Rotating subtitle**: The subtitle cycles through different roles with a smooth crossfade/slide transition (e.g., "Product Designer" → "Design Mentor" → "AI & Agentic Experience")
3. **Smooth scroll-triggered sections**: Content fades up cleanly with gentle easing as you scroll — no 3D rotateX/rotateY card tilts, no spring physics bounces
4. **Minimal, elegant transitions**: Slower, more cinematic feel (0.8-1.2s durations) vs the current snappy spring animations
5. **Clean section entrances**: Simple opacity + translateY, no scale transforms or rotation effects on icons/stars

## Changes

### 1. Hero.tsx — Rewrite Animation Style

- **Rotating subtitle**: Add an `AnimatePresence` loop that cycles through roles: "Video Editor", "Gamer", "Musician", "Creative Mind" every ~3 seconds with a slide-up/fade transition
- **Character-by-character title reveal**: Split "VANSHU" and "AGARWAL" into individual characters, animate each with a staggered delay (0.03s per char) using opacity + y transform
- **Slower, cinematic timing**: Change all transition durations from 0.6s to 0.8-1.0s with `ease: [0.25, 0.4, 0.25, 1]` (smooth cubic bezier, similar to Framer's default)
- **Remove background scale animation**: Keep the background image but remove the `scale: 1.1 → 1` entrance — just fade it in
- **Simplify scroll indicator**: Keep it but use a gentler bounce

### 2. Index.tsx — Refine Section Animations

- **Replace spring physics** with smooth easing: Change all `type: 'spring'` transitions to `type: 'tween', ease: [0.25, 0.4, 0.25, 1], duration: 0.8`
- **Remove 3D card hover effects**: Replace `rotateX/rotateY/perspective` hover variants with simple `y: -8, boxShadow` lift
- **Remove icon spin-in animations**: The achievement icons currently rotate -180° on entry — change to simple fade-up
- **Remove star rating spin animations**: Stars currently rotate -180° individually — change to simple staggered fade-in
- **Increase stagger timing**: Change `staggerChildren: 0.1` to `0.15` for a more deliberate reveal
- **Smoother viewport margins**: Use `margin: "-100px"` for earlier trigger so content is already animating when visible

### 3. Shared Animation Constants

Create clean, reusable animation variants at the top of Index.tsx:

```text
smoothEase = [0.25, 0.4, 0.25, 1]

containerVariants: staggerChildren 0.15, delayChildren 0.1
itemVariants: opacity 0→1, y 40→0, duration 0.8, ease smoothEase
cardHover: y 0→-8, shadow increase, duration 0.3
```

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/Hero.tsx` | Add rotating subtitle with AnimatePresence, character-stagger title reveal, smoother easing |
| `src/pages/Index.tsx` | Replace spring animations with smooth tween, remove 3D hover/spin effects, increase stagger |

## What Stays the Same

- All UI components (cards, badges, buttons, sections) remain unchanged
- The 3D Floating background stays (it's lazy-loaded and adds depth)
- ElectricButton and CreepyButton stay
- All content and structure stays identical
- The overall dark theme and color scheme stays

