import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CardsSection from './components/CardsSection'
import SponsorsSection from './components/SponsorsSection'
import Footer from './components/Footer'

function App() {
  const cards = [
    {
        icon: "💡",
        title: "Instant Server Start",
        description: "On demand file serving over native ESM, no bundling required!",
    },
    {
        icon: "⚡",
        title: "Lightning Fast HMR",
        description: "Hot Module Replacement (HMR) that stays fast regardless of app size.",
    },
    {
        icon: "🛠️",
        title: "Rich Features",
        description: "Out-of-the-box support for TypeScript, JSX, CSS and more.",
    },
    {
        icon: "📦",
        title: "Optimized Build",
        description: "Pre-configured Rollup build with multi-page and library mode support.",
    },
    {
        icon: "🔩",
        title: "Universal Plugins",
        description: "Rollup-superset plugin interface shared between dev and build.",
    },
    {
        icon: "🔑",
        title: "Fully Typed APIs",
        description: "Flexible programmatic APIs with full TypeScript typing.",
    },
];

  return (
    <>
      <Navbar />
      <HeroSection />
      <CardsSection cards={cards}/>
      <SponsorsSection />
      <Footer />
    </>
  )
}

export default App
