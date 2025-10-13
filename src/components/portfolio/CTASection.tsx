'use client';

import React from 'react';
import { Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section id="contact" className="scroll-mt-0 py-8 md:py-24 px-6 bw-gradient-bg">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl lg:text-5xl font-audiowide mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Let's collaborate to transform your ideas into stunning digital experiences
          that engage users and drive results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Get In Touch => LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kabelo-matlakala-704349273"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background px-8 py-4 rounded-lg font-medium hover:bg-muted-foreground transition-colors flex items-center gap-2 justify-center"
          >
            <Mail className="h-5 w-5" />
            Get In Touch
          </a>

          {/* View All Projects => GitHub */}
          <a
            href="https://github.com/kpmatlakala"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-8 py-4 rounded-lg font-medium hover:bg-accent transition-colors text-foreground"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
