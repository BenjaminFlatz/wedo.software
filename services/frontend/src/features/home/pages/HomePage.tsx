import Navbar from '../../../shared/components/Navbar';
import Footer from '../../../shared/components/Footer';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Services from '../components/Services';
import Products from '../components/Products';
import HowItWorks from '../components/HowItWorks';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Products />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
}
