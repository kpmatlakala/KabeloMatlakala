"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { getSocialIcon } from "@/lib/utils";
import Image from "next/image";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [screenType, setScreenType] = useState("desktop");

  const { profile } = PORTFOLIO_DATA;

  useEffect(() => {
    setIsLoaded(true);

    const determineScreenType = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;

      // Mobile: width < 768px OR (width < 1024px AND aspectRatio < 0.8)
      if (width < 768 || (width < 1024 && aspectRatio < 0.8)) {
        return "mobile";
      }

      // Desktop: width >= 1024px AND aspectRatio > 1.2
      if (width >= 1024 && aspectRatio > 1.2) {
        return "desktop";
      }

      // Everything else is tablet/intermediate
      return "tablet";
    };

    const handleResize = () => {
      setScreenType(determineScreenType());
    };

    const handleScroll = () => setScrollY(window.scrollY);

    // Set initial screen type
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Background pattern component
  const BackgroundPattern = () => (
    <div
      className="absolute inset-0 opacity-5 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: "50px 50px",
        transform: `translateY(${scrollY * 0.3}px)`,
      }}
    />
  );

  // Profile image component
  const ProfileImage = ({ size = "large", className = "" }) => (
    <div className={`relative ${className}`}>
      <div
        className={`
        relative aspect-square mx-auto rounded-full 
        bg-gradient-to-t from-primary-foreground to-transparent overflow-hidden
        ${
          size === "large"
            ? "w-86 h-86 lg:w-110 lg:h-110"
            : size === "medium"
            ? "w-64 h-64"
            : "w-48 h-48"
        }
      `}
      >
        <Image
          src={
            size === "large"
              ? profile.bannerImage || profile.profileImage
              : profile.profileImage
          }
          alt="Profile"
          layout="fill" // or "responsive" depending on your container setup
          objectFit={size === "large" ? "contain" : "cover"}
          className="grayscale hover:grayscale-0 transition-all duration-700"
          priority={false} // lazy loading by default unless priority is true
          sizes="100vw" // optional, helps with responsive loading
        />

        <div className="absolute bottom-0 left-0 right-0 p-16 bg-gradient-to-t from-primary-foreground to-transparent"></div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-2 -right-2 w-16 h-16 bg-foreground text-primary-foreground rounded-full flex items-center justify-center font-bold text-xs">
        Available
      </div>
    </div>
  );

  // Content component
  const HeroContent = ({ layout = "horizontal" }) => (
    <div className={`space-y-6 ${layout === "vertical" ? "text-center" : ""}`}>
      <div className="space-y-4">
        <div
          className={`flex items-center gap-4 text-muted-foreground ${
            layout === "vertical" ? "justify-center" : ""
          }`}
        >
          <div className="w-12 h-[1px] bg-muted-foreground"></div>
          <span className="text-sm tracking-wider font-montserrat">
            2016 → 2024
          </span>
        </div>
      </div>

      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-audiowide tracking-tight leading-none">
        Hello
      </h1>
      <h2 className="text-2xl lg:text-4xl xl:text-6xl font-semibold tracking-tight">
        I&apos;m <span className="text-primary">{profile.name}</span>
      </h2>

      <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mx-auto">
        {profile.title}
      </p>

      <div
        className={`flex flex-wrap gap-4 ${
          layout === "vertical" ? "justify-center" : ""
        }`}
      >
        <button className="group flex items-center gap-3 bg-foreground text-primary-foreground px-4 py-3 hover:bg-muted-foreground transition-all duration-300 rounded-md">
          <span className="font-medium">View My Work</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <button className="group flex items-center gap-3 border border-border px-4 py-3 hover:bg-accent transition-all duration-300 rounded-md">
          <Download className="h-5 w-5" />
          <span className="font-medium">Download CV</span>
        </button>
      </div>

      <div
        className={`flex flex-col sm:flex-row items-center gap-6 pt-4 ${
          layout === "vertical" ? "justify-center" : ""
        }`}
      >
        <div className="flex gap-4">
          {profile.socialLinks.map((social, index) => {
            const Icon = getSocialIcon(social.platform);
            return (
              <button
                key={index}
                className="w-10 h-10 border border-border flex items-center justify-center hover:bg-accent hover:border-foreground transition-all duration-300 rounded-md"
                onClick={() => window.open(social.url, "_blank")}
              >
                <Icon className="h-4 w-4" />
              </button>
            );
          })}
        </div>
        <div className="hidden sm:block h-6 w-[1px] bg-border"></div>
        <div className="text-sm text-muted-foreground text-center sm:text-left">
          <p>Open for freelance & remote/onsite work</p>
          <p className="text-foreground font-medium">{profile.email}</p>
        </div>
      </div>
    </div>
  );

  // Desktop Layout (wide screens with good height)
  if (screenType === "desktop") {
    return (
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        <BackgroundPattern />
        <div className="container mx-auto max-w-8xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
              <HeroContent layout="horizontal" />
            </div>

            <div
              className={`${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <ProfileImage size="large" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>
    );
  }

  // Tablet/Intermediate Layout
  if (screenType === "tablet") {
    return (
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden p-4"
      >
        <BackgroundPattern />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Text content */}
                <div className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="w-12 h-[1px] bg-muted-foreground"></div>
                      <span className="text-sm tracking-wider font-montserrat">
                        2016 → 2024
                      </span>
                    </div>
                  </div>

                  <h1 className="text-4xl lg:text-5xl font-audiowide tracking-tight leading-none mt-4">
                    Hello
                  </h1>

                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight mt-2">
                    I&apos;m{" "}
                    <span className="text-primary">{profile.name}</span>
                  </h2>

                  <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                    {profile.title}
                  </p>
                </div>

                {/* Image inline with text on tablet */}
                <div className="flex-shrink-0">
                  <ProfileImage size="medium" />
                </div>
              </div>

              {/* Rest of the content below */}
              <div className="mt-8">
                <div className="flex flex-wrap gap-4 mt-6">
                  <button className="group flex items-center gap-3 bg-foreground text-primary-foreground px-6 py-3 hover:bg-muted-foreground transition-all duration-300 rounded-md">
                    <span className="font-medium">View My Work</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button className="group flex items-center gap-3 border border-border px-6 py-3 hover:bg-accent transition-all duration-300 rounded-md">
                    <Download className="h-5 w-5" />
                    <span className="font-medium">Download CV</span>
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
                  <div className="flex gap-4">
                    {profile.socialLinks.map((social, index) => {
                      const Icon = getSocialIcon(social.platform);
                      return (
                        <button
                          key={index}
                          className="w-10 h-10 border border-border flex items-center justify-center hover:bg-accent hover:border-foreground transition-all duration-300 rounded-md"
                          onClick={() => window.open(social.url, "_blank")}
                        >
                          <Icon className="h-4 w-4" />
                        </button>
                      );
                    })}
                  </div>
                  <div className="hidden sm:block h-6 w-[1px] bg-border"></div>
                  <div className="text-sm text-muted-foreground text-center sm:text-left">
                    <p>Open for freelance & remote/onsite work</p>
                    <p className="text-foreground font-medium">
                      {profile.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>
    );
  }

  // Mobile Layout
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-4"
    >
      <BackgroundPattern />
      <div className="container mx-auto max-w-md relative z-10 space-y-8">
        {/* Image first on mobile */}
        <div
          className={`${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <ProfileImage size="medium" />
        </div>

        {/* Content below image on mobile */}
        <div className={`${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
          <HeroContent layout="vertical" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
    </div>
  );
}
