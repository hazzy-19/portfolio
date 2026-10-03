import React from 'react';
import { ThinkingOrb } from 'thinking-orbs';
import { FaReact, FaPython, FaDatabase, FaNetworkWired } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
      {/* Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="space-y-2">
          <p className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">Peter Anyona</h1>
          <p className="text-lg md:text-xl font-medium text-slate-500 dark:text-emerald-400">Full Stack Developer – Nakuru, Kenya</p>
        </div>
        <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto md:mx-0 text-base leading-relaxed">
          Full stack developer based in Kenya, building web applications and digital products for real-world clients. Comfortable across the entire stack: React frontends, FastAPI backends, and PostgreSQL databases.
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
          <a
            href="#projects"
            className="bg-slate-800 dark:bg-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-700 dark:hover:bg-emerald-500 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
          >
            View My Work <span className="text-sm">→</span>
          </a>
          <a
            href="/peter-anyona.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-slate-800/50 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Hero Graphic */}
      <div className="flex-1 flex justify-center items-center relative min-h-[400px]">
        <div className="relative flex justify-center items-center w-[400px] h-[400px]">

          {/* Orbiting Icons Container */}
          <div className="absolute w-[360px] h-[360px] animate-[spin_15s_linear_infinite]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 animate-[spin_15s_linear_infinite_reverse] bg-white dark:bg-slate-900 p-2 rounded-full shadow-md dark:shadow-none dark:border dark:border-slate-800 text-sky-500 flex items-center justify-center">
              <FaReact size={24} />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 animate-[spin_15s_linear_infinite_reverse] bg-white dark:bg-slate-900 p-2 rounded-full shadow-md dark:shadow-none dark:border dark:border-slate-800 text-yellow-500 flex items-center justify-center">
              <FaPython size={24} />
            </div>
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 animate-[spin_15s_linear_infinite_reverse] bg-white dark:bg-slate-900 p-2 rounded-full shadow-md dark:shadow-none dark:border dark:border-slate-800 text-blue-600 flex items-center justify-center">
              <FaDatabase size={24} />
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 animate-[spin_15s_linear_infinite_reverse] bg-white dark:bg-slate-900 p-2 rounded-full shadow-md dark:shadow-none dark:border dark:border-slate-800 text-teal-600 flex items-center justify-center">
              <FaNetworkWired size={24} />
            </div>
          </div>

          {/* Thinking Orb */}
          <div className="scale-[3.5] transform transition-transform duration-700 hover:scale-[4]">
            <ThinkingOrb state="connecting" size={64} color="#10b981" />
          </div>
        </div>
      </div>
    </section>
  );
}
