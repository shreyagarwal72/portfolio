

# Plan: Add Free 3D Anime Character to About Page

Since ReadyPlayerMe is no longer available, I'll use a **free CC0 anime-style GLB model** from a public source instead. There are several free models available on public CDNs (e.g., from the Three.js examples, Sketchfab CC0 models, or KhronosGroup sample models).

## Approach

Use a free stylized character model hosted on a public CDN. Good options:
- **Mixamo animated character** exported as GLB (free from Adobe)
- **Three.js example models** (e.g., the "Soldier" or stylized characters)
- A free anime-style GLB from Sketchfab (CC0 license)

I'll use a publicly hosted anime/stylized character GLB that loads at runtime (no build size impact).

## Implementation

### 1. Create `src/components/Avatar3D.tsx`
- React Three Fiber `Canvas` with `useGLTF` to load a free GLB model from CDN
- `Float` animation for idle bobbing effect
- `OrbitControls` with auto-rotate, zoom disabled
- Proper lighting (ambient + directional + point light for rim)
- Error boundary fallback showing the existing profile photo

### 2. Update `src/pages/About.tsx`
- Lazy-load `Avatar3D` with `React.lazy` + `Suspense`
- Replace the profile image `<figure>` block (lines 116-137) with:
  - 3D canvas (same aspect ratio card with glow effect)
  - Keep the name overlay caption on top
  - Fallback to static profile photo on error or while loading
- On mobile (current viewport is 360px), use a smaller canvas height (~300px)

### 3. Model Source
Use a free public GLB like the Three.js "Soldier" model or similar stylized character from `https://threejs.org/examples/models/` — no account needed, always available.

## Files
| Action | File | Purpose |
|--------|------|---------|
| Create | `src/components/Avatar3D.tsx` | 3D model viewer component |
| Modify | `src/pages/About.tsx` | Replace static image with 3D avatar + fallback |

No new dependencies needed — `@react-three/fiber`, `@react-three/drei`, and `three` are already installed.

