import Hero from '../../components/Hero/Hero.jsx'
import NewArrivals from '../../components/NewArrivals/NewArrivals.jsx'
import Manifesto from '../../components/Manifesto/Manifesto.jsx'
import Experience from '../../components/Experience/Experience.jsx'
import Guarantee from '../../components/Guarantee/Guarantee.jsx'
import ContactCTA from '../../components/ContactCTA/ContactCTA.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <Manifesto />
      <Experience />
      <Guarantee />
      <ContactCTA />
    </>
  )
}