import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EngineeringProcess } from './components/EngineeringProcess';
import { ProjectsSection } from './components/ProjectsSection';
import { IndustrialExposure } from './components/IndustrialExposure';
import { SkillSystem } from './components/SkillSystem';
import { CertificatesSection } from './components/CertificatesSection';
import { EngineeringJourney } from './components/EngineeringJourney';
import { AchievementsSection } from './components/AchievementsSection';
import { BeyondResume } from './components/BeyondResume';
import { CampusEngagement } from './components/CampusEngagement';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ScrollReveal } from './components/ScrollReveal';

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
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>

        {/* Section 02: How I Think */}
        <ScrollReveal>
          <EngineeringProcess />
        </ScrollReveal>

        {/* Section 03: Projects Dossiers */}
        <ScrollReveal>
          <ProjectsSection />
        </ScrollReveal>

        {/* Section 04: Industrial & Internships Exposure */}
        <ScrollReveal>
          <IndustrialExposure />
        </ScrollReveal>

        {/* Section 05: Skill Dashboard */}
        <ScrollReveal>
          <SkillSystem />
        </ScrollReveal>

        {/* Section 06: Dedicated Certifications Page Section */}
        <ScrollReveal>
          <CertificatesSection />
        </ScrollReveal>

        {/* Section 08: Engineering Journey Timeline */}
        <ScrollReveal>
          <EngineeringJourney />
        </ScrollReveal>

        {/* Section 10: Beyond The Resume */}
        <ScrollReveal>
          <BeyondResume />
        </ScrollReveal>

        {/* Campus Engagement */}
        <ScrollReveal>
          <CampusEngagement />
        </ScrollReveal>

        {/* Section 09: Achievements */}
        <ScrollReveal>
          <AchievementsSection />
        </ScrollReveal>

        {/* Section 11: Resume Download Call to Action */}
        <ScrollReveal>
          <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />
        </ScrollReveal>

        {/* Section 12: Contact */}
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
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
