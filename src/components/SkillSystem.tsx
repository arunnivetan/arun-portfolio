import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Terminal, Info } from 'lucide-react';

export const SkillSystem: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<{ category: string; skillName: string; text: string } | null>(null);

  const getCategoryHeaderStyle = (color: string) => {
    switch (color) {
      case 'red': return { border: 'border-[#E53935]', text: 'text-[#E53935]', bg: 'bg-[#E53935]/10' };
      case 'blue': return { border: 'border-[#1976D2]', text: 'text-[#1976D2]', bg: 'bg-[#1976D2]/10' };
      case 'green': return { border: 'border-[#2E9B59]', text: 'text-[#2E9B59]', bg: 'bg-[#2E9B59]/10' };
      default: return { border: 'border-[#1B140E]', text: 'text-[#1B140E]', bg: 'bg-[#1B140E]/10' };
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#FAF8F4] relative border-b border-[#1B140E]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1B140E]/15 pb-6">
          <div>
            <div className="font-mono-tech text-xs text-[#1976D2] uppercase tracking-wider font-bold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1976D2]" />
              SECTION 07 // SKILL MATRIX & TOOLSET
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#1B140E]">
              TECHNICAL DASHBOARD
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#6C645C] max-w-md mt-4 md:mt-0">
            ENGINEERING SKILLS MATRIX • HOVER ANY CARD TO INSPECT PRACTICAL CONTEXT
          </p>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => {
            const style = getCategoryHeaderStyle(category.color);

            return (
              <div 
                key={category.code}
                className="dossier-border bg-[#F2EDE5] rounded-xl p-6 space-y-5"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-[#1B140E]/15 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className={`font-mono-tech text-xs font-bold px-2 py-0.5 rounded border ${style.bg} ${style.text} ${style.border}`}>
                      {category.code}
                    </span>
                    <h3 className="font-heading font-extrabold text-base text-[#1B140E]">
                      {category.title}
                    </h3>
                  </div>

                  <span className="font-mono-tech text-[10px] text-[#6C645C]">
                    {category.skills.length} COMPETENCIES
                  </span>
                </div>

                {/* Skill Items Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill) => {
                    const isHovered = activeTooltip?.skillName === skill.name;

                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setActiveTooltip({ category: category.title, skillName: skill.name, text: skill.tooltip })}
                        onMouseLeave={() => setActiveTooltip(null)}
                        className={`p-3 rounded-lg border transition-all cursor-pointer relative ${
                          isHovered 
                            ? 'bg-[#1B140E] text-white border-[#1B140E] shadow-sm scale-102 z-10' 
                            : 'bg-[#FAF8F4] text-[#1B140E] border-[#1B140E]/15 hover:border-[#1B140E]/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-heading font-bold text-xs">
                            {skill.name}
                          </span>
                          <Info className={`w-3.5 h-3.5 ${isHovered ? 'text-[#E53935]' : 'text-[#6C645C]'}`} />
                        </div>

                        <div className={`font-mono-tech text-[10px] mt-1 ${isHovered ? 'text-[#E53935] font-bold' : 'text-[#6C645C]'}`}>
                          {skill.level}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Skill Context Inspector Box */}
        <div className="mt-8 p-5 rounded-xl bg-[#1B140E] text-[#FAF8F4] border border-[#1B140E] shadow-lg font-mono-tech text-xs">
          <div className="flex items-center gap-2 text-[#E53935] font-bold uppercase tracking-wider mb-2">
            <Terminal className="w-4 h-4 animate-pulse" />
            LIVE INSPECTOR TOOLTIP
          </div>

          {activeTooltip ? (
            <div className="space-y-1 animate-in fade-in duration-200">
              <div className="text-[#2E9B59] font-bold">
                [{activeTooltip.category}] ──► {activeTooltip.skillName}
              </div>
              <div className="text-white/90 leading-relaxed font-sans text-sm">
                "{activeTooltip.text}"
              </div>
            </div>
          ) : (
            <div className="text-white/50 italic">
              Hover over any skill card above to view Arun's verified engineering context, software certification, and project application.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
