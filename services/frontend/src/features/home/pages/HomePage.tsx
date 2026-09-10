import Navbar from '../../../shared/components/Navbar';
import Footer from '../../../shared/components/Footer';
import Hero from '../components/Hero';
import Topics from '../components/Topics';
import About from '../components/About';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Topics />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
