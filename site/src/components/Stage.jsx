import Testimonial from './Testimonial.jsx'
import './Stage.css'

// One part of the letter for one career stage. The id lets the
// "If you're…" links in the Letter jump straight here.
function Stage({ id, lead, phrase, body, testimonial }) {
  return (
    <section id={id} className="stage" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="stage-title">
        <span className="stage-mark">
          {lead} <em>{phrase}</em>,
        </span>
      </h2>
      <div className="stage-body">
        <p>{body}</p>
        <Testimonial {...testimonial} />
      </div>
    </section>
  )
}

export default Stage
