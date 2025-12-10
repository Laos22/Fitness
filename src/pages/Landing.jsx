import Header from '../components/sections/Header'
import Hero from '../components/sections/Hero'
import Benefits from '../components/sections/Benefits'
import Facilities from '../components/sections/Facilities'
import Stories from '../components/sections/Stories'
import AppPromo from '../components/sections/AppPromo'
import Footer from '../components/sections/Footer'

const Landing = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Facilities />
      <Stories />
      <AppPromo />
      <Footer />
    </main>
  )
}

export default Landing
