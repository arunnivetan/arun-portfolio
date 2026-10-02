import React from 'react';
import { Zap, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B140E] text-[#FAF8F4] py-12 border-t border-[#1B140E]/50 font-mono-tech text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Top Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#E53935] text-white flex items-center justify-center font-bold">
              <Zap className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-base tracking-wide text-white">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[10px] text-white/60">
                ELECTRICAL & ELECTRONICS ENGINEER • CHENNAI, INDIA
              </div>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded bg-white/10 text-white hover:bg-[#E53935] transition-colors cursor-pointer"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Middle Footer Technical Readout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-[11px] text-white/70">
          <div>
            <div className="font-bold text-white mb-1 uppercase">SYSTEM PARAMETERS</div>
            <div>FREQUENCY: 50.00 Hz nominal</div>
            <div>VOLTAGE RATINGS: 110 kV / 11 kV / 415 V</div>
            <div>ACCREDITATION: Anna University Affiliated</div>
          </div>

          <div>
            <div className="font-bold text-white mb-1 uppercase">KEY SPECIALIZATIONS</div>
            <div>ETAP Load Flow & Short Circuit</div>
            <div>Solar PV & Sungrow 33kW Inverter</div>
            <div>EcoBin IoT AI Waste Management</div>
          </div>

          <div>
            <div className="font-bold text-white mb-1 uppercase">LEGAL & CREDIT</div>
            <div>Designed with Warm Industrial Palette</div>
            <div>Ref: #FAF8F4 Ivory • #F2EDE5 Beige • #1B140E Charcoal</div>
            <div>Signal Colors: Red (#E53935) • Blue (#1976D2) • Green (#2E9B59)</div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[10px] text-white/50">
          <div>
            © {new Date().getFullYear()} R S ARUN NIVETAN. ALL RIGHTS RESERVED.
          </div>
          <div className="mt-2 sm:mt-0">
            ENGINEERED WITH REACT, TYPESCRIPT & TAILWIND CSS
          </div>
        </div>

      </div>
    </footer>
  );
};
