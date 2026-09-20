# Arnav Gupta — Portfolio

One-page portfolio built with **Astro + Tailwind CSS v4**, deployed on **GitHub Pages**.

**Live at [arnavgupta.me](https://arnavgupta.me)** (`crick262004.github.io` redirects there).

## Local development

Requires **Node 20.19+** (Astro 5 refuses to build on older versions — the native
bundler binary is skipped at install time and the error misleadingly blames npm).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → dist/
```

## Deploy to GitHub Pages

1. Create a GitHub repo named exactly `crick262004.github.io` (user site — serves at the root URL).
2. Push this project to it:
   ```bash
   git remote add origin https://github.com/crick262004/crick262004.github.io.git
   git push -u origin main
   ```
3. Repo **Settings → Pages → Source: GitHub Actions** (the workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`).
4. Live at `https://crick262004.github.io` in ~2 minutes.

## Custom domain (arnavgupta.me — free 1st year via GitHub Student Pack → Namecheap)

Already set up — recorded here in case it ever needs redoing.

1. Claim the domain in Namecheap (Student Developer Pack benefit).
2. Namecheap → Advanced DNS → remove the default parking records, then add:
   - `A` `@` → `185.199.108.153` (plus `.109.`, `.110.`, `.111.` — four A records)
   - `CNAME` `www` → `crick262004.github.io.`
3. In this repo, two files must agree on the domain:
   - `public/CNAME` contains `arnavgupta.me` (Astro copies it into `dist/`)
   - `astro.config.mjs` sets `site: 'https://arnavgupta.me'` — used for canonical
     links, `og:url` and sitemaps, so a stale value here ships wrong absolute URLs

   Commit and push both.
4. Repo Settings → Pages → Custom domain → `arnavgupta.me` → Save, then tick
   **Enforce HTTPS** once the certificate is issued (greyed out until then).

DNS propagation takes 10 minutes to a few hours. Check with `dig +short arnavgupta.me`
— four `185.199.*` addresses means it is ready.
