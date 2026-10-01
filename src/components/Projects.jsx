import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Azzi Lounge',
    desc: 'A modern digital storefront for a local barbershop and spa in Nakuru, designed to showcase services and provide a premium user experience.',
    img: 'https://peteranyona.co.ke/azzi-lounge.webp',
    link: 'https://azzi-lounge.vercel.app/',
  },
  {
    id: 2,
    title: 'Noor Al-Iman Cleaners',
    desc: 'Professional dry cleaning and laundry services in Nakuru. A family-owned business providing top-tier fabric care, home cleaning, and office cleaning.',
    img: 'https://peteranyona.co.ke/noor-cleaners.webp',
    link: 'https://noor-al-iman-cleaners.vercel.app/#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 max-w-6xl mx-auto px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-slate-800"></div>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-800">My Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Some of my work</h2>
        </div>
        <a href="#" className="text-slate-600 font-medium flex items-center gap-2 hover:text-slate-900 transition-colors">
          View All Projects <span>→</span>
        </a>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col hover:-translate-y-2 cursor-pointer"
          >
            <div className="aspect-[16/9] bg-slate-100 flex justify-center items-center overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-8 flex justify-between items-start flex-1">
              <div>
                <h3 className="font-bold text-2xl text-slate-900 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{project.desc}</p>
              </div>
              <button className="text-emerald-500 bg-emerald-50 p-3 rounded-full group-hover:bg-emerald-500 group-hover:text-white transition-colors ml-4">
                <span className="text-xl transform -rotate-45 block">→</span>
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
