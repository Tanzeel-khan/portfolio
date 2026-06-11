# Tanzeel ur Rehman — Portfolio

Personal portfolio website for **Muhammad Tanzeel ur Rehman**, Senior Software Engineer specializing in React, Next.js, TypeScript, and AI Automation.

**Live:** [tanzeel.dev](https://tanzeel.dev) &nbsp;·&nbsp; **Contact:** ktanzeel184@gmail.com

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, SSG)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Geist Sans & Geist Mono

## Features

- Sticky navbar with mobile hamburger menu
- Hero section with animated profile photo, rotating rings, and floating tech badges
- Scroll-reveal animations on all sections (IntersectionObserver)
- Count-up number animations on stats and project metrics
- Custom trailing cursor (desktop only)
- Shimmer + glow effects on headings
- 8 project case studies with full detail pages (`/projects/[slug]`)
- `/projects` listing page (3-column grid)
- Responsive across all screen sizes

## Project Structure

```
app/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── CountUp.tsx          # count-up animation
│   ├── AnimationProvider.tsx # scroll reveal
│   └── MouseCursor.tsx      # custom cursor
├── data/
│   └── projects.ts          # all 8 project case studies
├── projects/
│   ├── page.tsx             # /projects listing
│   └── [slug]/page.tsx      # dynamic project detail
├── globals.css
├── layout.tsx
└── page.tsx
public/
└── projects/                # project images + profile photo
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Project Images

Drop images into `public/projects/` matching the `image` field in `app/data/projects.ts`:

| File                        | Project                  |
|-----------------------------|--------------------------|
| `me.png`                    | Profile photo (hero)     |
| `customscape.jpg`           | Customscape AI           |
| `lucson.jpg`                | Lucson                   |
| `avetics.jpg`               | Avetics                  |
| `famiglia-doro.jpg`         | Famiglia Doro            |
| `lead-crm.jpg`              | Lead Management CRM      |
| `marz.jpg`                  | Marz                     |
| `dollhouse.png`             | E-Commerce AI Chatbot    |

## Deployment

```bash
pnpm build
```

Deploy to [Vercel](https://vercel.com) — zero configuration required.
