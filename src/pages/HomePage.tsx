import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import IngredientsSection from '../components/IngredientsSection/IngredientsSection'
import FlavourList from '../components/FlavourList/FlavourList'
import BenefitsSection from '../components/BenefitsSection/BenefitsSection'
import SubscribeSection from '../components/SubscribeSection/SubscribeSection'
import Footer from '../components/Footer/Footer'
  

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IngredientsSection />
      <FlavourList />
      <BenefitsSection />
      <SubscribeSection />
      <Footer />
    </>
  )
}

export default HomePage
