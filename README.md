# CSS Density Demo

A polished **static** HTML/CSS/JS demo of theme tokens driven by CSS custom properties.

Live (GitHub Pages placeholder):
**https://frank-dixon.github.io/css-density-demo/**

## What it demonstrates

1. **Density** — `Quiet` vs `Punchy`  
   Spacing scale, type scale, radii, control heights, and shadow weight switch via `data-density` on `<html>`.

2. **Surface** — `Cream` vs `Alternate`  
   Paper/ink grounds shift while keeping the same editorial accent (dark turquoise) via `data-surface`.

Same content (headline, lede, cards, buttons, form controls) updates live. JS only toggles attributes and persists preferences in `localStorage`.

## Aesthetic

Aligned with Frank Dixon’s site:

| Token   | Value     |
|---------|-----------|
| Cream   | `#F3EEE4` |
| Ink     | `#1C1916` |
| Accent  | `#0B8A8F` |

Typography: **Fraunces** (display) + **Source Sans 3** (body), with Georgia / system fallbacks.

## Files

```
css-density-demo/
├── index.html
├── styles.css
├── app.js
├── README.md
└── .gitignore
```

Relative asset URLs work for GitHub project Pages under `/css-density-demo/`.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or: python3 -m http.server 8080
```

## Deploy notes

Publish this folder as a GitHub Pages project site. Do not force-push; create/push the remote when ready.
