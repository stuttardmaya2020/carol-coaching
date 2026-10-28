import Letter from './components/Letter.jsx'
import Stage from './components/Stage.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import AboutCarol from './components/AboutCarol.jsx'
import Invitation from './components/Invitation.jsx'

// The three career stages. The Letter lists them as links, and each one
// becomes a Stage section below. Testimonials are copied exactly from
// the old site (research/current-site/screenshots/testimonials.png).
const stages = [
  {
    id: 'starting-out',
    lead: 'If you’re',
    phrase: 'just starting out',
    body: 'Coaching isn’t only for executives. Your first job brings big choices: what you’re good at, what you want, how you come across. A clear head now makes every one of them easier, and our first coffee costs you nothing.',
    testimonial: {
      quote: 'I was low in confidence and growing evermore frustrated at the lack of direction in my job search. Carol was a very calming influence, helping me to put things in perspective and form a plan with some very useful and refreshing methods. With her motivational and encouraging approach I stopped worrying about factors I could not control and set about my job search with renewed focus and self-belief.',
      name: 'Alex Quinan',
      role: 'Graduate of Leeds University',
    },
  },
  {
    id: 'mid-career',
    lead: 'If you’re',
    phrase: 'mid-career and want more from work',
    body: 'Maybe you’re good at your job but it no longer feels like yours, or something has changed and knocked your confidence. We’ll find what’s in the way and what you’re already doing well. It needn’t be a long programme: sometimes two sessions are enough.',
    testimonial: {
      quote: 'Starting a new job at the same time as the whole country went into lockdown, from my living room, knocked me sideways. I lost my confidence, direction and sense of self. Carol’s direct, assertive and invigorating coaching style quickly helped me find my feet again. … I’m now thriving in my new job, feel like I know myself better than ever and am able to consistently push myself outside my comfort zone to realise personal goals.',
      name: 'Amanda Jones',
      role: 'Planning Director at The Gate',
    },
  },
  {
    id: 'leading',
    lead: 'If you',
    phrase: 'lead a team or a business',
    body: 'As a headhunter, I spent years assessing senior people for senior roles. I know what the job asks of you, and I’ll tell you plainly what I see. You get a sounding board who is discreet, direct and on your side.',
    testimonial: {
      quote: 'Carol’s key contribution to me personally has been on-going coaching that I continue to benefit from and enjoy. She is rigorous, professional, knowledgeable, insightful, supportive, discreet and, when it is called for, tough, in coaching me to maintain and improve my professional performance. …',
      name: 'Kerry Glazer',
      role: 'Chief Executive at AAR Group',
    },
  },
]

function Home() {
  return (
    <>
      <Letter stages={stages} />
      <div className="container">
        {stages.map((stage) => (
          <Stage key={stage.id} {...stage} />
        ))}
      </div>
      <HowItWorks />
      <AboutCarol />
      <Invitation />
    </>
  )
}

export default Home
