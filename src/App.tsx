import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import QuoteCalculator from './components/QuoteCalculator';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTAs from './components/FloatingCTAs';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <BeforeAfter />
        <QuoteCalculator />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCTAs />
    </div>
  );
}

