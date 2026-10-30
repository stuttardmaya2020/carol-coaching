import Invitation from '../components/Invitation.jsx'
import Photo from '../components/Photo.jsx'
import twoCoffeeCups from '../assets/two-coffee-cups.jpg'
import './pages.css'

function GetInTouchPage() {
  return (
    <>
      <section className="page-intro container" aria-labelledby="touch-title">
        <h1 id="touch-title" className="page-title">
          The easiest way to reach me is <em>directly</em>.
        </h1>
        <div className="page-columns">
          <p>
            Call me or send me an email. Tell me a little about what’s on your
            mind, and I’ll reply myself to find a time.
          </p>
          <p>
            I coach in London and remotely, so we can meet for a coffee or talk
            on a call, wherever you are.
          </p>
        </div>
      </section>
      <Photo
        className="page-wide-photo page-wide-photo-crossing"
        src={twoCoffeeCups}
        alt="Two cups of coffee on saucers, side by side on a worn wooden table, in black and white"
        loading="eager"
      />
      <Invitation />
    </>
  )
}

export default GetInTouchPage
