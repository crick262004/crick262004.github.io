# Arnav Gupta — Portfolio

One-page portfolio built with **Astro + Tailwind CSS v4**, deployed on **GitHub Pages**.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → dist/
```

## Deploy to GitHub Pages

1. Create a GitHub repo named exactly `crick262004.github.io` (user site — serves at the root URL).
2. Push this project to it:
   ```bash
   git remote add origin git@github.com:crick262004/crick262004.github.io.git
   git push -u origin main
   ```
3. Repo **Settings → Pages → Source: GitHub Actions** (the workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`).
4. Live at `https://crick262004.github.io` in ~2 minutes.

## Custom domain (arnavgupta.me — free 1st year via GitHub Student Pack → Namecheap)

1. Buy/claim the domain in Namecheap (Student Developer Pack benefit).
2. Namecheap DNS → add records:
   - `A` `@` → `185.199.108.153` (plus `.109.`, `.110.`, `.111.` — four A records)
   - `CNAME` `www` → `crick262004.github.io`
3. `echo "arnavgupta.me" > public/CNAME` in this repo, commit + push.
4. Repo Settings → Pages → Custom domain → `arnavgupta.me` → enforce HTTPS.

## Before going live

- Replace the resume Drive link placeholder in `src/pages/index.astro` (`resumeUrl`).
