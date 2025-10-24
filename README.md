# MixMyFace — MVP (on‑device)

Minimalni web MVP za mešanje dva lica **lokalno u browseru** (nema uploada na server).
- Učitavanje dve slike (Face A / Face B)
- Ručno poravnanje (drag/zoom/rotate)
- Feathered maska (radius/feather)
- Export PNG

## Pokretanje lokalno
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy na GitHub Pages (ručni, klasičan)
1. Kreiraj repo na GitHub-u i uploaduj sve fajlove iz ovog foldera.
2. U Settings → Pages → Build and deployment: Source = GitHub Actions ili Deploy from a branch (dist/ folder posle build-a).
3. Ako koristiš Actions, dodaj Vite static deploy workflow ili koristi branch deploy:
   - `npm run build` → generiše `dist/`
   - push `dist/` na `gh-pages` branch i uključi Pages na tom branchu.

## Privatnost
Sve obrade su **on-device** — slike **ne napuštaju** tvoj računar.
