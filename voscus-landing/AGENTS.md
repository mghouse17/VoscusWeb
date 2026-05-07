# AGENTS.md

## Purpose
This file helps AI coding agents understand the Voscus landing page repository and work productively without guessing project structure.

## Project type
- Next.js 14 landing page
- React 18 with Tailwind CSS
- No backend/API routes in this repository
- Main application content is in `voscus-landing.jsx` and `pages/index.js`

## Key files
- `package.json` — scripts and dependencies
- `pages/index.js` — Next.js entry point for the homepage
- `pages/_app.js` — application wrapper for shared styles
- `voscus-landing.jsx` — main landing page component and demo scenario content
- `styles/globals.css` — global Tailwind and base styling
- `tailwind.config.js` — theme colors and design tokens
- `next.config.js` — Next.js configuration

## Recommended commands
Use these commands for local development and verification:
- `npm install`
- `npm run dev`
- `npm run build`
- `npm start`
- `npm run lint`

## Editing guidance
- Keep UI changes within `voscus-landing.jsx` unless adding a reusable component.
- If adding new components, create a `components/` folder and import them from `pages/index.js` or `voscus-landing.jsx`.
- Preserve the existing Tailwind-based styling approach. Prefer Tailwind utility classes over custom CSS where possible.
- Do not introduce a backend or API routes unless a new repo section is explicitly requested.

## Conventions
- Content and demo data are defined in React component state/objects inside `voscus-landing.jsx`.
- The page is optimized for a landing page with static content and responsive sections.
- Keep hero, feature, and demo copy concise and visually structured.

## Documentation links
- `README.md` — repository overview and deployment guidance
- `QUICK_START.md` — quick local setup steps
- `PROJECT_OVERVIEW.md` — feature summary and design highlights
- `DESIGN_GUIDE.md` — design system and visual guidelines

## Notes for AI agents
- Focus on frontend markup, layout, and copy improvements.
- Avoid assuming this repository includes authentication, database, or server-side business logic.
- If asked to add new functionality, verify whether it must remain purely static or if new project structure is allowed.
