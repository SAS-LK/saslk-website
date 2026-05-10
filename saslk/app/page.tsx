import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ServicesSection from '@/sections/ServicesSection';
import ProjectsSection from '@/sections/ProjectsSection';
import PartnersSection from '@/sections/PartnersSection';
import StatsSection from '@/sections/StatsSection';
import TeamSection from '@/sections/TeamSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import MaintenancePage from '@/components/MaintenancePage';

// ─── Toggle maintenance mode here ────────────────────────────────────────────
// Set to `true` to show the maintenance page, `false` to show the normal site.
const MAINTENANCE_MODE = false;
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <PartnersSection />
      <StatsSection />
      <TeamSection />
      <TestimonialsSection />
    </main>
  );
}
