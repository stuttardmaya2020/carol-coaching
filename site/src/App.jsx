// The root component. Right now it's a placeholder that proves the fonts
// and colours are wired up. The real home page gets built here with
// `/impeccable shape`, split into components in src/components/.
function App() {
  return (
    <main className="placeholder">
      <p className="placeholder-eyebrow">Carol Fox Coaching</p>
      <h1>
        Talk it through over coffee. <em>One conversation</em> might be all you need.
      </h1>
      <p>
        The new site is being built. This page checks that the fonts and
        colours from <code>src/styles/tokens.css</code> are working.
      </p>
      <a className="placeholder-button" href="mailto:hello@example.com">
        Let&rsquo;s have a coffee
      </a>
    </main>
  )
}

export default App
