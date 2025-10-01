//pages/index.tsx
"use client";

import React, { useState, useEffect } from "react";

import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { CTASection } from "@/components/portfolio/CTASection";
import { Footer } from "@/components/Footer";


export default function HomePage() {
  const [activeProject, setActiveProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [actualTheme, setActualTheme] = useState('light');

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Portfolio Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Services Section */}
      <ServicesSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}