import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Award, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectsSectionProps {
  activeSignal: 'power' | 'control' | 'renewable' | 'all';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ activeSignal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>('ecobin');

  const categories = ['ALL', 'IoT & AI', 'AI Product', 'Enterprise CRM', 'Concept'];

  const filteredProjects = PROJECTS.filter(project => {
    const categoryMatch = selectedCategory === 'ALL' || project.category === selectedCategory;
    const signalMatch = activeSignal === 'all' || project.signalType === activeSignal;
    return categoryMatch && signalMatch;
  });

  const getSignalBadgeColor = (signalType: string) => {
    switch (signalType) {
      case 'power': return 'bg-[#E53935]/10 text-[#E53935] border-[#E53935]/30';
      case 'control': return 'bg-[#1976D2]/10 text-[#1976D2] border-[#1976D2]/30';
      case 'renewable': return 'bg-[#2E9B59]/10 text-[#2E9B59] border-[#2E9B59]/30';
      default: return 'bg-[#1B140E]/10 text-[#1B140E] border-[#1B140E]/30';
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#FAF8F4] relative border-b border-[#1B140E]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1B140E]/15 pb-6">
          <div>
            <div className="font-mono-tech text-xs text-[#E53935] uppercase tracking-wider font-bold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              SECTION 03 // ENGINEERING DOSSIERS
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#1B140E]">
              FEATURED PROJECTS
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 mt-4 md:mt-0 font-mono-tech text-xs">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-[#1B140E] text-[#FAF8F4] font-bold' 
                    : 'bg-[#F2EDE5] text-[#6C645C] hover:text-[#1B140E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid / Dossier Cards */}
        <div className="space-y-8">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <div 
                key={project.id}
                className="dossier-border bg-[#F2EDE5] rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Dossier Header Bar */}
                <div className="p-6 border-b border-[#1B140E]/15 bg-[#FAF8F4] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono-tech text-xs font-bold text-[#E53935] px-2 py-0.5 rounded bg-[#E53935]/10 border border-[#E53935]/20">
                        {project.number}
                      </span>
                      <span className={`font-mono-tech text-xs uppercase px-2 py-0.5 rounded border ${getSignalBadgeColor(project.signalType)}`}>
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1B140E] pt-1">
                      {project.title}
                    </h3>
                    <p className="font-heading text-sm font-semibold text-[#6C645C]">
                      "{project.subtitle}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setExpandedProjectId(isExpanded ? null : project.id)}
                      className="px-4 py-2 rounded bg-[#1B140E] text-[#FAF8F4] font-mono-tech text-xs font-bold hover:bg-[#E53935] transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>{isExpanded ? 'COLLAPSE DOSSIER' : 'INSPECT SCHEMATIC'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Dossier Content Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Short Overview */}
                  <p className="text-base text-[#1B140E]/90 leading-relaxed max-w-4xl">
                    {project.description}
                  </p>

                  {/* Interactive Signal Flow Schematic SVG Diagram */}
                  <div className="p-5 bg-[#FAF8F4] rounded-lg border border-[#1B140E]/15 space-y-3">
                    <div className="font-mono-tech text-xs text-[#6C645C] uppercase font-bold flex items-center justify-between">
                      <span>SYSTEM SCHEMATIC ARCHITECTURE</span>
                      <span className="text-[#E53935] text-[10px]">LIVE SIGNAL FLOW</span>
                    </div>

                    {/* Horizontal Signal Nodes Flow */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
                      {project.flowNodes.map((node, nIdx) => (
                        <div key={node.id} className="relative">
                          <div className="bg-[#F2EDE5] p-3 rounded border border-[#1B140E]/15 space-y-1 hover:border-[#1B140E] transition-colors">
                            <div className="font-mono-tech text-[9px] text-[#6C645C] uppercase font-bold">
                              NODE 0{nIdx + 1} // {node.type}
                            </div>
                            <div className="font-heading text-xs font-bold text-[#1B140E]">
                              {node.label}
                            </div>
                            {node.sublabel && (
                              <div className="font-mono-tech text-[10px] text-[#E53935] font-semibold">
                                {node.sublabel}
                              </div>
                            )}
                          </div>
                          {nIdx < project.flowNodes.length - 1 && (
                            <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 font-bold text-[#E53935]">
                              ►
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Technical Dossier Content */}
                  {isExpanded && (
                    <div className="pt-6 border-t border-[#1B140E]/15 space-y-6 animate-in fade-in duration-300">
                      
                      {/* Deep Description */}
                      <div className="space-y-2">
                        <h4 className="font-mono-tech text-xs text-[#1B140E] uppercase font-bold tracking-wider">
                          FULL SYSTEM WORKING & SPECIFICATIONS
                        </h4>
                        <p className="text-sm text-[#1B140E]/85 leading-relaxed bg-[#FAF8F4] p-4 rounded border border-[#1B140E]/10">
                          {project.fullDetails}
                        </p>
                      </div>

                      {/* Achievements if any */}
                      {project.achievements && project.achievements.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-mono-tech text-xs text-[#E53935] uppercase font-bold tracking-wider flex items-center gap-1.5">
                            <Award className="w-4 h-4" /> RECOGNITIONS & PUBLICATIONS
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {project.achievements.map((ach, aIdx) => (
                              <div key={aIdx} className="flex items-center gap-2 p-2.5 bg-[#FAF8F4] rounded border border-[#2E9B59]/30 text-xs text-[#1B140E] font-medium">
                                <CheckCircle2 className="w-4 h-4 text-[#2E9B59] shrink-0" />
                                <span>{ach}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technologies Stack Tags */}
                      <div className="space-y-2">
                        <h4 className="font-mono-tech text-xs text-[#1B140E] uppercase font-bold tracking-wider">
                          TECHNOLOGY STACK & INTEGRATED HARDWARE
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map(tech => (
                            <span 
                              key={tech} 
                              className="font-mono-tech text-xs px-2.5 py-1 rounded bg-[#FAF8F4] border border-[#1B140E]/20 text-[#1B140E] font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
