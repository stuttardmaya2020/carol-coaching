# How this site works

A plain-English guide to the tech, for learning as we build.

## The big picture

- **React** is a JavaScript library for building pages out of reusable pieces called **components**. A component is a function that returns what should appear on screen, written in **JSX**, which looks like HTML inside JavaScript.
- **Vite** is the build tool. While you work, it runs a local server that refreshes instantly when you save. When you're done, it bundles everything into plain HTML, CSS and JS files in `site/dist/` that any web host can serve.
- **GitHub Pages** hosts those files for free. A **GitHub Action** (an automatic script in `.github/workflows/deploy.yml`) rebuilds and publishes the site every time something is merged into `main`.

## Where things live

```
site/
  index.html             the single HTML page. React fills in <div id="root">
  vite.config.js         Vite settings, including the /carol-coaching/ base path
  package.json           the project's dependencies and commands
  src/
    main.jsx             entry point: puts <App /> into the page
    App.jsx              the root component: header, the current page, footer
    pages/               one file for each page (HomePage, AboutPage…)
    testimonials.js      all of the client testimonials, in one place
    contact.js           placeholder email and phone, in one place
    index.css            base styles for the whole site
    styles/tokens.css    colours, fonts and spacing. Change the design here
    components/          reusable pieces, each with its own .css file
                         (Hero, Accordion, HowIWork, Photo, Button…)
```

## Running it on your Mac

You need Node.js. Install the LTS version from [nodejs.org](https://nodejs.org) (fine on a 2020 MacBook). Then in Terminal:

```bash
git clone https://github.com/stuttardmaya2020/carol-coaching.git
cd carol-coaching/site
npm install        # downloads React, Vite etc. into node_modules/ (once)
npm run dev        # open the link it prints, usually http://localhost:5173/carol-coaching/
```

Edit a file, save, and the browser updates on its own. Press `Ctrl + C` in Terminal to stop.

## Key ideas, as we meet them

- **Components:** `function Hero() { return <section>…</section> }`, then use it with `<Hero />`. Names start with a capital letter.
- **Props:** inputs to a component, like `<Button label="Let's have a coffee" />`. Inside, read them as `function Button({ label })`.
- **className:** JSX uses `className` instead of `class`, because `class` is a reserved word in JavaScript.
- **CSS variables (tokens):** `var(--color-primary)` reads a value from `tokens.css`. Change it once, and it changes everywhere.
- **A CSS file per component:** `Hero.jsx` starts with `import './Hero.css'`. Vite bundles every imported CSS file, so each component's styles sit next to it.
- **Children:** whatever you put between a component's tags arrives as the `children` prop. `<Button href="…">Let's have a coffee</Button>` gives `Button` the text to show.
- **Default props:** `function Button({ variant = 'primary' })` uses `'primary'` when no `variant` is passed.
- **Lists with `.map()`:** `WhatClientsSay.jsx` keeps the quotes in an array. `quotes.map((quote) => <figure … />)` turns each item into some JSX. Each one needs a unique `key` (here `quote.name`) so React can keep track of them.
- **Fragments:** `<>…</>` groups several elements without adding an extra `<div>` to the page.
- **Sharing data between files:** `contact.js` uses `export const EMAIL = …`, and components get it with `import { EMAIL } from '../contact.js'`.
- **Importing images:** `import carolThinking from '../assets/carol-thinking.jpg'` gives you the image's URL, which you pass to `<Photo src={carolThinking} … />`. Vite copies the file into the build and adds the `/carol-coaching/` prefix for you.
- **Choosing what to show with `if`:** `Photo` returns an `<img>` when it has a `src`, and the placeholder otherwise. A component can `return` early like any function.
- **State with `useState`:** props come from outside a component, and state is what it remembers for itself. In `Accordion.jsx`, `const [openId, setOpenId] = useState(null)` gives you the current value (`openId`), a function to change it (`setOpenId`) and a starting value. Calling `setOpenId` makes React run the component again and update the page. Change a normal variable instead and nothing on screen would move.
- **Hooks:** functions starting with `use`, like `useState`. They must be called at the top of a component, never inside a loop or an `if`. That's why `useState` sits above the `.map()`, not inside it.
- **Events with `onClick`:** `onClick={() => setOpenId(…)}` hands React a function to run when the button is clicked. Note the `() =>`. Without it, the code would run while drawing the page, not on the click. A real `<button>` also works with Tab and Enter, at no extra cost.
- **Deciding things in JSX:** `isOpen ? 'Close' : 'Open'` reads as "if open, Close, otherwise Open". Curly braces let any JavaScript value into JSX, and `hidden={!isOpen}` passes one as an attribute.
- **Accessibility attributes:** `aria-expanded={isOpen}` tells screen readers whether a row is open, because they can't see the panel appear. `aria-controls` says which panel the button opens. React keeps both up to date, because they come from the same state as what's on screen.
- **A space between lines in JSX:** JSX drops line breaks, so two `<span>`s on separate lines would have no space between them. `{' '}` adds one back. You'll see it in the headline in `Hero.jsx`.
- **`null` as a starting value:** `useState(null)` means "nothing yet". In `Accordion.jsx` it means no row is open, and `setOpenId(isOpen ? null : stage.id)` closes a row if it's already open.
- **Reusing a component with different data:** `Accordion` doesn't know about career stages. It's given an `items` prop, so Who I help and the six coaching areas on How I work share the same code.
- **JSX as data:** an item's `content` can be JSX, like `content: <p>…</p>`. React treats JSX as a value you can store in an array and show later with `{item.content}`.
- **Showing something only if it exists:** `{item.subtitle && <span>…</span>}` draws the span only when there's a subtitle.
- **Pages with `useEffect`:** `useEffect` is for work outside of drawing the page. In `App.jsx` it listens for the address changing and updates the page title. The `[]` at the end means "set this up once", and `[route]` means "run again when `route` changes". The function it returns removes the listener when it's no longer needed.
- **Hash addresses:** in `#/about`, everything after the `#` never reaches the server. GitHub Pages only has one real page, so this is the simplest way to have several without extra set-up. `App.jsx` looks up the hash in its `pages` list and shows that component.
- **A component in a variable:** `const Page = pages[route].component` then `<Page />` shows whichever page is current. The variable needs a capital letter, like any component.
- **Lazy images:** `loading="lazy"` on an `<img>` tells the browser to wait until the visitor scrolls near it, which makes the first screen faster. `Photo` uses it by default, and the hero's photo of Carol passes `loading="eager"` because it's seen straight away.
- **Variables that change by section:** a CSS variable set on an element applies to everything inside it. `.on-violet` sets `--heading-color` to cream, so headings turn cream in violet sections and stay violet everywhere else, with no extra rules for each section.
- **Overlapping sections:** a negative margin pulls the next section up under a photo, as in `margin-bottom: calc(var(--overlap) * -1)` on the hero's lowest photo. `position: relative` with `z-index: 1` keeps the photo on top, and the section below adds the same amount of padding so its text stays clear.

## Designing with impeccable

1. Open Claude Code in the `carol-coaching` folder.
2. Install impeccable: `npx impeccable install`, or `/plugin` then Discover.
3. Run `/impeccable init`. `PRODUCT.md` is already written, so check it and correct anything.
4. Build: `/impeccable shape` for the home page, then refine with `critique`, `typeset`, `layout` and `polish`, and check with `audit`.
5. Screenshot each round into `design/` and note what changed in `design-log.md`.
