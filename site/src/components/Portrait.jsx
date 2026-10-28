import './Portrait.css'

// Shows a photo of Carol when given a src and alt.
// Without one, it shows a labelled stand-in until the photo arrives.
function Portrait({ src, alt, label, className = '' }) {
  if (src) {
    return <img className={`portrait portrait-photo ${className}`} src={src} alt={alt} />
  }

  return (
    <div className={`portrait ${className}`} role="img" aria-label={`Placeholder: ${label}`}>
      <span aria-hidden="true">{label}</span>
    </div>
  )
}

export default Portrait
