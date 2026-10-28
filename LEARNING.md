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
    App.jsx              the root component: header, page, footer
    Home.jsx             the Home page, including the three career stages
    contact.js           placeholder email and phone, in one place
    index.css            base styles for the whole site
    styles/tokens.css    colours, fonts and spacing. Change the design here
    components/          reusable pieces, each with its own .css file
                         (Button, Letter, Stage, Testimonial, Invitation…)
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
- **A CSS file per component:** `Letter.jsx` starts with `import './Letter.css'`. Vite bundles every imported CSS file, so each component's styles sit next to it.
- **Children:** whatever you put between a component's tags arrives as the `children` prop. `<Button href="…">Let's have a coffee</Button>` gives `Button` the text to show.
- **Default props:** `function Button({ variant = 'primary' })` uses `'primary'` when no `variant` is passed.
- **Lists with `.map()`:** `Home.jsx` keeps the three stages in an array. `stages.map((stage) => <Stage … />)` turns each item into a component. Each one needs a unique `key` (here `stage.id`) so React can keep track of them.
- **Spreading props:** `<Stage {...stage} />` passes every field of the `stage` object as a prop. It's the same as writing `id={stage.id} lead={stage.lead}` and so on.
- **Fragments:** `<>…</>` groups several elements without adding an extra `<div>` to the page.
- **Sharing data between files:** `contact.js` uses `export const EMAIL = …`, and components get it with `import { EMAIL } from '../contact.js'`.
- **Importing images:** `import carolPortrait from '../assets/carol-portrait.png'` gives you the image's URL, which you pass to `<img src={carolPortrait} />`. Vite copies the file into the build and adds the `/carol-coaching/` prefix for you.
- **Choosing what to show with `if`:** `Portrait` returns an `<img>` when it has a `src`, and the placeholder otherwise. A component can `return` early like any function.
- **Jump links and `:target`:** a link to `#mid-career` scrolls to the element with `id="mid-career"`. CSS can style whichever section is the current target with `.stage:target`. That's how the apricot highlight works, with no JavaScript.

## Designing with impeccable

1. Open Claude Code in the `carol-coaching` folder.
2. Install impeccable: `npx impeccable install`, or `/plugin` then Discover.
3. Run `/impeccable init`. `PRODUCT.md` is already written, so check it and correct anything.
4. Build: `/impeccable shape` for the home page, then refine with `critique`, `typeset`, `layout` and `polish`, and check with `audit`.
5. Screenshot each round into `design/` and note what changed in `design-log.md`.
