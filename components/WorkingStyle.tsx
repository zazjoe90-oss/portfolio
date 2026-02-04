
import React from 'react';
import { MessageSquare, Clock, Users } from 'lucide-react';

const WorkingStyle: React.FC = () => {
  return (
    <section className="bg-slate-900 py-16 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-xl text-slate-400 mb-12 font-medium tracking-widest uppercase">
          Let's Build Something Great Together
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="bg-blue-600/20 p-4 rounded-full border border-blue-500/30">
              <MessageSquare className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Clear Communication</h3>
              <p className="text-slate-400 text-sm">Transparent updates throughout the project.</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="bg-blue-600/20 p-4 rounded-full border border-blue-500/30">
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">On-Time Delivery</h3>
              <p className="text-slate-400 text-sm">Deadlines respected with high-quality results.</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="bg-blue-600/20 p-4 rounded-full border border-blue-500/30">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Client-Focused</h3>
              <p className="text-slate-400 text-sm">Tailored solutions matching your business goals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingStyle;
