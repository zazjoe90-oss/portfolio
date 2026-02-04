import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  setView?: (view: 'home' | 'services') => void;
}

const Services: React.FC<ServicesProps> = ({ setView }) => {
  return (
    <section id="services" className="mb-24 scroll-mt-24">
      <div className="text-center space-y-4 mb-16">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Solutions</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Services Offered
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          From concept to launch, I provide end-to-end web services that help your brand stand out in a crowded digital space.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-10 rounded-3xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center justify-center text-center space-y-6 hover:shadow-xl hover:border-blue-100 transition-all duration-500 group"
          >
            <div className="p-5 bg-slate-50 rounded-2xl group-hover:bg-blue-600 transition-colors duration-500">
              <div className="group-hover:text-white transition-colors duration-500 transform group-hover:scale-110">
                {service.icon}
              </div>
            </div>
            <h3 className="text-slate-900 font-extrabold text-xl leading-tight group-hover:text-blue-600 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-500 text-sm font-medium">
              High-quality results tailored to your specific business needs.
            </p>
          </div>
        ))}
      </div>

      {setView && (
        <div className="mt-12 text-center">
          <button 
            onClick={() => setView('services')}
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all text-lg group"
          >
            Explore all services & get a quote 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Services;