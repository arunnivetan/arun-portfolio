import React, { useState } from 'react';
import { HOW_I_THINK_STEPS } from '../data/portfolioData';
import { Zap, Lightbulb, CheckCircle2, ChevronRight } from 'lucide-react';

export const EngineeringProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-20 bg-[#F2EDE5] relative border-b border-[#1B140E]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1B140E]/15 pb-6">
          <div>
            <div className="font-mono-tech text-xs text-[#1976D2] uppercase tracking-wider font-bold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1976D2]" />
              SECTION 02 // METHODOLOGY & THINKING FLOW
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#1B140E]">
              HOW I THINK
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#6C645C] max-w-md mt-4 md:mt-0">
            INTERACTIVE SYSTEM FLOW • CONNECTED WITH ELECTRICAL SIGNAL PATHS
          </p>
        </div>

        {/* Process Flow Interactive Stepper */}
        <div className="relative mb-12">
          
          {/* Wire path SVG background line connecting steps */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-[#1B140E]/15 z-0">
            <div 
              className="h-full bg-[#E53935] transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (HOW_I_THINK_STEPS.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
            {HOW_I_THINK_STEPS.map((item, index) => {
              const isSelected = activeStep === index;
              const isPassed = activeStep > index;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`p-3.5 rounded-lg text-left transition-all duration-200 border cursor-pointer relative ${
                    isSelected 
                      ? 'bg-[#1B140E] text-[#FAF8F4] border-[#1B140E] shadow-md scale-105 z-20' 
                      : isPassed
                        ? 'bg-[#FAF8F4] text-[#1B140E] border-[#E53935]/40 hover:border-[#1B140E]'
                        : 'bg-[#FAF8F4]/80 text-[#6C645C] border-[#1B140E]/15 hover:border-[#1B140E]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1 font-mono-tech text-[10px]">
                    <span className={isSelected ? 'text-[#E53935] font-bold' : 'text-[#6C645C]'}>
                      STEP {item.step}
                    </span>
                    {isSelected && <Zap className="w-3 h-3 text-[#E53935] animate-pulse" />}
                  </div>

                  <div className="font-heading font-bold text-xs uppercase tracking-tight line-clamp-1">
                    {item.title}
                  </div>

                  <div className={`text-[10px] mt-1 line-clamp-1 font-mono-tech ${isSelected ? 'text-[#FAF8F4]/80' : 'text-[#6C645C]'}`}>
                    {item.subtitle}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detailed Engineering Breakdown */}
        <div className="dossier-border bg-[#FAF8F4] rounded-xl p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-grid-pattern opacity-40 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F2EDE5] border border-[#1B140E]/15 font-mono-tech text-xs text-[#E53935] font-bold">
                <Lightbulb className="w-3.5 h-3.5" />
                PHASE {HOW_I_THINK_STEPS[activeStep].step} // {HOW_I_THINK_STEPS[activeStep].title}
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1B140E]">
                {HOW_I_THINK_STEPS[activeStep].subtitle}
              </h3>

              <p className="text-base text-[#1B140E]/90 leading-relaxed">
                {HOW_I_THINK_STEPS[activeStep].description}
              </p>

              <div className="p-4 bg-[#F2EDE5] rounded-lg border-l-4 border-l-[#E53935] border border-[#1B140E]/10 space-y-1">
                <div className="font-mono-tech text-[10px] text-[#6C645C] uppercase tracking-wider font-bold">
                  REAL PROJECT APPLICATION
                </div>
                <div className="font-mono-tech text-xs font-semibold text-[#1B140E]">
                  {HOW_I_THINK_STEPS[activeStep].example}
                </div>
              </div>

              {/* Navigation Stepper Controls */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded bg-[#F2EDE5] border border-[#1B140E]/20 text-[#1B140E] font-mono-tech text-xs disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#1B140E] hover:text-white transition-all"
                >
                  ◄ PREV STEP
                </button>
                <button
                  disabled={activeStep === HOW_I_THINK_STEPS.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(HOW_I_THINK_STEPS.length - 1, prev + 1))}
                  className="px-4 py-2 rounded bg-[#1B140E] text-[#FAF8F4] font-mono-tech text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#E53935] transition-all flex items-center gap-1.5"
                >
                  NEXT STEP ►
                </button>
              </div>
            </div>

            {/* Right Signal Animation Graphic */}
            <div className="lg:col-span-5">
              <div className="bg-[#F2EDE5] p-6 rounded-lg border border-[#1B140E]/15 space-y-4">
                <div className="font-mono-tech text-xs text-[#6C645C] uppercase flex items-center justify-between border-b border-[#1B140E]/10 pb-2">
                  <span>SIGNAL FLOW TELEMETRY</span>
                  <span className="text-[#2E9B59] font-bold">ACTIVE</span>
                </div>

                <div className="space-y-3 font-mono-tech text-xs">
                  {HOW_I_THINK_STEPS.map((s, idx) => (
                    <div 
                      key={s.step}
                      className={`flex items-center justify-between p-2 rounded transition-all ${
                        idx === activeStep 
                          ? 'bg-[#1B140E] text-[#FAF8F4] font-bold shadow-xs' 
                          : idx < activeStep 
                            ? 'text-[#2E9B59] opacity-75' 
                            : 'text-[#6C645C] opacity-40'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{s.step}.</span>
                        <span>{s.title}</span>
                      </div>
                      {idx === activeStep ? (
                        <span className="w-2 h-2 rounded-full bg-[#E53935] animate-ping" />
                      ) : idx < activeStep ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E9B59]" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5" />
                      )}
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
