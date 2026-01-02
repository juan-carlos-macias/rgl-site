# RGL Site - B2B Electrical Engineering & Construction

Production-ready bilingual (ES/EN) marketing site built with Astro, TailwindCSS, and Sanity CMS.

## Tech Stack

- **Framework**: Astro (latest)
- **CMS**: Sanity (Headless)
- **Styling**: TailwindCSS
- **Deployment**: Vercel (Frontend) + Sanity (Studio)
- **Analytics**: Google Tag Manager & GA4

## Features

- **Performance**: Static Site Generation (SSG) with minimal JS.
- **Conversion**: Optimized landing pages for Search Ads.
- **SEO**: Dynamic metadata, hreflang, sitemap.xml, Schema.org (JSON-LD).
- **i18n**: Full bilingual support (/es, /en) with language switcher.
- **Sanity integration**: All marketing content managed from a sleek CMS.

## Development

### Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Configure environment variables (`.env`):
   ```env
   SANITY_PROJECT_ID="your_id"
   SANITY_DATASET="production"
   SANITY_API_VERSION="2024-03-05"
   GTM_ID="GTM-XXXXXXX"
   ```

### Commands

- `pnpm dev:astro`: Run Astro development server.
- `pnpm dev:sanity`: Run Sanity Studio locally.
- `pnpm dev:all`: Run both concurrently.
- `pnpm build`: Build the production site.

## Repository Structure

- `/src`: Astro source code.
- `/sanity`: Sanity CMS schemas and configuration.
- `/public`: Static assets.

## SEO & Tracking

Tracking is managed via GTM. Events fired:
- `form_submit`: On contact form success.
- `click_call`: When clicking phone numbers.
- `click_whatsapp`: When clicking WhatsApp buttons.
