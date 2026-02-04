import React from 'react';
import { Layout, Palette, Zap, Globe, Code, ShieldCheck, Mail, Phone } from 'lucide-react';
import { Project, Skill, Service, TeamMember } from './types';

export const DEVELOPER_NAME = '7key solutions';

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
    imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200',
    description: 'A comprehensive travel search engine providing the best deals for flights and hotels worldwide. Built with high-performance Next.js and integrated with multiple travel provider APIs.',
    shortDescription: 'High-performance travel comparison engine with real-time data sync.',
    link: 'https://cheaptic.com'
  },
  {
    id: 'fintrack-ai',
    name: 'FinTrack AI',
    type: 'React Dashboard',
    techStack: ['React', 'Chart.js', 'Firebase', 'Tailwind'],
    imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1200',
    description: 'An AI-powered financial tracking dashboard that provides users with deep insights into their spending habits and investment performance using interactive data visualizations.',
    shortDescription: 'AI-driven financial analytics platform with real-time data visualization.',
    link: '#'
  },
  {
    id: 'ironsoul',
    name: 'Iron&Soul.app',
    type: 'SaaS Application',
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
    description: 'A premium fitness coaching platform that allows trainers to manage clients, create workout plans, and track progress through a seamless web-app experience.',
    shortDescription: 'Comprehensive fitness management SaaS with real-time tracking.',
    link: 'https://iron-soul-fitness.vercel.app/'
  },
  {
    id: 'luxe-decor',
    name: 'Luxe Decor',
    type: 'WordPress E-commerce',
    techStack: ['WordPress', 'WooCommerce', 'Elementor', 'PHP'],
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200',
    description: 'A high-end furniture and home decor online store. Featuring custom product filtering, high-resolution galleries, and a conversion-optimized checkout flow.',
    shortDescription: 'Luxury e-commerce experience built on custom WordPress architecture.',
    link: '#'
  },
  {
    id: 'vertex-consulting',
    name: 'Vertex Partners',
    type: 'Corporate Site',
    techStack: ['Next.js', 'Framer Motion', 'Tailwind'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    description: 'Professional multi-page corporate website for a global law and consulting firm, focusing on authority, accessibility, and high-performance lead generation.',
    shortDescription: 'Clean, professional corporate portal for global consulting firm.',
    link: '#'
  },
  {
    id: 'zenith-yoga',
    name: 'Zenith Yoga',
    type: 'Mobile Web App',
    techStack: ['React', 'Vite', 'Node.js', 'Stripe'],
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200',
    description: 'On-demand yoga and wellness platform featuring subscription-based video streaming, class scheduling, and progress monitoring.',
    shortDescription: 'Subscription-based wellness platform with video streaming capabilities.',
    link: '#'
  },
  {
    id: 'imperial-diesel',
    name: 'Imperial Diesel',
    type: 'Business Website',
    techStack: ['HTML', 'CSS', 'WordPress'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
    description: 'Heavy machinery and industrial engine services platform designed to showcase technical expertise and facilitate service bookings for B2B clients.',
    shortDescription: 'Industrial services landing page with lead capture focus.',
    link: 'https://imperial-diesel.vercel.app'
  },
  {
    id: 'mindful-app',
    name: 'Mindful Meditation',
    type: 'React Native App',
    techStack: ['React', 'Styled Components', 'Howler.js'],
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200',
    description: 'A serene meditation application that provides guided audio sessions, breathing exercises, and streaks to help users maintain their mental wellness.',
    shortDescription: 'Audio-centric meditation app designed for calm and focus.',
    link: '#'
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

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Youssef Zazz',
    role: 'Full Stack Developer & Founder'
  },
  {
    name: 'Chabi Alaa',
    role: 'Lead WordPress Specialist'
  }
];

export const CONTACT_INFO = {
  email: 'digital7key@gmail.com',
  whatsapp: '+212620438347'
};