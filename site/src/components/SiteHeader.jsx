import './SiteHeader.css'

// For now the links jump to sections of Home. When the other pages
// are built, point them at those pages instead.
function SiteHeader() {
  return (
    <header id="top" className="site-header container">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <a className="site-name" href="#top">
        Carol Fox
      </a>
      <nav aria-label="Main">
        <ul className="site-nav">
          <li><a href="#about">About Carol</a></li>
          <li><a href="#how">How I work</a></li>
          <li><a href="#talk">Get in touch</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default SiteHeader
