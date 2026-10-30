import { EMAIL, COFFEE_MAILTO, PHONE, PHONE_LINK } from '../contact.js'
import './SiteFooter.css'

function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer on-violet">
      <div className="site-footer-inner container">
        <p>Carol Fox Coaching. Coaching in London and remotely.</p>
        <nav aria-label="Footer">
          <ul className="site-footer-links">
            <li><a href="#/">Home</a></li>
            <li><a href="#/how-i-work">How I work</a></li>
            <li><a href="#/about">About Carol</a></li>
            <li><a href="#/get-in-touch">Get in touch</a></li>
            <li><a href={COFFEE_MAILTO}>{EMAIL}</a></li>
            <li><a href={PHONE_LINK}>{PHONE}</a></li>
          </ul>
        </nav>
        <p>© {year} Carol Fox</p>
      </div>
    </footer>
  )
}

export default SiteFooter
