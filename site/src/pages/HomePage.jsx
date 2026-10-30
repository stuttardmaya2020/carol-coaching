import Hero from '../components/Hero.jsx'
import WhoIHelp from '../components/WhoIHelp.jsx'
import WillCoachingHelp from '../components/WillCoachingHelp.jsx'
import HowIWork from '../components/HowIWork.jsx'
import WhatClientsSay from '../components/WhatClientsSay.jsx'
import MeetCarol from '../components/MeetCarol.jsx'
import Invitation from '../components/Invitation.jsx'

// The whole story on one scroll. Each section is its own component.
function HomePage() {
  return (
    <>
      <Hero />
      <WhoIHelp />
      <WillCoachingHelp />
      <HowIWork />
      <WhatClientsSay />
      <MeetCarol />
      <Invitation />
    </>
  )
}

export default HomePage
