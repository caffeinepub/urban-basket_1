# Urban Basket

## Current State
Single-page app with all content on one page: header, hero, category nav, all product sections, WhyChooseUs, CTABanner, footer. Header has nav links that are anchor hrefs. No routing. ProductCard shows single price only.

## Requested Changes (Diff)

### Add
- React Router (hash or memory-based) for multi-page navigation
- `/categories` page (CategoriesPage): shows all 5 category sections with sticky category nav, floating cart, cart drawer
- `/about` page (AboutPage): simple single-section placeholder (brand story, mission, placeholder contact info)
- `/contact` page (ContactPage): simple single-section placeholder (address, phone, email, WhatsApp link)
- `originalPrice` field derived from product price (price + ₹1–₹5) for strikethrough display
- Category cards on homepage hero area (replacing or alongside the existing hero CTA section) — clicking navigates to `/categories#section-<categoryId>` which auto-scrolls to that section

### Modify
- Header nav links: Home → `/`, Categories → `/categories`, About → `/about`, Contact → `/contact` (use React Router `<Link>`)
- Homepage (App): remove all category sections, WhyChooseUs, CTABanner — keep Hero + a category cards preview section + footer CTA. Homepage must be clean and minimal.
- ProductCard: show original price with strikethrough (grey) and discounted price (bold, dark) below/beside it
- products.ts: add computed `discountedPrice` (price - ₹1 to ₹5 per product) or derive it in ProductCard
- CategorySection: used on CategoriesPage only, no changes to structure
- Hero secondary button: "Browse Categories" navigates to `/categories`

### Remove
- WhyChooseUs and CTABanner from homepage flow (can keep as components, move to CategoriesPage bottom or keep on homepage below category cards)
- Anchor-based nav from Header

## Implementation Plan
1. Install react-router-dom (check if already available in package.json)
2. Update `products.ts` to add `originalPrice` computed per product (price + small amount)
3. Update `ProductCard` to display strikethrough original price and highlighted discounted price
4. Create `pages/HomePage.tsx` — Hero + category preview cards (5 cards with emoji, name, CTA) + WhyChooseUs + CTABanner + Footer
5. Create `pages/CategoriesPage.tsx` — CategoryNav + all CategorySections + CTABanner + Footer. On mount, read URL hash and scroll to matching section.
6. Create `pages/AboutPage.tsx` — simple centered section with placeholder brand story text
7. Create `pages/ContactPage.tsx` — simple centered section with placeholder address/phone/email/WhatsApp
8. Update `Header.tsx` — use React Router `<Link>`, nav items: Home, Categories, About, Contact
9. Update `App.tsx` — set up Router with routes for /, /categories, /about, /contact
10. Homepage category cards: each card onClick navigates to `/categories#section-<categoryId>`
11. CategoriesPage: on mount/update, check hash and scrollIntoView the matching section
