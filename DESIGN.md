---
name: Carol Fox Coaching
description: Violet and cream, with black-and-white photos crossing bold full-width bands.
colors:
  cream: "#f6f0e4"
  primary: "#6b3fa0"
  primary-dark: "#54307f"
  deep: "#38205c"
  ink: "#2b1a40"
  text-muted: "#5f4f73"
  text-on-violet: "#e6dcf2"
  rule: "#cbbfd9"
  rule-on-violet: "#b9a3d4"
  placeholder: "#6e6a75"
typography:
  title:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "clamp(4rem, 1.5rem + 9vw, 7.5rem)"
    fontWeight: 400
    lineHeight: 1.05
  display:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.75rem, 1rem + 4vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.05
  heading:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2.6vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.05
  quote:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.5rem, 1.25rem + 1.1vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "6px"
  pill: "999px"
spacing:
  "1": "8px"
  "2": "16px"
  "3": "24px"
  "4": "32px"
  "6": "48px"
  "8": "64px"
  "12": "96px"
  "16": "128px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "8px 32px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.cream}"
  button-light:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.deep}"
    rounded: "{rounded.pill}"
    padding: "8px 32px"
    height: "48px"
  button-light-hover:
    backgroundColor: "{colors.text-on-violet}"
    textColor: "{colors.deep}"
  photo-placeholder:
    backgroundColor: "{colors.placeholder}"
    textColor: "#ffffff"
    padding: "16px"
---

# Design system: Carol Fox Coaching

Tokens live in `site/src/styles/tokens.css`. Always use the tokens, never raw hex values or pixel sizes. The values above mirror that file; if they ever disagree, `tokens.css` wins and this file needs updating.

## Direction

Reworked 2026-10-30 after Maya's review: one theme, violet and cream, leaning on Ref 2 in `design/references/` (violet where it uses red). From Ref 2: headlines in the accent colour on cream, full-width colour bands, an accordion in a band, a half-and-half split panel, and two narrow columns of text set off to one side. From Ref 1: black-and-white photos crossing section edges, and detail crops.

To keep it from looking machine-made, spend the page on real things: Carol's photos at a generous size, her own words, and uneven layouts. Don't add decoration to make up for missing content.

## Colour

| Token | Value | Use |
| --- | --- | --- |
| `--color-cream` | #F6F0E4 | The page. Text on violet |
| `--color-primary` | #6B3FA0 | Headlines on cream, full-width bands (Who I help, What clients say), links, the primary button |
| `--color-primary-dark` | #54307F | Hover, quotes, and Carol's questions on cream |
| `--color-deep` | #38205C | The split panel, the close, the footer |
| `--color-ink` | #2B1A40 | Reading text on cream |
| `--color-text-muted` | #5F4F73 | Quote roles on cream |
| `--color-text-on-violet` | #E6DCF2 | Secondary text on violet and deep violet |
| `--color-rule` / `--color-rule-on-violet` | #CBBFD9 / #B9A3D4 | Thin rules |
| `--color-placeholder` | #6E6A75 | Photos still needed, with a white label |

**The One Theme Rule.** Violet and cream, nothing else. No charcoal, grey or white sections, and no second accent. The only grey on the page is in the photos and placeholders.

Add `.on-violet` to any violet or deep violet section; it turns headlines, links and the focus ring cream.

## Type

- **Headlines:** Newsreader, regular weight, tightly spaced, in violet on cream and cream on violet. Italic picks out the words that matter.
- **Body and UI:** Instrument Sans, 400 for text, 600 for buttons and client names. Reading text is never below `--text-base`. `--text-sm` is only for placeholder labels.
- **Quotes:** Newsreader upright at regular weight. Never long passages in light italic, which Maya found hard to read.
- Keep running text to about 65 characters wide (`--text-width`).
- Headings use `text-wrap: balance`. Paragraphs use `text-wrap: pretty`.

**The No Kicker Rule.** No eyebrow or kicker labels above headings. The heading says it on its own.

## Shape and spacing

- Spacing in steps of 8px (`--space-1` to `--space-16`). Be generous.
- Content no wider than `--content-width`. Anything you tap is at least `--tap-target` (44px) tall.
- Photos and bands have square edges. Only buttons are rounded (`--radius-pill`).
- No cards, drop shadows, gradients or icons.

**The Crossing Rule.** A photo crossing a section edge goes over by `--overlap`, using a negative margin. The neighbouring section adds at least the same padding so its text stays clear.

## Motion

- `--ease-out` for all transitions, `--duration-fast` for hovers.

## Focus and selection

- Focus ring: 3px outline, 3px offset. Violet on cream, cream on violet.
- Selected text: violet background, cream text.

## Imagery

- Carol's own black-and-white photos are the strongest asset. Lead with them, and use detail crops to get more from each one.
- Originals are in `design/photos/`, with web-sized copies in `site/src/assets/`. Never use the photo with Jane or the smiling crop from the old banner. Crop out invented details in generated images, such as business names.
- Generated images may show places and objects only. Never generate Carol or anyone presented as a client, because a referred visitor would take them as real.
- Where no photo exists, use the grey placeholder, labelled "Photo needed: …".

## Pages

Addresses use a hash (`#/about`), so GitHub Pages needs no set-up. Every page ends with the Invitation.

- **Home:** Hero, Who I help, Will coaching help me?, How I work, What clients say, Meet Carol, Invitation.
- **How I work:** the first coffee, what coaching is, six coaching areas in an accordion, questions people ask.
- **About Carol:** her background, style and development.
- **Get in touch:** how to reach her, then the Invitation.

## Components

- **Button:** a pill link, at least 48px tall. One per screen. **Primary** on cream, **light** on violet.
- **Text link:** `.text-link`, underlined at `--text-lg`, leading to a page with more.
- **Photo:** given `src` and `alt`, an image that fills whatever size its section gives it. Without them, a grey placeholder. Lazy-loaded unless `loading="eager"` is passed.
- **Hero:** each sentence on a new line, the primary button, a short note in Carol's words, then Carol's photo running off the right edge and the cups crossing into the violet band.
- **Accordion:** rows on a violet band, one open at a time, all closed to start. The words Open and Close signal the action, not an icon. Used for Who I help (with a "who it's for" subtitle) and the six coaching areas.
- **Will coaching help me?:** a split: Carol's questions on cream, with a detail photo and her ambition on deep violet.
- **What clients say:** a violet band, with three short highlights, stepped across the page, then a button that reveals all 11 in full. Text is copied exactly from `testimonials.js`.
- **Pull quote:** one short quote on a page.
- **Meet Carol:** the title at `--text-title`, a short bio, a link to About, and a photo crossing into the Invitation.
- **Invitation:** the deep violet close on every page: each sentence on a new line, the light button, email and phone.
- **Page columns:** `.page-columns`, two narrow columns of text pushed to the right from 48rem, as in Ref 2.
