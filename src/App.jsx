import React from 'react'
import Hero from './sections/hero'
import ShocaseSection from './sections/ShocaseSection'
import NavBar from './components/NavBar'
import LogoSection from './sections/LogoSection'
import FeatureCard from './sections/FeatureCard'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Testimonials from './sections/testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
const App = () => {
  return (
   <>
    <NavBar />
   <Hero />
   <ShocaseSection />
  <LogoSection />
  <FeatureCard />
  <ExperienceSection />
  <TechStack />
  <Testimonials />
  <Contact />
  <Footer />
   </>
  )
}

export default App
