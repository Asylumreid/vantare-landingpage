import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import OurStory from '../components/OurStory'
import MainContent from '../components/MainContent'
import ProductFeatures from '../components/ProductFeatures'
import ImageCarousel from '../components/ImageCarousel'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <OurStory />
      <MainContent />
      <ProductFeatures />
      <ImageCarousel />
    </main>
  )
}

