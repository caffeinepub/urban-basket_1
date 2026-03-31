# Urban Basket

## Current State
The site is fully built with V8 animations: Ken Burns hero, spring-physics card hover lifts, staggered scroll reveals, slide+fade page transitions, and AnimatePresence throughout. The CategoriesPage shows ALL categories as stacked sections simultaneously; clicking a category nav pill only scrolls to that section (no filtering). Primary CTA buttons have `whileHover` scale but no glow/ripple effect.

## Requested Changes (Diff)

### Add
- **Category grid animation on switch**: CategoriesPage switches to a single-category filtered view with `AnimatePresence`. When the user taps a category pill, the old product cards fade+exit (100ms), then the new category's cards enter with fade+slide-up stagger (60ms between each). Uses a category key so Framer Motion handles exit/enter cleanly.
- **Ripple/glow on primary CTA buttons only**: CSS radial-glow pulse on hover + a click ripple keyframe. Applied only to `data-ocid` buttons with `cta.primary_button`, `hero.primary_button`, and the two WhatsApp nav buttons (navbar + mobile menu).

### Modify
- **Animation easing refinement** across all components:
  - Easing: `[0.25, 0.46, 0.45, 0.94]` (ease-out-quart) for all scroll reveals and page transitions
  - Scroll reveal `y` offset: increase to 24px (currently 20-28px, standardize to visible but not dramatic)
  - Scroll reveals: duration 600ms
  - Hover lifts: duration 200ms  
  - Page transitions: 350ms
  - Product card stagger: 80ms (from 90ms)
  - CategorySection stagger: 80ms (from 70ms)
- **CategoriesPage layout**: Remove stacked always-visible sections. Replace with a single active category display. CategoryNav still shows all pills; clicking one sets `activeCategoryId` and triggers animated card swap via `AnimatePresence mode="wait"`. No scrolling between sections.
- **CategorySection**: Remove `whileInView` since cards are now always visible (not scrolled into view). Use `AnimatePresence` enter animations instead.

### Remove
- IntersectionObserver logic in CategoriesPage (no longer needed when showing one category at a time)
- Section-based scroll behavior in CategoryNav (scroll-to-section replaced by filtering)
- `sectionRefs` ref map and scroll logic

## Implementation Plan
1. Update `index.css`: Add `.cta-glow` utility class with CSS `@keyframes ctaGlowPulse` (radial glow ring) and `.cta-ripple` for click ripple. Update easing variables.
2. Update `CategorySection.tsx`: Convert from scroll-based stacked section to a simple animated card grid that uses `AnimatePresence` + `staggerChildren` for entry. Remove `whileInView` — always render/enter on mount.
3. Update `CategoriesPage.tsx`: Remove sectionRefs, IntersectionObserver, and scroll logic. Add `AnimatePresence` wrapping `CategorySection` keyed by `activeCategoryId`. CategoryNav click just sets active ID, no scrolling.
4. Update `CategoryNav.tsx`: Remove scroll-to-section from `handleClick`. Just call `onCategoryClick(id)`.
5. Update `Hero.tsx`: Add `.cta-glow` class to the primary WhatsApp button.
6. Update `Header.tsx`: Add `.cta-glow` class to the WhatsApp CTA button (desktop + mobile).
7. Update `CTABanner.tsx`: Add `.cta-glow` class to the order button.
8. Refine easing/timing across `PageTransition.tsx`, `ProductCard.tsx`, `CategorySection.tsx`, `WhyChooseUs.tsx`, `CTABanner.tsx`, `HomePage.tsx`.
