import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  setView?: (view: 'home' | 'services' | 'projects') => void;
}

const Projects: React.FC<ProjectsProps> = ({ setView }) => {
  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-2">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Creations</span>
          </h2>
        </div>
        <button 
          onClick={() => setView?.('projects')}
          className="hidden sm:flex items-center gap-2 text-slate-900 font-bold px-6 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all"
        >
          View Full Portfolio <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            className={`group relative rounded-[2.5rem] bg-white shadow-2xl overflow-hidden border border-slate-100 flex flex-col ${index === 0 && PROJECTS.length % 2 !== 0 ? 'lg:col-span-2' : ''}`}
          >
            <div className={`relative ${index === 0 && PROJECTS.length % 2 !== 0 ? 'h-[400px] md:h-[500px]' : 'h-[320px] md:h-[400px]'} overflow-hidden bg-slate-100`}>
              <img 
                src={project.imageUrl} 
                alt={project.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"; // Generic tech fallback
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="flex flex-wrap gap-2 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.techStack.map(tech => (
                    <span key={tech} className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/20">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold flex items-center gap-2 w-fit translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150 shadow-xl no-underline"
                  >
                    Visit Project <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              
              <div className="absolute top-6 left-6 flex gap-2">
                 <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-lg border border-white">
                   {project.type}
                 </span>
              </div>
            </div>

            <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-500 text-lg line-clamp-2 leading-relaxed font-light">
                  {project.id === 'cheaptic' 
                    ? 'A comprehensive travel search engine providing the best deals for flights and hotels worldwide.' 
                    : `A high-converting web solution tailored for the specific needs of ${project.name.split(' ')[0]}. Optimized for all devices.`
                  }
                </p>
              </div>
              
              <div className="mt-8 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" title="Team member placeholder"></div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600">
                    +4
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Completed in 2024
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;