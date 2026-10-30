import Photo from './Photo.jsx'
import handDetail from '../assets/carol-hand-detail.jpg'
import './WillCoachingHelp.css'

// Carol's questions from the old home page, in a half-and-half split.
const questions = [
  'Do you want people to see you differently?',
  'Is something holding you back professionally?',
  'Do you know what you want, but don’t seem able to achieve it?',
  'Are you at a crossroads and struggling with choosing your direction of travel?',
  'Do you wish to return to work, but need a kickstart?',
  'Do you need to bolster your team management?',
  'Are you seeking professional or personal purpose?',
]

function WillCoachingHelp() {
  return (
    <section className="will" aria-labelledby="will-title">
      <div className="will-copy">
        <h2 id="will-title" className="will-title">
          Will coaching <em>help me</em>?
        </h2>
        <p className="will-intro">
          You may find it hard to put your finger on the problem. My job is to
          help you articulate and conquer your personal hurdles.
        </p>
        <ul className="will-list">
          {questions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
      </div>
      <div className="will-panel on-violet">
        <Photo
          className="will-photo"
          src={handDetail}
          alt="Close-up of Carol’s hand and wristwatch, in black and white"
        />
        <p className="will-ambition">
          My ambition as a coach is for you to be the best you can possibly be.
        </p>
      </div>
    </section>
  )
}

export default WillCoachingHelp
