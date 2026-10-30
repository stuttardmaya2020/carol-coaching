import './Photo.css'

// Shows a photo when given a src and alt. Without one, it shows a grey
// stand-in labelled with the photo that's still needed. Photos below the
// first screen load only when the visitor scrolls near them.
function Photo({ src, alt, label, className = '', loading = 'lazy' }) {
  if (src) {
    return <img className={`photo ${className}`} src={src} alt={alt} loading={loading} />
  }

  return (
    <div className={`photo photo-placeholder ${className}`} role="img" aria-label={`Placeholder: ${label}`}>
      <span aria-hidden="true">{label}</span>
    </div>
  )
}

export default Photo
