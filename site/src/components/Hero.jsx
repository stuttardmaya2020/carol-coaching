import Button from './Button.jsx'
import Photo from './Photo.jsx'
import { COFFEE_MAILTO } from '../contact.js'
import carolThinking from '../assets/carol-thinking.jpg'
import twoCoffeeCups from '../assets/two-coffee-cups.jpg'
import './Hero.css'

// The first screen: one line, one button, two staggered photos.
// Carol looks towards the line, and the cups cross into the violet band below.
function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title" className="hero-title">
          <span className="line">Talk it through <em>over coffee</em>.</span>{' '}
          <span className="line">One conversation might be all you need.</span>
        </h1>
        <div className="hero-action">
          <Button href={COFFEE_MAILTO}>Let’s have a coffee</Button>
          <p className="hero-note">No strings attached, and on me.</p>
        </div>
      </div>
      <Photo
        className="hero-photo-carol"
        src={carolThinking}
        alt="Carol Fox in black and white, resting her chin on her hand and looking thoughtfully to one side"
        loading="eager"
      />
      <Photo
        className="hero-photo-coffee"
        src={twoCoffeeCups}
        alt="Two cups of coffee on saucers, side by side on a worn wooden table, in black and white"
      />
    </section>
  )
}

export default Hero
