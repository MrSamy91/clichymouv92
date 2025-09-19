# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for Clichymouv92, an association for movement and wellness in Clichy-la-Garenne. The site is built with React 19, TypeScript, and Tailwind CSS 4.

## Common Commands

**Development:**
```bash
pnpm run dev          # Start development server with Turbopack
pnpm run build        # Build for production with Turbopack
pnpm run start        # Start production server
pnpm run lint         # Run ESLint
```

**Package Manager:** This project uses pnpm (evidenced by pnpm-lock.yaml)

## Architecture

**App Router Structure:**
- Uses Next.js 15 App Router (`app/` directory)
- Each page is a `page.tsx` file in its directory
- Root layout in `app/layout.tsx` includes global navbar
- French language site (`lang="fr"` in layout)

**Key Pages:**
- `/` - Homepage with hero section
- `/about` - About page with 4 sections: Notre But, Nos Moyens, Notre Réseau, Nos Valeurs
- `/partners` - Partners page displaying local business partners
- `/contact` - Contact page
- `/projets` - Projects page

**Components Architecture:**
- `components/navbar.tsx` - Main navigation with mobile hamburger menu, uses logo image
- `components/partner-list.tsx` - Displays partner cards with images, addresses, and website links
- `components/caroussel-partner.tsx` - Partner carousel component

**Data Patterns:**
- Partners data is defined directly in `app/partners/page.tsx` as async function
- Partner interface includes: id, name, company, type, description, website, logo, address
- Partner images stored in `/public/images/personnes/` directory
- Logo image: `/public/logo-clichy-mouv.PNG`

**Styling:**
- Tailwind CSS 4 for styling
- Dark mode support throughout components
- Responsive design patterns (md:, lg: breakpoints)
- Geist fonts (Sans and Mono) loaded via next/font/google

**Image Handling:**
- Uses `next/image` for optimized image loading
- Partner photos stored in `/public/images/personnes/`
- Logo and other assets in `/public/`

## Key Conventions

**Component Patterns:**
- TypeScript interfaces defined inline with components
- Dark mode classes: `dark:bg-gray-800`, `dark:text-white`
- Responsive grids: `grid md:grid-cols-2 lg:grid-cols-3`
- Client components use `'use client'` directive when needed

**Navigation:**
- Navbar uses `usePathname()` for active state management
- Mobile menu with backdrop and hamburger animation
- Logo links to homepage with `onClick={closeMenu}`

**Content Structure:**
- French content throughout
- Address format: "Street, Postal Code City"
- Website links open in new tabs with `target="_blank" rel="noopener noreferrer"`