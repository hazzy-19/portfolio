import React from 'react';
import {
  FaReact,
  FaPython,
  FaGithub,
  FaJava,
  FaDatabase,
  FaNetworkWired,
  FaServer,
  FaSearch
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiFastapi, SiPostgresql, SiRedis } from 'react-icons/si';

const skills = [
  { icon: <FaReact size={40} />, name: 'React' },
  { icon: <SiTailwindcss size={40} />, name: 'Tailwind CSS' },
  { icon: <SiJavascript size={40} />, name: 'JavaScript' },
  { icon: <SiFastapi size={40} />, name: 'FastAPI' },
  { icon: <FaPython size={40} />, name: 'Python' },
  { icon: <SiPostgresql size={40} />, name: 'PostgreSQL' },
  { icon: <SiRedis size={40} />, name: 'Redis' },
  { icon: <FaServer size={40} />, name: 'REST APIs & Hosting' },
  { icon: <FaSearch size={40} />, name: 'SEO & Analytics' },
  { icon: <FaJava size={40} />, name: 'Java' },
  { icon: <FaGithub size={40} />, name: 'Git' },
  { icon: <FaNetworkWired size={40} />, name: 'Packet Tracer' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative skills-parallax py-20 md:py-32">
      {/* Dark overlay to ensure logos are legible */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-emerald-500"></div>
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-400">Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tools I use</h2>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group w-20 h-20 md:w-24 md:h-24 bg-slate-800/80 border border-slate-700/50 rounded-2xl flex flex-col justify-center items-center text-slate-300 hover:text-emerald-400 hover:shadow-lg transition-all hover:-translate-y-1 relative backdrop-blur-sm"
            >
              {skill.icon}
              <span className="absolute -bottom-6 text-xs font-medium text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
