import './Button.css'

// A pill-shaped link that looks like a button. Use one per screen.
// variant="light" is for dark backgrounds.
function Button({ href, variant = 'primary', children }) {
  return (
    <a className={`button button-${variant}`} href={href}>
      {children}
    </a>
  )
}

export default Button
