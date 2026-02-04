import React from 'react';
import { Layout, Palette, Zap, Globe, Code, ShieldCheck, Mail, Phone, Linkedin } from 'lucide-react';
import { Project, Skill, Service } from './types';

export const DEVELOPER_NAME = 'z.youssef';

export const COLORS = {
  primary: '#2563EB',
  dark: '#0F172A',
  gray: '#CBD5E1',
  accent: '#22C55E'
};

export const PROJECTS: Project[] = [
  {
    id: 'cheaptic',
    name: 'Cheaptic.com',
    type: 'Travel Search Engine',
    techStack: ['React', 'Next.js', 'Tailwind', 'API Integration'],
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
    link: 'https://cheaptic.com'
  },
  {
    id: '1',
    name: 'Imperial Diesel Website',
    type: 'Corporate Site',
    techStack: ['HTML', 'CSS', 'WordPress'],
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200',
    link: 'https://imperial-diesel.vercel.app'
  },
  {
    id: 'ironsoul',
    name: 'Iron&Soul.app',
    type: 'Fitness Application',
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    imageUrl: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1200',
    link: 'https://iron-soul-fitness.vercel.app/'
  }
];

export const SKILLS: Skill[] = [
  {
    title: 'Web Development',
    items: ['HTML / CSS / JS', 'PHP', 'Responsive Design'],
    icon: <Code className="w-6 h-6 text-white" />
  },
  {
    title: 'WordPress',
    items: ['Custom Themes', 'Elementor', 'Bug Fixes'],
    icon: <Layout className="w-6 h-6 text-white" />
  },
  {
    title: 'SEO & Performance',
    items: ['Speed Optimization', 'On-page SEO', 'Google Search Console'],
    icon: <Zap className="w-6 h-6 text-white" />
  }
];

export const SERVICES: Service[] = [
  { title: 'Business Website', icon: <Globe className="w-8 h-8 text-blue-600" /> },
  { title: 'WordPress Website', icon: <Layout className="w-8 h-8 text-blue-600" /> },
  { title: 'Custom Development', icon: <Code className="w-8 h-8 text-blue-600" /> },
  { title: 'Website Redesign', icon: <Palette className="w-8 h-8 text-blue-600" /> }
];

export const CONTACT_INFO = {
  email: 'digital7key@gmail.com',
  whatsapp: '+212620438347',
  linkedin: 'linkedin.com/in/z-youssef-dev'
};