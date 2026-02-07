import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, DEVELOPER_NAME } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_INFO.email}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formState.name,
          Email: formState.email,
          Message: formState.message,
          _subject: `New Direct Inquiry from ${formState.name}`
        })
      });

      if (response.ok) {
        setIsSent(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      setError("Failed to send. Please try WhatsApp instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-[#0F172A] pt-24 pb-12 px-6 text-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-600/20 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <MessageCircle className="w-4 h-4" />
            Let's talk
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter max-w-4xl leading-[1.1]">
            Let’s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">extraordinary</span> together.
          </h2>
          <p className="text-slate-400 text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
            Ready to scale your business? Fill out the form below for a quick response.
          </p>
          
          <div className="w-full max-w-3xl mt-12 bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
            {isSent ? (
              <div className="py-12 flex flex-col items-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 mb-8">I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="text-blue-400 font-bold underline hover:text-blue-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-left">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="Your email"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">How can I help?</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell me about your project or inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600 resize-none"
                  ></textarea>
                </div>
                
                {error && <p className="text-red-400 text-sm font-medium">{error}</p>}
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-blue-900/40 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent w-full mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <a href={`mailto:${CONTACT_INFO.email}`} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
            <Mail className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email Me</h4>
            <p className="text-lg font-bold truncate">{CONTACT_INFO.email}</p>
          </a>
          <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
            <Phone className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp</h4>
            <p className="text-lg font-bold">{CONTACT_INFO.whatsapp}</p>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-slate-800/50">
          <div className="flex items-center gap-1">
             <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">7</div>
             <span className="text-xl font-bold tracking-tighter">Key</span>
             <span className="text-slate-600 ml-2 border-l border-slate-700 pl-2">by {DEVELOPER_NAME}</span>
          </div>
          
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} digital 7Key. All rights reserved. Built for performance.
          </p>

          <div className="flex gap-4">
             {/* Mock social links */}
             {['Twitter', 'GitHub', 'Behance'].map(social => (
               <span key={social} className="text-[10px] font-bold uppercase tracking-widest text-slate-600 cursor-pointer hover:text-white transition-colors">{social}</span>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;