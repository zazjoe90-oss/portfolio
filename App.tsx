import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import WorkingStyle from './components/WorkingStyle';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl mx-auto px-6 -mt-24 md:-mt-32 relative z-10">
          <About />
          <Skills />
          <Projects />
          <Services />
        </div>
        <WorkingStyle />
        <Contact />
      </main>
    </div>
  );
};

export default App;