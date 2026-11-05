# Puppy Fashion

A free dress-up toy on FreeGameStore: pick a pet (pug, cat, budgie) and try on accessories.

- Subdomain: `Puppy Fashion.freegamestore.online`
- Dev: `pnpm install && pnpm dev`
- Build: `pnpm build`
- Deploy: `git push origin main` (auto-deploys to R2 via GitHub Actions)

## Layout

Plain React, no game engine. `web/src/PetDressUp.tsx` holds the accessory list
and UI; each pet is an SVG component (`PugSVG.tsx`, `CatSVG.tsx`,
`BudgieSVG.tsx`) that draws whatever is in the `worn` set.

Free, MIT-licensed, no tracking. For platform conventions, read
https://freegamestore.online/skills.md
before writing or changing anything.
