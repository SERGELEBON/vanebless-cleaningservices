# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Vanebless Cleaning Services** - A production-ready single-page cleaning agency website built with Next.js 16, React 19, Tailwind CSS 4, shadcn/ui, and Prisma/SQLite.

**Brand Identity:**
- Colors: Deep Blue (#1e3a8a) + Red (#dc2626)
- Slogan: "Cleaning Beyond Excellence"
- All imagery features Black Ghanaian/African professionals
- No gradients across the site (solid colors only)
- Minimal use of icons (functional UI controls only)

## Development Commands

```bash
# Development
npm run dev              # Start dev server on port 3000 (logs to dev.log)

# Building
npm run build            # Build for production (outputs to .next/standalone/)

# Production
npm run start            # Run production server (logs to server.log)

# Code Quality
npm run lint             # Run ESLint

# Database (Prisma + SQLite)
npm run db:push          # Push schema changes to database
npm run db:generate      # Generate Prisma client
npm run db:migrate       # Create and apply migration
npm run db:reset         # Reset database
```

**IMPORTANT:** After code changes, always run `npm run lint` to verify no errors before marking work complete.

## Architecture

### Single-Page Application Structure
- **Route:** Everything lives on `/` (single-page design)
- **Sections:** Hero carousel → About → Services → Before/After Gallery → Testimonials → Quote → Contact → Footer
- **Service Details:** Rendered as modal dialogs (not separate routes) with before/after sliders + booking form

### Key Directories

```
src/
├── app/
│   ├── api/
│   │   ├── booking/route.ts    # POST endpoint for booking/quote requests
│   │   └── contact/route.ts    # POST endpoint for contact form
│   ├── globals.css             # Brand colors, animations (bubbleFloat)
│   ├── layout.tsx              # Root layout (English, SEO metadata, Toaster)
│   └── page.tsx                # Main page (assembles all sections)
├── components/
│   ├── brand/logo.tsx          # SVG VB monogram logo component
│   ├── ui/                     # shadcn/ui components (Dialog, Form, etc.)
│   └── vanebless/              # All custom page sections
├── lib/
│   ├── site.ts                 # Central config: services, hero slides, testimonials, stats, nav
│   ├── db.ts                   # Prisma client instance
│   └── utils.ts                # cn() utility
└── hooks/                      # Custom React hooks

prisma/schema.prisma            # Database schema (ContactMessage, BookingRequest)
```

### Central Configuration (`src/lib/site.ts`)

**All site content lives here:**
- Brand info (name, slogan, phones, WhatsApp, social handles)
- 9 services with categories: Routine, Specialised, Targeted, Technical
- Hero slides (4 carousel slides)
- Before/After gallery items
- Testimonials
- Stats (5000+ Jobs, 98% Happy clients, etc.)
- Navigation links

**When adding/editing services or content, always update `site.ts` first.**

### Database Schema (Prisma)

**Models:**
- `ContactMessage`: id, name, email, phone, subject, message, createdAt
- `BookingRequest`: id, name, email, phone, service, date, message, type (booking|quote), createdAt

**Database location:** SQLite file at path specified in `.env` (`DATABASE_URL`)

After schema changes: `npm run db:push` (dev) or `npm run db:migrate` (production)

### Styling & Design System

**Tailwind Config:** v4 (uses `@tailwindcss/postcss`)

**Brand CSS Variables (globals.css):**
```css
--brand-blue: #1e3a8a
--brand-blue-mid: #1d4ed8
--brand-blue-light: #3b82f6
--brand-red: #dc2626
--brand-red-light: #ef4444
```

**Key Animations:**
- `.bubble` + `@keyframes bubbleFloat` (footer background)
- Hero carousel auto-rotation (6s interval)
- Before/After slider (pointer-drag with clip-path)

**shadcn/ui:**
- Style: "new-york"
- Icon library: lucide-react
- Components: Dialog, Form, Toast, Sheet, Carousel, etc.
- Add components: `npx shadcn@latest add <component>`

### Component Conventions

**Vanebless Components (`src/components/vanebless/`):**
- All use data from `site.ts` (import `{ site, services, heroSlides, ... }`)
- Server components by default (mark `"use client"` only when needed)
- Forms use react-hook-form + zod validation
- Toasts use sonner (`toast.success()`, `toast.error()`)

**Key Components:**
- `navbar.tsx`: Sticky nav with contact bar, mobile Sheet menu, hydration-safe mount gating
- `hero-slider.tsx`: Full-screen carousel with auto-rotate (embla-carousel-react)
- `services-grid.tsx`: Interactive cards → opens ServiceDetailDialog
- `before-after-slider.tsx`: Drag-based comparison (clip-path technique)
- `booking-form.tsx`: Embedded in service modals + quote section
- `footer.tsx`: Floating bubble background (12 bubbles with bubbleFloat animation)
- `floating-whatsapp.tsx`: Fixed bottom-right expandable card

### API Routes

**POST `/api/booking`**
- Accepts: name, phone, service, email?, date?, message?, type ("booking"|"quote")
- Validates required fields
- Creates BookingRequest record in DB
- Returns: `{ ok: true, id: string }` or error

**POST `/api/contact`**
- Accepts: name, phone, message, email?, subject?
- Validates required fields
- Creates ContactMessage record in DB
- Returns: `{ ok: true, id: string }` or error

### Next.js Configuration

**next.config.ts:**
- `output: "standalone"` (for production builds)
- Remote images allowed from `sfile.chatglm.cn` (hero/service images)
- TypeScript: `ignoreBuildErrors: true` (legacy setting, consider fixing types)
- React: `reactStrictMode: false` (legacy setting)

**Path Alias:** `@/*` maps to `src/*`

## Common Patterns

### Adding a New Service
1. Add service object to `services` array in `src/lib/site.ts`
2. Fetch appropriate image of Black Ghanaian/African cleaning professionals
3. Define features array, category, icon (lucide name)
4. Service will auto-appear in ServicesGrid and booking form dropdown

### Hydration Safety
- Mobile Sheet menu uses mount-gating (renders placeholder until mounted, then swaps in Radix component) to avoid SSR/CSR id mismatches
- Use `useState` + `useEffect` for client-only rendering when needed

### Image Best Practices
- All remote images must be from whitelisted domains (see next.config.ts)
- Use Next.js `<Image>` component with `fill` or explicit width/height
- Add `loading="lazy"` for below-fold images

### Form Validation
- Use zod schemas for validation
- react-hook-form for form state
- Always show user-friendly error toasts (sonner)
- API routes validate again server-side (never trust client)

## Code Style & Conventions

- **NO COMMENTS** unless absolutely necessary for complex logic
- Use TypeScript strict mode (but `noImplicitAny: false` currently set)
- Functional components, prefer server components
- Use `cn()` utility from `@/lib/utils` for conditional classes
- Follow existing patterns in neighboring files (especially for imports, component structure)
- Match existing code style: 2-space indent, semicolons, double quotes for strings in JSX

## Important Notes

- **Never commit with gradients** (site requirement: solid colors only)
- **All people in images must be Black Ghanaian/African** (brand requirement)
- **Icons only for functional UI** (no decorative icons in content sections)
- **Always verify with lint before committing** (`npm run lint`)
- **Database file path:** Configured in `.env` → `DATABASE_URL`
- **Build command copies static assets** to standalone directory (see package.json build script)
- **Forms persist to SQLite** (check `db/` directory for .db file)

## Testing

**No test framework currently configured.** Before adding tests:
1. Check if package.json has test scripts
2. Verify which framework to use (Jest, Vitest, etc.)
3. Do NOT assume — always check the codebase first

## Contact & Branding

- **Company:** Vanebless Cleaning Services
- **Phones:** 020 650 5564, 055 364 4622
- **WhatsApp:** wa.me/233206505564
- **Social:** @vanebless_cleaning_services (TikTok, Instagram, Facebook, X, Snapchat)
- **Email:** info@vanebless-cleaning.com
- **Colors:** #1e3a8a (blue) + #dc2626 (red)
- **Slogan:** "Cleaning Beyond Excellence"