import './Testimonial.css'

// A client's words, then who said them. Quotes are copied exactly
// from the old site; "…" marks where a long quote was shortened.
function Testimonial({ quote, name, role }) {
  return (
    <figure className="testimonial">
      <blockquote>
        <p>{quote}</p>
      </blockquote>
      <figcaption>
        {name}, {role}
      </figcaption>
    </figure>
  )
}

export default Testimonial
