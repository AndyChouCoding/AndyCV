# Changelog

## [Unreleased]
### Added
- Projects section between Experience and Skills, with a paginated card grid (3 items/page on mobile, 4 on tablet, 5 on desktop) showing image, description, tech stack, and demo/GitHub links; first entry is ViteNMS
- Two more Projects entries: SnmpTrafficVerifier (CLI screenshot from the user running it locally) and fakeIG (screenshot from its live Vercel demo, with a Demo link)
- MUI added to Styling/UI skills
- Backend Frameworks skill group (Node.js, Python)

### Changed
- Projects cards now stack vertically (single column, max-w-2xl) instead of a 3-column grid; added a "View All Projects" link below linking to GitHub, pagination controls kept for when there are more than 3 projects
- Updated Experience section to match current LinkedIn history: split ORing role into Frontend Engineer and promoted Mid-level Frontend Engineer entries, corrected company name to ORing Industrial Networking Corp., synced career-break end date, and replaced early-career entry with Sales Attendant at Shin Kong Financial Holdings
- Rewrote experience bullet points with more specific, concrete descriptions (IEC 62443 security work, unit testing, CI/CD)
- Updated headline positioning from Frontend Engineer to Full-Stack Engineer (Hero title/bio, About quick facts, page title/meta description)

### Fixed
- Added top spacing to Hero section on the smallest breakpoint so the avatar doesn't sit flush against the fixed header
- DaBo Data experience entry had an English string in its Chinese title field (`title.zh`); replaced with a proper Chinese translation
- Projects grid capped at 3 columns/items per page (was up to 5); the 5-column grid made cards too narrow and left the layout looking unbalanced when there are few projects
- Projects section heading wasn't aligned with the other sections' headings (missing the 200px label-sidebar layout used elsewhere)
- Projects section still used a wider `max-w-6xl` container left over from the earlier 5-column grid; since content is centered, this shifted its left edge relative to every other section (visible at desktop widths above ~1024px). Reverted to `max-w-5xl` to match
- Projects card list sat outside the label-sidebar grid (aligned with the label column, not the heading); nested it into the same content column as the heading, matching Education/Experience/Skills
- SnmpTrafficVerifier's thumbnail (a wide terminal screenshot, ~4.1:1) was being cropped hard by the 16:9 `aspect-video` + `object-cover` card image; padded the source image to 16:9 with black letterboxing (matching the terminal's own background) so it now displays in full

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
