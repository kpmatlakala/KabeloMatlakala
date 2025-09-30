// components/PortfolioSection.tsx
"use client";

import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { getStatusColor } from '@/lib/utils';

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const { projects } = PORTFOLIO_DATA;
  
  // Show featured projects first, then others
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return parseInt(b.year) - parseInt(a.year);
  });

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-audiowide mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing different skills and approaches
            to solving complex design challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <button
                        onClick={() => window.open(project.liveUrl!, '_blank')}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="h-6 w-6" />
                      </button>
                    )}
                    {project.githubUrl && (
                      <button
                        onClick={() => window.open(project.githubUrl!, '_blank')}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="h-6 w-6" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{project.category}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{project.year}</span>
                  <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                    <span>View Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}