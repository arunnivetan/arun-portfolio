import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

interface AboutSectionProps {
  onOpenResume?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-24 bg-[#F7F3EC] relative border-b border-[#17130F]/15 bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Hero Header & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-6xl sm:text-7xl font-extrabold text-[#17130F] leading-none tracking-tight">
              WHO<br />
              <span className="text-[#D92D20]">I AM</span>
            </h2>

            <p className="text-xl sm:text-2xl font-medium text-[#17130F] leading-relaxed">
              "I am an Electrical and Electronics Engineering student interested in electrical systems, renewable energy, IoT and practical problem solving."
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-[#17130F]/20 shadow-xl max-w-xs bg-[#EEE8DE]">
              <img
                src="/assets/arun_portrait.jpg"
                alt="R S Arun Nivetan"
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Section: WHAT I DO */}
        <div className="space-y-8 pt-6 border-t border-[#17130F]/15">
          <h3 className="font-mono-tech text-xs font-bold text-[#D92D20] uppercase tracking-widest">
            WHAT I DO
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#EEE8DE]/70 rounded-xl border border-[#17130F]/10 space-y-2">
              <div className="font-mono-tech text-sm font-bold text-[#D92D20]">01</div>
              <h4 className="font-heading text-lg font-bold text-[#17130F]">Electrical Engineering</h4>
              <p className="text-sm text-[#6C645C]">
                Power systems modeling, load flow analysis, and single-line diagram studies.
              </p>
            </div>

            <div className="p-6 bg-[#EEE8DE]/70 rounded-xl border border-[#17130F]/10 space-y-2">
              <div className="font-mono-tech text-sm font-bold text-[#278B57]">02</div>
              <h4 className="font-heading text-lg font-bold text-[#17130F]">Renewable Energy</h4>
              <p className="text-sm text-[#6C645C]">
                Solar PV installations, inverter configuration, and clean energy tech.
              </p>
            </div>

            <div className="p-6 bg-[#EEE8DE]/70 rounded-xl border border-[#17130F]/10 space-y-2">
              <div className="font-mono-tech text-sm font-bold text-[#1769AA]">03</div>
              <h4 className="font-heading text-lg font-bold text-[#17130F]">Technology & IoT</h4>
              <p className="text-sm text-[#6C645C]">
                ESP32 microcontrollers, sensor telemetry, and smart hardware integration.
              </p>
            </div>
          </div>
        </div>

        {/* Section: WHAT DRIVES ME */}
        <div className="space-y-8 pt-6 border-t border-[#17130F]/15">
          <h3 className="font-mono-tech text-xs font-bold text-[#D92D20] uppercase tracking-widest">
            WHAT DRIVES ME
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-base text-[#17130F]">REAL-WORLD PROBLEMS</h4>
              <p className="text-sm text-[#6C645C] leading-relaxed">
                I enjoy building solutions for practical problems.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-heading font-bold text-base text-[#17130F]">CONTINUOUS LEARNING</h4>
              <p className="text-sm text-[#6C645C] leading-relaxed">
                I like learning new tools and technologies.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-heading font-bold text-base text-[#17130F]">BUILDING</h4>
              <p className="text-sm text-[#6C645C] leading-relaxed">
                I enjoy turning ideas into working projects.
              </p>
            </div>
          </div>
        </div>

        {/* Section: MY JOURNEY */}
        <div className="space-y-8 pt-6 border-t border-[#17130F]/15">
          <h3 className="font-mono-tech text-xs font-bold text-[#D92D20] uppercase tracking-widest">
            MY JOURNEY
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-tech">
            <div className="p-4 bg-[#EEE8DE]/50 rounded-lg border border-[#17130F]/10">
              <div className="font-bold text-xl text-[#17130F]">2024</div>
              <div className="text-xs text-[#6C645C] mt-1">Learning & Building</div>
            </div>

            <div className="p-4 bg-[#EEE8DE]/50 rounded-lg border border-[#17130F]/10">
              <div className="font-bold text-xl text-[#D92D20]">2025</div>
              <div className="text-xs text-[#6C645C] mt-1">Projects & Experience</div>
            </div>

            <div className="p-4 bg-[#EEE8DE]/50 rounded-lg border border-[#17130F]/10">
              <div className="font-bold text-xl text-[#278B57]">2026</div>
              <div className="text-xs text-[#6C645C] mt-1">Growing as an Engineer</div>
            </div>
          </div>
        </div>

        {/* Section: MY GOAL */}
        <div className="p-8 sm:p-12 bg-[#17130F] text-[#F7F3EC] rounded-2xl space-y-6">
          <div className="font-mono-tech text-xs text-[#D92D20] font-bold uppercase tracking-widest">
            MY GOAL
          </div>
          
          <h3 className="font-heading text-2xl sm:text-3xl font-bold leading-snug">
            "To become a technically confident electrical engineer and build useful solutions for a smarter and cleaner future."
          </h3>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="px-6 py-3 bg-[#D92D20] text-white font-mono-tech text-xs font-bold uppercase rounded-md hover:bg-white hover:text-[#17130F] transition-all flex items-center gap-2"
            >
              <span>CONTACT ME</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="px-6 py-3 bg-white/10 text-white font-mono-tech text-xs font-bold uppercase rounded-md border border-white/20 hover:bg-white hover:text-[#17130F] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

