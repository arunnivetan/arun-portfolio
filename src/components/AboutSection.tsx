import React from 'react';
import { GraduationCap, Target, Compass, BookOpen, CheckCircle, Zap, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#FAF8F4] relative border-b border-[#1B140E]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1B140E]/15 pb-6">
          <div>
            <div className="font-mono-tech text-xs text-[#E53935] uppercase tracking-wider font-bold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              SECTION 01 // PROFILE & FOUNDATION
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#1B140E]">
              WHO I AM
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#6C645C] max-w-md mt-4 md:mt-0">
            TECHNICAL DOSSIER • EEE DEGREE CANDIDATE • POWER & RENEWABLE FOCUS
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Recruiter Introduction & Engineering Identity */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="dossier-border bg-[#FAF8F4] p-6 rounded-xl space-y-5">
              <h3 className="font-heading text-xl font-bold text-[#1B140E] flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#E53935]" />
                Engineering Philosophy & Professional Overview
              </h3>
              
              <p className="text-base sm:text-lg text-[#1B140E]/85 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>

              <div className="p-4 bg-[#F2EDE5] rounded-lg border border-[#1B140E]/10 space-y-2">
                <div className="font-mono-tech text-xs text-[#E53935] font-bold uppercase tracking-wider">
                  ENGINEERING VALUE PROPOSITION
                </div>
                <p className="text-sm text-[#1B140E] font-medium leading-normal">
                  "An Electrical Engineer who builds, analyzes, and solves real-world problems using core engineering + modern technology."
                </p>
              </div>

              <p className="text-sm text-[#6C645C] leading-relaxed">
                My approach combines rigorous power system modeling (ETAP load flow and short-circuit studies) with hands-on hardware integration (ESP32 microcontrollers, IoT protocols, AI vision sensors) and customized enterprise software systems.
              </p>
            </div>

            {/* Core Competencies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-[#F2EDE5] rounded-lg border border-[#1B140E]/15">
                <div className="font-mono-tech text-xs font-bold text-[#1976D2] uppercase mb-2 flex items-center gap-2">
                  <Compass className="w-4 h-4" /> CORE DISCIPLINE
                </div>
                <ul className="text-xs space-y-1.5 text-[#1B140E]">
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#1976D2]" /> Power Systems Analysis</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#1976D2]" /> 110 kV / 11 kV / 415 V Distribution</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#1976D2]" /> Switchgear & Relay Protection</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#1976D2]" /> Single Line Diagrams (SLD)</li>
                </ul>
              </div>

              <div className="p-4 bg-[#F2EDE5] rounded-lg border border-[#1B140E]/15">
                <div className="font-mono-tech text-xs font-bold text-[#2E9B59] uppercase mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> CLEAN ENERGY & TECH
                </div>
                <ul className="text-xs space-y-1.5 text-[#1B140E]">
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#2E9B59]" /> Solar PV Systems & Inverters</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#2E9B59]" /> ESP32 & IoT Sensor Telemetry</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#2E9B59]" /> Enterprise Database & Software</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Right Column: Technical Profile Dossier Card */}
          <div className="lg:col-span-5">
            <div className="dossier-border bg-[#F2EDE5] p-6 rounded-xl space-y-6">
              
              {/* Card Title */}
              <div className="flex items-center justify-between border-b border-[#1B140E]/15 pb-4">
                <span className="font-mono-tech text-xs font-bold text-[#1B140E] uppercase tracking-wider flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#E53935]" /> TECHNICAL PROFILE CARD
                </span>
                <span className="font-mono-tech text-[10px] bg-[#1B140E] text-[#FAF8F4] px-2 py-0.5 rounded">
                  VERIFIED
                </span>
              </div>

              {/* Education Block */}
              <div className="space-y-2">
                <div className="font-mono-tech text-[10px] text-[#6C645C] uppercase tracking-wider">
                  01 // ACADEMIC EDUCATION
                </div>
                <div className="bg-[#FAF8F4] p-3.5 rounded border border-[#1B140E]/10 space-y-1">
                  <div className="font-heading font-bold text-sm text-[#1B140E]">
                    B.E. Electrical & Electronics Engineering
                  </div>
                  <div className="text-xs text-[#6C645C]">
                    {PERSONAL_INFO.education.college}
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#1B140E] pt-1">
                    <span>{PERSONAL_INFO.education.affiliation}</span>
                    <span className="font-bold text-[#E53935]">CGPA: {PERSONAL_INFO.education.cgpa}</span>
                  </div>
                </div>
              </div>

              {/* Technical Focus Areas */}
              <div className="space-y-2">
                <div className="font-mono-tech text-[10px] text-[#6C645C] uppercase tracking-wider">
                  02 // PRIMARY TECHNICAL FOCUS
                </div>
                <div className="bg-[#FAF8F4] p-3.5 rounded border border-[#1B140E]/10 space-y-2">
                  {PERSONAL_INFO.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs border-b border-[#1B140E]/05 pb-1 last:border-0 last:pb-0">
                      <span className="font-medium text-[#1B140E]">{area}</span>
                      <span className="font-mono-tech text-[10px] text-[#2E9B59] font-semibold">ACTIVE</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Career Goal */}
              <div className="space-y-2">
                <div className="font-mono-tech text-[10px] text-[#E53935] uppercase tracking-wider flex items-center gap-1 font-bold">
                  <Target className="w-3.5 h-3.5" /> 03 // CURRENT GOAL
                </div>
                <div className="bg-[#FAF8F4] p-3.5 rounded border border-[#E53935]/30 text-xs text-[#1B140E] font-medium leading-relaxed">
                  {PERSONAL_INFO.currentGoal}
                </div>
              </div>

              {/* Verified Certifications */}
              <div className="pt-2 border-t border-[#1B140E]/15 flex items-center justify-between font-mono-tech text-xs text-[#6C645C]">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#1976D2]" /> AutoCAD Electrical (Certified)
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#1976D2]" /> ETAP (Certified)
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
