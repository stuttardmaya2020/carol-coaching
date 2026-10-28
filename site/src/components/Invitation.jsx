import Button from './Button.jsx'
import { COFFEE_MAILTO, PHONE, PHONE_LINK } from '../contact.js'
import './Invitation.css'

// The invitation to talk that ends every page.
function Invitation() {
  return (
    <section id="talk" className="invitation" aria-labelledby="talk-title">
      <div className="container invitation-inner">
        <h2 id="talk-title" className="invitation-title">
          Let’s have <em>a coffee</em>.
        </h2>
        <p className="invitation-text">
          Tell me a little about what’s on your mind and we’ll find a time.
          A coffee in London or a call, wherever you are. It’s on me, with
          no obligation.
        </p>
        <div className="invitation-actions">
          <p className="invitation-signature">Carol</p>
          <Button href={COFFEE_MAILTO} variant="light">
            Email Carol
          </Button>
          <p>
            Or call <a href={PHONE_LINK}>{PHONE}</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Invitation
