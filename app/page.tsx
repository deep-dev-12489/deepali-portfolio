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
    <main className="min-h-screen bg-white text-[#0F172A] selection:bg-[#DBEAFE] selection:text-[#0369A1]">
      {/* Sticky Header */}
      <Navbar />

      {/* Sections in Intentional Sequence with Alternating White / Light Ice Blue */}
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
