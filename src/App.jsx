import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SEO from './components/SEO'
import JSONLD from './components/JSONLD'

export default function App() {
  return (
    <HelmetProvider>
      <SEO />
      <JSONLD />
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white antialiased">
        <Header />
        <main>
          <Hero />
          <About />
          <Products />
          <Benefits />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}
