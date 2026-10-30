import Invitation from '../components/Invitation.jsx'
import Photo from '../components/Photo.jsx'
import PullQuote from '../components/PullQuote.jsx'
import carolThinking from '../assets/carol-thinking.jpg'
import carolWithAlfie from '../assets/carol-with-alfie.jpg'
import './pages.css'

// From Carol's old "About me" page, with the headhunting background added.
function AboutPage() {
  return (
    <>
      <section className="about-intro" aria-labelledby="about-page-title">
        <div className="about-intro-copy">
          <h1 id="about-page-title" className="page-title">
            I help people work out <em>what they want next</em>.
          </h1>
          <p>
            I’ve been a coach for more than twenty years and have worked with
            more than 3,000 people. Before that, I was a headhunter, so I’ve
            spent my career getting to know people and what helps them do well.
          </p>
        </div>
        <Photo
          className="about-intro-photo"
          src={carolThinking}
          alt="Carol Fox in black and white, resting her chin on her hand and looking thoughtfully to one side"
          loading="eager"
        />
      </section>

      <section className="page-band on-violet" aria-labelledby="style-title">
        <div className="page-band-inner container">
          <h2 id="style-title" className="page-heading">
            How I <em>coach</em>
          </h2>
          <div className="page-stack">
            <p>
              My style is incisive, supportive, challenging and fast. Expect to
              be given actionable strategies quickly, and to discuss outcomes as
              we work together.
            </p>
            <p>
              My interest is in developing the whole person, not just the
              professional, to be the very best of themselves throughout their
              work and life.
            </p>
            <p>I work with people whose aim is continued success.</p>
          </div>
        </div>
      </section>

      <section className="about-development container" aria-labelledby="development-title">
        <Photo
          className="about-development-photo"
          src={carolWithAlfie}
          alt="Carol Fox in black and white, in profile and wearing sunglasses, with one hand under the chin of a Dalmatian"
        />
        <div className="page-stack">
          <h2 id="development-title" className="page-heading">
            I consistently work on my personal development <em>too</em>
          </h2>
          <p>
            I’m an NLP practitioner and I’m studying for a psychology degree with
            the OU, having already completed counselling and psychotherapy
            training with the WPF. With the Coaching Academy and the Association
            of Executive Coaching, I continually work on my own development.
          </p>
          <p>
            I’m qualified to deliver Emergenetics psychometric profiling, which
            gives individuals and teams fantastic insight into how they think,
            behave and work together.
          </p>
        </div>
      </section>

      <PullQuote
        text="No nonsense, no fuss, no fear."
        name="Caroline"
        role="A client for over two years"
      />
      <Invitation />
    </>
  )
}

export default AboutPage
