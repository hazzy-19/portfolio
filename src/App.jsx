import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingButtons from './components/FloatingButtons';

// Lazy-load below-the-fold components to reduce initial JS
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="font-sans min-h-screen relative bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      <FloatingButtons />
      <Header />
      <main className="pt-16">
        <Hero />
        <Suspense fallback={<div className="h-20" />}>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
