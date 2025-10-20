# Brands Kahani — Static Build (GitHub Pages)

This folder is a ready-to-deploy static site that mirrors the current live site.

## Quick Deploy (gh-pages branch)
1) Initialize git and connect to your repo (run inside this folder):
   ```bash
   git init
   git remote add origin https://github.com/BrandsKahani/brands-kahani.git
   ```

2) Install the deploy tool and publish:
   ```bash
   npm install
   npm run deploy
   ```
   This publishes the *current folder* to the `gh-pages` branch.

## Manual Deploy (without Node)
- Option A: Create/switch to the `gh-pages` branch and push these files.
- Option B: Upload the contents of this zip directly to the `gh-pages` branch in GitHub (via web UI).

## Included
- index.html + /assets (bundled JS/CSS)
- CNAME (brandskahani.com)
- _redirects, robots.txt, sitemap.xml
- favicons & social image (og-image.png)
