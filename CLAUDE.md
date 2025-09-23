# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for ClichyMouv, an association for movement and wellness in Clichy-la-Garenne. The site is built with React 19, TypeScript, and Tailwind CSS 4 with Google Analytics integration.

## Common Commands

**Development:**
```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production with Turbopack
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

**Package Manager:** This project uses pnpm (evidenced by pnpm-lock.yaml)

## Architecture

**App Router Structure:**
- Uses Next.js 15 App Router (`app/` directory)
- Each page is a `page.tsx` file in its directory
- Root layout in `app/layout.tsx` includes vertical navigation and footer
- French language site (`lang="fr"` in layout)
- SEO-optimized with comprehensive metadata and OpenGraph tags

**Key Pages:**
- `/` - Homepage with hero section and partner carousel
- `/about` - About page 
- `/partners` - Partners page displaying local business partners
- `/adherants` - Members page with search functionality
- `/bureau` - Board members page
- `/contact` - Contact page with contact form
- `/projets` - Projects page

**Component Architecture:**
- `components/navbar-vertical.tsx` - Main vertical sidebar navigation with desktop/mobile responsive design
- `components/hero-section.tsx` - Reusable hero section component
- `components/footer.tsx` - Site footer component
- `components/caroussel-partner.tsx` - Partner carousel component
- `components/adherant-list.tsx` - Members list with search functionality
- `components/bureau-list.tsx` - Board members list
- `components/card-display.tsx` - Reusable card display component
- `components/search-bar.tsx` - Search functionality component

**Data Management:**
- Centralized data in `lib/` directory:
  - `lib/types.ts` - Common TypeScript interfaces (CardItem interface)
  - `lib/list-of-adherants.ts` - Comprehensive adherents data (130+ members)
  - `lib/list-of-bureau.ts` - Board members data
- Partner data defined inline in homepage as async function
- All data includes: id, name, company, description, website, phone, logo, address

**Font System:**
- Multiple Google Fonts loaded: Geist (Sans/Mono), Caveat, Lora, Merriweather
- CSS custom properties for font families
- Weights: 300, 400, 700 for Merriweather

**Styling:**
- Tailwind CSS 4 with PostCSS configuration
- Dark mode support with backdrop-blur effects
- Responsive design: desktop sidebar (`md:ml-20`), mobile hamburger menu
- Custom color scheme with indigo-800 accents and white/glass effects
- React Icons (react-icons) using Heroicons v2

**Image Assets:**
- Logo files: `/public/logo-samy.svg` (main), `/public/logo-clichy-mouv.PNG`, `/public/logo-clichy-mouv2.webp`
- Partner images: `/public/images/partners/` (SVG/WebP)
- Bureau member photos: `/public/images/bureau/` 
- Enterprise photos: `/public/images/photos_entreprises/`
- Generic person avatars: `/public/images/personnes/`

## Key Conventions

**Navigation Pattern:**
- Vertical sidebar on desktop (hidden on mobile with `hidden md:flex`)
- Mobile overlay menu with backdrop blur
- Active state management using `usePathname()`
- Hamburger animation with transform transitions

**Data Patterns:**
- Common `CardItem` interface for all member/business data
- French addresses format: "Street, Postal Code City" 
- Website links with `target="_blank" rel="noopener noreferrer"`
- Phone numbers in French format (01 XX XX XX XX)
- Default logo placeholder: `/7.svg`

**Component Patterns:**
- Client components with `'use client'` for interactivity
- TypeScript interfaces defined in `lib/types.ts`
- Async data functions for server components
- Responsive grids with `md:grid-cols-2 lg:grid-cols-3`

**Environment:**
- Google Analytics with `NEXT_PUBLIC_GA_ID` env variable
- Development mode debugging enabled
- ESLint with Next.js core web vitals and TypeScript rules