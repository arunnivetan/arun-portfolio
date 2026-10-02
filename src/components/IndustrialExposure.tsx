import React, { useState } from 'react';
import { INTERNSHIPS } from '../data/portfolioData';
import { Factory, Sun, Cpu, Code, Activity, CheckCircle2, ChevronRight, Camera } from 'lucide-react';

// Map internship IDs to their field photos
const INTERNSHIP_PHOTOS: Record<string, { src: string; caption: string }[]> = {
  'kothari': [
    { src: '/assets/kothari_field_site.jpg', caption: 'Industrial Processing & Machinery Field Observation — Kothari Sugars & Chemicals' }
  ],
  'aswin-solar': [
    { src: '/assets/solar_pv_rooftop.jpg', caption: '30 kW Rooftop Solar PV Installation — Vadapalani Temple, Chennai' },
    { src: '/assets/aswin_solar_training.jpg', caption: 'Team with Aswin Solar Engineers — On-site Training Session' }
  ],
  'nsic': [
    { src: '/assets/nsic_pcb_certificate.jpg', caption: 'Official Internship Certificate — NSIC Technical Services Centre (Govt. of India)' }
  ],
  'fibercat': [
    { src: '/assets/fibercat_certificate.jpg', caption: 'Official Internship Certificate — Fibercat Technology Private Limited' }
  ]
};

export const IndustrialExposure: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('kothari');

  const selectedInternship = INTERNSHIPS.find(i => i.id === selectedId) || INTERNSHIPS[0];
  const photos = INTERNSHIP_PHOTOS[selectedId] || [];

  const getIcon = (type: string) => {
    switch (type) {
      case 'industrial': return <Factory className="w-5 h-5 text-[#D92D20]" />;
      case 'solar': return <Sun className="w-5 h-5 text-[#278B57]" />;
      case 'embedded': return <Cpu className="w-5 h-5 text-[#1769AA]" />;
      default: return <Code className="w-5 h-5 text-[#17130F]" />;
    }
  };

  return (
    <section id="industrial" className="py-24 bg-[#EEE8DE] relative border-b border-[#17130F]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#17130F]/15 pb-8 mb-14">
          <div>
            <h2 className="font-heading text-5xl sm:text-6xl font-extrabold text-[#17130F] leading-none tracking-tight">
              EXPERIENCE
            </h2>
            <p className="text-base text-[#6C645C] mt-3">
              Industrial internships and field exposure.
            </p>
          </div>
          <div className="font-mono-tech text-xs text-[#6C645C]">
            {INTERNSHIPS.length} INTERNSHIPS
          </div>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Internship Selector */}
          <div className="lg:col-span-5 space-y-3">
            {INTERNSHIPS.map((internship) => {
              const isSelected = selectedId === internship.id;

              return (
                <div
                  key={internship.id}
                  onClick={() => setSelectedId(internship.id)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
                    isSelected 
                      ? 'bg-[#17130F] text-white border-[#17130F] shadow-md' 
                      : 'bg-[#F7F3EC] text-[#17130F] border-[#17130F]/10 hover:border-[#17130F]/30'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/10' : 'bg-[#EEE8DE]'}`}>
                        {getIcon(internship.type)}
                      </div>
                      <div>
                        <div className="font-heading font-bold text-sm leading-tight">
                          {internship.company}
                        </div>
                        <div className={`font-mono-tech text-[11px] mt-0.5 ${isSelected ? 'text-[#D92D20]' : 'text-[#6C645C]'}`}>
                          {internship.period} · {internship.duration}
                        </div>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform shrink-0 mt-1 ${isSelected ? 'rotate-90 text-[#D92D20]' : 'text-[#6C645C]'}`} />
                  </div>

                  {internship.voltageLevels && (
                    <div className="mt-3 pt-2 border-t border-current/10 flex flex-wrap gap-1.5 font-mono-tech text-[10px]">
                      {internship.voltageLevels.map(v => (
                        <span key={v} className={`px-2 py-0.5 rounded ${isSelected ? 'bg-[#D92D20] text-white font-bold' : 'bg-[#EEE8DE] text-[#17130F]'}`}>
                          {v}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Detail Panel */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F3EC] rounded-2xl border border-[#17130F]/10 p-6 sm:p-8 space-y-6">
              
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#17130F]/15 pb-4">
                <div>
                  <div className="font-mono-tech text-xs text-[#D92D20] uppercase font-bold">
                    {selectedInternship.period} · {selectedInternship.duration}
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold text-[#17130F]">
                    {selectedInternship.company}
                  </h3>
                  <div className="font-mono-tech text-xs text-[#6C645C] mt-1">
                    {selectedInternship.role}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#278B57]/10 font-mono-tech text-[10px] text-[#278B57] font-bold">
                  <Activity className="w-3.5 h-3.5" /> VERIFIED
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#17130F]/90 leading-relaxed">
                {selectedInternship.detailedDescription}
              </p>

              {/* Field Photos */}
              {photos.length > 0 && (
                <div className="space-y-3">
                  <div className="font-mono-tech text-[10px] text-[#6C645C] uppercase font-bold tracking-wider flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5" /> FIELD DOCUMENTATION
                  </div>
                  <div className={`grid gap-3 ${photos.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                    {photos.map((photo, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden border border-[#17130F]/10 bg-[#EEE8DE]">
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          className="w-full h-64 sm:h-80 object-cover object-top"
                        />
                        <div className="px-3 py-2 font-mono-tech text-[10px] text-[#6C645C]">
                          {photo.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Highlights */}
              <div className="space-y-2">
                <div className="font-mono-tech text-[10px] text-[#17130F] uppercase font-bold tracking-wider">
                  KEY LEARNINGS
                </div>
                {selectedInternship.keyHighlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 p-2.5 bg-[#EEE8DE]/60 border border-[#17130F]/8 rounded-lg text-xs text-[#17130F]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#278B57] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{hl}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
