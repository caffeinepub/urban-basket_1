# Urban Basket

## Current State
- Footer has Quick Links (Home, Categories, About, Contact), a Contact Us column, and bottom copyright bar
- No Privacy Policy, Terms & Conditions, or FAQ pages exist (routes would 404 via catchAll → /)
- Footer links use TanStack Router `<Link>` but have no active state highlighting
- Hover effect is only a basic `hover:text-foreground transition-colors` — no underline or glow
- No scroll-to-top behavior on navigation — pages may open mid-scroll
- WhatsApp in footer is a plain inline link, not a prominent CTA button
- Footer is not fully responsive for mobile (3-col grid collapses but lacks dedicated legal links section)
- No legal/footer links section (Privacy Policy, Terms, FAQ) in footer bottom bar

## Requested Changes (Diff)

### Add
- Three new pages: `PrivacyPage`, `TermsPage`, `FAQPage` with clean, minimal content
- Three new routes in App.tsx: `/privacy`, `/terms`, `/faq`
- Scroll-to-top on every route change (using `useEffect` in RootLayout triggered by `location.pathname`)
- "Order on WhatsApp" button in footer (prominent, using WHATSAPP_NUMBER)
- Legal links row in footer bottom bar (Privacy Policy, Terms & Conditions, FAQ/Help)
- Active page highlight on footer Quick Links (using `useRouterState` or `useMatch`)
- Premium hover effect on footer links: underline slide-in animation + color change
- Mobile layout improvements: single column stack, proper spacing

### Modify
- `App.tsx`: Add 3 new routes + scroll-to-top effect in RootLayout
- `Footer.tsx`: Full redesign — active states, hover underline, WhatsApp CTA button, legal links, responsive mobile layout

### Remove
- Nothing removed — existing pages and routes remain intact

## Implementation Plan
1. Create `src/frontend/src/pages/PrivacyPage.tsx` — clean Privacy Policy page with placeholder content
2. Create `src/frontend/src/pages/TermsPage.tsx` — clean Terms & Conditions page
3. Create `src/frontend/src/pages/FAQPage.tsx` — FAQ/Help page with accordion-style Q&A
4. Update `App.tsx`: add 3 routes, add `window.scrollTo(0,0)` in RootLayout `useEffect` on pathname change
5. Update `Footer.tsx`: new 4-column layout (brand, quick links, legal, contact+WhatsApp CTA), active link detection, slide-underline hover effect, WhatsApp CTA button, fully responsive mobile
