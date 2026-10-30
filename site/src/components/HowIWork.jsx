import Photo from './Photo.jsx'
import coffeeByTheWindow from '../assets/coffee-by-the-window.jpg'
import './HowIWork.css'

// From Carol's old "How coaching works" page, in plainer words.
// No prices or session lengths until Carol confirms them.
const steps = [
  {
    title: 'We talk',
    text: 'A coffee in London or a call, on me. Tell me what’s on your mind.',
  },
  {
    title: 'I recommend',
    text: 'I’ll tell you plainly what I think would help, with a guide to costs.',
  },
  {
    title: 'You decide',
    text: 'Carry on with me, or take what you’ve got and go. No strings attached.',
  },
]

function HowIWork() {
  return (
    <section id="how" className="how" aria-labelledby="how-title">
      <div className="how-inner container">
        <Photo
          className="how-photo"
          src={coffeeByTheWindow}
          alt="An empty café table by a window, with a cup of coffee, a book and two chairs pulled up, in black and white"
        />
        <div className="how-body">
          <h2 id="how-title" className="how-title">
            How I <em>work</em>
          </h2>
          <ol className="how-steps">
            {steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="how-enough">
            One session <em>may be enough</em>.
          </p>
          <p>
            <a className="text-link" href="#/how-i-work">More on how I work</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowIWork
