# FarmDost — React

A faithful React conversion of the FarmDost landing page. All markup, copy,
colors, spacing, typography, sections, the English/Urdu language toggle, and
the WhatsApp CTA logic were ported 1:1 from the original file.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  assets/            (empty — see note on images below)
  components/
    Navbar.jsx
    Hero.jsx
    Stats.jsx
    Solution.jsx
    Gallery.jsx
    Crops.jsx
    Comparison.jsx
    Testimonials.jsx
    About.jsx
    Contact.jsx
    Footer.jsx
    Icons.jsx        (SVG icon components, extracted from the original inline SVGs)
    ImageSlot.jsx     (placeholder image-slot component, see note below)
  i18n.jsx            (English + Urdu dictionaries, LanguageProvider/useLanguage)
  config.js           (WhatsApp number + display phone)
  App.jsx
  main.jsx
  styles.css          (design tokens + shared component classes, from the original CSS)
```

## What was preserved exactly

- All section content, headings, paragraphs, stats, crop names, comparison
  table rows, testimonials, and footer text — in both English and Urdu.
- All colors, spacing, font sizes/weights, border radii, and the section
  background gradients, taken directly from the original CSS custom
  properties and inline styles.
- The `[data-lang="ur"]` → Noto Nastaliq Urdu / RTL behavior on language
  toggle, same as the original `applyLang()` logic.
- The WhatsApp number/link (`923175813079` / `+92 317 5813079`) and the
  enquiry form's behavior of opening WhatsApp on submit.
- The floating hero-image animation, hover states on buttons/table rows, and
  the responsive breakpoint at 860px (hero/split layouts collapse to one
  column, 4-up grids collapse to 2-up, 3-up grids collapse to 1-up).

## One caveat: images

The uploaded file wasn't a plain HTML page — it was a **bundler export**: a
loader script that reconstructs the real page (kept as an escaped string
inside `<script type="__bundler/template">`) into a hidden iframe at
runtime, and separately swaps in image `src`s from a `window.__resources`
map that gets populated by a mechanism not included in the export. That
means the actual image *bytes* for the hero shot, the bag cutaway, the four
gallery photos, and the field photo were never present in the file — only
opaque resource IDs that only resolve inside the original authoring tool.

Every image slot is reproduced in its exact position, aspect ratio, and
border radius (`ImageSlot.jsx`), currently rendering as a labeled
placeholder block. Drop your real image files into `src/assets/` and swap
the placeholder for an `<img>` tag in `ImageSlot.jsx` (or pass a `src` prop)
to complete it — no other layout changes are needed.
