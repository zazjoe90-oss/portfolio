// Fix: Added React import to provide the React namespace for React.ReactNode
import React from 'react';

export interface Project {
  id: string;
  name: string;
  type: string;
  techStack: string[];
  imageUrl: string;
  link?: string;
}

export interface Skill {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

export interface Service {
  title: string;
  icon: React.ReactNode;
}