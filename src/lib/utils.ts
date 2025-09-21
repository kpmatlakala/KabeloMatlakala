
// lib/utils.ts (utility for className merging)

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Github, Linkedin, Twitter, Mail, Code, Palette, Zap, Users } from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const getSocialIcon = (platform: string) => {
  const icons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    email: Mail
  };
  return icons[platform as keyof typeof icons] || Mail;
};

export const getSkillIcon = (category: string) => {
  const icons = {
    Development: Code,
    Design: Palette, 
    Management: Users,
    DevOps: Zap
  };
  return icons[category as keyof typeof icons] || Code;
};

export const getStatusColor = (status: string) => {
  const colors = {
    'Live': 'bg-green-100 text-green-800',
    'In Progress': 'bg-yellow-100 text-yellow-800',
    'Beta': 'bg-blue-100 text-blue-800',
    'Completed': 'bg-gray-100 text-gray-800'
  };
  return colors[status as keyof typeof colors] || colors['Completed'];
};