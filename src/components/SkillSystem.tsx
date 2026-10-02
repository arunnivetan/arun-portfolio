import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillSystem: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getAccentColor = (color: string) => {
    switch (color) {
      case 'red': return { accent: '#D92D20', bg: 'bg-[#D92D20]/8', text: 'text-[#D92D20]', border: 'border-[#D92D20]/30', bar: 'bg-[#D92D20]' };
      case 'green': return { accent: '#278B57', bg: 'bg-[#278B57]/8', text: 'text-[#278B57]', border: 'border-[#278B57]/30', bar: 'bg-[#278B57]' };
      case 'blue': return { accent: '#1769AA', bg: 'bg-[#1769AA]/8', text: 'text-[#1769AA]', border: 'border-[#1769AA]/30', bar: 'bg-[#1769AA]' };
      default: return { accent: '#17130F', bg: 'bg-[#17130F]/8', text: 'text-[#17130F]', border: 'border-[#17130F]/30', bar: 'bg-[#17130F]' };
    }
  };

  const totalSkills = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-24 bg-[#F7F3EC] relative border-b border-[#17130F]/15 bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#17130F]/15 pb-8 mb-14">
          <div>
            <h2 className="font-heading text-5xl sm:text-6xl font-extrabold text-[#17130F] leading-none tracking-tight">
              SKILLS
            </h2>
            <p className="text-base text-[#6C645C] mt-3">
              Tools and technologies I work with.
            </p>
          </div>

          <div className="flex items-center gap-6 font-mono-tech text-xs text-[#6C645C]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D92D20]" />
              <span>{SKILL_CATEGORIES.length} DOMAINS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#278B57]" />
              <span>{totalSkills} COMPETENCIES</span>
            </div>
          </div>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {SKILL_CATEGORIES.map((category) => {
            const colors = getAccentColor(category.color);

            return (
              <div key={category.code} className="space-y-5">
                
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className={`w-1 h-8 rounded-full ${colors.bar}`} />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#17130F] leading-tight">
                      {category.title}
                    </h3>
                    <span className="font-mono-tech text-[10px] text-[#6C645C] uppercase tracking-wider">
                      {category.skills.length} skills
                    </span>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;

                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group relative"
                      >
                        <div
                          className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200 cursor-default ${
                            isHovered
                              ? `bg-[#17130F] border-[#17130F] shadow-sm`
                              : 'bg-[#EEE8DE]/60 border-[#17130F]/10 hover:border-[#17130F]/25'
                          }`}
                        >
                          <span className={`font-heading font-semibold text-sm transition-colors ${
                            isHovered ? 'text-white' : 'text-[#17130F]'
                          }`}>
                            {skill.name}
                          </span>

                          <span className={`font-mono-tech text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full transition-all ${
                            isHovered
                              ? `${colors.bg} ${colors.text}`
                              : 'bg-[#17130F]/6 text-[#6C645C]'
                          }`}>
                            {skill.level}
                          </span>
                        </div>

                        {/* Clean Tooltip */}
                        {isHovered && (
                          <div className="absolute left-0 right-0 top-full mt-1.5 z-20 px-4 py-2.5 bg-white rounded-lg border border-[#17130F]/10 shadow-lg font-mono-tech text-xs text-[#6C645C] leading-relaxed animate-in fade-in slide-in-from-top-1 duration-150">
                            {skill.tooltip}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
