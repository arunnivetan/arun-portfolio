import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EngineeringProcess } from './components/EngineeringProcess';
import { ProjectsSection } from './components/ProjectsSection';
import { IndustrialExposure } from './components/IndustrialExposure';
import { SkillSystem } from './components/SkillSystem';
import { EngineeringJourney } from './components/EngineeringJourney';
import { AchievementsSection } from './components/AchievementsSection';
import { BeyondResume } from './components/BeyondResume';
import { CampusEngagement } from './components/CampusEngagement';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [activeSignal, setActiveSignal] = useState<'power' | 'control' | 'renewable' | 'all'>('all');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#1B140E] font-sans antialiased selection:bg-[#E53935] selection:text-white">
      {/* Sticky Top Header Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        activeSignal={activeSignal}
        setActiveSignal={setActiveSignal}
      />

      {/* Main Page Content Sections */}
      <main>
        {/* Hero Screen */}
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          activeSignal={activeSignal}
        />

        {/* Section 01: Who I Am */}
        <AboutSection />

        {/* Section 02: How I Think */}
        <EngineeringProcess />

        {/* Section 03: Projects Dossiers */}
        <ProjectsSection />

        {/* Section 04: Industrial & Internships Exposure */}
        <IndustrialExposure />

        {/* Section 05: Skill Dashboard */}
        <SkillSystem />

        {/* Section 08: Engineering Journey Timeline */}
        <EngineeringJourney />

        {/* Section 10: Beyond The Resume */}
        <BeyondResume />

        {/* Campus Engagement */}
        <CampusEngagement />

        {/* Section 09: Achievements */}
        <AchievementsSection />

        {/* Section 11: Resume Download Call to Action */}
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section 12: Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
