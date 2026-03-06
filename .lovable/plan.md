

# Plan: PWA Support, SEO Fixes, README Update & OG Image Fix

## 1. Full PWA with Offline Support

**Install** `vite-plugin-pwa` and configure it in `vite.config.ts`:
- Register service worker with `registerType: 'autoUpdate'`
- Add `navigateFallbackDenylist: [/^\/~oauth/]` to workbox config
- Runtime caching strategies: CacheFirst for images/fonts, NetworkFirst for API calls
- Precache all app shell assets

**Create** `public/manifest.json`:
- App name, short name, icons (favicon.png at multiple sizes), theme color `#3B82F6`, background `#0f1419`
- `display: "standalone"`, `start_url: "/"`

**Create** `src/components/PWAInstallPrompt.tsx`:
- Listen for `beforeinstallprompt` event
- Show a subtle install banner/button when available

**Update** `index.html`:
- Manifest link already exists, verify meta tags are correct

## 2. Fix OG Image Generator

**Update** `supabase/functions/generate-og-image/index.ts`:
- Change model from `google/gemini-2.5-flash-image` (unsupported) to `google/gemini-3-pro-image-preview`
- Fix the response parsing to match the correct API response format

## 3. SEO Fixes

**Update** `public/sitemap.xml`:
- Fix `/terms-and-conditions` → `/terms` (actual route)
- Add `/faq` page entry
- Update `lastmod` dates to `2026-03-06`

**Update** `public/robots.txt`:
- Remove `/_next/` disallow (not applicable — this is Vite, not Next.js)

**Update** `index.html`:
- Add `<meta name="mobile-web-app-capable" content="yes">` for Android PWA

## 4. Update README

**Update** `README.md`:
- Add PWA section mentioning offline support and installability
- Add FAQ page and Newsletter to the Pages & Features table
- Add Process Workflow page to the table
- Fix markdown formatting (unclosed code block at line 122)
- Update project structure to include new files

## Files to Create
| File | Purpose |
|------|---------|
| `public/manifest.json` | PWA manifest |

## Files to Modify
| File | Changes |
|------|---------|
| `vite.config.ts` | Add vite-plugin-pwa |
| `supabase/functions/generate-og-image/index.ts` | Fix AI model name |
| `public/sitemap.xml` | Fix routes, add FAQ, update dates |
| `public/robots.txt` | Remove Next.js-specific rules |
| `README.md` | Add PWA, FAQ, newsletter, fix formatting |
| `index.html` | Add PWA meta tag |

## Dependencies to Install
- `vite-plugin-pwa`

