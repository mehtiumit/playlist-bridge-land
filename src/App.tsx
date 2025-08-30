import { Navigation } from "./components/Navigation"
import { HeroSection } from "./components/HeroSection"
import { FeaturesSection } from "./components/FeaturesSection"
import { AppScreenshots } from "./components/AppScreenshots"
import { HowItWorksSection } from "./components/HowItWorksSection"
import { TestimonialsSection } from "./components/TestimonialsSection"
import { DownloadSection } from "./components/DownloadSection"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AppScreenshots />
      <HowItWorksSection />
      <TestimonialsSection />
      <DownloadSection />
      <Footer />
    </div>
  )
}

export default App