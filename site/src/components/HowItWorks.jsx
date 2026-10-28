import './HowItWorks.css'

// From Carol's old "How coaching works" page, rewritten in plainer words.
// No prices or session lengths until Carol confirms them.
const steps = [
  {
    title: 'A coffee or a call, on me',
    text: 'We meet in London, or talk wherever you are. Tell me what’s on your mind. There’s no obligation.',
  },
  {
    title: 'A plan that fits you',
    text: 'I’ll suggest what would help. Sometimes as few as two sessions are enough to get you on track.',
  },
  {
    title: 'Sessions that keep moving',
    text: 'We meet as often as suits you. I’ll set you actions between sessions, so things change quickly.',
  },
]

function HowItWorks() {
  return (
    <section id="how" className="how" aria-labelledby="how-title">
      <div className="container">
        <h2 id="how-title" className="how-title">
          It starts with <em>a coffee</em>.
        </h2>
        <ol className="how-steps">
          {steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="how-cost">
          What it costs depends on what you want to achieve. After our first
          coffee or call, I’ll give you a guide to costs.
        </p>
      </div>
    </section>
  )
}

export default HowItWorks
