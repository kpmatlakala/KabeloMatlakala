// components/HeroSection.tsx
"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { getSocialIcon } from "@/lib/utils";
import { Button, MapPinIcon } from "delightplus-ui";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const { profile } = PORTFOLIO_DATA;

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start justify-center overflow-hidden"
    >
      {/* Desktop Layout - Original */}
      <div className="hidden xl:flex p-2 items-center gap-16 max-w-7xl mx-auto">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`space-y-8 ${
                isLoaded ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-[1px] bg-muted-foreground"></div>
                  <span className="text-sm tracking-wider font-montserrat">
                    2016 → 2024
                  </span>
                </div>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-audiowide tracking-tight leading-none">
                Hello
              </h1>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                I’m <span className="text-primary">{profile.name}</span>
              </h2>

              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                {profile.title}
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center gap-3 bg-foreground text-primary-foreground px-8 py-4 hover:bg-muted-foreground transition-all duration-300">
                  <span className="font-medium">View My Work</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group flex items-center gap-3 border border-border px-8 py-4 hover:bg-accent transition-all duration-300">
                  <Download className="h-5 w-5" />
                  <span className="font-medium">Download CV</span>
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex gap-4">
                  {profile.socialLinks.map((social, index) => {
                    const Icon = getSocialIcon(social.platform);
                    return (
                      <button
                        key={index}
                        className="w-12 h-12 border border-border flex items-center justify-center hover:bg-accent hover:border-foreground transition-all duration-300"
                        onClick={() => window.open(social.url, "_blank")}
                      >
                        <Icon className="h-5 w-5" />
                      </button>
                    );
                  })}
                </div>
                <div className="h-8 w-[1px] bg-border"></div>
                <div className="text-sm text-muted-foreground">
                  <p>Open for freelance & remote/onsite work</p>
                  <p className="text-foreground font-medium">{profile.email}</p>
                </div>
              </div>
            </div>

            <div
              className={`relative ${
                isLoaded ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Background geometric shapes */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-32 h-32 border border-border rotate-45 opacity-20"></div>
                  <div className="absolute bottom-20 left-10 w-24 h-24 bg-muted rotate-12 opacity-30"></div>
                  <div className="absolute top-20 left-0 w-16 h-16 border border-border opacity-40"></div>
                </div>

                {/* Main profile image */}
                <div className="relative aspect-square rounded-full bg-gradient-to-t from-primary-foreground/70 to-transparent overflow-hidden">
                  <img
                    src={profile.bannerImage || profile.profileImage}
                    alt="Profile"
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-700 scale-125 -translate-x-8"
                    loading="lazy"
                  />

                  {/* Overlay stats */}
                  {/* <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-background/90 backdrop-blur-sm border border-border rounded-lg p-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {profile.stats.map((stat, index) => (
                          <div key={index}>
                            <p className="text-2xl font-bold">{stat.value}</p>
                            <p className="text-xs text-muted-foreground">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div> */}

                  <div className="absolute bottom-0 left-0 right-0 p-32 bg-gradient-to-t from-primary-foreground to-transparent"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-foreground text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Stack Vertically */}
      <div className="flex flex-col items-center justify-start gap-8 p-2 max-w-7xl mx-auto md:hidden">
        {/* Background Geometric Shapes */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        <div className="relative w-full">
          {/* Profile Image */}
          <div
            className={`relative aspect-square max-w-[64%] min-h-[69vw] mx-auto  rounded-full bg-gradient-to-t from-primary-foreground/70 to-transparent overflow-hidden ${
              isLoaded ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <img
              src={profile.profileImage}
              alt="Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-125 translate-x-8"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-16 bg-gradient-to-t from-primary-foreground to-transparent"></div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-0 right-16 w-16 h-16 bg-foreground text-primary-foreground rounded-full flex items-center justify-center font-bold text-xs">
            Available
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-[90%] px-2">
          <div
            className={`space-y-2 ${
              isLoaded ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <div className="w-12 h-[1px] bg-muted-foreground"></div>
              <span className="text-sm tracking-wider font-montserrat">
                2016 → 2024
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-audiowide tracking-tight leading-none">
              Hello
            </h1>
            <h2 className="text-2xl font-semibold tracking-tight">
              I’m <span className="text-primary">{profile.name}</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {profile.title}
            </p>

            {/* Social Links and Contact Info */}
            <div className="flex items-center gap-2 pt-4 justify-center">
              <div className="flex gap-4">
                {profile.socialLinks.map((social, index) => {
                  const Icon = getSocialIcon(social.platform);
                  return (
                    <button
                      key={index}
                      className="w-12 h-12 border border-border flex items-center justify-center hover:bg-accent hover:border-foreground transition-all duration-300"
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      <Icon className="h-5 w-5" />
                    </button>
                  );
                })}
              </div>

              <div className="h-8 w-[1px] bg-border"></div>
              <div className="text-sm text-muted-foreground">
                <p>Open for freelance & remote/onsite work</p>
                <p className="text-foreground font-medium">{profile.email}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="group flex items-center gap-3 border border-border px-3 py-2 hover:bg-accent transition-all duration-300">
                <Download className="h-5 w-5" />
                <span className="font-medium">Download CV</span>
              </button>

              <button className="group flex items-center gap-3 bg-foreground text-primary-foreground px-3 py-2 hover:bg-muted-foreground transition-all duration-300">
                <span className="font-medium">View My Work</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
