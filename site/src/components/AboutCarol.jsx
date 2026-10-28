import Portrait from './Portrait.jsx'
import './AboutCarol.css'

function AboutCarol() {
  return (
    <section id="about" className="about container" aria-labelledby="about-title">
      <Portrait className="about-portrait" label="Photo of Carol to come" />
      <div className="about-body">
        <h2 id="about-title" className="about-title">
          Supportive, incisive <em>and quick</em>.
        </h2>
        <p>
          I’ve coached for more than 20 years and worked with over 3,000
          people. Before that, I was a headhunter, so I’ve spent my career
          getting to know people, and what helps them do well.
        </p>
        <p>
          I’m an NLP practitioner and I’ve trained in counselling and
          psychotherapy. I’m also qualified in Emergenetics profiling, which
          shows how people think, behave and work together.
        </p>
        <p className="about-recognition">
          Kathleen Saxton acknowledged me in her book on leadership as a
          leader she enjoyed working with.
        </p>
      </div>
    </section>
  )
}

export default AboutCarol
