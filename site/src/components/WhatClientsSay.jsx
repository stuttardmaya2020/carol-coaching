import { useState } from 'react'
import { testimonials } from '../testimonials.js'
import './WhatClientsSay.css'

// Three short lines to start, one from each career stage. Each is a whole
// sentence copied exactly from testimonials.js.
const highlights = [
  {
    text: 'Working with Carol is reassuring and good fun; and oh, I got the job!',
    name: 'Jane Millar',
    role: 'Operational Leadership Graduate, HSBC',
  },
  {
    text: 'Carol’s direct, assertive and invigorating coaching style quickly helped me find my feet again.',
    name: 'Amanda Jones',
    role: 'Planning Director at The Gate',
  },
  {
    text: 'She is rigorous, professional, knowledgeable, insightful, supportive, discreet and, when it is called for, tough, in coaching me to maintain and improve my professional performance.',
    name: 'Kerry Glazer',
    role: 'Chief Executive at AAR Group',
  },
]

function WhatClientsSay() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section className="clients on-violet" aria-labelledby="clients-title">
      <div className="container">
        <h2 id="clients-title" className="clients-title">
          What clients <em>say</em>
        </h2>
        {highlights.map((quote) => (
          <figure key={quote.name} className="quote">
            <blockquote>
              <p>{quote.text}</p>
            </blockquote>
            <figcaption>
              <strong>{quote.name}</strong>, {quote.role}
            </figcaption>
          </figure>
        ))}

        <button
          type="button"
          className="clients-toggle"
          aria-expanded={showAll}
          aria-controls="all-testimonials"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show fewer' : 'Read what clients say'}
        </button>

        <div id="all-testimonials" className="clients-all" hidden={!showAll}>
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="testimonial">
              <blockquote>
                <p>
                  <strong>{testimonial.lead}</strong> {testimonial.rest}
                </p>
              </blockquote>
              <figcaption>
                {testimonial.name}, {testimonial.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatClientsSay
