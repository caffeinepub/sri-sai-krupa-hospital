# HDPE Pipes Product Page

## Current State
App.tsx renders ShowcasePage. The project has a MedCarePro hospital site structure with various pages.

## Requested Changes (Diff)

### Add
- New ProductPage component matching the Figma screenshot
- Image carousel with main image + thumbnail strip
- Product info panel: breadcrumb, certifications badges, title, bullet features, price range, shipping info, CTA buttons
- Trusted companies logo strip (EUROFLEX logos)
- Dark-themed technical specifications table section with download button

### Modify
- App.tsx to render the new ProductPage

### Remove
- Nothing (keep existing files)

## Implementation Plan
1. Create ProductPage.tsx with two main sections:
   - Hero product section (white bg): carousel left, product details right
   - Technical specs section (dark bg): table + download button
2. Carousel: main image + 6 thumbnail images, prev/next arrows
3. Certifications: BIS, ISO, CE badge pills
4. Price range, shipping/returns tags, certification text
5. Two CTA buttons: Get Custom Quote (green filled), View Technical Specs (outline)
6. Trusted by strip with EUROFLEX brand logos
7. Tech specs table: 10 rows of parameter/specification data
8. Download Full Technical Datasheet button
9. Update App.tsx to render ProductPage
