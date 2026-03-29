# Anusha Jagari — Portfolio

A responsive single-page developer portfolio built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS v4**. Content is driven from `src/lib/site-config.ts`; the downloadable resume is generated at **`GET /api/resume`** with `@react-pdf/renderer`.

## Run locally

```bash
cd anusha-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Customize

- **Profile, jobs, projects, links:** Edit `src/lib/site-config.ts` (`phone`, `phoneTel` for `tel:` links, LinkedIn, jobs, projects).
- **Resume PDF:** Implemented in `src/lib/resume-pdf.tsx` (summary lines, skill categories, layout). Filename from `getResumeDownloadFilename()`.
- **Dark mode:** `dark` class on `<html>`; preference in `localStorage` under `theme`.

## Features

- Hero, About, Skills, Projects, Experience timeline, Contact, Footer
- Theme toggle with reduced flash on load
- Mobile navigation
- Resume download as PDF
