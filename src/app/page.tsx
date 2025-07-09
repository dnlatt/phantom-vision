import AwesomeExperienceSection from "./components/home/AwesomeExperienceSection";
import ContactSection from "./components/home/ContactSection";
import ExperienceSection from "./components/home/ExperienceSection";
import HeroSection from "./components/home/HeroSection";
import ProductsSection from "./components/home/ProductsSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import ValuesSection from "./components/home/ValuesSection";

export default function Home() {
  return (
    <main>
      
      <HeroSection />
      <ExperienceSection />
      <AwesomeExperienceSection />
      <ProductsSection />
      <TestimonialsSection />
      <ValuesSection />
      <ContactSection />
    </main>
  );
}
