# Carol Fox Coaching website

Redesign of a coach's website, built by Maya (product designer) as a portfolio case study. The full brief, Define work and audit are in the Claude Doc linked from README.md.

## Brief in one paragraph

Carol Fox is a London-based life and business coach and a former headhunter. Most clients come through referrals and range from new graduates to C-suite leaders. The site must turn a referred visitor into an enquiry: an informal first chat over coffee (or a call), paid for by Carol, with no obligation. There is no online booking or payment.

## Content rules

- Contact details are placeholders until Carol confirms them: `hello@example.com`, `07700 900000` (a reserved UK test number). Never use the real ones from the old site.
- Do not show an office address. Say Carol coaches in London and remotely.
- Do not use the old home page photo of Carol with Jane.
- Photos with Alfie (her Dalmatian) may be used, but he has passed away, so the copy must not describe him as current.
- The Kathleen Saxton recognition is praise: she acknowledged Carol as a leader she enjoyed working with, in a book about leadership and toxic leadership. The wording must never suggest Carol is a toxic leader.
- Use UK English.

## Voice

Supportive, incisive and quick. Plain words and short sentences, with no pressure, jargon or hard sell. Write for every career stage.

## Structure

Home (tells the whole story on one scroll), About Carol, How I work, Get in touch. Every page ends with an invitation to talk.

## Build

- React + Vite app in `site/`, deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`. It doesn't need to be functional beyond a contact form placeholder or mailto link.
- Design rules are in `DESIGN.md` and the tokens in `site/src/styles/tokens.css`. Use tokens, never raw values. Product context is in `PRODUCT.md`.
- Maya is learning React. When adding code, keep it simple and idiomatic, and explain new concepts in `LEARNING.md` when they first appear.
- Target WCAG 2.2 AA and Lighthouse 90+.
- Log notable design decisions in `design-log.md`.
