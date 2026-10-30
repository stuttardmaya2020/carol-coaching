# Design log

Dated decisions, feedback and evidence, newest first. This is the raw material for the case study.

## 2026-10-30

- Redesigned Home from two reference screenshots in `design/references/`: black-and-white photos overlapping section edges, a light serif headline and charcoal and stone sections from Ref 1 (The Confidence Collective), and bold full-width colour bands, roman and italic headlines and an accordion from Ref 2 (Cherie). Took the art direction only, none of their copy or fashion posing. This replaces the "letter from Carol" draft and its apricot and lilac.
- New palette: charcoal, cream, pale stone and white, with violet as the one accent, in full-width bands. New section order: hero, who I help, how I work, what clients say, recognition, meet Carol, invitation.
- Photos cropped from the old-site screenshots as stand-ins, at Maya's request. This goes against the "don't crop the screenshots" line in `PRODUCT.md`, which still needs updating or removing. Not used: the photo with Jane. Two grey placeholders name the photos still needed.
- The Meet Carol photo includes Alfie. The alt text describes a Dalmatian and the copy doesn't mention him.
- **To confirm with Carol:** the hero's "One conversation might be all you need" and "One session may be enough" come from the new brief. Her old site says "as few as two sessions", and the 2026-10-28 draft used that. She needs to agree this promise before the site goes live.
- Testimonials are single whole sentences copied exactly from the old site: Jane Millar (graduate), Amanda Jones (mid-career), Kerry Glazer (chief executive).
- The accordion says "Open" and "Close" in words, because the brief rules out icons. These words are also clearer for older visitors than a plus sign.
- Maya's review, after seeing the first version: quotes hard to read, too little of Carol's content compared with the old site, plain, and the white, cream and dark grey sections felt unsure of themselves. She wants one theme, violet and maybe cream, without looking AI-generated, and with clear links to the references.
- Reworked it in response. One theme: violet and cream only, with headlines in violet on cream and text in a violet-black. Quotes are now upright regular serif, not light italic. Took more from Ref 2: a half-and-half split panel, a repeating word band and narrow text columns. A close-up of Carol's hand and watch adds a Ref 1 style detail crop.
- Built the three pages that were still jump links, and brought back the old site's content: "Will coaching help me?" and its seven questions, all six bespoke areas and their questions, what coaching is, homework, how many sessions, costs, her style, her training, and all the testimonials. Her accordion areas keep her questions, which the audit found hard to read as a wall of small grey text.
- Fixed old-site typos: "percieve", "agression", "weeaknesses", "challenging an supportive".
- **To confirm with Carol:** the old site has 11 testimonials, not the 12 `PRODUCT.md` and the audit state. Is she still "studying for a psychology degree with the OU"? Are the old session guidance (two, or six or more) and "One session may be enough" both right, now that they sit together on How I work? Is she still involved with the Coaching Academy and the Association of Executive Coaching?
- Changed the About page opening from the old site's "I have a balanced and full life, and I want you to have the same", which Maya felt sounded full of herself, to "I help people work out what they want next". Also dropped "transform their lives" from the sentence below, for the same reason.
- Removed the Kathleen Saxton line from the site. Maya felt the callout overplayed something Carol mentioned in passing on a call. If Carol wants it back, a quiet sentence in her About bio would suit it better. `PRODUCT.md` and `CLAUDE.md` still list it as content, and the reason it matters: people may read the book and then look her up.
- Removed the repeating word band, which Maya found was cognitive overload. "Incisive, supportive, challenging and fast" stays once on About, as a normal sentence under a plain "How I coach" heading.
- With those two bands gone, three cream sections ran together, so What clients say moved onto a violet band. Text is regular weight in cream (6.5:1).
- Added Maya's generated image of a café table by a window to How I work. Cropped it to remove a sign reading "The Thameside Library Cafe, London", because that café doesn't exist and a visitor might look for it. The original is in `design/photos/`.
- Removed the handwritten font and drawn arrow from the hero note: Maya felt they weren't right for a professional site. Carol's words stay, in Instrument Sans. The site is back to two fonts, and the Ref 2 note is the one idea we chose not to borrow.
- Ran `/impeccable critique` and fixed what it found. The wordmark now says "Carol Fox Coaching" and a note under the hero button says it's on me, because the first screen didn't say what Carol does or that the chat is free. The accordion starts closed with a plain "who it's for" under each title, because opening "Starting out" first told senior visitors the site wasn't for them. Added a phone number to the close (the headline offers a call), a text link after "One session may be enough" (nearly 4,000 pixels on a phone had nothing to tap), and life as well as work to the bio. Swapped the hero photos so Carol faces inward, and capped their size. Tap targets are now 44px and small text moved up to 17px.
- Kept despite the critique: the 120px "Meet Carol" (larger than the hero, but the brief asks for it), and the button opening an email (`CLAUDE.md` allows mailto). Still to ask Carol: what to say about who Kathleen Saxton is. Many visitors won't know, and I shouldn't invent it.
- Maya supplied better photos of Carol and an image of two coffee cups, and asked not to use the smiling photo. Recomposed the hero around two photos: the headline moves left, Carol sits right and looks towards it, and the cups cross into the violet band. Originals are in `design/photos/`, with web-sized copies in `site/src/assets/`.
- Maya can't get a photo of Carol in conversation, but can generate images. Decided that generated images show places and objects only, never Carol or anyone presented as a client: "Only what's true" (`PRODUCT.md`), and a past client should be safe sharing the link. The How I work placeholder now asks for two chairs at a café table.
- About, How I work and Get in touch are still jump links to sections of Home, not separate pages.

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
