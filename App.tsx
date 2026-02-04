import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import WorkingStyle from './components/WorkingStyle';
import Contact from './components/Contact';
import ServicesPage from './components/ServicesPage';
import ProjectsPage from './components/ProjectsPage';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'services' | 'projects'>('home');

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar setView={setView} currentView={view} />
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero />
            <div className="max-w-7xl mx-auto px-6 -mt-24 md:-mt-32 relative z-10">
              <About />
              <Skills />
              <div id="projects-preview">
                <Projects setView={setView} />
              </div>
              <div id="services-preview">
                <Services setView={setView} />
              </div>
            </div>
            <WorkingStyle />
            <Contact />
          </>
        )}
        {view === 'services' && <ServicesPage setView={setView} />}
        {view === 'projects' && <ProjectsPage setView={setView} />}
      </main>
      {(view === 'services' || view === 'projects') && <Contact />}
    </div>
  );
};

export default App;