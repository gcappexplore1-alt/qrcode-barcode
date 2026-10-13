# Asset optimization

Public asset size: 82,222,842 bytes before; 53,071,227 bytes after (35.5% smaller), including new previews.

- Optimized 70 SVG files. Recompressed embedded images, capped embedded raster dimensions at 1920 pixels, and simplified SVG markup.
- Compared every changed SVG against its original render at up to 800 pixels. Changes exceeding the visual-difference threshold were discarded. Spot-checked backgrounds and the largest template illustrations side by side.
- Added 120 lossless WebP QR template thumbnails at up to 192 pixels. Combined preview size is 1,311,664 bytes versus 25,266,552 bytes for their original SVG files. QR downloads still use the existing vector renderer.
- Added lazy loading and asynchronous decoding to QR and barcode template thumbnails.
- Converted the authentication background and illustration to lossless WebP; verified zero visible-pixel differences.
- TypeScript, seven QR tests, and the 100-template test suite passed.
- This is an asset/source check, not a measured live-site speed score. Browser QA was unavailable. The production build remains unverified due to the previously observed environment error.

Includes earlier privacy footer link, generator validation, and QR test fixes.
