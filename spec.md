# Urban Basket — Final Premium UI/UX Overhaul

## Current State
The site is a full-featured Urban Basket store with: Homepage (hero + categories + WhyChooseUs + CTA), CategoriesPage (sticky category nav, staggered product cards, category sections), About, Contact, CartDrawer, FloatingCart, FloatingWhatsApp. Already has Plus Jakarta Sans, slate blue primary, glassmorphism cards, Ken Burns hero, staggered product card animations, blob background shapes. Uses TanStack Router with hash history.

## Requested Changes (Diff)

### Add
- Page transitions: slide+fade between all pages using motion/react AnimatePresence + useLocation wrapper around route content
- Plus Jakarta Sans @font-face declaration using the pre-bundled `/assets/fonts/PlusJakartaSans.woff2` (replace current Google Fonts import)
- Gradient text utility on hero headline and section headings (subtle blue-to-indigo gradient)
- Premium nav active state: animated underline pill/dot indicator that slides between nav items
- Scroll-reveal animation improvements: enhance useIntersectionObserver with staggered delay parameter; apply to About/Contact pages
- Improved mobile menu: animate in with slide-down + fade using CSS transition instead of hard appear
- `prefers-reduced-motion` media query — disable all animations when set

### Modify
- **index.css**: Add @font-face for Plus Jakarta Sans from woff2 bundle (drop Google Fonts import). Add gradient text utilities (`text-gradient-blue`). Add `prefers-reduced-motion` rule. Add smooth scroll to html. Add page-transition keyframes. Tighten existing animations (kenBurns duration tweak).
- **tailwind.config.js**: Add `animation` entries for page transitions (slide-fade-in, slide-fade-out). Add `bg-gradient-blue` utility token.
- **Header.tsx**: Add `useScrolled` state to transition header bg from transparent to frosted on scroll (on home page only). Replace `[&.active]` pattern with explicit `useMatch` hook for reliable active state. Add animated active indicator dot or underline. Animate mobile menu open/close with CSS transition.
- **Hero.tsx**: Apply gradient text to the headline span. Add a soft radial glow behind the headline text. Make CTA buttons use `ring-2 ring-primary/30 focus-visible:ring` for accessibility.
- **ProductCard.tsx**: On mobile, always show the add-to-cart button (not hidden). Fix the hover overlay to use `group-hover` more reliably. Slightly improve card rounding and shadow tokens.
- **CartDrawer.tsx**: Replace hardcoded `bg-[oklch(0.52_0.18_145)]` green button with `bg-primary` for the WhatsApp order button. This was a regression from a prior version.
- **CategorySection.tsx**: Increase stagger delay from 80ms to 100ms for more noticeable stagger. Improve section alternating backgrounds to use slightly richer light gray (`bg-slate-50/80` vs `bg-background`).
- **WhyChooseUs.tsx**: Add hover lift (`hover:-translate-y-1`) and `hover:shadow-card-hover` to trust point cards. Improve icon container to have a richer primary tint.
- **CTABanner.tsx**: Add a floating decorative element (subtle circle blur) behind the headline. Tighten the gradient direction.
- **Footer.tsx**: Add subtle gradient top border. Improve spacing and visual weight.
- **App.tsx**: Add a route-level animation wrapper using `useLocation` + `AnimatePresence` from motion/react for page-level slide+fade transitions.
- **AboutPage.tsx / ContactPage.tsx**: Wrap content sections in scroll-reveal containers with staggered `fadeSlideUp` on mount.
- **CategoriesPage.tsx**: Tighten the page header padding. Add fade-in on page entry.
- **HomePage.tsx**: Add scroll-triggered entrance for the category preview section heading.

### Remove
- Google Fonts `@import` URL from index.css (replaced with local woff2 @font-face)
- The hardcoded green color in CartDrawer order button

## Implementation Plan
1. Update `index.css`: Replace Google Fonts import with @font-face for bundled PlusJakartaSans.woff2; add gradient text utility; add prefers-reduced-motion; add page-transition CSS; add smooth scroll.
2. Update `tailwind.config.js`: Add slide-fade animation keyframes; ensure all shadow tokens are present.
3. Update `App.tsx`: Add AnimatePresence + motion.div page transition wrapper keyed on pathname.
4. Update `Header.tsx`: Add `useMatch` for active state, styled active indicator. Add scroll detection for transparent-to-frosted transition. Animate mobile menu.
5. Update `Hero.tsx`: Apply gradient text on headline. Add radial glow layer.
6. Update `CartDrawer.tsx`: Fix green button → bg-primary.
7. Update `ProductCard.tsx`: Fix mobile button visibility. Polish card.
8. Update `CategorySection.tsx`: Bump stagger delay, richer alternating BG.
9. Update `WhyChooseUs.tsx`: Add hover lift to cards, richer icon containers.
10. Update `CTABanner.tsx`: Decorative blur element, tightened gradient.
11. Update `Footer.tsx`: Gradient border top, spacing polish.
12. Update `AboutPage.tsx` / `ContactPage.tsx`: Add scroll reveal entrance animations.
13. Validate (lint, typecheck, build).
