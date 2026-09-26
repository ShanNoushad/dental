# Luma Dental — Next.js demo

Premium dental clinic landing page built with Next.js, TypeScript, CSS and GSAP ScrollTrigger.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Main effect

The hero is pinned while scrolling. The stained/yellow tooth fades and scales away while the clean white tooth fades in. The hero copy transitions from the introduction to the result state.

## Replace demo content

- `public/images/tooth-before.png` — first generated tooth image
- `public/images/tooth-after.png` — second generated tooth image
- `src/components/*` — content and sections
- `src/app/globals.css` — all visual styling

The booking form is intentionally a front-end demo. Connect it to your preferred API, Firebase, Supabase, or booking service when ready.
