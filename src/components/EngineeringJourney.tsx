import React from 'react';
import { Activity, Zap, Briefcase, GraduationCap, Sun, Cpu } from 'lucide-react';

export const EngineeringJourney: React.FC = () => {
  const timelineEvents = [
    {
      year: "2023 – 2027",
      title: "EEE EDUCATION",
      subtitle: "Sri Sai Ram Institute of Technology, Chennai",
      desc: "Admitted into B.E. Electrical & Electronics Engineering. Developed strong foundations in power electronics, electrical machines, power systems, control engineering, and protection.",
      icon: <GraduationCap className="w-5 h-5 text-[#E53935]" />,
      badge: "ACADEMIC BASE"
    },
    {
      year: "2024",
      title: "SOFTWARE DEVELOPMENT INTERNSHIP",
      subtitle: "Fibercat Technology Private Limited",
      desc: "Gained practical experience with Oracle APEX software, writing SQL queries, handling client feedback, and working in a professional software team environment.",
      icon: <Cpu className="w-5 h-5 text-[#1976D2]" />,
      badge: "SOFTWARE INTERN"
    },
    {
      year: "2025",
      title: "EMBEDDED SYSTEMS & PCB INTERNSHIP",
      subtitle: "NSIC Technical Services Centre (Govt. of India)",
      desc: "Learned PCB design layout, Proteus schematic simulation, track routing, component grounding, and Arduino microcontroller programming.",
      icon: <Cpu className="w-5 h-5 text-[#1976D2]" />,
      badge: "GOVT INTERNSHIP"
    },
    {
      year: "2026",
      title: "ECOBIN MAJOR IOT PROJECT",
      subtitle: "Smart India Hackathon 2026 / Clean & Green Tech",
      desc: "Built automated waste segregation IoT system with Luxonis OAK-D Lite AI camera, YOLOv8, Raspberry Pi, ESP32, BME280 sensors, and live MQTT dashboard. Won 1st Prize at Sairam SDG Innovathon 4.0, published IEEE paper, and filed patent.",
      icon: <Zap className="w-5 h-5 text-[#E53935]" />,
      badge: "1ST PRIZE & PATENT"
    },
    {
      year: "2026",
      title: "INDUSTRIAL POWER PLANT INTERNSHIP",
      subtitle: "Kothari Sugars & Chemicals Limited",
      desc: "Studied 110 kV, 11 kV and 415 V electrical distribution, bagasse steam turbine cogeneration (66 kg/cm² steam @ 480°C), VCB switchgear, and PCC/MCC panels.",
      icon: <Briefcase className="w-5 h-5 text-[#E53935]" />,
      badge: "110 kV INDUSTRIAL"
    },
    {
      year: "2026",
      title: "SOLAR PV & RENEWABLE EXPOSURE",
      subtitle: "Aswin Solar Internship",
      desc: "Direct field exposure to 30 kW On-Grid solar PV installation at Vadapalani Temple, Chennai. Analyzed Sungrow SG33CX-P2 inverter (33 kW, 3 MPPTs), net metering, and AC/DC protection.",
      icon: <Sun className="w-5 h-5 text-[#2E9B59]" />,
      badge: "SOLAR PV FIELD"
    },
    {
      year: "2026",
      title: "AUTOCAD ELECTRICAL CERTIFICATION",
      subtitle: "Sarva Sudarsanaa Academy (ISO 9001:2015 Certified)",
      desc: "Completed 60 hours professional certification program in AutoCAD Electrical CAD (Certificate No: SSA73713). Mastered schematic generation, ladder diagrams, component drafting, and panel layout design.",
      icon: <Zap className="w-5 h-5 text-[#E53935]" />,
      badge: "AUTOCAD CERTIFIED"
    },
    {
      year: "2026",
      title: "ETAP POWER SYSTEM MODELING",
      subtitle: "Sarva Sudarsanaa Academy (Basic & Advanced)",
      desc: "Completed 60 hours certified training in ETAP Basic & Advanced (Certificate No: SSA33603). Modeled single-line diagrams in ETAP, executing Load Flow Analysis, Short Circuit Studies, and Arc Flash hazard evaluations.",
      icon: <Zap className="w-5 h-5 text-[#1976D2]" />,
      badge: "ETAP CERTIFIED"
    },
    {
      year: "PRESENT",
      title: "SEEKING PROFESSIONAL OPPORTUNITIES",
      subtitle: "Power Systems / Renewable Energy / Electrical Engineering",
      desc: "Ready to contribute technical problem-solving, electrical design, renewable energy knowledge, and technology integration in a dynamic engineering organization.",
      icon: <Activity className="w-5 h-5 text-[#2E9B59]" />,
      badge: "READY TO JOIN"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-[#F2EDE5] relative border-b border-[#1B140E]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#1B140E]/15 pb-6">
          <div>
            <div className="font-mono-tech text-xs text-[#E53935] uppercase tracking-wider font-bold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              SECTION 08 // CHRONOLOGICAL MILESTONES
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#1B140E]">
              ENGINEERING JOURNEY
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#6C645C] max-w-md mt-4 md:mt-0">
            TRANSMISSION NETWORK TIMELINE • FROM ACADEMICS TO CORE FIELD EXPOSURE
          </p>
        </div>

        {/* Transmission Grid Line Timeline */}
        <div className="relative border-l-2 border-[#1B140E]/20 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative group">
              
              {/* Transmission Line Node Connector Circle */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#1B140E] text-white flex items-center justify-center font-mono-tech text-[10px] font-bold border-2 border-[#FAF8F4] group-hover:bg-[#E53935] group-hover:scale-125 transition-all shadow-xs">
                ⚡
              </div>

              {/* Year Tag on Left (Desktop) */}
              <div className="hidden sm:block absolute -left-36 top-1 font-mono-tech text-xs font-bold text-[#E53935] w-24 text-right">
                {event.year}
              </div>

              {/* Timeline Card */}
              <div className="dossier-border bg-[#FAF8F4] rounded-xl p-6 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {event.icon}
                    <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#1B140E]">
                      {event.title}
                    </h3>
                  </div>

                  <span className="font-mono-tech text-xs font-bold px-2.5 py-0.5 rounded bg-[#F2EDE5] border border-[#1B140E]/15 text-[#1B140E]">
                    {event.badge}
                  </span>
                </div>

                <div className="sm:hidden font-mono-tech text-xs font-bold text-[#E53935]">
                  {event.year}
                </div>

                <div className="font-heading text-xs font-semibold text-[#6C645C]">
                  {event.subtitle}
                </div>

                <p className="text-sm text-[#1B140E]/85 leading-relaxed">
                  {event.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
