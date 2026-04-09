import HeroCarousel from '../components/HeroCarousel';
import ShortCarousel from '../components/ShortCarousel';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <main id="home-page">
      {/* 1. Full Hero Carousel */}
      <HeroCarousel />

      {/* 2. Short Product Carousel */}
      <ShortCarousel />

      {/* 3. Services */}
      <ServicesSection />

      {/* 4. About */}
      <AboutSection />

      {/* 5. Contact */}
      <ContactSection />
    </main>
  );
}
