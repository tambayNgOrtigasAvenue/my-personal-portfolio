import { Navbar } from '@/components/Navbar';
import { HomeSection } from '@/components/HomeSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsAndTools } from '@/components/SkillsAndTools';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-portfolio-medium selection:text-portfolio-bg">
      <Navbar />
      <HomeSection />
      <ProjectsSection />
      <SkillsAndTools />
      <ContactSection />
      <Footer />
    </main>
  );
}
