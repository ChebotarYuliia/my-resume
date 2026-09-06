# Yuliia Chebotar — Resume Site

Personal resume/portfolio site for Yuliia Chebotar, built with the Next.js App Router.

## Stack

- [Next.js](https://nextjs.org) (App Router) + React, TypeScript (strict)
- SCSS modules for styling, [GSAP](https://gsap.com) for scroll/entrance animations
- [next-intl](https://next-intl.dev) for `en`/`ua` locale routing (`src/app/[locale]`)
- [Storybook](https://storybook.js.org) for isolated component development

## Getting started

Requires **Node 24+** (see `.nvmrc` — run `nvm use` to pick it up automatically). This project pins its package manager to **yarn**, so use it rather than npm/pnpm for a reproducible install.

```bash
nvm use
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Start the local dev server |
| `yarn build` | Production build |
| `yarn start` | Serve a production build |
| `yarn lint` | Run ESLint over the project |
| `yarn storybook` | Start Storybook locally |
| `yarn build-storybook` | Build a static Storybook |
| `yarn analyze` | Production build with the bundle analyzer enabled |

## Deploy

No deploy config (e.g. `vercel.json`) is checked into this repo — deployment is presumed to go through Vercel's git-integration dashboard rather than an in-repo pipeline. Confirm with the project owner if you're setting up a new deployment target.
