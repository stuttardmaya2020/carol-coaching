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
    App.jsx              the root component (currently a placeholder)
    index.css            base styles for the whole site
    styles/tokens.css    colours, fonts and spacing. Change the design here
    components/          reusable pieces, e.g. Button.jsx (to come)
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

## Designing with impeccable

1. Open Claude Code in the `carol-coaching` folder.
2. Install impeccable: `npx impeccable install`, or `/plugin` then Discover.
3. Run `/impeccable init`. `PRODUCT.md` is already written, so check it and correct anything.
4. Build: `/impeccable shape` for the home page, then refine with `critique`, `typeset`, `layout` and `polish`, and check with `audit`.
5. Screenshot each round into `design/` and note what changed in `design-log.md`.
