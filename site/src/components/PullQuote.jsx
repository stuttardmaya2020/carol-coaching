import './PullQuote.css'

// One short quote, large and easy to read, then who said it.
function PullQuote({ text, name, role }) {
  return (
    <figure className="pull-quote container">
      <blockquote>
        <p>{text}</p>
      </blockquote>
      <figcaption>
        <strong>{name}</strong>
        {role && `, ${role}`}
      </figcaption>
    </figure>
  )
}

export default PullQuote
