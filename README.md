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

### Scanner Figma sizing correction

The scanner now follows the supplied `Auto QR+ barcode_Scanner_page (1).svg`
1440 × 3819 artboard. This supersedes the earlier homepage-width adaptation.
The navbar Scanner item remains a direct link without a dropdown.

At the desktop reference width:

| Element | Reference dimensions / position |
| --- | --- |
| Scanner card | 886 × 616 px, x=277, y=302 |
| Mode tabs | 809 × 91 px, with 244 × 62 px buttons |
| Image upload area | 759 × 285 px, x=331, y=501 |
| Camera button | 759 × 67 px, x=331, y=820 |
| Information photo frames | 510.287 × 366.679 px |
| App banner | Starts at y=1928, 380.394 px tall |
| FAQ | 1107 px content width; 80 px closed cards, 18 px gaps |

- Restored Poppins headings and body copy from the design, plus locally bundled Roboto for scanner controls and FAQs. Roboto 5.2.8 assets include their license.
- Used the phone artwork directly from the supplied SVG, only on the scanner page.
- Scoped all desktop dimensions to this page. Tablet and phone layouts reflow rather than stretching the desktop scanner panel or fixing the full page height.
- Preserved scanning, uploads, result actions and the shared components used by the other pages.

Validation: production build, TypeScript, static export, SVG asset references and a CSS measurement audit. Browser visual QA is unavailable in this environment, so rendered pixel matching and live device layout still need visual verification.

### Matching generator hero backgrounds

The barcode and QR generator pages now share the same hero SVG, scaling, fade mask and underlying background colors in `app/site-background.css`. The continuous background also prevents a color seam where the hero fades into the next section. Generator controls and page sizing are unchanged.

Validation: production build and TypeScript passed; shared background declarations verified. Browser visual verification remains unavailable in this environment.

### Consistent generator navbar sizing

Removed barcode-only navbar overrides so the QR and barcode generator pages use the same shared header: 80 px tall above 1000 px viewport width and 68 px on tablet/mobile. Logo dimensions, link spacing, account buttons and active-link styling now follow the shared responsive rules. The header explicitly uses the same font on every page, and the types-menu label stays constant when switching routes. Scanner remains a direct link without a dropdown.

Validation: production build and TypeScript, matching exported header markup (apart from the active link), and a CSS audit of shared navbar styles. Browser visual verification remains unavailable in this environment.

### QR & Barcode Types page

Added `/qr-barcode-types` from the supplied `Qr& Barcode_ all types_page.svg` (1440 × 6716). The shared navbar now contains one direct **QR & Barcode Types** link with no submenu. Scanner remains a direct link. The shared 80 px desktop / 68 px mobile navbar sizing is preserved.

- Ten QR categories contain 66 cards in the design's order, followed by all 15 barcode formats.
- The page uses the supplied pale blue hero artwork, locally bundled Poppins fonts, existing colored icons, white cards and blue Choose buttons. At 1440 px the grid is 1224 px wide with four approximately 253 × 169 px cards per row. It reflows to three columns at 1000 px and two at 650 px.
- Each Choose link opens the existing generator with its type selected. Barcode deep links now support the same `?type=` selection pattern as QR codes; unknown values keep the default format. No second generator implementation was added.
- The existing footer is reused, and both footer type-directory links now reach the relevant section of the new page. Previous scanner, navbar and matching hero-background fixes are preserved.
- Document, media, payment and routing categories encode supplied content or links. They do not add hosting, payment processing, scan analytics or server-side routing services. Existing service placeholders documented above remain applicable.

Validation: production build and TypeScript; all 81 exported Choose links and their assets; identical shared navbar markup on five routes apart from active state; 135 barcode/font/height spacing cases. Browser visual verification remains unavailable in this environment.
