import Photo from './Photo.jsx'
import carolWithAlfie from '../assets/carol-with-alfie.jpg'
import './MeetCarol.css'

function MeetCarol() {
  return (
    <section id="about" className="meet" aria-labelledby="meet-title">
      <div className="meet-inner container">
        <h2 id="meet-title" className="meet-title">
          Meet <em>Carol</em>
        </h2>
        <div className="meet-bio">
          <p>
            I’ve coached for more than 20 years and worked with over 3,000
            people. Before that, I was a headhunter, so I’ve spent my career
            getting to know people and what helps them do well.
          </p>
          <p>
            I coach people on life as well as work, from a first job to the
            boardroom, in London and remotely. I’m supportive, incisive and
            quick.
          </p>
          <p>
            <a className="text-link" href="#/about">More about me</a>
          </p>
        </div>
        <Photo
          className="meet-photo"
          src={carolWithAlfie}
          alt="Carol Fox in black and white, in profile and wearing sunglasses, with one hand under the chin of a Dalmatian"
        />
      </div>
    </section>
  )
}

export default MeetCarol
