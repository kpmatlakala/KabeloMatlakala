
// components/Footer.tsx
"use client";

import React from 'react';
import { 
  Github, 
  Linkedin, 
   Mail } from 'lucide-react';

const SOCIAL_LINKS = [
  { platform: "github", url: "https://github.com/kpmatlakala", icon: Github, label: "GitHub" },
  { platform: "linkedin", url: "https://www.linkedin.com/in/kabelo-matlakala-704349273", icon: Linkedin, label: "LinkedIn" },
  { platform: "email", url: "mailto:matlakalakabelo1@gmail.com", icon: Mail, label: "Email" }
];

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-foreground text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let&apos;s Work Together</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Ready to bring your vision to life? I&apos;m always excited to work on new projects
              and collaborate with passionate teams.
            </p>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span className="font-medium">matlakalakabelo1@gmail.com</span>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <div className="flex gap-4 mb-6">
              {SOCIAL_LINKS.map((social, index) => {
                const Icon = social.icon;
                return (
                  <button
                    key={index}
                    className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors rounded-lg"
                    onClick={() => window.open(social.url, '_blank')}
                    title={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                );
              })}
            </div>
            <p className="text-primary-foreground/60 text-sm">
              &copy; 2024 <a href="#" className="underline hover:text-foreground">Kabelo Matlakala</a>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
