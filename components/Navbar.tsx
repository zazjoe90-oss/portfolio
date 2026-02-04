
import React from 'react';
import { DEVELOPER_NAME } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* Stylized Logo: Blue circle with '7' + 'Key' text */}
          <div className="flex items-center gap-1 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1E90FF] to-[#00BFFF] flex items-center justify-center text-white font-bold text-2xl shadow-lg border border-white/20">
              7
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white drop-shadow-sm">Key</span>
          </div>
          <span className="font-semibold text-lg hidden sm:block opacity-90 border-l border-white/20 pl-3">
            {DEVELOPER_NAME}
          </span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium items-center">
          <a href="#projects" className="hover:text-blue-200 transition-colors">Projects</a>
          <a href="#about" className="hover:text-blue-200 transition-colors">About</a>
          <a href="#services" className="hover:text-blue-200 transition-colors">Services</a>
          <button className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-lg border border-white/30 hover:bg-white/30 transition-all font-semibold">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
