# Roofing Lead Site Replication Process (SOP)

Use this SOP to turn any roofing lead into a polished static website quickly.

## Goal
Create a fast, premium-looking lead website with:
- Clear hero + value proposition
- Trust bar + certifications
- Service cards
- Project showcase
- Testimonials
- Contact form + sticky CTA
- Mobile-first polish

---

## 1) Intake & Setup (5-10 min)
1. Gather business inputs:
   - Company name, city, state
   - Main phone number
   - Core services (3-5)
   - Certifications / warranties
   - Reviews snippets
2. Clone or create repo:
   - `git clone <lead-repo-url>`
   - Confirm branch is `main`
3. Verify baseline files exist:
   - `index.html`
   - `styles.css`
   - `script.js`

---

## 2) Competitive Scrape & Content Capture (15-25 min)
1. Identify 3-5 local competitors via web search (`"<city> roofing company"`).
2. For each competitor site:
   - Capture homepage screenshot (desktop + mobile)
   - Extract visible messaging: headline, offer, service list, trust badges
3. Build a content worksheet:
   - Best headline patterns
   - Most common trust signals
   - Repeated CTA copy
   - Project/result phrasing

**Tooling options:**
- `web_search` for lead discovery
- `web_fetch` for quick text extraction
- Browser automation for screenshots and visual reference

---

## 3) Information Architecture (10 min)
Lock the page sections before coding:
1. Sticky header + call button
2. Hero (headline, subhead, two CTAs, 3 proof bullets)
3. Trust bar (certifications/guarantees)
4. Services (3 cards)
5. Projects (3 cards)
6. Testimonials (3 quotes)
7. Contact/quote form
8. Sticky mobile CTA

---

## 4) Redesign Execution (30-60 min)
1. **HTML (`index.html`)**
   - Keep semantic sections (`header`, `main`, `section`, `form`)
   - Use clear IDs for nav anchors and CTAs
   - Keep copy concise and locally relevant
2. **CSS (`styles.css`)**
   - Define design tokens (`:root` colors, spacing, shadows)
   - Create strong contrast hero and premium card styling
   - Implement responsive breakpoints (tablet + mobile)
   - Ensure touch-friendly buttons and form controls
3. **JS (`script.js`)**
   - Add form interaction feedback
   - Keep script lightweight (no external framework)

---

## 5) QA Checklist (10-15 min)
- [ ] No placeholder copy like “Example Domain” remains
- [ ] All CTAs work (`tel:` links, anchor links)
- [ ] Form submit gives success feedback
- [ ] Mobile layout is clean at 320px and 390px widths
- [ ] Text contrast is readable in hero and cards
- [ ] Page is static/fast (no unnecessary dependencies)
- [ ] Spelling and city/service details are correct

Optional performance checks:
- Lighthouse quick run for mobile usability
- Validate no console errors

---

## 6) Publish Workflow (5-10 min)
1. Commit changes:
   - `git add index.html styles.css script.js REPLICATION_PROCESS.md`
   - `git commit -m "Redesign: premium roofing landing page + replication SOP"`
2. Push to main:
   - `git push origin main`
3. If auth/token fails:
   - Use browser/manual GitHub sign-in and PAT flow
   - Re-run push after credentials are set
4. Confirm deployment URL (GitHub Pages or host URL)

---

## 7) Handoff Template
When done, provide:
1. Live URL
2. 5-8 concrete design improvements made
3. Any remaining blockers (if publish/auth prevented final deploy)

This SOP is reusable for each new roofing lead with only copy and local proof points swapped.
