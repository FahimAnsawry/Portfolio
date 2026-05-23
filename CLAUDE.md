# CLAUDE.md

This file provides guidance toClaude (claude.ai/code) when working withcode in this repository.

## Commands

```bash
npm run dev# Start dev server (Vite, localhost:5173)
npm run build    # Productionbuild → dist/
npm run preview  # Preview production build locally
npm run lint     # ESLint
```

No test suite is configured.

## Stack

- **Vite** + **React** (JSX, no TypeScript)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin — configured entirelyin `src/index.css` using `@theme {}` blocks, **not** `tailwind.config.js`
- **Framer Motion** for animations
- **React Router v6** for client-side routing
- **react-icons** for all icons (fi, lu, si, vsc prefixes)

## Architecture

`src/App.jsx` sets up the router shell: `<Navbar>`, `<main>` with `<Routes>`, and `<Footer>`. Three pagesexist: `Home`, `AboutPage`, `ProjectsPage`.

**Pages** (`src/pages/`) are thin —they compose section components from `src/components/`. `Home` renders `<Hero>`, `<Projects>`, `<Contact>`. `AboutPage` renders `<About>`, `<Skills>`.`ProjectsPage` renders `<Projects>`.

**Theme** is managed via `src/context/ThemeContext.jsx`, toggling `html.dark` / `html.light` class. CSS variables for all colors are defined in `src/index.css` under `html.dark` and `html.light` blocks.Always use `var(--color-*)` tokens, never hardcode colors (except inside component-specific inline styles that reference theme tokens).

**Styling pattern**: Tailwind utility classes for layout/spacing,inline `style={{}}` props for anything that must referenceCSS variables at runtime. Custom interactive states (`.btn-hire`, `.btn-resume`, `.chip-btn`, `.chip-btn-primary`, `.modal-close`) are defined as globalclasses in `src/index.css` `@layer base`.

**Project data** lives directly inside `src/components/Projects.jsx` asa `PROJECTS` constant — no separate data file.

**Custom icon**: `src/components/icons/AntigravityIcon.jsx` — acustom SVG component used in the Skills section.

**Assets**: `src/assets/` for images imported into components; `public/` for files referencedby path (e.g. `/projects/ai-bridge.png`, `/resume.pdf`).
