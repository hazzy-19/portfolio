import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaGithub,
  FaFigma,
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiVite } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 size={40} />, name: 'HTML5' },
  { icon: <FaCss3Alt size={40} />, name: 'CSS3' },
  { icon: <SiJavascript size={40} />, name: 'JavaScript' },
  { icon: <FaReact size={40} />, name: 'React' },
  { icon: <SiTailwindcss size={40} />, name: 'Tailwind CSS' },
  { icon: <SiVite size={40} />, name: 'Vite' },
  { icon: <FaPython size={40} />, name: 'Python' },
  { icon: <FaGithub size={40} />, name: 'GitHub' },
  { icon: <FaFigma size={40} />, name: 'Figma' },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-slate-800"></div>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-800">Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Tools I use</h2>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-6 md:gap-8 justify-center md:justify-start">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group w-20 h-20 md:w-24 md:h-24 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-center items-center text-slate-600 hover:text-slate-900 hover:shadow-md transition-all hover:-translate-y-1 relative"
            >
              {skill.icon}
              <span className="absolute -bottom-6 text-xs font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
