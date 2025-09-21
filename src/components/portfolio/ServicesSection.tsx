// components/ServicesSection.tsx
"use client";

import React from 'react';

const SERVICES_DATA = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "Custom websites built with modern technologies and best practices for optimal performance and user experience.",
    features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "CMS Integration"]
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "User-centered design solutions that drive engagement and conversions through research-backed design decisions.",
    features: ["User Research", "Wireframing & Prototyping", "Usability Testing", "Design Systems"]
  },
  {
    id: 3,
    title: "Brand Identity",
    description: "Complete brand identity packages that make your business stand out with memorable visual communication.",
    features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy"]
  }
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-audiowide mb-6">What I Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design and development services to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bw-card-hover border border-border rounded-lg p-8 text-center transition-all duration-300"
            >
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-foreground rounded opacity-60"></div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}