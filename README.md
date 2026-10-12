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


## QR + Barcode Scanner page (October 2026)

Open `/scanner` for the supplied 1440 × 3819 scanner design. Direct links
`/scanner?mode=qr` and `/scanner?mode=barcode` select the corresponding tab.
The navbar Scanner link opens this page directly, without a submenu or dropdown.
Footer scan links select the corresponding scanner mode.

- Uses the supplied hero background and QR/barcode photos, exported as compact WebP assets.
- Responsive three-mode scanner with image upload, drag-and-drop and camera capture.
- PNG, JPEG and WebP input, up to 10 MB and 32 megapixels; images are resized to a maximum 2048-pixel edge for decoding.
- Locally bundled ZXing WebAssembly decoder loads when scanning starts. The page does not load the generator's template data or send images/camera frames to a server.
- Supports QR codes, Code 128, Code 39, Code 93, EAN-8/13, UPC-A/E, ITF, Codabar, Data Matrix, PDF417 and Aztec, among other decoder-supported types.
- Results include copy, save as text, scan again and explicit HTTP/HTTPS link opening. Scanned links never open automatically. Retail identifiers may be returned in their normalized GTIN form (for example, UPC-E expanded to EAN-13 digits).
- Camera scanning requires HTTPS or localhost and browser permission. Camera tracks stop on cancellation, mode changes, successful scans, page hiding and unmount. Permission and missing-camera errors offer image upload as an alternative.
- The shared header, app banner, FAQ and footer are reused. Scanner-specific layout rules are isolated in `app/scanner-page.css`.
- Code 93 generation now includes its required check characters so codes created here can be decoded.

Run `npm ci`, then `npm run dev` and visit `http://localhost:3000/scanner`.
For static hosting: `npm run build`, then serve the `out` directory. Local
static preview: `node scripts/serve-static.mjs`. Serve `.wasm` files with
`application/wasm`; the included static preview server handles this.
The `predev` and `prebuild` scripts copy the decoder binary matching the pinned
`zxing-wasm` version and its license into public assets.

Validation for this update: production build and TypeScript, scanner fixture tests
(`npm run test:scanner`), existing category-template tests and barcode-spacing
tests. Scanner tests decode actual generated images, including rotated and
inverted codes, and check mode filtering, invalid uploads and unsafe link rejection.
Visual browser QA and live camera permission/device tests were unavailable in the
implementation environment and still need to be checked on target devices.
Existing service placeholders documented above remain applicable.

### Scanner sizing and spacing update

- Aligned the scanner card with the homepage's 1324 px maximum content width and desktop, tablet and mobile gutters.
- Matched the homepage heading scale (48 / 40 / 34 / 28 px), introductory text, header-to-heading spacing and heading-to-panel gap.
- Standardized scanner control sizes, panel padding and information-section spacing; information rows stack on phones.
- Removed scanner-specific banner, FAQ and footer sizing so those shared components inherit the homepage layout. Removed the duplicate FAQ item margin.

Validation: production build, TypeScript and static export passed. This update changes only scanner CSS and this documentation. Browser visual checks were unavailable in the implementation environment.
