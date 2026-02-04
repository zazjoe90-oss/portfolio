import React from 'react';
import { DEVELOPER_NAME } from '../constants';

interface NavbarProps {
  setView: (view: 'home' | 'services' | 'projects') => void;
  currentView: 'home' | 'services' | 'projects';
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  const isHome = currentView === 'home';

  return (
    <nav className={`absolute top-0 left-0 right-0 z-50 py-6 transition-colors duration-500 ${isHome ? 'text-white' : 'text-slate-900 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => setView('home')}
        >
          <div className="flex items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1E90FF] to-[#00BFFF] flex items-center justify-center text-white font-bold text-2xl shadow-lg border border-white/20">
              7
            </div>
            <span className={`text-2xl font-bold tracking-tighter drop-shadow-sm ${isHome ? 'text-white' : 'text-slate-900'}`}>Key</span>
          </div>
          <span className={`font-semibold text-lg hidden sm:block opacity-90 border-l pl-3 ${isHome ? 'text-white border-white/20' : 'text-slate-600 border-slate-200'}`}>
            {DEVELOPER_NAME}
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium items-center">
          <button 
            onClick={() => setView('home')} 
            className={`hover:text-blue-500 transition-colors ${isHome ? 'text-white' : 'text-slate-600'} ${currentView === 'home' ? 'font-bold' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => setView('services')} 
            className={`hover:text-blue-500 transition-colors ${currentView === 'services' ? 'text-blue-600 font-bold' : (isHome ? 'text-white' : 'text-slate-600')}`}
          >
            Services
          </button>
          <button 
            onClick={() => setView('projects')} 
            className={`hover:text-blue-500 transition-colors ${currentView === 'projects' ? 'text-blue-600 font-bold' : (isHome ? 'text-white' : 'text-slate-600')}`}
          >
            Projects
          </button>
          <a 
            href="#contact" 
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${isHome ? 'bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/30' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'}`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;