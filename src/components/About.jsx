import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-slate-950 py-20 md:py-32 transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-1 flex justify-center md:justify-start w-full">
          <div className="w-full max-w-sm aspect-square bg-slate-100 dark:bg-slate-900 rounded-2xl flex justify-center items-center border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
            <img
              src="/my-profile.webp"
              alt="Peter Anyona – Full Stack Developer in Nakuru, Kenya"
              width="600"
              height="600"
              fetchpriority="high"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-slate-800 dark:bg-emerald-500"></div>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-emerald-400">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">A little about me</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
            I am a full stack developer based in Kenya, building web applications and digital products for real-world clients. I am comfortable across the entire stack, including React frontends, FastAPI backends, and PostgreSQL databases. I am also experienced with M-Pesa integrations and building purposeful products for the Kenyan market. My education includes a BSc in Applied Computer Science from Egerton University.
          </p>
          <a href="#contact" className="inline-flex text-slate-800 dark:text-slate-200 font-semibold items-center gap-2 border border-slate-300 dark:border-slate-700 rounded-full px-6 py-2 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors w-max">
            Get in touch <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
