# Gourav Murmu · Portfolio

Personal portfolio for Gourav Murmu, risk analyst and builder. A single-page Next.js 14 site, statically exported, styled with Tailwind in a cream and dusty-blue poster style.

## Edit the content

All copy lives in `content/`, so most updates never touch a component:

| File | What it holds |
| --- | --- |
| `content/site.ts` | Name, pitch, links, bio, stats, toolkit, focus areas, build process |
| `content/projects.ts` | Project cards (title, text, tech, repo, live URL, filter categories) and the small GitHub tiles |
| `content/experience.ts` | Roles, automation impact bars, education, extras |

To add a project, add an entry to `projects` in `content/projects.ts`. The `art` field picks one of the illustrations in `components/Art.tsx`.

Assets are in `public/`: `resume.pdf`, `og-image.png` (1200×630 link preview) and the portrait in `public/images/` (`gourav-cutout*.webp` is the background-removed hero cut-out, `gourav*.webp` the framed photo, each at 1x and 2x).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
npm run lint && npm run typecheck
```

## Deploy on Vercel (free)

1. On vercel.com choose **Add New → Project** and import `gouravmurmu/portfoliowebsite`.
2. Leave the defaults (Vercel detects Next.js) and click **Deploy**.
3. Optional: under **Settings → Environment Variables** set `NEXT_PUBLIC_SITE_URL` to the final URL (for example `https://gouravmurmu.vercel.app`) so the canonical URL, sitemap and Open Graph tags point at it, then redeploy.

Every push to `main` redeploys automatically.

Because the build is a plain static export (`out/`), it also works on GitHub Pages or any static host.
