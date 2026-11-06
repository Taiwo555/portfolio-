# Portfolio

A one-page portfolio built with React 19, TypeScript and Vite. No UI library, no CSS
framework, no runtime dependencies beyond React.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck, then build to dist/
npm run preview    # serve the production build
```

`npm run build` runs `tsc --noEmit` first, so a type error fails the build.

## Structure

```
index.html          document shell, meta tags, theme bootstrap
src/main.tsx        mount point
src/App.tsx         page composition and section tracking
src/data.tsx        all copy and project data in one place
src/components/     Header, Hero, Work, Sections (Approach + Skills), Contact
src/hooks/          theme, reveal-on-scroll, active-section
src/styles.css      design tokens, layout, themes, print styles
public/             favicon, social card, CV
```

Copy lives in `src/data.tsx` — the components render it, so wording changes do not
require touching JSX.

## Notes

- **Two themes.** Dark is the default; the light palette is defined for both an explicit
  toggle and `prefers-color-scheme`, with an inline script in `index.html` that applies the
  stored choice before first paint so the page does not flash.
- **Motion is optional.** Reveal-on-scroll is skipped entirely under
  `prefers-reduced-motion`, and content is visible with JavaScript disabled.
- **No hidden numbers.** The figures on the page are the measured ones from the binlens and
  Northbank repositories.
