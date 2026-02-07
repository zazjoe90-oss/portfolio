import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-24 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="space-y-2">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Specialized Skills
          </h2>
        </div>
        <p className="text-slate-500 max-w-md text-lg leading-relaxed">
          Leveraging modern technologies to deliver high-speed and responsive web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS.map((skill, index) => (
          <div key={index} className="fluent-transition bg-white p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-2 group">
            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-blue-200 group-hover:scale-110 fluent-transition group-hover:rotate-3">
              {skill.icon}
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">{skill.title}</h3>
            <ul className="space-y-4 font-medium">
              {skill.items.map((item, i) => (
                <li key={i} className="text-slate-600 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;