# CommunityPulse - Specification

## 1. Concept & Vision

CommunityPulse is a community analytics and engagement platform for Discord and Telegram server owners. It transforms the guesswork of community management into data-driven decisions — surfacing who's engaged, who's drifting, and who's about to ghost, so owners can act before the churn happens. The product feels like a mission control dashboard: calm, precise, authoritative — built by people who take communities seriously.

**Tagline:** Know who's still in. Know who's about to leave.

---

## 2. Design Language

### Aesthetic Direction
Dark-mode data dashboard aesthetic — think deep space meets trading terminal. Professional yet approachable. The kind of tool a serious community manager opens alongside their Discord window.

### Color Palette
- Background: `#100b24` (deep purple/navy)
- Surface: `#1c1a2e` (card/panel background)
- Border: `#2d2b47` (subtle separators)
- Primary: `#a855f7` (purple — CTA, highlights)
- Secondary: `#06b6d4` (cyan — accents, data viz)
- Success: `#22c55e` (green — positive metrics)
- Warning: `#f59e0b` (amber — at-risk indicators)
- Text: `#fafafa` (primary text)
- Muted: `#8b8a9a` (secondary/subtle text)

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, tight tracking
- Body: Regular weight
- Mono: Used for data/numbers

### Motion Philosophy
- Subtle fade-in on scroll for sections
- Smooth hover transitions (150ms ease)
- Dashboard cards have slight hover lift effect
- No aggressive or distracting animations

### Visual Assets
- Icons: Lucide React (consistent stroke-based icons)
- Dashboard preview: Mock UI built from styled divs with realistic data
- No external images needed — all CSS/SVG generated

---

## 3. Layout & Structure

### Page Sections (top to bottom)
1. **NavBar** — Fixed, logo left, nav links center, CTAs right
2. **Hero** — Full viewport height, centered headline, subtext, dual CTAs
3. **Dashboard Preview** — Mock dashboard floating card with realistic UI
4. **Features Grid** — 6 features in 3×2 responsive grid
5. **How It Works** — 4 horizontal steps with numbered badges
6. **Stats Bar** — 3 key metrics across communities
7. **Testimonials** — 3 cards from community managers
8. **Pricing** — 3-column pricing cards (Free / Starter / Growth)
9. **CTA Banner** — Final conversion section
10. **Footer** — Links, copyright, social

### Responsive Strategy
- Desktop: Full layout as described
- Tablet: 2-column grids, adjusted spacing
- Mobile: Single column, collapsible nav

---

## 4. Features & Interactions

### NavBar
- Logo: "CommunityPulse" wordmark with pulse icon
- Links: Features, Pricing (smooth scroll to sections)
- Login: Ghost button style
- Start Free: Primary purple filled button
- Mobile: Hamburger menu with slide-out drawer

### Hero
- Headline: "Know who's still in. Know who's about to leave."
- Subheadline: "CommunityPulse gives Discord and Telegram server owners real-time visibility into member engagement — so you can re-engage before they ghost."
- Primary CTA: "Start Free" (purple)
- Secondary CTA: "See Live Demo" (outline/ghost)
- Background: Subtle radial gradient overlay

### Dashboard Preview
- Floating mock dashboard card
- Engagement score bars per member
- Retention funnel visualization
- Inactive member alert list
- All data is realistic mock (member names, scores, %)

### Features Grid (6 cards)
1. Member Engagement Scores
2. Inactive Member Alerts
3. Retention Funnels
4. Pulse Surveys
5. Role & Tier Insights
6. Export to CSV

Each card: icon, title, short description

### How It Works (4 steps)
1. Connect Your Server — Discord/Telegram OAuth
2. Pulse Analyzes — ML scoring of member activity
3. View Dashboard — Live engagement metrics
4. Take Action — Re-engage at-risk members

### Stats Bar
- "50,000+ Community Members Tracked"
- "2,400+ Servers Connected"
- "89% Avg Retention Improvement"

### Testimonials (3)
- Marcus T., Crypto Discord owner
- Priya S., Gaming Community Manager
- Jake R., Tech Slack Group Admin

### Pricing
| Tier | Price | Servers | Members | Features |
|------|-------|---------|---------|----------|
| Free | $0/mo | 1 | 100 | Basic engagement scores |
| Starter | $15/mo | 3 | 1,000 | + alerts, retention funnels |
| Growth | $39/mo | Unlimited | Unlimited | + pulse surveys, CSV export |

### Footer
- Links: Features, Pricing, Privacy, Terms
- Social: Twitter/X, Discord (placeholder links)
- Copyright: "© 2025 CommunityPulse. All rights reserved."

---

## 5. Component Inventory

### NavBar
- States: Default, scrolled (adds backdrop blur + shadow), mobile-open
- Logo pulses subtly on hover

### Buttons
- Primary: `bg-[#a855f7] text-white hover:bg-[#9333ea]` — rounded-lg px-6 py-3
- Secondary/Ghost: `border border-[#a855f7] text-[#a855f7] hover:bg-[#a855f7]/10` — same size
- States: default, hover, active (scale 98%), disabled (opacity 50%)

### Cards (Feature, Testimonial, Pricing)
- Background: `#1c1a2e`
- Border: `1px solid #2d2b47`
- Border-radius: 12px
- Hover: `border-[#a855f7]/50`, subtle translateY(-2px)
- Padding: 24px

### Pricing Cards
- Highlighted tier (Growth): border `border-[#a855f7]`, badge "Most Popular"
- Price: large bold number
- Feature list with checkmarks

### Stat Counter
- Number: large bold text in primary/secondary color
- Label: muted text below

---

## 6. Technical Approach

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (with `@import "tailwindcss"` and `@theme {}`)
- **Icons:** Lucide React
- **Fonts:** Inter via Google Fonts (next/font/google)
- **Build:** `next build` → static/SSR hybrid
- **Deploy:** Vercel CLI with token

### File Structure
```
community-pulse/
├── SPEC.md
├── package.json
├── next.config.js
├── tsconfig.json
├── postcss.config.js
├── .gitignore
└── app/
    ├── globals.css
    ├── layout.tsx
    └── page.tsx
```

### Key Implementation Notes
- Use `"use client"` directive only where interactivity requires it (navbar toggle)
- Dashboard preview is pure CSS/HTML — no charting library needed
- Smooth scroll via CSS `scroll-behavior: smooth`
- Inter font loaded via `next/font/google`
