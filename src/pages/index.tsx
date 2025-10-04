"use client";

import React, { useEffect, useState } from "react";

import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { CTASection } from "@/components/portfolio/CTASection";
import { Footer } from "@/components/Footer";
import FloatingHeader from "@/components/Header/FloatingHeader";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
   
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let activeId: string | null = null;

        entries.forEach((entry) => {         
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeId = entry.target.id;
          }
        });

        if (activeId) {
          setActiveSection(activeId);
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px", // adjust
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingHeader activeSection={activeSection} />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
