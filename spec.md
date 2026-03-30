# FreshBasket - Grocery Delivery

## Current State
This project previously contained the Logskim Solution Pvt Ltd business website. We are replacing it with a full grocery delivery e-commerce app.

## Requested Changes (Diff)

### Add
- Home page: sticky navbar with search, cart icon with badge, logo
- Hero banner with CTA
- Category filter strip: Fruits, Dairy, Snacks, Meat, Bakery, Pantry
- Product grid with images, prices, ratings, Add to Cart button
- Cart drawer: slide-in with qty controls, subtotal, checkout button
- Checkout page: address form (name, address, city, phone, delivery slot), order summary
- Login/Signup modal with email/password form
- Product data: 18+ products across 6 categories with images and prices
- Footer with links, payment badges, social icons
- SEO meta tags and responsive mobile design

### Modify
- Replace existing Logskim frontend entirely

### Remove
- All Logskim business website content and components

## Implementation Plan
1. Generate Motoko backend: store products, manage cart sessions, handle orders
2. Build React frontend: Home, Checkout pages, Cart drawer, Login/Signup modal
3. Category filtering, cart state management, form validation
4. Full mobile responsiveness down to 375px (iPhone SE)
5. SEO: meta tags, semantic HTML, page titles
