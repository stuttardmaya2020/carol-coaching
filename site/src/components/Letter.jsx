import Button from './Button.jsx'
import Portrait from './Portrait.jsx'
import { COFFEE_MAILTO } from '../contact.js'
import carolPortrait from '../assets/carol-portrait.png'
import './Letter.css'

// The first screen: a short letter from Carol. Each "If you're…" link
// jumps to the matching Stage section further down the page.
function Letter({ stages }) {
  return (
    <section className="letter container" aria-labelledby="letter-title">
      <div className="letter-figure">
        <Portrait
          className="letter-portrait"
          src={carolPortrait}
          alt="Carol Fox in black and white, resting her chin on her hand and looking thoughtfully to one side"
        />
        <p className="letter-caption">Life and business coach, London and remote</p>
      </div>

      <div className="letter-body">
        <h1 id="letter-title" className="letter-text">
          Hello. I’m Carol, and for more than 20 years I’ve helped people work
          out <em>what they want next</em>, and how to get there.
        </h1>
        <p className="letter-text">
          Before coaching, I was a headhunter. Now I coach people at every
          stage, from a first job to the boardroom.
        </p>

        <p className="letter-prompt" id="letter-prompt">Where would you like to start?</p>
        <ul className="letter-links" aria-labelledby="letter-prompt">
          {stages.map((stage) => (
            <li key={stage.id}>
              <a href={`#${stage.id}`}>
                {stage.lead} {stage.phrase}
              </a>
            </li>
          ))}
        </ul>

        <div className="letter-signoff">
          <p className="letter-signature">Carol</p>
          <Button href={COFFEE_MAILTO}>Let’s have a coffee</Button>
          <p className="letter-note">Or a call. It’s on me, with no obligation.</p>
        </div>
      </div>
    </section>
  )
}

export default Letter
