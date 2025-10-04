// components/ExperienceSection.tsx
"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-0 py-10 md:py-24 px-6 bw-gradient-bg">

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-audiowide mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            A timeline of growth, learning, and creative evolution
          </p>
        </div>

        <div className="space-y-12 relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-border rounded-full"></div>

          {PORTFOLIO_DATA.experience.map((job, index) => (
            <div key={job.id} className="relative pl-12 md:pl-16">
              {/* Timeline dot */}
              <div className="absolute left-2 top-3 w-4 h-4 bg-primary border-4 border-background rounded-full shadow-sm z-10"></div>

              {/* Card */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{job.position}</h3>
                    <p className="text-md text-muted-foreground">
                      {job.company}
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      {job.location}
                    </p>
                  </div>

                  <div className="text-right md:text-end">
                    <span className="inline-block bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full mb-1">
                      {job.type}
                    </span>
                    <p className="text-sm text-muted-foreground">
                      {job.duration}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {job.description}
                </p>

                {/* Achievements */}
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
