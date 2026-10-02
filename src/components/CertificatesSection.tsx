import React, { useState } from 'react';
import { Award, ShieldCheck, ExternalLink, X, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CertificateModalData {
  title: string;
  sub: string;
  certNo: string;
  issuer: string;
  hours: string;
  imageSrc: string;
  tags: string[];
}

export const CertificatesSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateModalData | null>(null);

  const courseCertificates: CertificateModalData[] = [
    {
      title: "ETAP — Basic & Advanced",
      sub: "Power System Modeling & Analysis",
      certNo: "SSA33603",
      issuer: "Sarva Sudarsanaa Academy (ISO 9001:2015)",
      hours: "60 Hours Program",
      imageSrc: "/assets/etap_certificate.jpg",
      tags: ['Load Flow', 'Short Circuit', 'Arc Flash', 'SLD Modeling']
    },
    {
      title: "AutoCAD Electrical CAD",
      sub: "Electrical Schematic Design & Drafting",
      certNo: "SSA73713",
      issuer: "Sarva Sudarsanaa Academy (ISO 9001:2015)",
      hours: "60 Hours Program",
      imageSrc: "/assets/autocad_certificate.jpg",
      tags: ['Schematics', 'Ladder Diagrams', 'Panel Layouts', 'Wire Numbering']
    }
  ];

  const internshipCertificates: CertificateModalData[] = [
    {
      title: "NSIC — PCB Design Certificate",
      sub: "Embedded Systems & Multi-layer PCB Layout",
      certNo: "052026",
      issuer: "NSIC Technical Services Centre (Govt. of India)",
      hours: "15 Days Internship",
      imageSrc: "/assets/nsic_pcb_certificate.jpg",
      tags: ['PCB Design', 'Schematics', 'Proteus', 'Hardware Troubleshooting']
    },
    {
      title: "Fibercat Technology — Internship Certificate",
      sub: "Enterprise Application & SQL Development",
      certNo: "FC-INT-2024",
      issuer: "Fibercat Technology Private Limited",
      hours: "15 Days Internship",
      imageSrc: "/assets/fibercat_certificate.jpg",
      tags: ['Oracle APEX', 'SQL Queries', 'Web Development', 'Agile']
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-[#F7F3EC] relative border-b border-[#17130F]/15 bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#17130F]/15 pb-8">
          <div>
            <h2 className="font-heading text-5xl sm:text-6xl font-extrabold text-[#17130F] leading-none tracking-tight">
              CERTIFICATIONS
            </h2>
            <p className="text-base text-[#6C645C] mt-3">
              Official course credentials and industrial internship certifications.
            </p>
          </div>

          <div className="flex items-center gap-6 font-mono-tech text-xs text-[#6C645C]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D92D20]" />
              <span>2 COURSE CERTS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1769AA]" />
              <span>2 INTERNSHIP CERTS</span>
            </div>
          </div>
        </div>

        {/* 1. Course Certifications Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#17130F]/10 pb-3">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[#D92D20]" />
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#17130F]">
                COURSE CERTIFICATIONS
              </h3>
            </div>
            <span className="font-mono-tech text-xs text-[#6C645C] font-semibold hidden sm:block uppercase">
              TECHNICAL & SOFTWARE COURSES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseCertificates.map((cert) => (
              <div 
                key={cert.certNo}
                onClick={() => setSelectedCert(cert)}
                className="bg-[#EEE8DE]/70 rounded-2xl border-2 border-[#17130F]/10 p-6 space-y-5 hover:border-[#D92D20]/60 hover:shadow-lg transition-all duration-300 cursor-pointer group relative"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="font-heading text-xl font-extrabold text-[#17130F] group-hover:text-[#D92D20] transition-colors">
                      {cert.title}
                    </h4>
                    <p className="font-mono-tech text-xs text-[#6C645C]">
                      {cert.sub}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono-tech text-[10px] font-bold text-[#278B57] bg-[#278B57]/10 px-2.5 py-1 rounded-full shrink-0 border border-[#278B57]/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    VERIFIED
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 font-mono-tech text-xs bg-[#F7F3EC] p-3 rounded-xl border border-[#17130F]/10">
                  <div className="space-y-0.5">
                    <div className="text-[#6C645C] text-[10px] uppercase tracking-wider">Issued By</div>
                    <div className="text-[#17130F] font-semibold leading-tight">{cert.issuer}</div>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[#6C645C] text-[10px] uppercase tracking-wider">Certificate No.</div>
                    <div className="text-[#D92D20] font-bold">{cert.certNo}</div>
                    <div className="text-[#6C645C] text-[10px]">{cert.hours}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map(tag => (
                    <span key={tag} className="font-mono-tech text-[10px] px-2.5 py-0.5 rounded bg-[#17130F]/8 text-[#17130F] font-medium border border-[#17130F]/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#17130F]/10 flex items-center justify-between font-mono-tech text-xs text-[#D92D20] font-bold">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4" /> VIEW ORIGINAL CERTIFICATE
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Internship Certificates Section */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-[#17130F]/10 pb-3">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[#1769AA]" />
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#17130F]">
                INTERNSHIP CERTIFICATES
              </h3>
            </div>
            <span className="font-mono-tech text-xs text-[#6C645C] font-semibold hidden sm:block uppercase">
              INDUSTRIAL & COMPANY EXPERIENCE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internshipCertificates.map((cert) => (
              <div 
                key={cert.certNo}
                onClick={() => setSelectedCert(cert)}
                className="bg-[#EEE8DE]/70 rounded-2xl border-2 border-[#17130F]/10 p-6 space-y-5 hover:border-[#1769AA]/60 hover:shadow-lg transition-all duration-300 cursor-pointer group relative"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="font-heading text-xl font-extrabold text-[#17130F] group-hover:text-[#1769AA] transition-colors">
                      {cert.title}
                    </h4>
                    <p className="font-mono-tech text-xs text-[#6C645C]">
                      {cert.sub}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono-tech text-[10px] font-bold text-[#278B57] bg-[#278B57]/10 px-2.5 py-1 rounded-full shrink-0 border border-[#278B57]/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    VERIFIED
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 font-mono-tech text-xs bg-[#F7F3EC] p-3 rounded-xl border border-[#17130F]/10">
                  <div className="space-y-0.5">
                    <div className="text-[#6C645C] text-[10px] uppercase tracking-wider">Issued By</div>
                    <div className="text-[#17130F] font-semibold leading-tight">{cert.issuer}</div>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[#6C645C] text-[10px] uppercase tracking-wider">Certificate No.</div>
                    <div className="text-[#1769AA] font-bold">{cert.certNo}</div>
                    <div className="text-[#6C645C] text-[10px]">{cert.hours}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map(tag => (
                    <span key={tag} className="font-mono-tech text-[10px] px-2.5 py-0.5 rounded bg-[#17130F]/8 text-[#17130F] font-medium border border-[#17130F]/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#17130F]/10 flex items-center justify-between font-mono-tech text-xs text-[#1769AA] font-bold">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4" /> VIEW ORIGINAL CERTIFICATE
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Modal Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-[#17130F]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F7F3EC] w-full max-w-3xl rounded-2xl border-2 border-[#17130F] p-6 sm:p-8 space-y-6 shadow-2xl relative my-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-[#17130F]/15 pb-4">
                <div>
                  <div className="flex items-center gap-2 font-mono-tech text-xs text-[#278B57] font-bold">
                    <ShieldCheck className="w-4 h-4" /> OFFICIAL VERIFIED CERTIFICATE
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#17130F] mt-1">
                    {selectedCert.title}
                  </h3>
                  <p className="font-mono-tech text-xs text-[#6C645C]">
                    No: {selectedCert.certNo} • Issued by {selectedCert.issuer}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-[#EEE8DE] text-[#17130F] hover:bg-[#D92D20] hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image Viewer */}
              <div className="bg-[#EEE8DE] rounded-xl overflow-hidden border border-[#17130F]/15 relative flex items-center justify-center min-h-[280px]">
                <img
                  src={selectedCert.imageSrc}
                  alt={selectedCert.title}
                  className="w-full max-h-[500px] object-contain"
                />
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#17130F]/15 font-mono-tech text-xs">
                <div className="text-[#6C645C]">
                  Certificate No: <span className="font-bold text-[#D92D20]">{selectedCert.certNo}</span> ({selectedCert.hours})
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedCert.imageSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#17130F] text-white rounded-md hover:bg-[#D92D20] transition-colors flex items-center gap-2 font-bold cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" /> OPEN FULL IMAGE
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 bg-[#EEE8DE] text-[#17130F] rounded-md hover:bg-[#17130F]/10 transition-colors font-bold cursor-pointer"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
