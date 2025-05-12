import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import SolutionsSection from "../components/SolutionsSection";
import PartnersSection from "../components/PartnersSection";
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <Hero /> 
        <SolutionsSection />
        <PartnersSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
