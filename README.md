# San Antonio Decking Pros

Marketing website for a San Antonio, TX deck building and repair business.

## Tech Stack

- React 19 + TypeScript
- Vite 6
- React Router v7 (lazy-loaded routes with Suspense)
- Tailwind CSS 3
- Framer Motion (FAQ accordion animations)
- Supabase JS client (contact form submissions)

## Getting Started

```bash
npm install
cp .env.example .env   # fill in your Supabase project URL + anon key
npm run dev
```

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check and build for production
- `npm run lint` — run oxlint
- `npm run preview` — preview the production build locally

## Supabase

The contact form (`/free-estimate-san-antonio`) inserts into a `contact_submissions`
table. The schema migration lives in `supabase/migrations/`. Apply it to your
Supabase project, then set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env`.

## Project Structure

- `src/components/` — shared UI components (Header, Footer, PageMeta, PageHero, FaqAccordion, etc.)
- `src/pages/` — route-level pages, including `pages/services/` and `pages/serviceAreas/`
- `src/data/` — business info, services, service areas, and blog post content
- `src/hooks/` — `useFadeUp` scroll-in animation hook, `useClickOutside`
- `src/lib/` — Supabase client and JSON-LD schema helpers
