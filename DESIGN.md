# Design system: Carol Fox Coaching

Tokens live in `site/src/styles/tokens.css`. Always use the tokens, never raw hex values or pixel sizes.

## Direction

Chosen 2026-10-28: the fonts from "Warm editorial" with the colours from "Modern confident" (see `design/mood-boards/mood-board-starter.html`). The result should feel warm and experienced in its type, and clean and current in its colour. Think a thoughtful conversation, not a corporate brochure.

## Colour

| Token | Value | Use |
| --- | --- | --- |
| `--color-bg` | #FFFFFF | Page background |
| `--color-text` | #1C1B22 | Body text and headings |
| `--color-text-muted` | #5C5866 | Captions and secondary text |
| `--color-primary` | #6B3FA0 | Buttons, links, emphasis in headlines |
| `--color-primary-dark` | #54307F | Hover and pressed states |
| `--color-surface` | #E9E1F4 | Tinted sections, testimonial cards |
| `--color-highlight` | #F2B880 | Small highlights only. Never text, never large areas |
| `--color-border` | #E4E0EA | Dividers and card edges |

Use violet sparingly: one main button per screen, and italic violet for the key phrase in a headline. Most of the page is white and charcoal.

## Type

- **Headlines:** Newsreader, regular weight (400), with italic for emphasis. Large and calm rather than bold.
- **Body and UI:** Instrument Sans, 400 for text, 600 for buttons and labels.
- Scale: `--text-sm` 14px, `--text-base` 17px, `--text-lg` 20px, `--text-xl` 28px, `--text-2xl` 40px, `--text-3xl` up to 64px for the hero.
- Keep running text to about 65 characters wide.
- Small uppercase labels get 0.08em letter-spacing.

## Shape and spacing

- Spacing in steps of 8px (`--space-1` to `--space-12`). Be generous: white space is part of the calm.
- Buttons are pill-shaped (`--radius-pill`). Cards use `--radius-md`.
- No drop shadows or gradients.

## Imagery

- Carol's own black-and-white portraits are the strongest asset. Lead with them.
- Supporting photos show real conversations and people of mixed ages. Avoid generic stock metaphors (ladders, jumping dancers, handshakes).

## Components

- **Primary button:** violet pill with white text, for example "Let's have a coffee". One per screen.
- **Secondary link:** violet text link with an underline.
- **Testimonial:** a quote in Newsreader italic, then name and role in Instrument Sans, muted.
- **Section:** generous vertical padding (`--space-12`), and content no wider than `--content-width`.
