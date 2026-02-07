import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle2, Globe, Layout, Code, Palette, Zap } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../constants';

interface ServicesPageProps {
  setView: (view: 'home' | 'services') => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ setView }) => {
  const [formState, setFormState] = useState({ name: '', email: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Using FormSubmit.co AJAX API to send the email to the client's address
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_INFO.email}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formState.name,
          Email: formState.email,
          Service: formState.service,
          Message: formState.message,
          _subject: `New Quote Request from ${formState.name} - 7Key Portfolio`
        })
      });

      if (response.ok) {
        setIsSent(true);
        setFormState({ name: '', email: '', service: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("There was an error sending your message. Please try again or use WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const detailedServices = [
    {
      title: 'Business Website',
      description: 'Professional corporate websites designed to establish your brand and generate qualified leads.',
      features: ['SEO Optimized', 'Mobile First', 'Analytics Setup', 'Contact Forms'],
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'WordPress Website',
      description: 'Custom WordPress development with easy-to-use CMS, allowing you to manage your content effortlessly.',
      features: ['Custom Themes', 'Plugin Integration', 'Security Hardening', 'Speed Optimization'],
      icon: <Layout className="w-8 h-8" />
    },
    {
      title: 'Custom Development',
      description: 'Bespoke web applications built with modern frameworks like React and Next.js for high-end performance.',
      features: ['Scalable Architecture', 'API Integration', 'Complex Logic', 'Modern UI/UX'],
      icon: <Code className="w-8 h-8" />
    },
    {
      title: 'Website Redesign',
      description: 'Modernize your existing website to improve user experience, conversion rates, and search rankings.',
      features: ['UI Refresh', 'Performance Boost', 'Responsive Overhaul', 'UX Optimization'],
      icon: <Palette className="w-8 h-8" />
    }
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter mb-6 leading-tight">
              Premium Web <br />
              <span className="text-blue-600">Solutions</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
              I specialize in creating digital experiences that don't just look great, but drive real business results. Select a service below to learn more or request a quote.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {detailedServices.map((service, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-200 transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-500 mb-6 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl"></div>
                
                <h2 className="text-3xl font-bold mb-2">Request a Quote</h2>
                <p className="text-slate-400 mb-8 text-sm">Fill out the form below and I'll get back to you within 24 hours.</p>

                {isSent ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-4 animate-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/40">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-400">Message Sent!</h3>
                    <p className="text-slate-300 text-sm">Thank you for reaching out. Your inquiry has been sent to our email. We will contact you shortly.</p>
                    <button 
                      onClick={() => setIsSent(false)}
                      className="text-white underline text-sm pt-4 hover:text-emerald-400"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs font-medium">
                        {error}
                      </div>
                    )}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        placeholder="john@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Service Required</label>
                      <select 
                        required
                        name="service"
                        value={formState.service}
                        onChange={(e) => setFormState({...formState, service: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-slate-900 text-slate-500">Select a service</option>
                        {SERVICES.map(s => (
                          <option key={s.title} value={s.title} className="bg-slate-900 text-white">{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Project Brief</label>
                      <textarea 
                        required
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        placeholder="Tell me about your goals..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-900/40 transition-all flex items-center justify-center gap-3 active:scale-95 group"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Send My Inquiry
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}

                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                  <p className="text-slate-500 text-xs mb-4">Or reach out directly via WhatsApp</p>
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
                  >
                    Quick Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;