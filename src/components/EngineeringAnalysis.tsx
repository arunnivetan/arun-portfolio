import React, { useState } from 'react';
import { Play, AlertTriangle } from 'lucide-react';

export const EngineeringAnalysis: React.FC = () => {
  const [analysisMode, setAnalysisMode] = useState<'loadflow' | 'shortcircuit' | 'motor' | 'arcflash'>('loadflow');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const triggerSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 800);
  };

  return (
    <section id="analysis" className="py-20 bg-[#FAF8F4] relative border-b border-[#1B140E]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-[#1B140E]/15 pb-6">
          <div>
            <div className="font-mono-tech text-xs text-[#E53935] uppercase tracking-wider font-bold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              SECTION 05 // ETAP POWER SYSTEM SIMULATION
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#1B140E]">
              ENGINEERING ANALYSIS
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#6C645C] max-w-md mt-4 md:mt-0">
            SIMULATED ETAP SYSTEM WORKSPACE • SINGLE-LINE DIAGRAM STUDY
          </p>
        </div>

        {/* ETAP Engineering Workspace Card */}
        <div className="dossier-border bg-[#F2EDE5] rounded-xl overflow-hidden">
          
          {/* Workspace Toolbar */}
          <div className="bg-[#1B140E] text-[#FAF8F4] p-4 flex flex-wrap items-center justify-between gap-4 font-mono-tech text-xs">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#E53935] animate-pulse" />
              <span className="font-bold tracking-wider text-white">ETAP WORKSPACE // INDUSTRIAL_PLANT_SLD.OTI</span>
            </div>

            {/* Mode Switchers */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => { setAnalysisMode('loadflow'); triggerSimulation(); }}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  analysisMode === 'loadflow' ? 'bg-[#E53935] text-white font-bold' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                LOAD FLOW
              </button>
              <button
                onClick={() => { setAnalysisMode('shortcircuit'); triggerSimulation(); }}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  analysisMode === 'shortcircuit' ? 'bg-[#1976D2] text-white font-bold' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                SHORT CIRCUIT
              </button>
              <button
                onClick={() => { setAnalysisMode('motor'); triggerSimulation(); }}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  analysisMode === 'motor' ? 'bg-[#2E9B59] text-white font-bold' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                MOTOR STARTING
              </button>
              <button
                onClick={() => { setAnalysisMode('arcflash'); triggerSimulation(); }}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  analysisMode === 'arcflash' ? 'bg-amber-600 text-white font-bold' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                ARC FLASH
              </button>
            </div>
          </div>

          {/* Interactive Workspace Grid & Single Line Diagram */}
          <div className="p-6 sm:p-8 bg-[#FAF8F4] bg-grid-pattern relative">
            
            {/* ETAP Simulation Status Readout Banner */}
            <div className="mb-8 p-4 rounded-lg bg-[#F2EDE5] border border-[#1B140E]/15 flex flex-col md:flex-row items-center justify-between gap-4 font-mono-tech text-xs">
              <div className="flex items-center gap-3">
                <Play className={`w-4 h-4 ${isSimulating ? 'text-[#E53935] animate-spin' : 'text-[#2E9B59]'}`} />
                <div>
                  <span className="font-bold text-[#1B140E]">STUDY: </span>
                  <span className="text-[#E53935] font-bold uppercase">{analysisMode.toUpperCase()} SIMULATION</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[11px] text-[#6C645C]">
                <span>METHOD: NEWTON-RAPHSON</span>
                <span>TOLERANCE: 0.0001 MW</span>
                <span className="text-[#2E9B59] font-bold">CONVERGED IN 3 ITERATIONS</span>
              </div>
            </div>

            {/* Interactive SLD Visual */}
            <div className="py-8 max-w-2xl mx-auto space-y-6 relative">
              
              {/* Node 1: Grid Utility */}
              <div className="bg-[#FAF8F4] border-2 border-[#1B140E] p-4 rounded-lg shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#1B140E] text-white flex items-center justify-center font-mono-tech font-bold text-xs">
                    G
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-[#1B140E]">110 kV UTILITY GRID</div>
                    <div className="font-mono-tech text-xs text-[#6C645C]">Short Circuit MVA: 1250 MVA</div>
                  </div>
                </div>

                {analysisMode === 'loadflow' && <div className="font-mono-tech text-xs text-[#2E9B59] font-bold">110.0 kV (100%)</div>}
                {analysisMode === 'shortcircuit' && <div className="font-mono-tech text-xs text-[#1976D2] font-bold">Ik" = 6.56 kA</div>}
              </div>

              {/* Wire Pulse Down */}
              <div className="w-0.5 h-8 bg-[#E53935] mx-auto wire-animated" />

              {/* Node 2: 11 kV Main Busbar */}
              <div className="bg-[#1B140E] text-white p-3 rounded shadow-md flex items-center justify-between font-mono-tech text-xs">
                <span className="font-bold text-[#E53935]">11 kV MAIN BUSBAR</span>
                <span>
                  {analysisMode === 'loadflow' && 'VOLTAGE: 10.98 kV (99.8%)'}
                  {analysisMode === 'shortcircuit' && 'FAULT CURRENT: 18.42 kA (SYMMETRICAL)'}
                  {analysisMode === 'motor' && 'STARTING VOLTAGE DIP: 92.4%'}
                  {analysisMode === 'arcflash' && 'INCIDENT ENERGY: 4.2 cal/cm² (CAT 2)'}
                </span>
              </div>

              {/* Wire Pulse Down */}
              <div className="w-0.5 h-8 bg-[#1976D2] mx-auto wire-animated" />

              {/* Node 3: Step-Down Transformer */}
              <div className="bg-[#FAF8F4] border-2 border-[#1976D2] p-4 rounded-lg shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-[#1976D2] flex items-center justify-center font-mono-tech text-[10px] font-bold text-[#1976D2]">
                    11/0.4
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-[#1B140E]">STEP-DOWN TRANSFORMER</div>
                    <div className="font-mono-tech text-xs text-[#6C645C]">11 / 0.415 kV • 2.5 MVA Dyn11</div>
                  </div>
                </div>

                <div className="font-mono-tech text-xs text-[#1976D2] font-bold">
                  LOADING: 76.4% (1.91 MVA)
                </div>
              </div>

              {/* Wire Pulse Split */}
              <div className="w-0.5 h-8 bg-[#2E9B59] mx-auto wire-animated" />

              {/* Node 4: 415V Busbar & Downstream Loads */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* 100 kW Motor Load */}
                <div className="bg-[#FAF8F4] border border-[#1B140E] p-4 rounded-lg space-y-2">
                  <div className="font-heading font-bold text-xs text-[#1B140E] flex items-center justify-between">
                    <span>100 kW INDUCTION MOTOR</span>
                    <span className="font-mono-tech text-[10px] text-[#2E9B59]">DOL START</span>
                  </div>
                  <div className="font-mono-tech text-[11px] text-[#6C645C]">
                    Current: 172 A | PF: 0.88 lag
                  </div>
                  {analysisMode === 'motor' && (
                    <div className="p-2 bg-[#2E9B59]/10 rounded font-mono-tech text-[10px] text-[#2E9B59] font-bold">
                      Inrush: 6x FLA (1032 A) • Acceleration: 1.4s
                    </div>
                  )}
                </div>

                {/* Plant Static Load */}
                <div className="bg-[#FAF8F4] border border-[#1B140E] p-4 rounded-lg space-y-2">
                  <div className="font-heading font-bold text-xs text-[#1B140E] flex items-center justify-between">
                    <span>PLANT LIGHTING & AUX LOAD</span>
                    <span className="font-mono-tech text-[10px] text-[#1976D2]">STATIC</span>
                  </div>
                  <div className="font-mono-tech text-[11px] text-[#6C645C]">
                    Active: 850 kW | Reactive: 420 kVAR
                  </div>
                  {analysisMode === 'arcflash' && (
                    <div className="p-2 bg-amber-500/10 rounded font-mono-tech text-[10px] text-amber-700 font-bold">
                      Boundary: 3.2 ft • Arc Duration: 0.12s
                    </div>
                  )}
                </div>

              </div>

            </div>

            {/* Practical Learning Disclaimer */}
            <div className="mt-8 pt-4 border-t border-[#1B140E]/15 font-mono-tech text-xs text-[#6C645C] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#E53935] shrink-0" />
              <span>
                <strong>ACADEMIC & PRACTICAL LEARNING NOTE:</strong> This interactive workspace reflects my hands-on modeling and simulation training in ETAP for load-flow, short-circuit, and protection studies.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
