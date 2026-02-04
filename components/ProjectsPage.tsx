import React, { useState, useMemo } from 'react';
import { ArrowLeft, ExternalLink, Filter, Search, ArrowRight, Star } from 'lucide-react';
import { PROJECTS, CONTACT_INFO } from '../constants';

interface ProjectsPageProps {
  setView: (view: 'home' | 'services' | 'projects') => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ setView }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'WordPress', 'React', 'Next.js', 'Corporate', 'App'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesFilter = activeFilter === 'All' || 
                           project.techStack.some(tech => tech.toLowerCase().includes(activeFilter.toLowerCase())) ||
                           project.type.toLowerCase().includes(activeFilter.toLowerCase());
      
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-semibold mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter mb-6">
            Our <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-8">Portfolio</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Explore our collection of successful digital products. We build websites that don't just exist—they perform, scale, and convert.
          </p>
        </header>

        {/* Interactive Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
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
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
            />
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.id} 
                className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-blue-200 transition-all flex flex-col group animate-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 bg-white rounded-full text-blue-600 shadow-xl hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black text-blue-600 uppercase tracking-tighter border border-white">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {project.id === 'cheaptic' 
                      ? 'High-performance travel comparison engine with real-time data sync.' 
                      : `Tailored digital experience for ${project.name} focusing on user retention.`}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-emerald-500 font-bold text-xs">
                      <Star className="w-3 h-3 fill-current" />
                      Live Project
                    </span>
                    <a 
                      href={project.link || '#'} 
                      target="_blank"
                      className="text-blue-600 font-black text-xs uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                    >
                      Case Study <ArrowRight className="w-4 h-4" />
                    </a>
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
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No projects found</h3>
            <p className="text-slate-500">Try adjusting your filters or search query to find what you're looking for.</p>
            <button 
              onClick={() => {setActiveFilter('All'); setSearchQuery('');}}
              className="mt-6 text-blue-600 font-bold underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-32 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px]"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Inspired by our work?</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Your business deserves a high-performing digital platform. Let's discuss how we can build your next success story.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-900/40 transition-all flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={() => setView('services')}
                className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all"
              >
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;