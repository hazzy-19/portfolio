import React from 'react';
import { ThinkingOrb } from 'thinking-orbs';

export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
      {/* Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-medium text-slate-600">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Peter Anyona</h1>
          <p className="text-lg md:text-xl font-medium text-slate-500">Website Designer | Developer | Problem Solver</p>
        </div>
        <p className="text-slate-600 max-w-md mx-auto md:mx-0 text-base leading-relaxed">
          I build fast, mobile-friendly websites and online stores for small businesses and brands — from portfolio sites to e-commerce.
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
          <a
            href="#projects"
            className="bg-slate-800 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
          >
            View My Work <span className="text-sm">→</span>
          </a>
          <a
            href="#"
            className="bg-white text-slate-800 border border-slate-200 px-6 py-3 rounded-full font-medium hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Hero Graphic — Thinking Orb */}
      <div className="flex-1 flex justify-center items-center relative min-h-[400px]">
        <div className="relative flex justify-center items-center">
          {/* Pulsing outer rings */}
          <div className="absolute w-[400px] h-[400px] border-[3px] border-slate-200/50 rounded-full pulse-animation shadow-[inset_0_0_50px_rgba(0,0,0,0.05)]"></div>
          <div
            className="absolute w-[300px] h-[300px] border-2 border-slate-300/40 rounded-full bg-white/30"
            style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
          ></div>
          {/* Thinking Orb */}
          <div className="scale-[2.5] transform transition-transform duration-700 hover:scale-[2.8]">
            <ThinkingOrb state="composing" size={64} />
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute w-4 h-4 bg-slate-400 rounded-full top-1/4 left-1/4 shadow-lg animate-bounce"></div>
        <div className="absolute w-3 h-3 bg-slate-300 rounded-full bottom-1/4 right-1/4 shadow-sm"></div>
        <div className="absolute w-6 h-6 border-4 border-slate-300 rounded-full top-1/3 right-1/4"></div>
      </div>
    </section>
  );
}
