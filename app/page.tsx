import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950 text-slate-200 selection:bg-brand-bright selection:text-white">
      {/* Sticky Glassmorphism Header */}
      <Navbar />

      {/* Sections in Intentional High-Signal Sequence */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
