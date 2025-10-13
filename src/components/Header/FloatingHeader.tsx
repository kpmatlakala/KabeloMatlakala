"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, 
  // Settings, ArrowRight, Download, Box 
} from "lucide-react";

import {
  Button,
  // Drawer,
  // DrawerTrigger,
  // DrawerContent,
  // DrawerHeader,
  // DrawerTitle,
  // DrawerFooter,
} from "delightplus-ui";

// import { ThemeToggle } from "../ToggleTheme";

interface NavbarProps {
  activeSection: string; // Make non-optional for simplicity
}

export default function FloatingHeader({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    // { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/settings") return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-500 ease-out">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "scale-95 bg-background/40 backdrop-blur-md p-1"
              : "scale-100"
          }`}
        >
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 group"
          >
            <span className="logo-float metallic-text neon-glow font-audiowide text-primary text-3xl">
              KPM
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          <div
            className={`${
              isScrolled
                ? "bg-background/50 backdrop-blur-md px-1 py-2"
                : "bg-background/5 backdrop-blur-sm shadow-lg px-2 py-3"
            } rounded-full border border-border/20 transition-all duration-300`}
          >
            <nav>
              <ul className="flex gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className={`px-4 py-2 text-sm rounded-full transition-all duration-300 relative group border-b-2
                          ${
                            isActive
                              ? "text-primary border-primary"
                              : "border-transparent text-foreground/80 hover:text-primary hover:border-primary/60"
                          }`}
                      >
                        <span className="relative z-10">{link.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile (Drawer) */}
        <div className="flex items-center gap-3">
          {/* <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground bg-background/40 backdrop-blur-md rounded-full border border-border/20 shadow-lg hover:bg-background/60"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </Button>
            </DrawerTrigger>

            <DrawerContent className="h-full w-80 ml-auto flex flex-col">
              <DrawerHeader className="border-b border-border/20 mb-3">
                <DrawerTitle className="text-base text-muted-foreground">Quick Access</DrawerTitle>
                <div className="grid grid-cols-3 gap-2 pt-4">
                  <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                    Theme
                    <ThemeToggle />
                  </div>
                  <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                    3D
                    <Box className="w-4 h-4 opacity-50" />
                  </div>
                  <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                    <Settings className="w-4 h-4" />
                    <Link href="/settings" className="hover:underline">Settings</Link>
                  </div>
                </div>
              </DrawerHeader>

              <div className="px-6 space-y-3 flex-1 overflow-y-auto">
                <nav className="space-y-1 lg:hidden">
                  <p className="text-sm font-medium text-muted-foreground">Navigation</p>
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        className={`flex items-center justify-between py-3 px-4 rounded-lg group transition-all
                          ${isActive
                            ? "text-primary border-b-2 border-primary"
                            : "text-foreground hover:text-primary hover:border-primary/60"
                          }`}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all" />
                      </a>
                    );
                  })}
                </nav>
              </div>

              <DrawerFooter className="border-t border-border/20 px-6 py-4 space-y-2">
                <Button className="w-full justify-start" variant="secondary" asChild>
                  <a href="/KP-Matlakala-Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </a>
                </Button>

                <Button className="w-full justify-start" variant="ghost" asChild>
                  <a href="#">Terms & Conditions</a>
                </Button>

                <Button className="w-full justify-start" variant="ghost" asChild>
                  <a href="#">Feedback</a>
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer> */}
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground bg-background/40 backdrop-blur-md rounded-full border border-border/20 shadow-lg hover:bg-background/60"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );
}
