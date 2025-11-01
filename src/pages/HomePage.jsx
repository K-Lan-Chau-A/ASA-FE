import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import SEO from '../components/SEO'
import { seoConfig } from '../config/seo'

const HomePage = () => {
  return (
    <div>
      <SEO {...seoConfig.home} />
      <HeroSection />
      <FeaturesSection />
    </div>
  )
}

export default HomePage
