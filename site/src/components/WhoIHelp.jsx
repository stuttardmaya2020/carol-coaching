import Accordion from './Accordion.jsx'
import './WhoIHelp.css'

const stages = [
  {
    id: 'starting-out',
    title: 'Starting out',
    subtitle: 'Graduates and first jobs',
    content: <p>Coaching isn’t only for executives. A clear head now helps every choice after.</p>,
  },
  {
    id: 'finding-your-feet',
    title: 'Finding your feet',
    subtitle: 'Mid-career',
    content: <p>A new role, a knock to your confidence, or work you’d like to enjoy more.</p>,
  },
  {
    id: 'leading-the-way',
    title: 'Leading the way',
    subtitle: 'Founders and senior leaders',
    content: <p>As a headhunter I assessed senior people for years. I’ll tell you what I see.</p>,
  },
]

function WhoIHelp() {
  return (
    <section className="who on-violet" aria-labelledby="who-title">
      <div className="who-inner container">
        <h2 id="who-title" className="who-title">
          Who I <em>help</em>
        </h2>
        <Accordion items={stages} />
      </div>
    </section>
  )
}

export default WhoIHelp
