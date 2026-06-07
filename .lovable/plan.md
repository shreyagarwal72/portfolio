## Remove the test page

Tear out the KameHouse test page and all wiring so the route 404s cleanly.

### Changes

1. **Delete** `src/pages/Test.tsx`.
2. **`src/App.tsx`** — remove three things:
   - The `const Test = lazy(() => import("./pages/Test"));` import.
   - `'/test'` from the `is404` valid-routes array.
   - The `<Route path="/test" element={<Test />} />` route.
3. **`index.html`** — remove the `MedievalSharp` Google Fonts `<link>` that was added only for the test page (the existing Inter preload stays).

### Result
Navigating to `/test` falls through to the custom 404 page. No other pages, fonts, or styles are affected.