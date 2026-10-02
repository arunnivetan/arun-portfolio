import React from 'react';
import { Download, Globe, Code, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-20 bg-[#FAF8F4] relative border-b border-[#1B140E]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDE5] border border-[#1B140E]/15 font-mono-tech text-xs text-[#E53935] font-bold uppercase">
            <FileText className="w-3.5 h-3.5" /> RESUME & DIRECT CONTACT
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#1B140E] tracking-tight">
            LET'S BUILD SOMETHING USEFUL.
          </h2>

          <p className="text-base sm:text-lg text-[#6C645C] max-w-2xl mx-auto leading-relaxed">
            I am actively seeking full-time opportunities, graduate engineering roles, and internships in electrical design, power systems, renewable energy, and technology-driven engineering.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenResume}
              className="px-8 py-4 bg-[#1B140E] text-[#FAF8F4] font-mono-tech text-xs font-bold uppercase tracking-wider rounded border border-[#1B140E] hover:bg-[#E53935] transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Download className="w-4 h-4 text-[#FAF8F4]" />
              <span>VIEW / DOWNLOAD RESUME</span>
            </button>

            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-[#F2EDE5] text-[#1B140E] font-mono-tech text-xs font-bold uppercase tracking-wider rounded border border-[#1B140E]/25 hover:bg-[#1976D2] hover:text-white transition-all flex items-center gap-2 cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span>LINKEDIN PROFILE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-[#F2EDE5] text-[#1B140E] font-mono-tech text-xs font-bold uppercase tracking-wider rounded border border-[#1B140E]/25 hover:bg-[#1B140E] hover:text-white transition-all flex items-center gap-2 cursor-pointer"
            >
              <Code className="w-4 h-4" />
              <span>GITHUB</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left font-mono-tech text-xs">
            <div className="p-4 bg-[#F2EDE5] rounded-lg border border-[#1B140E]/15">
              <div className="text-[#6C645C] uppercase text-[10px]">EMAIL ADDRESS</div>
              <div className="font-bold text-[#1B140E] mt-1">{PERSONAL_INFO.contact.email}</div>
            </div>
            <div className="p-4 bg-[#F2EDE5] rounded-lg border border-[#1B140E]/15">
              <div className="text-[#6C645C] uppercase text-[10px]">PHONE NUMBER</div>
              <div className="font-bold text-[#1B140E] mt-1">{PERSONAL_INFO.contact.phone}</div>
            </div>
            <div className="p-4 bg-[#F2EDE5] rounded-lg border border-[#1B140E]/15">
              <div className="text-[#6C645C] uppercase text-[10px]">LOCATION</div>
              <div className="font-bold text-[#1B140E] mt-1">{PERSONAL_INFO.contact.location}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
