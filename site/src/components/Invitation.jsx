import Button from './Button.jsx'
import { COFFEE_MAILTO, EMAIL, PHONE, PHONE_LINK } from '../contact.js'
import './Invitation.css'

// The invitation to talk that ends every page.
function Invitation() {
  return (
    <section id="talk" className="invitation on-violet" aria-labelledby="talk-title">
      <div className="invitation-inner container">
        <h2 id="talk-title" className="invitation-title">
          <span className="line">A coffee or a call, <em>on me</em>.</span>{' '}
          <span className="line">No obligation.</span>
        </h2>
        <div className="invitation-actions">
          <Button href={COFFEE_MAILTO} variant="light">
            Let’s have a coffee
          </Button>
          <a className="invitation-link" href={COFFEE_MAILTO}>
            {EMAIL}
          </a>
          <a className="invitation-link" href={PHONE_LINK}>
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Invitation
