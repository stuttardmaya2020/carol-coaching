import { useEffect, useState } from 'react'
import SiteHeader from './components/SiteHeader.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HowIWorkPage from './pages/HowIWorkPage.jsx'
import GetInTouchPage from './pages/GetInTouchPage.jsx'

// Each page has its own address after the #, like #/about. GitHub Pages only
// knows about one real page, so this works without any server set-up.
const pages = {
  '#/': { component: HomePage, title: 'Carol Fox Coaching' },
  '#/how-i-work': { component: HowIWorkPage, title: 'How I work | Carol Fox Coaching' },
  '#/about': { component: AboutPage, title: 'About Carol | Carol Fox Coaching' },
  '#/get-in-touch': { component: GetInTouchPage, title: 'Get in touch | Carol Fox Coaching' },
}

function App() {
  const [route, setRoute] = useState(pages[window.location.hash] ? window.location.hash : '#/')

  // useEffect runs code outside of drawing the page: here, listening for
  // the address changing. The function it returns tidies up the listener.
  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash
      if (!pages[hash]) return // for example #main from the skip link

      setRoute(hash)
      window.scrollTo({ top: 0, behavior: 'instant' })
      // Tell keyboard and screen reader users they're on a new page.
      document.getElementById('main').focus({ preventScroll: true })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    document.title = pages[route].title
  }, [route])

  const Page = pages[route].component

  return (
    <>
      <SiteHeader route={route} />
      <main id="main" tabIndex={-1}>
        <Page />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
