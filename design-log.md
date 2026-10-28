# Design log

Dated decisions, feedback and evidence, newest first. This is the raw material for the case study.

## 2026-10-28

- Added Carol's black-and-white portrait (chin on hand) to the letter on Home, in place of the placeholder. It's only 232 × 228 pixels, which is sharp on phones but soft on Retina desktops. I need the full-resolution original from Carol. The About section keeps a placeholder until there's a second photo.
- Built the first draft of Home in React, as "a letter from Carol". The first screen is a short signed letter beside a small portrait, with three "If you're…" links (starting out, mid-career, leading) and the coffee button. Each link jumps to that stage's section, and an apricot highlight draws under its heading. Then come how it works, about Carol, and a deep violet invitation to talk. Screenshots are in `.impeccable/review/`.
- Shaped Home with impeccable. I chose three career-stage doors early and Carol leading the first screen. Of three structures (a first conversation, the portrait as the door, a letter from Carol), I picked the letter.
- Testimonials on Home: Alex Quinan (graduate), Amanda Jones (mid-career, shortened with "…") and Kerry Glazer (chief executive), copied exactly from the old site.
- Copy uses "as few as two sessions" from Carol's old How coaching works page, not "one session", which PRODUCT.md had assumed.
- On phones, the portrait shrinks and the header tightens so that the letter, all three links and the coffee button fit on a 390 × 844 screen.
- Updated `PRODUCT.md` to the current impeccable schema. Confirmed positioning: one coach for every career stage, a former headhunter's eye, and a first step that is a coffee on her. Testimonials can be quoted with names and roles. Prices and session formats stay undecided, and photos are placeholders until the original files arrive.
- Decided to skip showing Carol mood boards. Choosing between two abstract boards could confuse her, so she'll react to a real coded first draft instead.
- Chosen direction: Newsreader and Instrument Sans fonts (from "Warm editorial") with the white, violet, lilac and apricot palette (from "Modern confident"). Warm, experienced type with clean, current colour.
- Set up the React and Vite project in `site/` with design tokens, `PRODUCT.md` and `DESIGN.md` for impeccable, and a GitHub Pages deploy. Placeholder screenshot: `design/placeholder-2026-10-28.png`.
- Mood board starter made with two directions for Carol to choose between: A "Warm editorial" (oat, plum, Newsreader and Instrument Sans) and B "Modern confident" (white, violet, apricot, Bricolage Grotesque and Figtree). Both use the same layout so Carol compares feeling, not arrangement. Mood boards aren't strictly part of UCD, but they're a cheap way to agree a direction with the client before building.
- Comparable site review of 8 coaching sites done (see `research/comparable-sites/`). Carol's edge is warmth and breadth: competitors narrow to one audience, and none offers anything as friendly as her coffee.
- Tools decision: use Figma's free plan for mood boards and rough wireframes only. Do the high-fidelity design in code (design in the browser with Claude Code and impeccable), and screenshot each iteration here. Build with React and Vite, deployed to GitHub Pages. Maya also wants to learn React along the way.
- Uploaded screenshots of all six pages of the current site to `research/current-site/screenshots/`.
- Current-site audit done from the screenshots. Main finding: strong content (12 testimonials, a coffee-first offer, solid credentials) but no clear call to action, and the best material is buried on inner pages.
- Confirmed that the home page photo of Carol with another woman is the Jane photo to remove.
- Alfie, Carol's Dalmatian, has passed away. The photos with him can stay if Carol wants, but the copy should not present him as a current part of her life.
- Carol may no longer have the Dulwich office. She is London-based and coaches remotely. Contact details on the new site use placeholders until confirmed.
- Process decision: lean UCD. No client or referrer interviews, as they aren't practical for this project. Went straight from the kickoff call to Define, with testing planned with Carol plus 3 to 5 people of mixed ages (Maya's partner, parents and others).
- Hosting decision: preview on GitHub Pages first, then move to Carol's domain once she approves.
- Tooling: this repo for code, research and the log; Figma for mood boards and wireframes.
- First drafts of the project brief, UCD plan and Define work written.

## 2026-10-19

- Kickoff call with Carol. Notes are in the project brief.
