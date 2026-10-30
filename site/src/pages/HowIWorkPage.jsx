import Accordion from '../components/Accordion.jsx'
import Invitation from '../components/Invitation.jsx'
import Photo from '../components/Photo.jsx'
import PullQuote from '../components/PullQuote.jsx'
import twoCoffeeCups from '../assets/two-coffee-cups.jpg'
import './pages.css'

// From Carol's old "How coaching works" and "Bespoke coaching" pages,
// with typos fixed. No prices until Carol confirms them.
const areas = [
  {
    id: 'career-springboard',
    title: 'Career springboard',
    questions: [
      'Are you a graduate looking for career guidance?',
      'Do you need to build interview confidence and hone Q&A techniques?',
      'Are you trying to navigate a return to work, after a while away?',
      'Maybe you’ve been in a role for a while and need to evolve your thinking towards a new role.',
      'Simply need help perfecting your CV and personal pitch?',
      'Have you recently faced redundancy and need to get back on your feet?',
    ],
  },
  {
    id: 'moving-on-up',
    title: 'Moving on up',
    questions: [
      'Do you need confidence transitioning into a more senior role?',
      'Do you want people to perceive you differently?',
      'Are you facing a glass ceiling and need to break through it?',
      'Are you managing people and need help keeping you and your people on track?',
      'Are you struggling with senior peers in your organisation?',
      'Or, are you grappling with those who are now junior to you?',
    ],
  },
  {
    id: 'communication-hurdles',
    title: 'Overcome communication hurdles',
    questions: [
      'Do you need new techniques in order to deal with conflict?',
      'Is there someone with whom you need to employ a fresh strategy to achieve goals?',
      'Are you struggling with feelings of aggression or frustration?',
      'Need help with listening, or being listened to?',
      'Does behaviour need to change, to achieve a better outcome?',
      'Do you work part-time and need to manage on/off working relations better?',
    ],
  },
  {
    id: 'team-coaching',
    title: 'Team coaching',
    questions: [
      'Are you lacking collaboration as a team?',
      'How much more effective could your team be?',
      'Do you have a common, shared vision?',
      'Do you understand each other’s strengths and weaknesses?',
      'Have you been tasked with bringing two teams together?',
      'Let me help you keep your team in continuous “growth mode” all the time.',
    ],
  },
  {
    id: 'small-business-owners',
    title: 'Helping small business owners',
    questions: [
      'Are you missing the support of a business partner?',
      'Do you miss the framework and resource of a larger organisation and need new tricks to fill these gaps?',
      'How clear is the vision for your company?',
      'Are you ready to lead your business into its next stage of growth?',
    ],
  },
  {
    id: '360-feedback',
    title: '360 feedback',
    questions: [
      'Could you, or your team, benefit from 360 feedback?',
      'Do you need better insight into your strengths and weaknesses?',
      'Would you like a deeper understanding of how effectively you’re working with your peers?',
      'Do you want to implement 360 feedback, but need an impartial professional to manage a balanced outcome?',
      'Are you concerned that 360 feedback could lead to negativity?',
    ],
  },
]

const accordionItems = areas.map((area) => ({
  id: area.id,
  title: area.title,
  content: (
    <ul className="question-list">
      {area.questions.map((question) => (
        <li key={question}>{question}</li>
      ))}
    </ul>
  ),
}))

function HowIWorkPage() {
  return (
    <>
      <section className="page-intro container" aria-labelledby="how-page-title">
        <h1 id="how-page-title" className="page-title">
          It starts with <em>a coffee</em>.
        </h1>
        <div className="page-columns">
          <p>
            First, we’ll meet for a coffee (no strings attached and on me!). From
            that, I’ll make some recommendations, based on my assessment of your
            challenges and the outcome you want.
          </p>
          <p>
            I promise that this will be a positive experience, and you’ll
            immediately think more clearly about your challenges.
          </p>
        </div>
      </section>
      <Photo
        className="page-wide-photo"
        src={twoCoffeeCups}
        alt="Two cups of coffee on saucers, side by side on a worn wooden table, in black and white"
        loading="eager"
      />

      <section className="page-section container" aria-labelledby="what-title">
        <h2 id="what-title" className="page-heading">
          What <em>is</em> coaching?
        </h2>
        <div className="page-columns">
          <p>
            Coaching focuses on the future, not the past. It uses the resources
            and strengths within us to remove the obstacles that hold us back.
          </p>
          <p>
            We are each capable of making changes in our lives, but sometimes
            they seem insurmountable. The secret is a positive relationship with
            your coach. The best outcomes come through collaboration.
          </p>
          <p>
            As we work together, I’ll support you totally as you strive to be
            better or make positive changes in your life. My approach isn’t
            prescriptive. It’s tailored to you.
          </p>
          <p>
            We’ll agree the work we’ll each put in, and I expect you to deliver
            your part. For example, I’ll set you some ‘homework’: actions between
            sessions that immediately help you take steps towards your goals.
          </p>
        </div>
      </section>

      <section className="page-band on-violet" aria-labelledby="bespoke-title">
        <div className="page-band-inner container">
          <div>
            <h2 id="bespoke-title" className="page-heading">
              There really is a <em>bespoke</em> programme for you
            </h2>
            <p className="page-band-note">
              My coaching is tailored to your specific needs, regardless of your
              career stage.
            </p>
          </div>
          <Accordion items={accordionItems} />
        </div>
      </section>

      <section className="page-section container" aria-labelledby="questions-title">
        <h2 id="questions-title" className="page-heading">
          Questions people <em>ask</em>
        </h2>
        <div className="page-columns">
          <div className="page-question">
            <h3>How many sessions will I need?</h3>
            <p>
              I’ll make a recommendation after we first meet. One session may be
              enough. You might need two to get you on track, with a follow-up
              in six months’ time. Or you may have a more complex goal that would
              benefit from six sessions or more, with a review of your progress
              at the end of each one.
            </p>
            <p>
              Weekly, fortnightly or monthly sessions are all possible, depending
              on your goals and the actions we commit to between meetings.
            </p>
          </div>
          <div className="page-question">
            <h3>How much will it cost?</h3>
            <p>
              This depends on the complexity of your goals. After our first
              informal coffee or call, I’ll be able to give you a guide to costs.
            </p>
          </div>
        </div>
      </section>

      <PullQuote
        text="No matter your challenges, fears or ambitions, I will work with you to increase your confidence, build your skills and provide you with a sharper edge with which to carve a new path."
        name="Carol"
      />
      <Invitation />
    </>
  )
}

export default HowIWorkPage
