# Shihang GAO - Academic Homepage

This is a lightweight multilingual academic homepage built with Next.js and
deployed as a static site through GitHub Pages.

Live site:

<https://boatgao.github.io/ShihangGAO/>

## Features

- Clean academic homepage layout
- Left profile panel with portrait, name, affiliation, and contact area
- Sections for About Me, News, Publications, Honors and Awards, Educations,
  Services, and Internships
- Language switcher for English, Japanese, and Chinese
- Static export for GitHub Pages

## Project Structure

```text
app/
  globals.css      Global styling
  layout.tsx       Page metadata and root layout
  page.tsx         Homepage content and language switching
public/
  profile.b64      Portrait image encoded for static hosting
.github/workflows/
  deploy-pages.yml GitHub Pages deployment workflow
```

## Update Content

Most homepage text is in `app/page.tsx`.

The page keeps one content object for each language:

- `en` for English
- `ja` for Japanese
- `zh` for Chinese

When adding or editing a section, update all three languages so the language
switcher remains complete.

## GitHub Pages Deployment

The site is deployed automatically by GitHub Actions.

1. Push changes to the `main` branch.
2. GitHub Actions runs `.github/workflows/deploy-pages.yml`.
3. The workflow installs dependencies with `npm ci`.
4. The workflow runs `npm run build:pages`.
5. The generated static files in `out/` are published to GitHub Pages.

No local server is required for the deployed website.

## Repository Settings

In GitHub, confirm the repository uses GitHub Actions for Pages:

1. Open the repository settings.
2. Go to `Pages`.
3. Set `Build and deployment` source to `GitHub Actions`.

## Commands

Install dependencies only when you want to test or build locally:

```bash
npm install
```

Build the same static version used by GitHub Pages:

```bash
npm run build:pages
```

Optional local preview for editing:

```bash
npm run dev
```

## Keep the Repository Lightweight

Do not commit generated folders:

- `node_modules/`
- `.next/`
- `out/`

These are already excluded by `.gitignore`. GitHub Actions will regenerate them
when deploying the site.
