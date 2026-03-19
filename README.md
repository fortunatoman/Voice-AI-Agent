# Voice AI Agent Platform

A SaaS Voice AI Agent platform built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS. The app provides operations dashboards, user and agent management, subscriptions, prompts, integrations, and configuration screens aligned with the official design.

## Design

- **[Figma: SaaS Voice AI Agent Platform](https://www.figma.com/design/4PdXME2dtbUFrmMiy5p5hf/Saas-Voice-AI-Agent-Platform?node-id=0-1&p=f&t=3QoBrQyHAlc55QKj-0)** — UI design reference for this project.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Tailwind Animate
- **UI:** Radix UI primitives, shadcn-style components (`src/components/ui/`), Lucide icons
- **Forms & validation:** React Hook Form, Zod, `@hookform/resolvers`
- **Charts & data:** Recharts, date-fns
- **Other:** next-themes, sonner (toast), cmdk, vaul (drawer), react-resizable-panels

## Project Structure

- `src/app/` — Next.js App Router pages and layout
- `src/components/` — Feature and shared UI components
- `src/components/ui/` — Reusable UI primitives (buttons, cards, dialogs, etc.)
- `src/hooks/` — Custom React hooks
- Path alias: `@/*` → `./src/*`

## Features

- **Auth:** Sign in, Sign up, Reset password (email + update), Email verification
- **Operations:** Dashboard (metrics, call analytics, platform usage, system health, heatmap, alerts), User Management, Agents Monitoring (table + per-agent user view), Subscription Management, Prompts Management
- **Config:** Integrations (with service detail page), Pricing Plans, Email Management, Settings
- **Other:** Audit Logs, Update success flow
- **Layout:** Responsive sidebar navigation, header; mobile hamburger menu and overlay

## Getting Started

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000). The root path redirects to `/signin`.

## Scripts

| Command   | Description           |
| --------- | --------------------- |
| `npm run dev`   | Start dev server      |
| `npm run build` | Production build      |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint            |

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub](https://github.com/vercel/next.js)

## Deploy on Vercel

[Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) supports one-click deployment for Next.js. See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

---

Last updated: 2026-03-18
