# QR & Barcode Generator — Updated Homepage

## Run locally

```sh
npm ci
npm run dev
```

For a production static export:

```sh
npm run build
```

Serve the generated `out` directory with any static web server.

## Homepage update

- Updated hero, generator layouts, navigation, app banner, FAQ, blog and footer from the supplied 1440 × 6144 SVG export.
- Added a working barcode generator with 15 sidebar entries, including PDF417 and Data Matrix.
- Kept the three-step guide, both information cards, and every existing content section. They remain separate components for moving to another page later.
- Homepage image sources use SVG. Photographs and exported bitmap artwork remain embedded raster images within SVG containers; they are not falsely traced vector images. Original vector icons, store badges, barcode thumbnails and phone mockups are extracted from the supplied design.
- Responsive layouts cover desktop, tablet and narrow phones.

## Validation

- Production build and TypeScript checks passed.
- Browser checks at 1440, 1024, 768, 390 and 320 pixels.
- QR and barcode PNG/SVG export, barcode formats, type dialog and FAQ tabs checked.

## Existing limitations

- Sign-in, account management, scan analytics, newsletter and store links still require services or destination URLs.
- Tutorial playback uses the existing example clip; set real tutorial URLs in `app/lib/tutorial-video.ts` before launch.
- All 28 barcode templates retain their original SVG artwork and embed the live barcode; preview and PNG/SVG exports use the same renderer.
- Several advanced QR categories accept a link; they do not create hosted landing pages or upload documents.

## Main edited files

- `app/page.tsx`: navigation and section composition.
- `app/home-updated.css`: sizing, spacing and responsive overrides.
- `app/components/BarcodeGenerator.tsx`: barcode generation and export.
- `public/assets/updated/`: assets from the supplied homepage design.

- Barcode Text controls: separate Details and Heading tabs, independent font sizes/colors, visibility switches, SVG icons, and live preview/export.

## Complete category update

New, Social, WiFi, Event and Love each have 20 uploaded SVG templates plus No template. All use the Hot live renderer and PNG/SVG export flow. Hot is unchanged. Run npm run test:templates: 100 templates passed renderer checks. Full production build and scanner checks remain unverified.

## Dedicated Barcode Generator page

Open `/barcode-generator` for the supplied barcode page design. Includes SVG step illustrations and phone artwork extracted from the reference, SVG type icons, linked type cards, live PNG/SVG downloads, barcode-first FAQ and blog tabs, and responsive styling. Navigation links directly to the new route.

Validation: production static build, TypeScript, 135 barcode spacing combinations and 100 category template checks passed. Browser viewport QA was unavailable in this environment.


## Barcode page Figma corrections (October 2026)

The `/barcode-generator` route and homepage both render `app/components/BarcodeGenerator.tsx`. The editor, templates, text/color/height controls, preview and PNG/SVG downloads remain one shared implementation. Route-specific appearance is scoped under `.barcode-generator-page` in `app/barcode-generator-page.css`.

- Matched the supplied 1440 × 7261 reference section positions, typography, input border, sidebar elevation, template layout, preview card, type cards, illustrations and banner presentation.
- Added local Poppins 400/500/700 font files alongside the existing 600 font; no external font request is needed.
- Corrected excess blank canvas around the general barcode template while preserving its live barcode and quiet zones in both preview and exports.
- Fixed narrow-screen heading readability, horizontally scrollable type selection, customization controls, introduction card overlap and export sizing labels.
- Fixed SVG hero background scaling at narrow viewport widths.

Validation: production build and TypeScript passed. Browser checks at 1440, 1024, 768, 390 and 320 px showed no horizontal document overflow. Template selection, heading edits, color/height panels, PNG and SVG downloads, invalid barcode input, type-card navigation, modal dismissal and homepage shared-generator rendering passed without browser errors. All 135 barcode-spacing combinations passed. Physical scanner decoding was not part of this design update.

Run locally with `npm ci` and `npm run dev`. For a production preview, run `npm run build`, then `node scripts/serve-static.mjs` and open `http://localhost:3000/barcode-generator`.


### Generator background blending fix

The QR and barcode generator backdrops now fade smoothly into the steps section. `app/generator-background.css` applies the fade only to the decorative layer, follows the generator's actual height, and preserves opaque controls and previews. The QR backdrop also scales independently of viewport aspect ratio, avoiding the clipped gradient visible on wide screens. The homepage layout is unaffected.

Validation: production build/TypeScript passed; browser screenshots checked for both generator pages at 1920, 1440 and 390 px. Pixel samples on both sides of the generator/steps boundary confirmed no abrupt color change; no horizontal overflow or browser errors was observed.
