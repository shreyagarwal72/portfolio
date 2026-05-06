# Cinematic Dark Portfolio Redesign

Adopt the reference design system (dark cinematic, bold white display type, electric blue accent, pill buttons, slim sliders, vertical timeline) site-wide. Replace the broken Playful Geometric light theme with this same system applied as a clean, properly-contrasted light variant.

## Design tokens (src/index.css)

Replace existing CSS variables for both `:root` (light) and `.dark`:

- Dark (default):
  - `--background`: 220 13% 7% (near-black #0E1116)
  - `--foreground`: 0 0% 98%
  - `--card`: 220 13% 10%
  - `--muted`: 220 10% 16%
  - `--muted-foreground`: 220 9% 65%
  - `--border`: 220 10% 18%
  - `--primary`: 211 82% 64% (electric blue ~#5B9FED)
  - `--primary-foreground`: 0 0% 100%
  - `--accent`: 211 82% 64%
  - `--ring`: 211 82% 64%
- Light (replaces Playful Geometric, keeps same accent for consistency):
  - `--background`: 0 0% 98%
  - `--foreground`: 220 13% 10%
  - `--card`: 0 0% 100%
  - `--muted`: 220 14% 94%
  - `--muted-foreground`: 220 9% 35%
  - `--border`: 220 13% 88%
  - `--primary`: 211 82% 52%
  - `--accent`: 211 82% 52%

Remove `.btn-candy`, `.card-sticker`, geometric pinks/purples from light overrides. Update `mem://design/playful-geometric-system` and related light-theme memories to reflect this replacement.

## Typography

- Headings: keep `Outfit` but push weights up (font-weight 800–900, tight tracking `-0.02em`, very large display sizes for hero — `clamp(3rem, 9vw, 8rem)`).
- Body: keep `Plus Jakarta Sans`.
- Add small uppercase eyebrow utility `.eyebrow` (12px, tracking-widest, muted).

## Reusable primitives

- `.btn-pill` — outline pill button, transparent bg, 1px border, full rounded, uppercase 12px label, hover fills with primary.
- `.btn-pill-solid` — primary fill variant for CTA.
- `.skill-slider` — horizontal track with filled bar + dot terminator (used in Skills).
- `.timeline-node` — circular blue node with year-range label for Experience timeline.
- `.section-shell` — full-bleed dark section with generous vertical padding (`py-24 md:py-32`), max-w-7xl content.

## Page-by-page application

1. **Hero (`src/components/Hero.tsx`)** — Dark cinematic hero matching reference: huge "VANSHU AGARWAL" stacked display type left-aligned, subtitle "Creator · Developer · Class 12" beneath, two pill buttons (`Resume`, `Portfolio`), social row at bottom. Right side: cinematic photo/visual (use existing profile photo with vignette + subtle blue rim light overlay). Remove busy gradients.
2. **About (`src/pages/About.tsx`)** — Two-column: left content (eyebrow "ABOUT", short bio paragraph, location line with thin blue divider), right large grayscale-tinted portrait. Black background.
3. **Skills (`src/pages/Skills.tsx`)** — Three-column layout mirroring reference:
  - Col 1: "SOFTWARE SKILLS" with icon + name + slider per skill; "LANGUAGES" sliders; "PERSONAL SKILLS" tag list.
  - Col 2: "EXPERIENCE" vertical timeline with blue circular year nodes; "EDUCATION" block.
  - Col 3: "WHAT CAN I DO?", "DESIGN SKILLS", "HOBBIES & INTERESTS" with mono-line icons.
   Replace bouncing physics spheres on this page (keep rapier import only if used elsewhere; otherwise remove from this page).
4. **Portfolio (`src/pages/Portfolio.tsx`)** — Dark grid of project cards with thin border, large preview image, title + tag row, hover lifts and reveals blue underline. Keep existing Zola live preview + Orbital World.
5. **Articles, Process, YouTube, VanshuBot, Contact, FAQ, CV, Privacy, Terms** — Apply `section-shell`, eyebrow + display heading pattern, swap any colored card backgrounds for `bg-card border-border`, convert primary CTAs to `.btn-pill-solid`, secondary to `.btn-pill`. No structural removals.
6. **Index (`src/pages/Index.tsx`)** — Re-spaced with new section shells; "Trusted by Amazing Creators" alignment fixed by switching to a single flex-row with even gap and proper vertical centering.
7. **Footer (`src/components/Footer.tsx`)** — Slimmer dark footer, thin top border, 3-column (brand+tagline / links / socials+newsletter), small uppercase labels.
8. **Navigation (`src/components/Navigation.tsx`)** — Keep current structure; restyle: transparent over-hero with backdrop blur on scroll, replace "Let's Talk" button with `.btn-pill-solid`, active link gets thin underline instead of filled chip to match reference.
9. **404 (`src/pages/NotFound.tsx`)** — Keep current Dribbble layout (already approved); only ensure it remains standalone (no nav/footer).

## Components affected

- New: `src/components/ui/PillButton.tsx`, `src/components/ui/SkillSlider.tsx`, `src/components/ui/TimelineItem.tsx`, `src/components/ui/SectionShell.tsx`, `src/components/ui/Eyebrow.tsx`.
- Edited: Hero, Navigation, Footer, Index, About, Skills, Portfolio, Articles, ProcessWorkflow, YouTube, VanshuBot, Contact, FAQ, cv, PrivacyPolicy, TermsAndConditions, ThemeToggle (just color refresh), index.css, tailwind.config.ts (add font-weight + spacing tokens if needed).

## Out of scope

- No content/copy changes beyond what's needed to fit the new structure.
- No removal of existing features (Plyr videos, VanshuBot, easter egg, PWA, intro, magnetic cursor, squid loader all stay).
- 404 page layout untouched.

## Memory updates after build

- Update `mem://design/ios26-liquid-glass-aesthetic` → mark superseded by new "Cinematic Dark" system; replace details (electric blue #5B9FED, dark #0E1116, pill buttons, slider/timeline primitives).
- Update `mem://design/playful-geometric-system`, `mem://ui/playful-geometric-components`, `mem://design/typography-geometric` → replaced by new light variant of cinematic system.
- Update Core in `mem://index.md`: default theme is dark, aesthetic is "Cinematic Dark Portfolio", accent #5B9FED.

## QA after implementation

Visit `/`, `/about`, `/portfolio`, `/skills`, `/articles`, `/process`, `/youtube`, `/vanshu-bot`, `/contact`, `/faq`, `/cv`, `/test404` in both light and dark modes at desktop (1440) and mobile (360) viewports. Verify: no overlapping elements, contrast passes, pill buttons consistent, sliders/timeline render correctly, navigation transitions smooth.

Verify that all @here_your_champion social URLs and icons render correctly on both mobile and desktop and remove any leftover old handles.

Also add PWA support , update sitemap, README etc , also from now there will be only 2 themes 1st dark which is old dark mode one , 2nd new dark  , remove the old light theme