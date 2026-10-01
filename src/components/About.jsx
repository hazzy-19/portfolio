import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-1 flex justify-center md:justify-start w-full">
          <div className="w-full max-w-sm aspect-square bg-slate-100 rounded-2xl flex justify-center items-center border border-slate-100 shadow-sm overflow-hidden">
            <img src="/my profile.jpeg" alt="Peter Anyona" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-slate-800"></div>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-800">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">A little about me</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            I'm a passionate website designer based in Nakuru, Kenya. I specialize in building affordable, fast, and
            mobile-friendly websites and online stores for small businesses and brands — so customers can find and trust
            you online. I love turning ideas into real, beautiful digital solutions.
          </p>
          <button className="text-slate-800 font-semibold flex items-center gap-2 border border-slate-300 rounded-full px-6 py-2 hover:bg-slate-50 transition-colors">
            Learn More <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
