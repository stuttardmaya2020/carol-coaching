import './SiteFooter.css'

function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer container">
      <p>Carol Fox Coaching. Coaching in London and remotely.</p>
      <p>© {year} Carol Fox</p>
    </footer>
  )
}

export default SiteFooter
