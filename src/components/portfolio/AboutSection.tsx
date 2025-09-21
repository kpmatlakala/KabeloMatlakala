// components/AboutSection.tsx
"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { getSkillIcon } from "@/lib/utils";

export function AboutSection() {
  const { skills, testimonials } = PORTFOLIO_DATA;

  return (
    <section id="About" className="py-16 md:py-24 px-6 bw-gradient-bg">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-audiowide mb-8">
                About Me
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>{PORTFOLIO_DATA.profile.bio}</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill) => {
                  const Icon = getSkillIcon(skill.category);
                  return (
                    <div key={skill.name} className="group border-b-2 border-border pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-muted-foreground" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-foreground h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>

                      {/* Skills Badges */}
                      <div className="mt-2 flex flex-wrap gap-2">
                        {skill.tools.map(
                          (tool, index) =>
                            tool && (
                              <span
                                key={index}
                                className="bg-muted text-foreground px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {tool}
                              </span>
                            )
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* Stats */}
            {/* <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-foreground text-background rounded-full mb-6">
                <span className="text-2xl font-bold">5+</span>
              </div>
              <div className="text-6xl font-audiowide mb-4">120%</div>
              <p className="text-muted-foreground max-w-xs mx-auto">
                Average client satisfaction increase through strategic design
                solutions and user-centered approach
              </p>
            </div> */}

            {/* Testimonials */}
            <div className="space-y-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bw-card-hover border border-border rounded-lg p-6 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {testimonial.quote}
                      </p>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
