import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';


export const AchievementsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF8F4] relative border-b border-[#1B140E]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1B140E]/15 pb-6">
          <div>
            <div className="font-mono-tech text-xs text-[#2E9B59] uppercase tracking-wider font-bold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2E9B59]" />
              SECTION 09 // VERIFIED HONORS & RECOGNITION
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#1B140E]">
              ACHIEVEMENTS
            </h2>
          </div>
        </div>

        {/* Award Ceremony Photo Banner */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-[#1B140E]/10 bg-[#F2EDE5]">
          <img
            src="/assets/innovathon_award.jpg"
            alt="1st Prize — Sairam SDG Innovathon 4.0 Award Ceremony"
            className="w-full h-56 sm:h-72 object-cover object-top"
          />
          <div className="px-5 py-3 flex items-center justify-between">
            <div className="font-mono-tech text-xs text-[#1B140E]">
              <span className="font-bold text-[#E53935]">1st Prize</span> — SDG Innovathon 4.0 Award Ceremony · Sai Ram Engineering College · March 2026
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach) => (
            <div 
              key={ach.id}
              className="dossier-border bg-[#F2EDE5] rounded-xl p-6 space-y-4 hover:border-[#1B140E] transition-all"
            >
              <div className="flex items-center justify-between border-b border-[#1B140E]/15 pb-3">
                <span className="font-mono-tech text-xs font-bold text-[#E53935] px-2 py-0.5 rounded bg-[#E53935]/10">
                  {ach.number}
                </span>
                <span className="font-mono-tech text-xs font-bold text-[#2E9B59] px-2 py-0.5 rounded bg-[#FAF8F4] border border-[#2E9B59]/30">
                  {ach.badge}
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-lg text-[#1B140E] leading-snug">
                {ach.title}
              </h3>

              <div className="font-mono-tech text-xs text-[#6C645C] font-semibold">
                {ach.organization}
              </div>

              <p className="text-xs text-[#1B140E]/85 leading-relaxed bg-[#FAF8F4] p-3 rounded border border-[#1B140E]/10">
                {ach.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
