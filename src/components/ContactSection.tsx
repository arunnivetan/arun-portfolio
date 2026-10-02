import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Zap, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-[#F2EDE5] relative border-b border-[#1B140E]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1B140E]/15 pb-6">
          <div>
            <div className="font-mono-tech text-xs text-[#E53935] uppercase tracking-wider font-bold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              SECTION 11 // DIRECT DISPATCH & INQUIRIES
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#1B140E]">
              LET'S CONNECT
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#6C645C] max-w-md mt-4 md:mt-0">
            DIRECT TRANSMISSION BUS • CHENNAI, INDIA • OPEN FOR RECRUITMENT
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Dossier */}
          <div className="lg:col-span-5 space-y-6">
            <div className="dossier-border bg-[#FAF8F4] p-6 sm:p-8 rounded-xl space-y-6">
              <h3 className="font-heading text-xl font-bold text-[#1B140E] flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#E53935]" /> Contact Channels
              </h3>

              <p className="text-sm text-[#6C645C] leading-relaxed">
                Whether you have an opening in electrical design, power systems analysis, renewable energy engineering, or an innovative technology project, feel free to get in touch.
              </p>

              <div className="space-y-4 font-mono-tech text-xs">
                
                {/* Email */}
                <a 
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="flex items-center gap-3 p-3 bg-[#F2EDE5] rounded border border-[#1B140E]/10 hover:border-[#E53935] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E53935]" />
                  <div>
                    <div className="text-[10px] text-[#6C645C] uppercase">EMAIL ADDRESS</div>
                    <div className="font-bold text-[#1B140E]">{PERSONAL_INFO.contact.email}</div>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href={`tel:${PERSONAL_INFO.contact.phone}`}
                  className="flex items-center gap-3 p-3 bg-[#F2EDE5] rounded border border-[#1B140E]/10 hover:border-[#1976D2] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#1976D2]" />
                  <div>
                    <div className="text-[10px] text-[#6C645C] uppercase">PHONE NUMBER</div>
                    <div className="font-bold text-[#1B140E]">{PERSONAL_INFO.contact.phone}</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 bg-[#F2EDE5] rounded border border-[#1B140E]/10">
                  <MapPin className="w-4 h-4 text-[#2E9B59]" />
                  <div>
                    <div className="text-[10px] text-[#6C645C] uppercase">BASE LOCATION</div>
                    <div className="font-bold text-[#1B140E]">{PERSONAL_INFO.contact.location}</div>
                  </div>
                </div>

                {/* LinkedIn */}
                <a 
                  href={PERSONAL_INFO.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#F2EDE5] rounded border border-[#1B140E]/10 hover:border-[#1976D2] transition-colors"
                >
                  <Globe className="w-4 h-4 text-[#1976D2]" />
                  <div>
                    <div className="text-[10px] text-[#6C645C] uppercase">LINKEDIN PROFILE</div>
                    <div className="font-bold text-[#1B140E]">arun-nivetan-r-s</div>
                  </div>
                </a>

              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="dossier-border bg-[#FAF8F4] p-6 sm:p-8 rounded-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[#2E9B59] mx-auto animate-bounce" />
                  <h3 className="font-heading text-2xl font-bold text-[#1B140E]">
                    TRANSMISSION RECEIVED!
                  </h3>
                  <p className="text-sm text-[#6C645C] max-w-md mx-auto font-mono-tech">
                    Thank you for reaching out. Your message has been dispatched directly to Arun's inbox. Expect a response within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#1B140E] text-white font-mono-tech text-xs rounded"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="font-mono-tech text-xs text-[#E53935] uppercase font-bold border-b border-[#1B140E]/15 pb-2">
                    DISPATCH TRANSMISSION FORM
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-mono-tech text-[10px] text-[#6C645C] uppercase font-bold">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe (Recruiter)"
                        className="w-full px-3.5 py-2.5 rounded bg-[#F2EDE5] border border-[#1B140E]/20 text-xs font-mono-tech text-[#1B140E] focus:outline-none focus:border-[#E53935]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-mono-tech text-[10px] text-[#6C645C] uppercase font-bold">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@company.com"
                        className="w-full px-3.5 py-2.5 rounded bg-[#F2EDE5] border border-[#1B140E]/20 text-xs font-mono-tech text-[#1B140E] focus:outline-none focus:border-[#E53935]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono-tech text-[10px] text-[#6C645C] uppercase font-bold">
                      SUBJECT / REASON *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Electrical Engineer Opportunity / Project Inquiry"
                      className="w-full px-3.5 py-2.5 rounded bg-[#F2EDE5] border border-[#1B140E]/20 text-xs font-mono-tech text-[#1B140E] focus:outline-none focus:border-[#E53935]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono-tech text-[10px] text-[#6C645C] uppercase font-bold">
                      MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or job opportunity details here..."
                      className="w-full px-3.5 py-2.5 rounded bg-[#F2EDE5] border border-[#1B140E]/20 text-xs font-mono-tech text-[#1B140E] focus:outline-none focus:border-[#E53935]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 bg-[#1B140E] text-[#FAF8F4] font-mono-tech text-xs font-bold uppercase tracking-wider rounded hover:bg-[#E53935] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                  >
                    {sending ? (
                      <span>TRANSMITTING MESSAGE...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>DISPATCH MESSAGE</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
