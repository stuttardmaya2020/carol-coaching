import SiteHeader from './components/SiteHeader.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import Home from './Home.jsx'

// The root component: the header and footer wrap the page content.
// When About, How I work and Get in touch are built, they'll be
// swapped in here in place of <Home />.
function App() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Home />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
