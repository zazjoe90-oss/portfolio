import React from 'react';
import { Plus, User, Target, Award } from 'lucide-react';
import { DEVELOPER_NAME, CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="mb-24 scroll-mt-24">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32 group-hover:bg-blue-100 transition-colors duration-700"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-wider">
              <User className="w-4 h-4" />
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Meet {DEVELOPER_NAME}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-8">
              <p className="text-2xl md:text-3xl text-slate-800 font-medium leading-tight text-balance">
                I help business owners build <span className="text-blue-600">revenue-driving</span> digital experiences through expert development.
              </p>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg max-w-3xl">
                <p>
                  With years of experience in both WordPress and custom development, I don't just build sites; I build tools that grow businesses. My focus is on <strong>speed, conversion, and scalability</strong>.
                </p>
                <p>
                  I believe a website should be your hardest-working employee. That's why I prioritize technical SEO and mobile performance in every project I undertake.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/10 p-3 rounded-xl">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Goal-Oriented</h4>
                    <p className="text-slate-500 text-sm">Every line of code serves your business objectives.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/10 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Quality Obsessed</h4>
                    <p className="text-slate-500 text-sm">Clean code and pixel-perfect responsive design.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 sticky top-8">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/50 space-y-8">
                 <div className="space-y-6">
                    <div className="pb-4 border-b border-slate-200">
                      <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block mb-2">Location</span>
                      <span className="text-slate-900 font-bold text-lg">Morocco (Available Globally)</span>
                    </div>
                    <div className="pb-4 border-b border-slate-200">
                      <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block mb-2">Years of Experience</span>
                      <span className="text-slate-900 font-bold text-lg">5+ Years Industry Exp</span>
                    </div>
                    <div className="pb-4">
                      <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block mb-2">Preferred Tech</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {['WordPress', 'React', 'PHP', 'Tailwind'].map(tag => (
                          <span key={tag} className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-slate-600 border border-slate-200">{tag}</span>
                        ))}
                      </div>
                    </div>
                 </div>
                 <a 
                   href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, '')}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="block w-full text-center bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                 >
                   Contact Now
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;