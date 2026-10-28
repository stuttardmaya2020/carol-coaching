---
name: Carol Fox Coaching
description: A short, signed letter from a London life and business coach.
colors:
  bg: "#ffffff"
  text: "#1c1b22"
  text-muted: "#5c5866"
  primary: "#6b3fa0"
  primary-dark: "#54307f"
  surface: "#e9e1f4"
  highlight: "#f2b880"
  border: "#e4e0ea"
  placeholder: "#6e6a75"
typography:
  display:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.5rem, 6vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.1
  letter:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.375rem, 1rem + 1.4vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.35
  headline:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.75rem, 1.2rem + 2vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.1
  title:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.1
  body-large:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "6px"
  md: "12px"
  pill: "999px"
spacing:
  "1": "8px"
  "2": "16px"
  "3": "24px"
  "4": "32px"
  "6": "48px"
  "8": "64px"
  "12": "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "8px 32px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.bg}"
  button-light:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.primary-dark}"
    rounded: "{rounded.pill}"
    padding: "8px 32px"
    height: "48px"
  button-light-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-dark}"
  testimonial:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "32px"
  portrait-placeholder:
    backgroundColor: "{colors.placeholder}"
    textColor: "{colors.bg}"
    rounded: "{rounded.md}"
    padding: "16px"
  invitation-band:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.bg}"
    padding: "96px 0"
  how-band:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    padding: "96px 0"
---

# Design system: Carol Fox Coaching

Tokens live in `site/src/styles/tokens.css`. Always use the tokens, never raw hex values or pixel sizes. The values above mirror that file; if they ever disagree, `tokens.css` wins and this file needs updating.

## Direction

Chosen 2026-10-28: the fonts from "Warm editorial" with the colours from "Modern confident" (see `design/mood-boards/mood-board-starter.html`). The result should feel warm and experienced in its type, and clean and current in its colour. Think a thoughtful conversation, not a corporate brochure.

Home reads as a short, signed letter from Carol. The page is mostly white and charcoal, set in a serif at letter size. Colour comes in fields: lilac for quotes and the how-it-works band, deep violet for the close.

## Colour

| Token | Value | Use |
| --- | --- | --- |
| `--color-bg` | #FFFFFF | Page background. Also text on the deep violet close and on placeholders |
| `--color-text` | #1C1B22 | Body text and headings. Also the thin rules between how-it-works steps |
| `--color-text-muted` | #5C5866 | Captions, testimonial names, the footer |
| `--color-primary` | #6B3FA0 | Primary button, links, the italic key phrase in headings, the focus ring |
| `--color-primary-dark` | #54307F | Hover and pressed states. Also the full-bleed background of the closing invitation, and the text on the light button |
| `--color-surface` | #E9E1F4 | Lilac: testimonial cards, the how-it-works band, text selection, light button hover. Body text on the deep violet close |
| `--color-highlight` | #F2B880 | Apricot: only the highlight under a stage heading when it is the jump target |
| `--color-border` | #E4E0EA | Dividers between sections |
| `--color-placeholder` | #6E6A75 | Mid grey for photo placeholders, with a white label |

Use violet sparingly: one main button per screen, and italic violet for the key phrase in a headline. Most of the page is white and charcoal.

**The Deep Violet Close.** The invitation that ends a page sits on a full-bleed `--color-primary-dark` band with white text and an italic white "Carol" signature. Its key phrase stays white and relies on the italic alone, because violet on violet would not read. Use the light button there, never the violet one.

**The Apricot Rule.** Apricot is reserved for one job: the highlight that draws under a stage heading when a visitor has jumped to it (`:target`). Never use it for text, backgrounds, buttons or decoration.

## Type

- **Headlines:** Newsreader, regular weight (400), with italic for emphasis. Large and calm rather than bold.
- **Body and UI:** Instrument Sans, 400 for text, 600 for buttons, links you act on and the main navigation.
- Scale: `--text-sm` 14px, `--text-base` 17px, `--text-lg` 20px, `--text-xl` 28px, `--text-2xl` 40px, `--text-3xl` up to 64px for the closing headline.
- `--text-letter` (22px on phones, 30px on desktop) is Carol's letter: the opening lines of Home, in Newsreader, wrapped like a paragraph.
- `--text-heading` (28px to 40px) is for section headings.
- The "Carol" signature is Newsreader italic at `--text-2xl`, set beside the button it signs.
- Keep running text to about 65 characters wide (`--text-width`). The letter is narrower, about 34 characters.
- Headings use `text-wrap: balance`. Paragraphs use `text-wrap: pretty`.

**The One Phrase Rule.** Each heading has one key phrase in italic. On white it is violet; on deep violet it stays white.

**The No Kicker Rule.** No eyebrow or kicker labels above headings. The heading says it on its own.

## Shape and spacing

- Spacing in steps of 8px (`--space-1` to `--space-12`). Be generous: white space is part of the calm.
- Sections get `--space-12` of vertical padding. Stage sections use `--space-8` on phones.
- Content no wider than `--content-width`. The container's side padding is `--space-3` on phones and `--space-6` from 48rem.
- Two-column layouts (letter, stages, about) start at 56rem. Below that, everything stacks. The how-it-works steps go to three columns at 48rem.
- Portraits: `--portrait-small` above the letter on phones, `--portrait-width` beside it on desktop.
- Buttons are pill-shaped (`--radius-pill`). Cards and portraits use `--radius-md`. Bands are full-bleed with square edges.
- No drop shadows and no colour gradients. Depth comes from flat colour fields: white, lilac, deep violet.

## Motion

- `--ease-out` (fast start, gentle stop) for all transitions. `--duration-slow` for the apricot highlight drawing in.
- Anchor links scroll smoothly, but only when the visitor has not asked for reduced motion. With reduced motion, transitions are instant.

## Focus and selection

- Focus ring: 3px `--color-primary` outline, 3px offset. On the deep violet close it turns white.
- Selected text: lilac background, charcoal text.

## Imagery

- Carol's own black-and-white portraits are the strongest asset. Lead with them.
- Real photos live in `site/src/assets/` with their origin embedded in the file. The letter uses `carol-portrait.png`. Where no photo exists yet, use the labelled placeholder.
- Supporting photos show real conversations and people of mixed ages. Avoid generic stock metaphors (ladders, jumping dancers, handshakes).

## Components

- **Button:** a pill link, at least 48px tall, Instrument Sans 600. Two variants:
  - **Primary:** violet with white text, darker violet on hover. For example "Let's have a coffee". One per screen.
  - **Light:** white with deep violet text, lilac on hover. Only on the deep violet close.
- **Secondary link:** violet text link with a 1px underline, 2px and darker on hover.
- **Letter:** the first screen. Portrait and caption, the letter in `--text-letter`, a muted "Where would you like to start?", three "If you're…" links, then the italic "Carol" signature beside the one primary button, with a short no-obligation note below.
- **Stage:** one section per career stage, with a border on top. The heading repeats the "If you're…" line and ends with a run-on comma, so the body reads as the rest of the sentence. Heading on the left, body and testimonial on the right from 56rem. The apricot highlight draws under the heading when it is the jump target.
- **Testimonial:** a lilac card (`--radius-md`, `--space-4` padding). The quote is in Newsreader italic with curly quotes added by the style, then name and role in Instrument Sans, small and muted. Quotes are copied exactly; "…" marks a shortened quote.
- **How it works:** a full-bleed lilac band. Three steps in order, each topped by a thin charcoal rule. No prices or session lengths.
- **About Carol:** portrait and text side by side from 56rem. The recognition line sits under a border in Newsreader at `--text-xl`.
- **Invitation:** the deep violet close that ends every page. Headline at `--text-3xl`, lilac body text, then the signature, the light button and a phone link.
- **Portrait:** given `src` and `alt`, a square black-and-white photo (`object-fit: cover`). Without one, a 4:5 mid-grey placeholder with a white label in the bottom corner. Screen readers hear "Placeholder: …".
- **Section:** generous vertical padding (`--space-12`), and content no wider than `--content-width`.
