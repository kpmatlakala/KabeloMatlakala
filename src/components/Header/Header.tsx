
// components/Header.tsx
"use client";

import { ThemeToggle } from "../ToggleTheme";


export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            KPM
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}