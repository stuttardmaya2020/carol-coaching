---
target: home page
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:/Users/mayastuttard/Desktop/Projects/Carol Fox Coaching/carol-coaching/site/src/Home.jsx"
target_fingerprint: "sha256:8a0e24848d65407f7749bff69d786c964169e91e65134678c30323efea71aaec"
target_path: /Users/mayastuttard/Desktop/Projects/Carol Fox Coaching/carol-coaching/site/src/Home.jsx
timestamp: 2026-10-30T16-08-07Z
slug: site-src-home-jsx
---
Method: dual-agent (A: design review · B: detector and browser evidence). Scores are for the build before fixes. All findings below were then fixed unless marked as kept.

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | System status | 3 | Mailto hand-off gives no notice |
| 2 | Real world | 3 | "Finding your feet" and "Leading the way" need decoding |
| 3 | Control | 3 | Nothing traps |
| 4 | Consistency | 3 | Meet Carol H2 outranks the H1 (kept: brief) |
| 5 | Error prevention | 2 | Button doesn't signal that it opens email |
| 6 | Recognition | 2 | Stage text hidden; "on me" absent from hero |
| 7 | Flexibility | n/a | Persuade surface |
| 8 | Minimalist | 3 | Disciplined |
| 9 | Error recovery | 2 | No phone fallback |
| 10 | Help | n/a | Persuade surface |
| | Total | 21/32 | Acceptable, near Good |

Priority issues:
- [P1] First screen didn't say she's a coach or that the chat is free. Fixed.
- [P1] Accordion default spoke past leaders; labels didn't self-select. Fixed.
- [P1] A call offered with no number. Fixed. Mailto-only hero button kept.
- [P2] About 3,970px on phone with nothing to tap. Fixed with a text link.
- [P2] Hero faces looked out of the page; tablet photos upscaled. Fixed.
- [P3] How I work photo clipped the accordion's last rule at 1372px and wider. Fixed.

Detector: source scan clean. URL scan's only remaining finding is italic-serif-display, 6 headings: false positive, the brief pins it, and only the em phrases are italic. oversized-h1 fired at 1440 wide before fixes (5 lines, 44vh) and wasn't rechecked at that width afterwards: the brief pins large display type, and the hero is still 5 lines. Instrument Sans overlay banner: pinned, false positive. All measured text pairs pass AA. Tap targets raised to 44px.
