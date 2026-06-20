# Nathan Bissett — Portfolio

A fast, accessible, single-page portfolio. The site is also a work sample: it's
the cleanest Next.js/React/Tailwind code in the repo, so it's built to be read.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 ·
deployed on Vercel.

## Highlights

- **Server-rendered, near-zero client JS** — static single page, no client
  components.
- **Accessible by default** — semantic landmarks, one `h1`, skip-to-content
  link, visible focus, AA contrast, `prefers-reduced-motion`.
- **No dead links** — links render only when a real URL exists (see
  [`components/ui/LinkButton.tsx`](components/ui/LinkButton.tsx)), so unfinished
  slots never become broken buttons or "coming soon" stubs.
- **Content/presentation split** — all copy lives in one typed file:
  [`content/site.ts`](content/site.ts).

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # production build
```

## Structure

```
app/            layout (metadata, fonts), page (composition), globals.css, icon
components/      one component per section + ui/ primitives + icons
content/site.ts single source of truth for all copy and links
public/          static assets (drop resume.pdf here)
```

## Before publishing — fill these in

Search the repo for `TODO:` (all are in [`content/site.ts`](content/site.ts)
unless noted). Each is something only you can confirm:

- [ ] **Links** — GitHub profile + repo URLs (Tippsy, LolaBees, Cheer),
      LinkedIn. (Links stay hidden until filled.)
- [ ] **Résumé** — add `public/resume.pdf`.
- [ ] **Location** + confirm display name / contact email.
- [ ] **Tippsy** — tighten the product pitch; add 1–2 real build-log decisions;
      add the demo (TestFlight/video) and deployed-backend URLs when ready.
- [ ] **FUH case study** — confirm your role/title, and **confirm with FUH what
      is shareable** before publishing. Keep everything at the architectural
      pattern level (no proprietary code, no client/business specifics).
- [ ] **Metrics** — confirm the TPI-tracer (~60%) and early-rollout (~98%)
      numbers and their attribution.
- [ ] **LolaBees** — sharpen your individual contribution; add the real
      language/cloud to the stack.
- [ ] **Cheer** — add the one-line product purpose; optional demo video.
- [ ] **Deployment URL** — set `NEXT_PUBLIC_SITE_URL` (used for OG metadata).
- [ ] *(optional)* swap the `NB` monogram in [`app/icon.tsx`](app/icon.tsx).

## Deploy (Vercel)

This app lives in the `my-portfolio/` subfolder of the repo. In the Vercel
project settings, set **Root Directory = `my-portfolio`**, and set the
`NEXT_PUBLIC_SITE_URL` environment variable to the deployed URL. Then re-test
every visible link end-to-end.
