import React, { useState } from 'react';
import { Lightbulb, PenTool, Cpu, Layers, CheckCircle2 } from 'lucide-react';

export const BeyondResume: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(0);

  const nodes = [
    { label: '01. IDEA', sub: 'Problem Statement Identification', desc: 'Starting from messy real-world challenges—whether improper waste collection, high industrial power loss, or operational bottlenecks.', icon: <Lightbulb className="w-5 h-5 text-[#E53935]" /> },
    { label: '02. DESIGN', sub: 'Schematics & System Specs', desc: 'Drafting electrical single-line diagrams in AutoCAD, Proteus PCB layouts, or Supabase PostgreSQL database models.', icon: <PenTool className="w-5 h-5 text-[#1976D2]" /> },
    { label: '03. ENGINEERING', sub: 'Calculations & ETAP Modeling', desc: 'Performing load-flow calculations, protective relay coordination, fault current studies, and thermal/power calculations.', icon: <Cpu className="w-5 h-5 text-[#E53935]" /> },
    { label: '04. TECHNOLOGY', sub: 'Hardware & Code Integration', desc: 'Integrating ESP32 microcontrollers, YOLOv8 AI vision, sensors, MQTT telemetry, and enterprise web applications.', icon: <Layers className="w-5 h-5 text-[#2E9B59]" /> },
    { label: '05. SOLUTION', sub: 'Deploy & Real-World Impact', desc: 'Delivering verified functional prototypes, peer-reviewed research papers, patent filings, or active business CRMs.', icon: <CheckCircle2 className="w-5 h-5 text-[#2E9B59]" /> }
  ];

  return (
    <section className="py-20 bg-[#F2EDE5] relative border-b border-[#1B140E]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1B140E]/15 pb-6">
          <div>
            <div className="font-mono-tech text-xs text-[#E53935] uppercase tracking-wider font-bold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              SECTION 10 // MAKER MINDSET
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#1B140E]">
              BEYOND THE RESUME
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#6C645C] max-w-md mt-4 md:mt-0">
            CONNECTED NODE GRAPH • TAKING PROBLEMS TO WORKING SOLUTIONS
          </p>
        </div>

        {/* Narrative Box */}
        <div className="dossier-border bg-[#FAF8F4] p-8 rounded-xl space-y-6 mb-12">
          <p className="text-xl sm:text-2xl font-heading font-bold text-[#1B140E] leading-snug max-w-4xl">
            "I don't only study engineering — I build things. I enjoy taking an idea from a problem statement to a working solution — whether it is an IoT system, an engineering analysis, a business application or a renewable-energy concept."
          </p>

          {/* Interactive Connected Nodes Graph */}
          <div className="pt-6 border-t border-[#1B140E]/15">
            <div className="font-mono-tech text-xs text-[#6C645C] uppercase font-bold mb-4">
              INTERACTIVE PIPELINE // CLICK ANY STAGE TO INSPECT
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {nodes.map((node, index) => {
                const isSelected = activeNode === index;

                return (
                  <div key={node.label} className="relative">
                    <button
                      onClick={() => setActiveNode(index)}
                      className={`w-full p-4 rounded-lg border text-left transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-[#1B140E] text-[#FAF8F4] border-[#1B140E] shadow-md scale-105 z-10' 
                          : 'bg-[#F2EDE5] text-[#1B140E] border-[#1B140E]/15 hover:border-[#1B140E]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        {node.icon}
                        <span className={`font-mono-tech text-[10px] ${isSelected ? 'text-[#E53935] font-bold' : 'text-[#6C645C]'}`}>
                          STAGE 0{index + 1}
                        </span>
                      </div>

                      <div className="font-heading font-extrabold text-sm tracking-wide">
                        {node.label}
                      </div>
                      <div className={`font-mono-tech text-[10px] mt-1 ${isSelected ? 'text-white/70' : 'text-[#6C645C]'}`}>
                        {node.sub}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Stage Detail Box */}
            <div className="mt-6 p-4 rounded-lg bg-[#F2EDE5] border border-[#1B140E]/15 font-mono-tech text-xs flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#E53935] animate-ping shrink-0" />
              <div>
                <span className="font-bold text-[#1B140E] uppercase">{nodes[activeNode].label}: </span>
                <span className="text-[#6C645C]">{nodes[activeNode].desc}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
