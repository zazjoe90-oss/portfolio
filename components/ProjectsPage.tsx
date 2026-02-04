import React, { useState, useMemo } from 'react';
import { ArrowLeft, ExternalLink, Filter, Search, ArrowRight, Star, X, CheckCircle, Code, Clock, Globe } from 'lucide-react';
import { PROJECTS, CONTACT_INFO } from '../constants';
import { Project } from '../types';

interface ProjectsPageProps {
  setView: (view: 'home' | 'services' | 'projects') => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ setView }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ['All', 'WordPress', 'React', 'Next.js', 'Corporate', 'App'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesFilter = activeFilter === 'All' || 
                           project.techStack.some(tech => tech.toLowerCase().includes(activeFilter.toLowerCase())) ||
                           project.type.toLowerCase().includes(activeFilter.toLowerCase()) ||
                           (activeFilter === 'Corporate' && project.type.includes('Corporate')) ||
                           (activeFilter === 'App' && (project.type.includes('App') || project.type.includes('SaaS')));
      
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
                           project.type.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in duration-700 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-semibold mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-4">
            <Star className="w-3 h-3 fill-current" />
            Interactive Portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter mb-6">
            Our <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-8">Creations</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Explore our collection of high-performance digital products. Click any project to see detailed insights and technology breakdown.
          </p>
        </header>

        {/* Interactive Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between sticky top-24 z-30 bg-white/80 backdrop-blur-md p-4 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-2xl text-xs font-bold transition-all ${
                  activeFilter === filter 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm shadow-sm"
            />
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.id} 
                onClick={() => openProject(project)}
                className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-blue-200 transition-all flex flex-col group animate-in slide-in-from-bottom-4 duration-500 cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <span className="bg-white text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Details
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black text-blue-600 uppercase tracking-tighter border border-white">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">{project.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-emerald-500 font-bold text-xs">
                      <CheckCircle className="w-3 h-3 fill-current" />
                      Verified Quality
                    </span>
                    <button 
                      className="text-blue-600 font-black text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                    >
                      Case Study <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No projects match your search</h3>
            <p className="text-slate-500">Try adjusting your filters or use different keywords.</p>
            <button 
              onClick={() => {setActiveFilter('All'); setSearchQuery('');}}
              className="mt-6 text-blue-600 font-bold underline"
            >
              Show all projects
            </button>
          </div>
        )}

        {/* Modal for Project Details */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={closeProject}></div>
            <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in zoom-in-95 duration-300">
              <button 
                onClick={closeProject}
                className="absolute top-6 right-6 z-10 p-2 bg-white/20 hover:bg-white/40 text-white md:text-slate-900 md:bg-slate-100 md:hover:bg-slate-200 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent md:hidden"></div>
                <div className="absolute bottom-6 left-6 md:hidden">
                  <h2 className="text-3xl font-extrabold text-white">{selectedProject.name}</h2>
                </div>
              </div>

              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div className="hidden md:block mb-8">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-2 block">{selectedProject.type}</span>
                  <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">{selectedProject.name}</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="flex items-center gap-2 text-slate-900 font-bold mb-4">
                      <Globe className="w-5 h-5 text-blue-600" />
                      Project Overview
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-2 text-blue-600 mb-1">
                        <Code className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {selectedProject.techStack.map(tech => (
                          <span key={tech} className="text-[10px] font-bold text-slate-700 bg-white px-2 py-0.5 rounded shadow-sm">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-2 text-emerald-600 mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Status</span>
                      </div>
                      <span className="text-sm font-bold text-slate-700 block mt-2">Live (Launched 2024)</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-slate-900 font-bold mb-4">Core Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Responsive UI', 'SEO Infrastructure', 'Custom Integration', 'Speed Optimized', 'Secure Architecture', 'Advanced UX'].map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                    {selectedProject.link && selectedProject.link !== '#' && (
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-grow bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-200 transition-all active:scale-95"
                      >
                        Launch Live Site <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    <a 
                      href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, '')}?text=Hi, I'm interested in a project similar to ${selectedProject.name}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-grow bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
                    >
                      Inquire Similar Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-32 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px]"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Ready to build your story?</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Whether it's a high-performance search engine or a corporate platform, we have the expertise to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-900/40 transition-all flex items-center justify-center gap-2"
              >
                Let's Start Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={() => setView('services')}
                className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all"
              >
                Browse Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;