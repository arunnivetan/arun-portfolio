import { X, Printer, FileText, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, INTERNSHIPS, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#FAF8F4] w-full max-w-4xl rounded-xl shadow-2xl border border-[#1B140E] my-8 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Control Bar */}
        <div className="bg-[#1B140E] text-[#FAF8F4] px-6 py-4 flex items-center justify-between shrink-0 font-mono-tech text-xs">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#E53935]" />
            <span className="font-bold tracking-wider">CURRICULUM VITAE // R S ARUN NIVETAN</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-[#FAF8F4] text-[#1B140E] font-bold hover:bg-[#E53935] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" /> PRINT / SAVE PDF
            </button>
            <button
              onClick={onClose}
              className="p-1 text-[#FAF8F4]/70 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="p-8 sm:p-12 overflow-y-auto font-sans text-[#1B140E] space-y-8 bg-white" id="resume-printable-area">
          
          {/* Resume Header */}
          <div className="border-b-2 border-[#1B140E] pb-6 space-y-2 text-center sm:text-left">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#1B140E]">
              {PERSONAL_INFO.name}
            </h1>
            <div className="font-heading text-base font-bold text-[#E53935]">
              {PERSONAL_INFO.title}
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 font-mono-tech text-xs text-[#6C645C] pt-2">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#1B140E]" /> {PERSONAL_INFO.contact.location}</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-[#1B140E]" /> {PERSONAL_INFO.contact.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-[#1B140E]" /> {PERSONAL_INFO.contact.phone}</span>
              <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-[#1976D2]" /> {PERSONAL_INFO.contact.linkedin}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="font-mono-tech text-xs font-bold text-[#1B140E] uppercase tracking-wider border-b border-[#1B140E] pb-1">
              SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[#1B140E]/90 leading-relaxed">
              Final-year Electrical and Electronics Engineering student with a foundation in power systems and power electronics, seeking an Electrical Designer / Power Systems role. Experienced with AutoCAD Electrical and ETAP for single-line diagram and layout work, with direct exposure to industrial switchgear, protective devices, and 110 kV/11 kV/415 V distribution systems.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-mono-tech text-xs font-bold text-[#1B140E] uppercase tracking-wider border-b border-[#1B140E] pb-1">
              EDUCATION
            </h2>
            <div className="flex flex-col sm:flex-row justify-between text-xs font-semibold">
              <div>
                <div className="font-bold text-sm text-[#1B140E]">{PERSONAL_INFO.education.degree}</div>
                <div className="text-[#6C645C]">{PERSONAL_INFO.education.college} ({PERSONAL_INFO.education.affiliation})</div>
              </div>
              <div className="font-mono-tech text-right text-[#E53935] font-bold">
                {PERSONAL_INFO.education.period} <br />
                CGPA: {PERSONAL_INFO.education.cgpa}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
              <div>• HSC 12th Grade: {PERSONAL_INFO.education.schoolHSC}</div>
              <div>• SSLC 10th Grade: {PERSONAL_INFO.education.schoolSSLC}</div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="font-mono-tech text-xs font-bold text-[#1B140E] uppercase tracking-wider border-b border-[#1B140E] pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="text-xs space-y-1.5 leading-relaxed">
              <div><strong>Certifications:</strong> AutoCAD Electrical (Certified), ETAP (Certified)</div>
              <div><strong>Domain Knowledge:</strong> Power Systems, Power Electronics, Single-Line Diagrams (SLD), Switchgear Operations, Protective Relays, Load Distribution (HV/MV/LV), Solar PV Systems.</div>
              <div><strong>Design & Software:</strong> ETAP, MATLAB/Simulink, AutoCAD Electrical, Figma, MS Office, GitHub.</div>
              <div><strong>Hardware & Technology:</strong> ESP32, IoT (MQTT/HTTPS), Sensors (OAK-D Lite, BME280), Supabase (PostgreSQL), SQL, APIs.</div>
            </div>
          </div>

          {/* Internships & Industrial Exposure */}
          <div className="space-y-3">
            <h2 className="font-mono-tech text-xs font-bold text-[#1B140E] uppercase tracking-wider border-b border-[#1B140E] pb-1">
              INTERNSHIPS & INDUSTRIAL EXPOSURE
            </h2>
            <div className="space-y-4 text-xs">
              {INTERNSHIPS.map(i => (
                <div key={i.id} className="space-y-1">
                  <div className="flex justify-between font-bold text-[#1B140E]">
                    <span>{i.role} | <em>{i.company}</em></span>
                    <span className="font-mono-tech text-[#E53935]">{i.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-[#6C645C]">
                    {i.keyHighlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="font-mono-tech text-xs font-bold text-[#1B140E] uppercase tracking-wider border-b border-[#1B140E] pb-1">
              KEY PROJECTS
            </h2>
            <div className="space-y-3 text-xs">
              {PROJECTS.map(p => (
                <div key={p.id} className="space-y-1">
                  <div className="font-bold text-[#1B140E]">
                    {p.title} – {p.subtitle}
                  </div>
                  <p className="text-[#6C645C] leading-normal">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h2 className="font-mono-tech text-xs font-bold text-[#1B140E] uppercase tracking-wider border-b border-[#1B140E] pb-1">
              ACHIEVEMENTS & HONORS
            </h2>
            <ul className="list-disc list-inside text-xs space-y-1 text-[#1B140E]">
              {ACHIEVEMENTS.map(a => (
                <li key={a.id}><strong>{a.title}</strong>: {a.details}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
