import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Bado Mapema',
    desc: 'Goal-based savings app for the Kenyan market with M-Pesa integration, JWT authentication, and a bilingual Sheng/English personality engine.',
    img: 'https://peteranyona.co.ke/azzi-lounge.webp',
    link: '#',
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    desc: 'Portfolio website showcasing projects, skills, and client work.',
    img: 'https://peteranyona.co.ke/noor-cleaners.webp',
    link: 'https://peteranyona.co.ke',
  },
  {
    id: 3,
    title: 'Noor Al Iman Cleaners',
    desc: 'Business website for a dry cleaning and laundry service, covering service listings, online presence, and customer contact flow.',
    img: 'https://peteranyona.co.ke/noor-cleaners.webp',
    link: 'https://noor-al-iman-cleaners.vercel.app/#',
  },
  {
    id: 4,
    title: 'Ndula Shop',
    desc: 'Full e-commerce website with product listings, cart functionality, and checkout flow for a Kenyan retail client.',
    img: 'https://peteranyona.co.ke/azzi-lounge.webp',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 max-w-6xl mx-auto px-4 md:px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-slate-800 dark:bg-emerald-500"></div>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-emerald-400">My Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Some of my work</h2>
        </div>
        <a href="#" className="text-slate-600 dark:text-slate-400 font-medium flex items-center gap-2 hover:text-slate-900 dark:hover:text-emerald-400 transition-colors">
          View All Projects <span>→</span>
        </a>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-2 gap-3 md:gap-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            className="group bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl dark:hover:shadow-emerald-900/20 transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col hover:-translate-y-2 cursor-pointer"
          >
            <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-950 flex justify-center items-center overflow-hidden p-2 md:p-0">
              <img
                src={project.img}
                alt={`${project.title} – project screenshot`}
                width="800"
                height="450"
                loading="lazy"
                className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-4 md:p-8 flex flex-row justify-between items-end flex-1 gap-2">
              <div>
                <h3 className="font-bold text-base md:text-2xl text-slate-900 dark:text-white mb-1 md:mb-2 leading-tight">{project.title}</h3>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 md:line-clamp-none">{project.desc}</p>
              </div>
              <div className="text-emerald-500 shrink-0 flex items-center justify-center">
                {/* Mobile Arrow */}
                <span className="md:hidden text-xl font-light dark:text-emerald-400">→</span>
                {/* Desktop Arrow */}
                <div className="hidden md:flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/30 w-12 h-12 rounded-full group-hover:bg-emerald-500 group-hover:text-white transition-colors text-xl transform -rotate-45">
                  →
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
