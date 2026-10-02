import React, { useState } from 'react';
import { Sun, BatteryCharging, Zap, RefreshCw, ShieldCheck } from 'lucide-react';

export const RenewableEnergySection: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<'pv' | 'inverter' | 'bess' | 'grid'>('pv');

  return (
    <section id="renewables" className="py-20 bg-[#F2EDE5] relative border-b border-[#1B140E]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1B140E]/15 pb-6">
          <div>
            <div className="font-mono-tech text-xs text-[#2E9B59] uppercase tracking-wider font-bold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2E9B59]" />
              SECTION 06 // RENEWABLE ENERGY & BESS
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#1B140E]">
              POWERING THE NEXT GEN
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#6C645C] max-w-md mt-4 md:mt-0">
            SOLAR PV • HYBRID BESS INTEGRATION • SUNGROW INVERTER TECH
          </p>
        </div>

        {/* Renewable Architecture Visual System */}
        <div className="dossier-border bg-[#FAF8F4] rounded-xl p-6 sm:p-8 space-y-8">
          
          {/* Signal Legend Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1B140E]/15 pb-4 font-mono-tech text-xs">
            <div className="font-bold text-[#1B140E] uppercase flex items-center gap-2">
              <Sun className="w-4 h-4 text-[#2E9B59]" /> SYSTEM SIGNAL TOPOLOGY
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-[#2E9B59] font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E9B59]" /> GREEN = RENEWABLE / SOLAR
              </span>
              <span className="flex items-center gap-1.5 text-[#1976D2] font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1976D2]" /> BLUE = CONTROL / CONVERSION
              </span>
              <span className="flex items-center gap-1.5 text-[#E53935] font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E53935]" /> RED = HIGH-ENERGY AC PATH
              </span>
            </div>
          </div>

          {/* Interactive Microgrid Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
            
            {/* Component 1: Solar PV Array (GREEN) */}
            <div 
              onClick={() => setActiveComponent('pv')}
              className={`p-5 rounded-lg border-2 cursor-pointer transition-all ${
                activeComponent === 'pv' 
                  ? 'bg-[#2E9B59]/10 border-[#2E9B59] shadow-md scale-102' 
                  : 'bg-[#F2EDE5] border-[#1B140E]/15 hover:border-[#2E9B59]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <Sun className="w-6 h-6 text-[#2E9B59] animate-spin-slow" />
                <span className="font-mono-tech text-[10px] bg-[#2E9B59] text-white px-2 py-0.5 rounded font-bold">
                  DC SOURCE
                </span>
              </div>
              <h4 className="font-heading font-bold text-base text-[#1B140E]">SOLAR PV ARRAY</h4>
              <p className="font-mono-tech text-xs text-[#2E9B59] font-semibold mt-1">30 kW Rooftop Array</p>
              <div className="mt-3 pt-3 border-t border-[#1B140E]/10 font-mono-tech text-[11px] text-[#6C645C] space-y-1">
                <div>Output: 30 kW DC</div>
                <div>Voltage: 600V DC String</div>
              </div>
            </div>

            {/* Component 2: Solar Inverter (BLUE) */}
            <div 
              onClick={() => setActiveComponent('inverter')}
              className={`p-5 rounded-lg border-2 cursor-pointer transition-all ${
                activeComponent === 'inverter' 
                  ? 'bg-[#1976D2]/10 border-[#1976D2] shadow-md scale-102' 
                  : 'bg-[#F2EDE5] border-[#1B140E]/15 hover:border-[#1976D2]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <RefreshCw className="w-6 h-6 text-[#1976D2] animate-spin-slow" />
                <span className="font-mono-tech text-[10px] bg-[#1976D2] text-white px-2 py-0.5 rounded font-bold">
                  DC ➔ AC
                </span>
              </div>
              <h4 className="font-heading font-bold text-base text-[#1B140E]">SUNGROW INVERTER</h4>
              <p className="font-mono-tech text-xs text-[#1976D2] font-semibold mt-1">SG33CX-P2 (33 kW)</p>
              <div className="mt-3 pt-3 border-t border-[#1B140E]/10 font-mono-tech text-[11px] text-[#6C645C] space-y-1">
                <div>3 MPPT Trackers</div>
                <div>1100V Max DC Input</div>
              </div>
            </div>

            {/* Component 3: Battery Energy Storage BESS (GREEN) */}
            <div 
              onClick={() => setActiveComponent('bess')}
              className={`p-5 rounded-lg border-2 cursor-pointer transition-all ${
                activeComponent === 'bess' 
                  ? 'bg-[#2E9B59]/10 border-[#2E9B59] shadow-md scale-102' 
                  : 'bg-[#F2EDE5] border-[#1B140E]/15 hover:border-[#2E9B59]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <BatteryCharging className="w-6 h-6 text-[#2E9B59]" />
                <span className="font-mono-tech text-[10px] bg-[#2E9B59] text-white px-2 py-0.5 rounded font-bold">
                  BESS STORAGE
                </span>
              </div>
              <h4 className="font-heading font-bold text-base text-[#1B140E]">BESS SYSTEM</h4>
              <p className="font-mono-tech text-xs text-[#2E9B59] font-semibold mt-1">100 kWh LiFePO4</p>
              <div className="mt-3 pt-3 border-t border-[#1B140E]/10 font-mono-tech text-[11px] text-[#6C645C] space-y-1">
                <div>State of Charge: 85%</div>
                <div>Peak Shaving Reserve</div>
              </div>
            </div>

            {/* Component 4: Grid & Load Bus (RED) */}
            <div 
              onClick={() => setActiveComponent('grid')}
              className={`p-5 rounded-lg border-2 cursor-pointer transition-all ${
                activeComponent === 'grid' 
                  ? 'bg-[#E53935]/10 border-[#E53935] shadow-md scale-102' 
                  : 'bg-[#F2EDE5] border-[#1B140E]/15 hover:border-[#E53935]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <Zap className="w-6 h-6 text-[#E53935]" />
                <span className="font-mono-tech text-[10px] bg-[#E53935] text-white px-2 py-0.5 rounded font-bold">
                  415V AC
                </span>
              </div>
              <h4 className="font-heading font-bold text-base text-[#1B140E]">GRID & LOCAL LOAD</h4>
              <p className="font-mono-tech text-xs text-[#E53935] font-semibold mt-1">50 Hz Synchronized</p>
              <div className="mt-3 pt-3 border-t border-[#1B140E]/10 font-mono-tech text-[11px] text-[#6C645C] space-y-1">
                <div>Bidirectional Metering</div>
                <div>Anti-Islanding Protection</div>
              </div>
            </div>

          </div>

          {/* Active Component Deep Technical Specs Card */}
          <div className="p-6 bg-[#F2EDE5] rounded-lg border border-[#1B140E]/15 space-y-3">
            <div className="font-mono-tech text-xs text-[#E53935] uppercase font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> TECHNICAL SPECIFICATION DOSSIER // {activeComponent.toUpperCase()}
            </div>

            {activeComponent === 'pv' && (
              <p className="text-sm text-[#1B140E] leading-relaxed">
                <strong>Solar PV Array Configuration:</strong> Experienced in site installation of grid-tied PV strings. Solar panels convert solar irradiance into DC electrical power. Strings are routed through DC surge protection devices (SPD) before entering inverter MPPT channels.
              </p>
            )}

            {activeComponent === 'inverter' && (
              <p className="text-sm text-[#1B140E] leading-relaxed">
                <strong>Sungrow SG33CX-P2 Inverter Specs:</strong> Rated output 33 kW 3-phase AC, 1100 V maximum DC input voltage, 160–1000 V MPPT operating voltage range with 3 independent MPPT trackers. Features integrated anti-islanding protection and AC/DC overvoltage surge suppression.
              </p>
            )}

            {activeComponent === 'bess' && (
              <p className="text-sm text-[#1B140E] leading-relaxed">
                <strong>Battery Energy Storage Systems (BESS):</strong> Storage integration allows excess solar generation during peak sunlight hours to be stored and discharged during evening peak loads or grid failure, stabilizing industrial microgrids.
              </p>
            )}

            {activeComponent === 'grid' && (
              <p className="text-sm text-[#1B140E] leading-relaxed">
                <strong>Grid Interconnection & Net Metering:</strong> Three-phase 415V AC synchronization with utility grid. Bidirectional net meters record gross solar energy export and net grid import for utility billing.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
