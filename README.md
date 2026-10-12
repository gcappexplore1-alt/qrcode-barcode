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

The QR and barcode generator backdrops now fade smoothly into the steps section. `app/site-background.css` applies the fade only to the decorative layer, follows the generator's actual height, and preserves opaque controls and previews. The QR backdrop also scales independently of viewport aspect ratio, avoiding the clipped gradient visible on wide screens. The homepage layout is unaffected.

Validation: production build/TypeScript passed; browser screenshots checked for both generator pages at 1920, 1440 and 390 px. Pixel samples on both sides of the generator/steps boundary confirmed no abrupt color change; no horizontal overflow or browser errors was observed.


### Site-wide background and illustration cleanup

- Replaced the centered, fixed-width barcode page background with a full-width CSS backdrop, removing the vertical color edge on large displays.
- Moved the Choose and Download illustration glows out of cropped SVG files into transparent CSS radial gradients. Removed a duplicate shadow that exposed rectangular corners around the customization card.
- Kept the QR steps, introduction and type sections on one continuous background and applied the same smooth illustration glows. Sized the download glow for phones.
- Both barcode pages still use the same `BarcodeGenerator` component; customization and downloads remain shared.

Validation: production build and TypeScript passed. Audited all six routes (home, QR generator, barcode generator, blog, login and signup) at 1920, 1440, 768, 390 and 320 px: no horizontal document overflow, broken images or browser errors. Visually reviewed desktop and phone screenshots, and checked the revised step artwork and background boundaries. This pass covers layout and background presentation; existing service limitations above still apply.


### Shared responsive section spacing

`app/responsive-layout.css` now owns the page gutters. Header, hero, generator panels, steps, information cards, type grids, app banner, testimonials, FAQ, blog and footer align to one fluid container instead of separate fixed artboard widths. The standalone blog uses the same spacing.

- Side margins use `clamp(16px, 3vw, 80px)`: 16px on narrow phones, about 23px at 768px, 43px at 1440px and 58px at 1920px.
- Wide displays can use their available width; the old 1107–1344px section caps no longer create oversized, mismatched outer gaps.
- Generator columns resize within the wider panel, then retain their tablet and phone stacking. Blog images preserve their aspect ratio as cards resize.
- Navigation switches to the compact menu at 1439px to keep all links inside the viewport.
- Account forms keep a readable width and share the phone gutters.

Validation: production build and TypeScript passed. Checked section alignment while resizing the public pages from 320px through 2560px, plus login/signup layouts at desktop, tablet and phone widths. Follow-up checks passed at both sides of the navigation breakpoint, including menu opening/closing. All checked content containers align to the shared gutter; no horizontal document overflow or browser errors remain in those checks.
