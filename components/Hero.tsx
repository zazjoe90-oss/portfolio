import React from 'react';
import { DEVELOPER_NAME } from '../constants';
import { ChevronRight, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient pt-32 md:pt-48 pb-64 px-6 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            Ready for new projects
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight text-balance">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Digital Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-50/80 max-w-2xl leading-relaxed font-light">
              Hi, I'm <span className="font-bold text-white uppercase tracking-wider">{DEVELOPER_NAME}</span>. I build high-performance WordPress & custom websites that scale with your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#projects" className="fluent-transition bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:bg-blue-50 flex items-center justify-center gap-2 group">
              View Projects
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 fluent-transition" />
            </a>
            <a href="#contact" className="fluent-transition bg-transparent border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 flex items-center justify-center gap-2">
              Contact Me
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative group hidden lg:block">
           <div className="relative mx-auto w-full">
             {/* Main Screen Mockup */}
             <div className="relative bg-slate-900 rounded-3xl p-3 shadow-2xl border border-white/10 animate-float">
               <div className="w-full h-8 bg-slate-800 rounded-t-2xl mb-2 flex gap-1.5 px-4 items-center">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
               </div>
               <div className="overflow-hidden rounded-xl">
                 <img 
                   src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                   alt="Portfolio Display"
                   className="w-full h-[450px] object-cover hover:scale-105 fluent-transition"
                 />
               </div>
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none rounded-3xl"></div>
             </div>
             
             {/* Floating Mobile Mockup */}
             <div className="absolute -bottom-16 -right-12 w-48 bg-slate-900 rounded-[2.5rem] p-2.5 shadow-2xl border-4 border-slate-800 animate-float-mobile z-20">
               <div className="overflow-hidden rounded-[2rem] h-[300px]">
                 <img 
                   src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=400" 
                   alt="Mobile View"
                   className="w-full h-full object-cover"
                 />
               </div>
               <div className="absolute top-5 left-1/2 -translate-x-1/2 w-14 h-4 bg-slate-800 rounded-full border border-slate-700"></div>
             </div>
           </div>
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F8FAFC"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;