import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ArrowRight, X, Award, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = ['ALL', 'IoT', 'SOFTWARE', 'ELECTRICAL'];

  const filteredProjects = PROJECTS.filter(project => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'IoT') return project.category.includes('IoT') || project.id === 'ecobin';
    if (selectedFilter === 'SOFTWARE') return project.category.includes('CRM') || project.category.includes('Product') || project.id === 'vasavi-crm' || project.id === 'spacecraft-ai';
    if (selectedFilter === 'ELECTRICAL') return project.signalType === 'power' || project.id === 'ecobin';
    return true;
  });

  const getAccentColor = (id: string) => {
    switch (id) {
      case 'ecobin': return { border: 'border-[#278B57]/40', badge: 'bg-[#278B57]/10 text-[#278B57]', hoverBorder: 'hover:border-[#278B57]' };
      case 'spacecraft-ai': return { border: 'border-[#1769AA]/40', badge: 'bg-[#1769AA]/10 text-[#1769AA]', hoverBorder: 'hover:border-[#1769AA]' };
      case 'vasavi-crm': return { border: 'border-[#D92D20]/40', badge: 'bg-[#D92D20]/10 text-[#D92D20]', hoverBorder: 'hover:border-[#D92D20]' };
      default: return { border: 'border-[#17130F]/20', badge: 'bg-[#17130F]/10 text-[#17130F]', hoverBorder: 'hover:border-[#17130F]' };
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#F7F3EC] relative border-b border-[#17130F]/15 bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#17130F]/15 pb-8">
          <div>
            <h2 className="font-heading text-5xl sm:text-6xl font-extrabold text-[#17130F] leading-none tracking-tight">
              PROJECTS
            </h2>
            <p className="text-base text-[#6C645C] mt-3">
              Things I have built and worked on.
            </p>
          </div>

          {/* Minimal Project Filters */}
          <div className="flex items-center gap-2 font-mono-tech text-xs">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1 rounded transition-all cursor-pointer ${
                  selectedFilter === filter 
                    ? 'bg-[#17130F] text-white font-bold' 
                    : 'bg-[#EEE8DE] text-[#6C645C] hover:text-[#17130F]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Project Cards List */}
        <div className="space-y-8">
          {filteredProjects.map((project, idx) => {
            const accent = getAccentColor(project.id);
            const tagsToShow = project.id === 'ecobin' 
              ? ['AI', 'IoT', 'Raspberry Pi', 'YOLOv8']
              : project.id === 'spacecraft-ai'
              ? ['AI', 'UI/UX', 'Web', 'Cost Estimation']
              : ['Supabase', 'PostgreSQL', 'React', 'RLS'];

            return (
              <div 
                key={project.id}
                className={`bg-[#F7F3EC] rounded-2xl border-2 ${accent.border} ${accent.hoverBorder} p-6 sm:p-8 space-y-6 transition-all duration-300 shadow-sm hover:shadow-md`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#17130F]/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-tech text-xs font-bold text-[#D92D20]">
                      PROJECT 0{idx + 1}
                    </span>
                    <span className={`font-mono-tech text-xs uppercase px-2.5 py-0.5 rounded ${accent.badge} font-semibold`}>
                      {project.title}
                    </span>
                  </div>

                  {/* Clean Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tagsToShow.map(tag => (
                      <span key={tag} className="font-mono-tech text-[11px] px-2.5 py-0.5 rounded bg-[#EEE8DE] text-[#17130F] border border-[#17130F]/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#17130F]">
                    {project.title}
                  </h3>
                  <p className="font-heading text-sm font-semibold text-[#D92D20]">
                    {project.subtitle}
                  </p>
                  <p className="text-base text-[#6C645C] max-w-3xl leading-relaxed pt-1">
                    {project.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="px-6 py-3 rounded-lg bg-[#17130F] text-white font-mono-tech text-xs font-bold uppercase tracking-wider hover:bg-[#D92D20] transition-colors flex items-center gap-2 cursor-pointer group"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Framer Motion Full-Screen Slide Panel (RIGHT -> LEFT) */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#17130F]/60 backdrop-blur-xs flex justify-end"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F7F3EC] w-full max-w-3xl h-full overflow-y-auto border-l-2 border-[#17130F] p-6 sm:p-12 space-y-8 shadow-2xl relative"
            >
              {/* Back Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="inline-flex items-center gap-2 font-mono-tech text-xs font-bold text-[#17130F] bg-[#EEE8DE] px-4 py-2 rounded-md hover:bg-[#D92D20] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span>← BACK TO PROJECTS</span>
              </button>

              {/* Title Header */}
              <div className="space-y-2 border-b border-[#17130F]/15 pb-6">
                <div className="font-mono-tech text-xs font-bold text-[#D92D20]">
                  {activeModalProject.number}
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#17130F]">
                  {activeModalProject.title}
                </h2>
                <div className="font-heading text-base font-bold text-[#6C645C]">
                  {activeModalProject.subtitle}
                </div>
              </div>

              {/* Overview */}
              <div className="space-y-2">
                <h4 className="font-mono-tech text-xs font-bold text-[#17130F] uppercase">OVERVIEW</h4>
                <p className="text-base text-[#17130F]/90 leading-relaxed bg-[#EEE8DE]/60 p-4 rounded-lg border border-[#17130F]/10">
                  {activeModalProject.description}
                </p>
              </div>

              {/* My Role */}
              <div className="space-y-2">
                <h4 className="font-mono-tech text-xs font-bold text-[#D92D20] uppercase">MY ROLE</h4>
                <p className="text-sm text-[#6C645C] leading-relaxed">
                  System Architect, Hardware Integration & Software Developer. Designed end-to-end telemetry and physical operational workflows.
                </p>
              </div>

              {/* What I Built */}
              <div className="space-y-2">
                <h4 className="font-mono-tech text-xs font-bold text-[#17130F] uppercase">WHAT I BUILT</h4>
                <p className="text-sm text-[#17130F]/90 leading-relaxed">
                  {activeModalProject.fullDetails}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <h4 className="font-mono-tech text-xs font-bold text-[#17130F] uppercase">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="font-mono-tech text-xs px-3 py-1 rounded bg-[#EEE8DE] text-[#17130F] border border-[#17130F]/15 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements if any */}
              {activeModalProject.achievements && activeModalProject.achievements.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-[#17130F]/15">
                  <h4 className="font-mono-tech text-xs font-bold text-[#278B57] uppercase flex items-center gap-1.5">
                    <Award className="w-4 h-4" /> RECOGNITION & ACHIEVEMENTS
                  </h4>
                  <div className="space-y-2">
                    {activeModalProject.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-medium text-[#17130F] bg-[#EEE8DE]/40 p-2.5 rounded border border-[#278B57]/30">
                        <CheckCircle2 className="w-4 h-4 text-[#278B57] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

