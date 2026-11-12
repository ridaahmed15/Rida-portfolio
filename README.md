# Rida Ahmed — AI Engineer Portfolio

A dark-mode, animation-rich personal portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS 4**, **shadcn/ui**, **Framer Motion**, and **Prisma + SQLite**.

## Requirements

- **Node.js 20.9+** (or **Bun 1.2+**) — check with `node -v`
- npm (ships with Node) or [Bun](https://bun.sh)

> Windows users: run the commands inside WSL or Git Bash for the best experience.

## Quick Start (Local Machine)

```bash
# 1. Extract the zip, then open a terminal in the extracted folder

# 2. Install dependencies
npm install          # or: bun install

# 3. Create the SQLite database (from the Prisma schema)
npx prisma db push   # or: bun run db:push

# 4. Start the dev server
npm run dev          # or: bun run dev
```

Open **http://localhost:3000** in your browser.

## Production Build

```bash
npm run build
npm start            # serves the optimized standalone build
```

## What's Inside

```
├── src/
│   ├── app/
│   │   ├── page.tsx              # Assembles the one-page portfolio
│   │   ├── layout.tsx            # Metadata, fonts, dark theme
│   │   ├── globals.css           # Dark emerald theme + animations
│   │   └── api/contact/route.ts  # POST endpoint saving messages
│   ├── components/portfolio/     # All portfolio sections
│   │   ├── navbar.tsx            # Sticky blur navbar + mobile menu
│   │   ├── hero.tsx              # Typewriter, floating chips, photo
│   │   ├── about.tsx             # Bio, animated counters, quick info
│   │   ├── expertise.tsx         # 6 AI specialization cards
│   │   ├── skills.tsx            # Marquee, skill bars, toolbox
│   │   ├── projects.tsx          # 6 featured projects
│   │   ├── experience.tsx        # Career timeline
│   │   ├── education.tsx         # Degree + certifications
│   │   ├── contact.tsx           # Working contact form
│   │   └── footer.tsx            # Sticky footer
│   └── lib/portfolio-data.ts     # ★ ALL editable content lives here
├── public/
│   ├── profile.png               # Your profile photo
│   └── projects/                 # AI-generated project thumbnails
├── prisma/schema.prisma          # ContactMessage model
└── db/                           # SQLite database lives here (auto-created)
```

## Customizing Content

Edit **`src/lib/portfolio-data.ts`** — every name, link, project, skill, experience entry, and certification is centralized there. Replace the sample projects with your real repositories, update stats, and adjust certifications as needed.

- Profile photo: replace `public/profile.png` (square image works best)
- Project thumbnails: replace files in `public/projects/`
- Colors: tweak the emerald/teal accent in `src/app/globals.css` (`--primary`)

## Contact Form

Messages submitted via the form are validated (client + server with Zod) and stored in SQLite through Prisma (`ContactMessage` table). Inspect them anytime:

```bash
npx prisma studio
```

## Deploying

Deploy anywhere Node.js runs (Vercel, Railway, Render, a VPS). For Vercel, note that the SQLite file is local-only — swap `prisma/schema.prisma` to a hosted provider (e.g., PostgreSQL) if you need persistent form submissions in production.
"# Rida-portfolio" 
