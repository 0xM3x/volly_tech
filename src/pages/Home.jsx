import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import SolutionsSection from "../components/SolutionsSection";
import PartnersSection from "../components/PartnersSection";
import AboutSection from '../components/AboutSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SolutionsSection />
      <PartnersSection />
      <AboutSection />
    </div>
  );
}