# TONX Grip Website

A first-look website for TONX grip socks, built by Tonbridgians for Tonbridgians.
The site is still under development. The homepage introduces the product with a
scroll-driven problem section, product explainer, video, purchase call to action,
and FAQ.

## Pages

- `/` — Homepage
- `/about` — About page (under construction)
- `/contact` — Contact page (under construction)
- `/privacy` — Privacy page (under construction)

The three unfinished pages use a shared placeholder with navigation back home.

## Tech and Code Map

- Next.js 16 App Router, React 19, and TypeScript
- Tailwind CSS 4 for styling
- GSAP and `@gsap/react` for the pinned scroll animation and progress bar
- `src/app/page.tsx` — Homepage sections and scroll animation
- `src/app/MinimalYoutubePlayer.tsx` — YouTube iframe player and playback controls
- `src/app/UnderConstructionPage.tsx` — Shared placeholder page
- `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/privacy/page.tsx` — Route pages
- `public/` — Product and campaign images

The homepage video is served by YouTube and needs an internet connection in the
visitor's browser. No project-specific environment variables are currently
required.

## Requirements

- Node.js 20.9 or later
- npm

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify

```bash
npm run lint
npm run build
```

## Deploy

The project can be deployed to Vercel or another host that supports Next.js 16
and Node.js 20.9 or later. On Vercel, import the GitHub repository and keep the
detected Next.js settings. The production build command is `npm run build`; no
custom output directory or environment variables are needed at this stage.

To run the production build locally:

```bash
npm run build
npm run start
```
