import './SiteHeader.css'

const links = [
  { href: '#/how-i-work', label: 'How I work' },
  { href: '#/about', label: 'About Carol' },
  { href: '#/get-in-touch', label: 'Get in touch' },
]

// route is the page being shown, so its link can be marked as current.
function SiteHeader({ route }) {
  return (
    <header className="site-header">
      <div className="site-header-inner container">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <a className="site-name" href="#/">
          Carol Fox Coaching
        </a>
        <nav aria-label="Main">
          <ul className="site-nav">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} aria-current={route === link.href ? 'page' : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
