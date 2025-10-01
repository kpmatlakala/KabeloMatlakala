"use client";

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { ProjectCard } from 'delightplus-ui/cards';

export interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    year: string;
    tech: string[];
    status: string;
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
  };
}


export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const { projects } = PORTFOLIO_DATA;

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return parseInt(b.year) - parseInt(a.year);
  });

  const displayedProjects = showAll ? sortedProjects : sortedProjects.slice(0, 3);

  return (
    <section className="projects py-16 md:py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-audiowide mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing different skills and approaches
            to solving complex design challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {sortedProjects.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/80 transition"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
