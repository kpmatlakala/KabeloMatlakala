// components/ExperienceSection.tsx
"use client";

import React from 'react';

const EXPERIENCE_DATA = [
  {
    id: 1,
    company: "Creative Minds",
    location: "New York, USA",
    position: "Senior UX Designer",
    duration: "2022 - Present",
    type: "Full-time",
    description: "Lead design initiatives for Fortune 500 clients, managing a team of 5 designers and driving user-centered design processes.",
    achievements: [
      "Increased user engagement by 40%",
      "Led 15+ successful projects",
      "Mentored junior designers"
    ]
  },
  {
    id: 2,
    company: "Innovative Designs Inc",
    location: "San Francisco, USA",
    position: "Product Designer",
    duration: "2020 - 2022",
    type: "Contract",
    description: "Designed user-centered digital products for startups and established companies, focusing on conversion optimization.",
    achievements: [
      "Launched 8 successful products",
      "95% client satisfaction rate",
      "Reduced design-to-dev handoff time by 60%"
    ]
  },
  {
    id: 3,
    company: "Visionary Creations Ltd",
    location: "London, UK",
    position: "UI Designer",
    duration: "2018 - 2020",
    type: "Full-time",
    description: "Crafted beautiful and functional user interfaces for web and mobile applications with focus on accessibility.",
    achievements: [
      "Designed 20+ web applications",
      "Improved user satisfaction by 35%",
      "Created design system adopted company-wide"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section className="py-16 md:py-24 px-6 bw-gradient-bg">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-audiowide mb-6">Professional Journey</h2>
          <p className="text-xl text-muted-foreground">
            A timeline of growth, learning, and creative evolution
          </p>
        </div>

        <div className="space-y-12">
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={job.id} className="relative pl-8 border-l-2 border-border">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-foreground rounded-full"></div>
              
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{job.position}</h3>
                    <p className="text-lg text-muted-foreground mb-2">{job.company}</p>
                    <p className="text-sm text-muted-foreground">{job.location}</p>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full mb-2">
                      {job.type}
                    </span>
                    <span className="text-sm text-muted-foreground">{job.duration}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {job.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {job.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      className="text-sm text-muted-foreground flex items-center gap-1"
                    >
                      <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}