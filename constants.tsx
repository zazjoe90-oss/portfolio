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
    imageUrl: 'https://images.unsplash.com/photo-1506929113675-b9299d39bb14?auto=format&fit=crop&q=80&w=1200',
    link: 'https://cheaptic.com'
  },
  {
    id: '1',
    name: 'Imperial Diesel Website',
    type: 'Corporate Site',
    techStack: ['HTML', 'CSS', 'WordPress'],
    imageUrl: 'https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/4e7bee64950e2e776d3b38a11a3f13ee?response-content-disposition=inline%3B%20filename%3D%22image_original%22%3B%20filename%2A%3Dutf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIFP3tuIIZDl3QzCCE7JIPDQUwgB4YoZ%2FGD%2FiTyqttjMIAiBTv4OJjJdGdlSzNPWiMQLwmnLczLQknIbtqZe30PE%2BbCqSBQgJEAAaDDczOTkzOTE3MzgxOSIMFNUWlPnBAlRFubanKu8EEO02xDcIEF4iVo1E%2Bj0rA9ASYouVSG9e6UFvAER6r7ag72Y0PqjatsyQarU9tCmbikojFVPFRZ%2BAyBtZY13ZD18pquKszs13C71Z7ro0y8nxMzF%2FIj%2BEC10jx2mNMIXvAZJkQ5LcdD%2B1uzLst%2FK7h9EZLTFuN9bLKnsJG4G00WYQP6BfNkx4Xmb%2BX%2BQX7ZyxDHYF%2FDBI2l1zKUqAqFn3e5ycc9aB0CwGjzBuSjEZ4LbgVnP6TMn81ifPhOsnsYCG2ukq%2FFp%2FU2aVRZG7NB0OKCrccfuE2zL%2FkFcPGSKtUm5lpPRT0vKjIRpiXKR4rzxMUKvzJexaDp7MtIUtPqt0Sx2h1MBlUJ0IEFcVsntHwHitjmnMWMHE75wDRckMYKZb%2BV%2FcNRMJbBIEK5jVB7n3608j2IjgP0TAxmToswNPzfH87PDcdP07q%2BbWPTp4ByoJ1CgP3JuRDtBjNrwKgtmzjZ8P4d7tALTUnq0cLqv603pa6%2Fz%2FFoZHkjo5vXW0838C1dhBcm8M77neB83YCSstxjI5gdtXh73S89kvR1fCCu2AZFbJpPw%2B4wyiOrquRgWh07sFZJsEUGJyEhFggrvdoF1viiRLLjRSQgTZkJVb0iADnDpSJ5aNnsdVBlLzNsnQ6CIOvTFwfIqyFP8jSCzWMIoHC9hcATaDjjhylNnV3mbX3w1K4D0jsXBte9Z3LssssH3rYLD%2F3WyvEOwp1AGMlQUcHMpBntm1C6lbDrxfkKDdp%2FLSkaPLesI4h7AoWLc0svsZOUBCMheLFepwvueGfThP3z%2FaSY%2FQJBd5wadg0zNWxavJGKDQoCHFKNxyL%2BcwlpGKzAY6mgFuTeU3NWHVIi1Nnlc%2FBuWAi%2FLx1Ix5n4gSWqVAbDGm2e7wLWcSAm2JQLwXUgzRtbEGnCCwvQe6CC387w8dXOvbyin3QpObxSZrqKuGlkT1%2BJS1pMghqcGEzZzvi8zbbvawPzaRySwRAa99uMTyBoZkB6v4iMmeO3j4MRVAkjdALYbIDO92SZu8LFZK0aI6Z%2FjOrGBCYB%2FBqHZB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260204T001129Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1799&X-Amz-Credential=ASIA2YR6PYW56SE5PZ4N%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=e91d9fffa48cf09de2eb6137ce22b613913af9ba810021560b36b1d86232511e',
    link: 'https://imperial-diesel.vercel.app'
  },
  {
    id: '2',
    name: 'Qatar Gym Website',
    type: 'Fitness Site',
    techStack: ['WordPress', 'Elementor'],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
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
  email: 'youssef.dev@digital7key.com',
  whatsapp: '+212620438347',
  linkedin: 'linkedin.com/in/z-youssef-dev'
};