import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Award, ShieldCheck, ExternalLink, X, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CertificateModalData {
  title: string;
  sub: string;
  certNo: string;
  issuer: string;
  hours: string;
  imageSrc: string;
  tags: string[];
}

export const SkillSystem: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCert, setSelectedCert] = useState<CertificateModalData | null>(null);

  const certificates: CertificateModalData[] = [
    {
      title: "ETAP — Basic & Advanced",
      sub: "Power System Modeling & Analysis",
      certNo: "SSA33603",
      issuer: "Sarva Sudarsanaa Academy (ISO 9001:2015)",
      hours: "60 Hours Program",
      imageSrc: "/assets/etap_certificate.jpg",
      tags: ['Load Flow', 'Short Circuit', 'Arc Flash', 'SLD Modeling']
    },
    {
      title: "AutoCAD Electrical CAD",
      sub: "Electrical Schematic Design & Drafting",
      certNo: "SSA73713",
      issuer: "Sarva Sudarsanaa Academy (ISO 9001:2015)",
      hours: "60 Hours Program",
      imageSrc: "/assets/autocad_certificate.jpg",
      tags: ['Schematics', 'Ladder Diagrams', 'Panel Layouts', 'Wire Numbering']
    }
  ];

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

        {/* Certifications */}
        <div className="mt-16 pt-10 border-t border-[#17130F]/15">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-5 h-5 text-[#D92D20]" />
            <h3 className="font-heading text-2xl font-bold text-[#17130F]">
              CERTIFICATIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div 
                key={cert.certNo}
                onClick={() => setSelectedCert(cert)}
                className="bg-[#EEE8DE]/60 rounded-2xl border border-[#17130F]/10 p-6 space-y-4 hover:border-[#D92D20]/50 hover:shadow-md transition-all cursor-pointer group relative"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="font-heading text-lg font-bold text-[#17130F] group-hover:text-[#D92D20] transition-colors">
                      {cert.title}
                    </h4>
                    <p className="font-mono-tech text-xs text-[#6C645C]">
                      {cert.sub}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono-tech text-[10px] font-bold text-[#278B57] bg-[#278B57]/10 px-2.5 py-1 rounded-full shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    VERIFIED
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 font-mono-tech text-xs">
                  <div className="space-y-0.5">
                    <div className="text-[#6C645C] text-[10px] uppercase tracking-wider">Issued By</div>
                    <div className="text-[#17130F] font-semibold">{cert.issuer}</div>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[#6C645C] text-[10px] uppercase tracking-wider">Certificate No.</div>
                    <div className="text-[#D92D20] font-bold">{cert.certNo}</div>
                    <div className="text-[#6C645C] text-[10px]">{cert.hours}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.tags.map(tag => (
                    <span key={tag} className="font-mono-tech text-[10px] px-2 py-0.5 rounded bg-[#17130F]/6 text-[#17130F]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Click to View Banner */}
                <div className="pt-2 border-t border-[#17130F]/10 flex items-center justify-between font-mono-tech text-xs text-[#D92D20] font-bold">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4" /> VIEW ORIGINAL CERTIFICATE
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-[#17130F]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F7F3EC] w-full max-w-3xl rounded-2xl border-2 border-[#17130F] p-6 sm:p-8 space-y-6 shadow-2xl relative my-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-[#17130F]/15 pb-4">
                <div>
                  <div className="flex items-center gap-2 font-mono-tech text-xs text-[#278B57] font-bold">
                    <ShieldCheck className="w-4 h-4" /> OFFICIAL VERIFIED CERTIFICATE
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#17130F] mt-1">
                    {selectedCert.title}
                  </h3>
                  <p className="font-mono-tech text-xs text-[#6C645C]">
                    No: {selectedCert.certNo} • Issued by {selectedCert.issuer}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-[#EEE8DE] text-[#17130F] hover:bg-[#D92D20] hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image Viewer */}
              <div className="bg-[#EEE8DE] rounded-xl overflow-hidden border border-[#17130F]/15 relative group flex items-center justify-center min-h-[280px]">
                <img
                  src={selectedCert.imageSrc}
                  alt={selectedCert.title}
                  className="w-full max-h-[500px] object-contain"
                  onError={(e) => {
                    // Fallback visual preview if image file isn't uploaded yet
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallbackNode = target.parentElement?.querySelector('.cert-fallback');
                    if (fallbackNode) (fallbackNode as HTMLElement).style.display = 'flex';
                  }}
                />

                {/* Fallback Display */}
                <div className="cert-fallback hidden flex-col items-center justify-center p-8 text-center space-y-3">
                  <Award className="w-16 h-16 text-[#D92D20]" />
                  <div className="font-heading font-extrabold text-lg text-[#17130F]">
                    {selectedCert.title}
                  </div>
                  <div className="font-mono-tech text-xs text-[#6C645C] max-w-md">
                    Certificate Image path: <code className="bg-[#FAF8F4] px-2 py-0.5 rounded text-[#D92D20] font-bold">{selectedCert.imageSrc}</code>
                  </div>
                  <p className="text-xs text-[#6C645C]">
                    Place your certificate image file at <code className="font-bold">public{selectedCert.imageSrc}</code> to display it here.
                  </p>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#17130F]/15 font-mono-tech text-xs">
                <div className="text-[#6C645C]">
                  Certificate No: <span className="font-bold text-[#D92D20]">{selectedCert.certNo}</span> ({selectedCert.hours})
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedCert.imageSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#17130F] text-white rounded-md hover:bg-[#D92D20] transition-colors flex items-center gap-2 font-bold cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" /> OPEN FULL IMAGE
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 bg-[#EEE8DE] text-[#17130F] rounded-md hover:bg-[#17130F]/10 transition-colors font-bold cursor-pointer"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

