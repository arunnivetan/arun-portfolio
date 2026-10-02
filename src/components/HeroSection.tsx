import React, { useState } from 'react';
import { ArrowRight, Download, Mail, Maximize2, X, Zap, GraduationCap, Award, FileText, MapPin, Briefcase } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
  activeSignal: 'power' | 'control' | 'renewable' | 'all';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [selectedSldModal, setSelectedSldModal] = useState<{ title: string; image: string; tag: string } | null>(null);

  const heroTags = [
    "POWER SYSTEMS",
    "RENEWABLE ENERGY",
    "SOLAR PV",
    "ETAP",
    "IoT",
    "AI / ML",
    "AUTOMATION"
  ];

  return (
    <section className="relative pt-24 lg:pt-28 pb-0 overflow-hidden bg-[#F7F3EC] bg-grid-pattern border-b border-[#17130F]/15">
      {/* Background Technical Measurement Lines & Coordinates */}
      <div className="absolute top-16 left-6 font-mono-tech text-[10px] text-[#6C645C]/50 select-none hidden md:block">
        SYS.GRID.NODE // COORD: 13.0827° N, 80.2707° E • FREQ: 50.00 Hz [NOMINAL]
      </div>
      <div className="absolute top-16 right-6 font-mono-tech text-[10px] text-[#6C645C]/50 select-none hidden md:block">
        DWG NO: EEE-2027-SLD-01 // SCALE: 1:100 • REV 3.4
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 pb-12 lg:pb-16">
          
          {/* LEFT SIDE: Hero Typography & Info */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Subtitle Annotation */}
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#6C645C] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D92D20] animate-pulse" />
              <span>ELECTRICAL ENGINEERING × RENEWABLE ENERGY × TECHNOLOGY</span>
            </div>

            {/* Main Large Typography */}
            <div className="space-y-1">
              <h1 className="font-heading text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#17130F] leading-[0.95]">
                R S ARUN
              </h1>
              <h1 className="font-heading text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#D92D20] leading-[0.95]">
                NIVETAN
              </h1>
            </div>

            {/* Sub-heading */}
            <div className="font-mono-tech text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#17130F]/80 pt-1">
              ELECTRICAL & ELECTRONICS ENGINEERING STUDENT
            </div>

            {/* Tagline Statement */}
            <h2 className="font-heading text-xl sm:text-2xl xl:text-3xl font-bold text-[#17130F] leading-snug">
              "Building at the intersection of<br />
              <span className="text-[#D92D20]">Power</span>, <span className="text-[#278B57]">Renewable Energy</span> & <span className="text-[#1769AA]">Technology</span>."
            </h2>

            {/* Short Professional Description */}
            <p className="text-base text-[#6C645C] max-w-xl leading-relaxed">
              Final-year EEE student passionate about power systems, renewable energy, electrical analysis and technology-driven engineering solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 bg-[#D92D20] text-white font-mono-tech text-xs font-bold uppercase tracking-wider rounded-md hover:bg-[#17130F] transition-all flex items-center gap-2 group shadow-sm cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 bg-[#EEE8DE] text-[#17130F] font-mono-tech text-xs font-bold uppercase tracking-wider rounded-md border border-[#17130F]/20 hover:bg-[#17130F] hover:text-white transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#D92D20]" />
                <span>DOWNLOAD RESUME</span>
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 bg-transparent text-[#17130F] font-mono-tech text-xs font-bold uppercase tracking-wider rounded-md border border-dashed border-[#17130F]/30 hover:border-[#17130F] hover:bg-[#EEE8DE] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#1769AA]" />
                <span>CONTACT ME</span>
              </a>
            </div>

            {/* Section 7: Engineering Identity Annotations */}
            <div className="pt-4 border-t border-[#17130F]/15">
              <div className="font-mono-tech text-[10px] uppercase text-[#6C645C] font-semibold mb-2 tracking-wider">
                ENGINEERING ANNOTATIONS // CORE DOMAINS:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-tech text-[10px] px-2.5 py-1 rounded bg-[#EEE8DE] border border-[#17130F]/15 text-[#17130F] hover:border-[#D92D20] hover:text-[#D92D20] transition-colors cursor-default"
                  >
                    [{tag}]
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Visual Technical Composition with Real Photo & Real SLD Work */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0 flex justify-center items-center">
            
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Technical Drawing SVG Circuit Overlay Behind Portrait */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500">
                {/* Circuit paths with Signal Colors */}
                {/* RED: Power path */}
                <path d="M 40 120 L 220 120 L 220 280 L 380 280" stroke="#D92D20" strokeWidth="2" fill="none" className="wire-animated" />
                
                {/* BLUE: Control / Grid path */}
                <path d="M 120 40 L 120 220 L 300 220 L 300 420" stroke="#1769AA" strokeWidth="2" fill="none" className="wire-animated" />
                
                {/* GREEN: Renewable Energy path */}
                <path d="M 320 60 L 320 180 L 460 180 L 460 360" stroke="#278B57" strokeWidth="2" fill="none" className="wire-animated" />

                {/* Technical Node Nodes */}
                <circle cx="220" cy="120" r="4" fill="#D92D20" />
                <circle cx="120" cy="220" r="4" fill="#1769AA" />
                <circle cx="320" cy="180" r="4" fill="#278B57" />
              </svg>

              {/* Real SLD Background Card (Interactive Lightbox Trigger) */}
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSldModal({
                    title: "110 kV ETAP DISTRIBUTION SYSTEM & SINGLE LINE DIAGRAM",
                    image: "/assets/sld_etap_110kv.png",
                    tag: "SLD 01 // 110 kV DISTRIBUTION SYSTEM"
                  });
                }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-30 pointer-events-auto bg-[#FAF8F4]/95 backdrop-blur-md p-2.5 rounded-lg border-2 border-[#D92D20]/40 shadow-xl hover:scale-105 hover:border-[#D92D20] transition-all cursor-pointer group max-w-[200px] sm:max-w-[240px]"
              >
                <div className="flex items-center justify-between pb-1 mb-1 border-b border-[#17130F]/10 font-mono-tech text-[9px] font-bold text-[#D92D20]">
                  <span>SLD 01 • 110 kV DIST SYS</span>
                  <Maximize2 className="w-3.5 h-3.5 group-hover:scale-125 transition-transform text-[#D92D20]" />
                </div>
                <div className="relative overflow-hidden rounded border border-[#17130F]/15 bg-white h-20 sm:h-24">
                  <img
                    src="/assets/sld_etap_110kv.png"
                    alt="SLD 01 - 110kV Distribution System"
                    className="w-full h-full object-contain p-0.5 opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all"
                  />
                  <div className="absolute inset-0 bg-[#17130F]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-mono-tech text-[10px] font-bold text-white uppercase tracking-wider">
                    Click to View SLD
                  </div>
                </div>
                <div className="font-mono-tech text-[8px] text-[#6C645C] mt-1 flex justify-between">
                  <span>ETAP LOAD FLOW</span>
                  <span>50 Hz SYNCH</span>
                </div>
              </div>

              {/* Second Floating Technical Card: SLD 02 / Solar & ETAP Load Flow Node */}
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSldModal({
                    title: "11 kV / 0.415 kV SOLAR PV & ETAP LOAD FLOW ANALYSIS",
                    image: "/assets/sld_etap_solar_pv.png",
                    tag: "SLD 02 // SOLAR PV & LOAD FLOW SYSTEM"
                  });
                }}
                className="absolute bottom-6 left-0 sm:left-2 z-30 pointer-events-auto bg-[#FAF8F4]/95 backdrop-blur-md p-2.5 rounded-lg border-2 border-[#1769AA]/40 shadow-xl hover:scale-105 hover:border-[#1769AA] transition-all cursor-pointer group max-w-[200px] sm:max-w-[240px]"
              >
                <div className="flex items-center justify-between pb-1 mb-1 border-b border-[#17130F]/10 font-mono-tech text-[9px] font-bold text-[#1769AA]">
                  <span>SLD 02 • SOLAR PV & LOAD FLOW</span>
                  <Maximize2 className="w-3.5 h-3.5 group-hover:scale-125 transition-transform text-[#1769AA]" />
                </div>
                <div className="relative overflow-hidden rounded border border-[#17130F]/15 bg-white h-20 sm:h-24">
                  <img
                    src="/assets/sld_etap_solar_pv.png"
                    alt="SLD 02 - ETAP Solar PV & Power Load Flow System"
                    className="w-full h-full object-contain p-1 group-hover:scale-105 transition-all"
                  />
                  <div className="absolute inset-0 bg-[#17130F]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-mono-tech text-[10px] font-bold text-white uppercase tracking-wider">
                    Click to View SLD
                  </div>
                </div>
                <div className="font-mono-tech text-[8px] text-[#6C645C] mt-1 space-y-0.5">
                  <div className="flex justify-between"><span>BUS VOLTAGE:</span><span className="text-[#278B57] font-bold">11 kV (100%)</span></div>
                  <div className="flex justify-between"><span>TRANSFORMER T1:</span><span className="text-[#D92D20] font-bold">5 MVA</span></div>
                </div>
              </div>

              {/* SECTION 1: Actual Photo Container */}
              <div className="relative z-10 flex justify-center pt-8">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#17130F]/20 shadow-2xl bg-gradient-to-b from-[#EEE8DE] to-[#F7F3EC] max-w-[340px] sm:max-w-[390px] group">
                  
                  {/* Fine technical photo header label */}
                  <div className="bg-[#17130F] text-white px-3 py-1.5 font-mono-tech text-[10px] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#278B57] animate-ping" />
                      R S ARUN NIVETAN // EEE 2027
                    </span>
                    <span className="text-[#EEE8DE]">PORTRAIT_EDITORIAL.RAW</span>
                  </div>

                  {/* USER'S ACTUAL PHOTO */}
                  <div className="relative pt-2 px-2 overflow-hidden bg-gradient-to-t from-[#F7F3EC] via-transparent to-transparent">
                    <img
                      src="/assets/arun_portrait.jpg"
                      alt="R S Arun Nivetan"
                      className="w-full h-auto object-cover object-top rounded-b-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                      style={{ maxHeight: '440px' }}
                    />
                    
                    {/* Soft Vignette Overlay to integrate background cleanly */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EC] via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>

                  {/* Section 9: Flow Connection Bar */}
                  <div className="p-3 bg-[#EEE8DE] border-t border-[#17130F]/15 font-mono-tech text-[9px] text-[#17130F] flex items-center justify-between">
                    <span className="font-bold text-[#D92D20]">WORK FLOW:</span>
                    <span>SLD ANALYSIS → POWER SYSTEM → LOAD</span>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* SECTION 8: BOTTOM HERO STRIP (Dark Section) */}
      <div className="bg-[#17130F] text-[#F7F3EC] py-8 border-t-2 border-[#D92D20] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Header */}
            <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-white/15 pb-4 md:pb-0 md:pr-6">
              <div className="font-mono-tech text-[10px] text-[#D92D20] uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> MY JOURNEY
              </div>
              <div className="font-heading font-black text-2xl tracking-wider text-white mt-1 leading-none">
                LEARNING<br />
                BUILDING<br />
                SOLVING<br />
                GROWING
              </div>
            </div>

            {/* Compact Information Columns */}
            <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center sm:text-left">
              
              {/* Stat 1 */}
              <div className="p-2 border-r border-white/10 last:border-r-0">
                <div className="font-heading font-extrabold text-xl text-white flex items-center gap-1.5 sm:justify-start justify-center">
                  <GraduationCap className="w-4 h-4 text-[#D92D20]" />
                  FINAL YEAR
                </div>
                <div className="font-mono-tech text-[10px] text-white/70 uppercase mt-0.5">
                  EEE STUDENT
                </div>
              </div>

              {/* Stat 2 */}
              <div className="p-2 border-r border-white/10 last:border-r-0">
                <div className="font-heading font-extrabold text-xl text-white flex items-center gap-1.5 sm:justify-start justify-center">
                  <Briefcase className="w-4 h-4 text-[#1769AA]" />
                  4+
                </div>
                <div className="font-mono-tech text-[10px] text-white/70 uppercase mt-0.5">
                  MAJOR PROJECTS
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-2 border-r border-white/10 last:border-r-0">
                <div className="font-heading font-extrabold text-xl text-white flex items-center gap-1.5 sm:justify-start justify-center">
                  <FileText className="w-4 h-4 text-[#278B57]" />
                  1
                </div>
                <div className="font-mono-tech text-[10px] text-white/70 uppercase mt-0.5">
                  RESEARCH PUBLICATION
                </div>
              </div>

              {/* Stat 4 */}
              <div className="p-2 border-r border-white/10 last:border-r-0">
                <div className="font-heading font-extrabold text-xl text-white flex items-center gap-1.5 sm:justify-start justify-center">
                  <Award className="w-4 h-4 text-amber-400" />
                  1st PRIZE
                </div>
                <div className="font-mono-tech text-[10px] text-white/70 uppercase mt-0.5">
                  SDG INNOVATHON 4.0
                </div>
              </div>

              {/* Stat 5 */}
              <div className="p-2 col-span-2 sm:col-span-1">
                <div className="font-heading font-extrabold text-base text-white flex items-center gap-1.5 sm:justify-start justify-center">
                  <MapPin className="w-4 h-4 text-[#D92D20]" />
                  INDUSTRIAL
                </div>
                <div className="font-mono-tech text-[10px] text-white/70 uppercase mt-0.5">
                  INTERNSHIP EXP. • CHENNAI
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Section 9: SLD Modal / Lightbox */}
      {selectedSldModal && (
        <div 
          onClick={() => setSelectedSldModal(null)}
          className="fixed inset-0 z-50 bg-[#17130F]/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#F7F3EC] border-2 border-[#17130F] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative cursor-default"
          >
            
            {/* Modal Header */}
            <div className="bg-[#17130F] text-white p-4 flex items-center justify-between font-mono-tech text-xs">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#D92D20]" />
                <span className="font-bold">{selectedSldModal.tag}</span>
              </div>
              <button
                onClick={() => setSelectedSldModal(null)}
                className="p-1 hover:bg-white/20 rounded transition-colors text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto bg-grid-pattern space-y-4">
              <h3 className="font-heading font-bold text-lg text-[#17130F]">
                {selectedSldModal.title}
              </h3>
              
              <div className="border border-[#17130F]/20 rounded-lg overflow-hidden bg-white p-2">
                <img
                  src={selectedSldModal.image}
                  alt={selectedSldModal.title}
                  className="w-full h-auto object-contain max-h-[60vh] mx-auto"
                />
              </div>

              <div className="bg-[#EEE8DE] p-4 rounded-lg font-mono-tech text-xs text-[#6C645C] space-y-1 border border-[#17130F]/10">
                <div className="font-bold text-[#17130F] uppercase">SYSTEM ANALYSIS & SUMMARY:</div>
                <div>• Single Line Diagram drafted & evaluated for 110 kV distribution substation transformer loading and voltage profiling.</div>
                <div>• Used in power flow simulation studies to analyze bus voltages, branch loading, and short-circuit fault levels.</div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#EEE8DE] border-t border-[#17130F]/15 flex items-center justify-between font-mono-tech text-xs">
              <a
                href={selectedSldModal.image}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#17130F] text-white rounded font-bold hover:bg-[#D92D20] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>OPEN FULL DIAGRAM</span>
              </a>

              <button
                onClick={() => setSelectedSldModal(null)}
                className="px-5 py-2 bg-[#EEE8DE] text-[#17130F] border border-[#17130F]/20 font-bold rounded hover:bg-[#17130F]/10 transition-colors cursor-pointer"
              >
                CLOSE SLD VIEWER
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

