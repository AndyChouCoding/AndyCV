# Changelog

## [Unreleased]
### Changed
- Shin Kong Financial Holdings experience title changed from Sales Attendant to Financial Advisor

## [v1.1.0] - 2026-08-24
### Added
- Projects section (Experience → Projects → Skills): cards show image, description, tech stack, and Demo/GitHub links, stacked vertically with pagination once there are more than 3 entries; ships with three projects — ViteNMS, SnmpTrafficVerifier, fakeIG
- Project cards are clickable through to their GitHub repo (keyboard-accessible); Demo/GitHub links still work independently
- "View All Projects" link below the section, linking to the GitHub profile
- MUI added to Styling/UI skills; new Backend Frameworks skill group (Node.js, Python)

### Changed
- Synced Experience section with current LinkedIn history: split the ORing role into Frontend Engineer → Mid-level Frontend Engineer (reflecting the promotion), corrected the company name, synced the career-break end date, and replaced the early-career entry with Sales Attendant at Shin Kong Financial Holdings
- Rewrote experience bullet points with more specific, concrete descriptions (IEC 62443 security work, unit testing, CI/CD)
- Repositioned headline from Frontend Engineer to Full-Stack Engineer (Hero title/bio, About quick facts, page title/meta description)

### Fixed
- Hero avatar no longer sits flush against the fixed header on the smallest breakpoint
- Corrected an English string that had leaked into a Chinese title field (DaBo Data experience entry)
- Resolved several Projects section layout/alignment issues so its heading and content now line up with every other section
- SnmpTrafficVerifier's thumbnail no longer gets cropped — the source image was padded to match the card's aspect ratio

## [v1.0.0] - 2026-05-13

### Added
- Hero section with profile photo (extracted from PDF), name, title, email and GitHub links
- About section with bilingual bio and quick facts
- Experience section with vertical timeline (4 work entries)
- Skills section with categorized tag badges (Frontend Frameworks, Styling/UI, Languages/Tools, Design Tools, AI Tools)
- Education section with school card
- Contact section with email, phone, GitHub cards and footer
- Dark mode toggle with localStorage persistence
- Chinese/English language toggle (ZH/EN) with localStorage persistence
- Sticky navbar with smooth scroll navigation and mobile hamburger menu
- RWD layout — mobile-first, responsive across all screen sizes
- Vite + React + TypeScript + Tailwind CSS v3 setup
- Lora (display) + DM Sans (body) font pairing via Google Fonts
