# Andy Chou — Personal CV Website

周慶隆 Andy Chou 的個人履歷網站。React + TypeScript + Tailwind CSS 打造的單頁式 CV，支援中/英文切換與深色模式。

**Live data**: all résumé content (profile, experience, projects, skills, education) lives in [`src/data/resume.ts`](src/data/resume.ts) as bilingual `{ zh, en }` objects — update content there rather than in the components.

## Features

- **Sections**: Hero, About, Experience (timeline), Projects (card list with pagination), Skills, Education, Contact
- **Bilingual**: 中文 / English toggle, persisted to `localStorage`
- **Dark mode**: toggle persisted to `localStorage`
- **Responsive**: mobile-first layout across all sections
- **Scroll reveal**: sections fade/slide in via `IntersectionObserver` ([`useScrollReveal`](src/hooks/useScrollReveal.ts))
- Project cards are clickable through to their GitHub repo (keyboard-accessible), with independent Demo/GitHub links

## Tech Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v3
- [ESLint](https://eslint.org) with `typescript-eslint`

## Getting Started

```bash
npm install
npm run dev       # start dev server (http://localhost:5173)
npm run build     # type-check + production build
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Project Structure

```
src/
├── components/     # Navbar, Hero, About, Experience, Projects, Skills, Education, Contact
├── contexts/       # LanguageContext (zh/en)
├── data/           # resume.ts — all résumé content, bilingual
├── hooks/          # useDarkMode, useScrollReveal
└── App.tsx
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release notes.
