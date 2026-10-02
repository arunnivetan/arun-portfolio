import React, { useState } from 'react';
import { INTERNSHIPS } from '../data/portfolioData';
import { Factory, Sun, Cpu, Code, Activity, CheckCircle2, ChevronRight } from 'lucide-react';

export const IndustrialExposure: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('kothari');

  const selectedInternship = INTERNSHIPS.find(i => i.id === selectedId) || INTERNSHIPS[0];

  const getIcon = (type: string) => {
    switch (type) {
      case 'industrial': return <Factory className="w-5 h-5 text-[#E53935]" />;
      case 'solar': return <Sun className="w-5 h-5 text-[#2E9B59]" />;
      case 'embedded': return <Cpu className="w-5 h-5 text-[#1976D2]" />;
      default: return <Code className="w-5 h-5 text-[#1B140E]" />;
    }
  };

  return (
    <section id="industrial" className="py-20 bg-[#F2EDE5] relative border-b border-[#1B140E]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1B140E]/15 pb-6">
          <div>
            <div className="font-mono-tech text-xs text-[#2E9B59] uppercase tracking-wider font-bold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2E9B59]" />
              SECTION 04 // FIELD EXPOSURE & INTERNSHIPS
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#1B140E]">
              INDUSTRIAL NETWORK
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#6C645C] max-w-md mt-4 md:mt-0">
            HIGH VOLTAGE SUBSTATION • SOLAR PV ON-GRID • COGENERATION • EMBEDDED
          </p>
        </div>

        {/* Interactive Electrical Network Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Substation Bus Network Selector */}
          <div className="lg:col-span-5 space-y-3">
            <div className="font-mono-tech text-xs text-[#6C645C] uppercase font-bold mb-2">
              SELECT INDUSTRIAL SUBSTATION NODE
            </div>

            {INTERNSHIPS.map((internship) => {
              const isSelected = selectedId === internship.id;

              return (
                <div
                  key={internship.id}
                  onClick={() => setSelectedId(internship.id)}
                  className={`dossier-border p-4 rounded-xl cursor-pointer transition-all ${
                    isSelected 
                      ? 'bg-[#1B140E] text-[#FAF8F4] border-[#1B140E] shadow-md scale-102' 
                      : 'bg-[#FAF8F4] text-[#1B140E] hover:border-[#1B140E]/50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded ${isSelected ? 'bg-[#FAF8F4]/15' : 'bg-[#F2EDE5]'}`}>
                        {getIcon(internship.type)}
                      </div>
                      <div>
                        <div className="font-heading font-bold text-sm leading-tight">
                          {internship.company}
                        </div>
                        <div className={`font-mono-tech text-xs ${isSelected ? 'text-[#E53935]' : 'text-[#6C645C]'}`}>
                          {internship.role}
                        </div>
                      </div>
                    </div>

                    <ChevronRight className={`w-5 h-5 transition-transform ${isSelected ? 'rotate-90 text-[#E53935]' : 'text-[#6C645C]'}`} />
                  </div>

                  {internship.voltageLevels && (
                    <div className="mt-3 pt-2 border-t border-current/10 flex flex-wrap gap-1 font-mono-tech text-[10px]">
                      {internship.voltageLevels.map(v => (
                        <span key={v} className={`px-2 py-0.5 rounded ${isSelected ? 'bg-[#E53935] text-white font-bold' : 'bg-[#F2EDE5] text-[#1B140E]'}`}>
                          {v}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Industrial Node Specification */}
          <div className="lg:col-span-7">
            <div className="dossier-border bg-[#FAF8F4] rounded-xl p-6 sm:p-8 space-y-6">
              
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1B140E]/15 pb-4">
                <div>
                  <div className="font-mono-tech text-xs text-[#E53935] uppercase font-bold">
                    FIELD DOSSIER // {selectedInternship.period} ({selectedInternship.duration})
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold text-[#1B140E]">
                    {selectedInternship.company}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F2EDE5] font-mono-tech text-xs text-[#1B140E] font-bold border border-[#1B140E]/15">
                  <Activity className="w-3.5 h-3.5 text-[#2E9B59]" /> VERIFIED EXPERIENCE
                </div>
              </div>

              {/* Detailed Narrative */}
              <p className="text-base text-[#1B140E]/90 leading-relaxed bg-[#F2EDE5] p-4 rounded border border-[#1B140E]/10">
                {selectedInternship.detailedDescription}
              </p>

              {/* Technical Highlights Checklist */}
              <div className="space-y-3">
                <div className="font-mono-tech text-xs text-[#1B140E] uppercase font-bold tracking-wider">
                  KEY TECHNICAL OBSERVED & LEARNED COMPETENCIES
                </div>

                <div className="space-y-2">
                  {selectedInternship.keyHighlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 p-3 bg-[#FAF8F4] border border-[#1B140E]/10 rounded text-xs text-[#1B140E]">
                      <CheckCircle2 className="w-4 h-4 text-[#2E9B59] shrink-0 mt-0.5" />
                      <span className="leading-normal font-medium">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
