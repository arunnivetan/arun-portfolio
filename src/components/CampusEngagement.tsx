import React from 'react';
import { Users, Sparkles, HeartHandshake } from 'lucide-react';

export const CampusEngagement: React.FC = () => {
  const engagementCards = [
    {
      id: 'creative',
      number: '01',
      title: 'CAMPUS CREATIVE EXPERIENCE',
      image: '/assets/campus_creative.jpg',
      alt: 'Sairam Techno Incubator & Aram Foundation Experience',
      description: 'Worked on social media content, including script writing, poster design and content ideas.',
      tags: ['Script Writing', 'Poster Design', 'Content Ideas'],
      icon: <Sparkles className="w-4 h-4 text-[#D92D20]" />
    },
    {
      id: 'college-team',
      number: '02',
      title: 'COLLEGE & TEAM EXPERIENCE',
      image: '/assets/college_team.jpg',
      alt: 'TEDx SriSairamIT Campus Event Team',
      description: 'Teamwork, event participation and learning through campus experiences.',
      tags: ['Teamwork', 'Events', 'Community'],
      icon: <Users className="w-4 h-4 text-[#278B57]" />
    },
    {
      id: 'leadership',
      number: '03',
      title: 'TEAM & LEADERSHIP',
      image: '/assets/team_leadership.jpg',
      alt: 'Team Collaboration and Campus Leadership',
      description: 'Learning through people, events and teamwork.',
      tags: ['Leadership', 'Collaboration', 'Campus Life'],
      icon: <HeartHandshake className="w-4 h-4 text-[#1769AA]" />
    }
  ];

  return (
    <section id="campus-engagement" className="py-24 bg-[#F7F3EC] relative border-b border-[#17130F]/15 bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#17130F]/15 pb-8">
          <div>
            <div className="font-mono-tech text-xs text-[#D92D20] uppercase tracking-wider font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D92D20]" />
              CREATIVE • COMMUNITY • TEAMWORK
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#17130F] leading-none tracking-tight">
              CAMPUS ENGAGEMENT
            </h2>
            <p className="text-base text-[#6C645C] mt-3">
              This section shows my college journey beyond academics.
            </p>
          </div>
          <div className="font-mono-tech text-xs text-[#6C645C]">
            3 CAMPUS INITIATIVES
          </div>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engagementCards.map((card) => (
            <div 
              key={card.id}
              className="bg-[#EEE8DE]/70 rounded-2xl border border-[#17130F]/15 overflow-hidden flex flex-col justify-between hover:border-[#17130F]/30 transition-all duration-300 shadow-xs hover:shadow-md group"
            >
              <div className="space-y-4">
                {/* Image Container */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-[#17130F]/5">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#17130F]/80 backdrop-blur-xs text-white font-mono-tech text-[10px] font-bold px-2.5 py-1 rounded border border-white/20 flex items-center gap-1.5">
                    {card.icon}
                    <span>{card.number}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-heading text-lg font-bold text-[#17130F] leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-xs text-[#17130F]/85 leading-relaxed font-normal">
                    "{card.description}"
                  </p>
                </div>
              </div>

              {/* Tags at Card Footer */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#17130F]/10">
                  {card.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="font-mono-tech text-[10px] px-2.5 py-0.5 rounded bg-[#F7F3EC] text-[#17130F] border border-[#17130F]/10 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Footer Quote */}
        <div className="pt-4 text-center">
          <p className="font-mono-tech text-xs text-[#6C645C] uppercase tracking-wider font-semibold italic">
            "Learning beyond the classroom."
          </p>
        </div>

      </div>
    </section>
  );
};
