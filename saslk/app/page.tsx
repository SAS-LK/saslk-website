import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ServicesSection from '@/sections/ServicesSection';
import ProjectsSection from '@/sections/ProjectsSection';
import StatsSection from '@/sections/StatsSection';
import TeamSection from '@/sections/TeamSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import ContactSection from '@/sections/ContactSection';

export default function Home() {
  return (
    // Navbar and Footer are now in ClientBody (layout)
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <StatsSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
