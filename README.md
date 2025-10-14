# Data Table Libraries — Visual Comparison & Examples (Next.js)

A small Next.js app that compares and showcases basic usage of three popular React data table libraries:

- TanStack Table (headless)
- MUI Data Grid
- Material React Table

The page includes a visual feature comparison and copyable example implementations. The PRD is in `PRD.md`.

## Local development

```sh
cd /Users/anatoly.khalizev/Coding/data-table
npm install
npm run dev
# open http://localhost:3000
```

## Production build

```sh
npm run build
npm start
# open http://localhost:3000
```

## Deploy to Vercel

Vercel auto-detects Next.js projects:

```sh
npm i -g vercel
vercel login
cd /Users/anatoly.khalizev/Coding/data-table
vercel
# after preview
vercel --prod
```

Or connect the GitHub repo in the Vercel dashboard (no extra config needed).

## What’s included

- Visual feature comparison table
- Minimal React code examples (copyable) for each library
- Links to official docs and live examples

## Notes

- Examples are intentionally minimal and not exhaustive of each library’s capabilities.
- Some MUI Data Grid features are part of Pro/Premium commercial tiers — check the MUI documentation.
- Material React Table builds on TanStack Table and Material UI components.
- Updated: Oct 14, 2025

## License

Content here is provided for research and comparison purposes only. Always refer to official documentation for latest details and licensing.
