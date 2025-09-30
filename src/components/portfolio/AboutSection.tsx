// components/AboutSection.tsx
"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { getSkillIcon } from "@/lib/utils";

export function AboutSection() {
  const { skills, education } = PORTFOLIO_DATA;
  const flattenedSkills = skills.flatMap((category) => category.skills);

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
                {flattenedSkills.map((skill) => {
                  // const Icon = getSkillIcon(skill.category); // This may need adjustment
                  return (
                    <div
                      key={skill.name}
                      className="group border-b-[1px] border-border pb-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {/* <Icon className="h-5 w-5 text-muted-foreground" /> */}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {skill.level ?? "—"}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-foreground h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level ?? 0}%` }}
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

          <div className="space-y-12 lg:border-l-[1px] border-border pl-6 lg:pl-12">
            {/* Education & Training */}
            <h3 className="text-2xl font-bold mb-8">Education & Training</h3>
            <div className="space-y-8">
              {education.map((item) => (
                <div
                  key={item.id}
                  className="bw-card-hover border border-border rounded-lg p-6 transition-all duration-300"
                >
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {item.degree || item.course}
                    </h4>
                    <p className="text-sm italic text-muted-foreground mb-1">
                      {item.institution} <br /> {item.duration}
                    </p>
                    <hr className="my-2 border-border" />
                    {item.description && (
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-xs text-muted-foreground">
              <p className="font-medium">Focus:</p>
              <div className="flex gap-2">
                <span
                  className="bg-blue-500 w-2 h-2 rounded-full"
                  title="Frontend"
                ></span>
                <span
                  className="bg-green-500 w-2 h-2 rounded-full"
                  title="Backend"
                ></span>
                <span
                  className="bg-yellow-500 w-2 h-2 rounded-full"
                  title="AI/ML"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
