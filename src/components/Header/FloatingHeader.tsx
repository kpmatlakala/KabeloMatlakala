'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from 'delightplus-ui';
import { ThemeToggle } from '../ToggleTheme';
// import { Toggle3D } from './Toggle3D';
import { Menu, Settings, ArrowRight, Download } from 'lucide-react';

interface NavbarProps {
  logoFloating?: boolean;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function FloatingHeader({ logoFloating }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/settings') return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-500 ease-out">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'scale-95 bg-background/40 backdrop-blur-md rounded-full p-2 px-8'
              : 'scale-100  p-2 px-8'
          }`}
        >
          <div
            onClick={handleLogoClick}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="logo-float metallic-text neon-glow font-audiowide text-primary dark:text-primary light:text-black text-3xl">
              KPM
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          <div
            className={`${
              isScrolled
                ? 'bg-background/50 backdrop-blur-md shadow-none shadow-primary/5 px-1 py-2'
                : 'bg-background/5 backdrop-blur-sm shadow-lg px-2 py-3'
            } rounded-full border border-border/80 transition-all duration-300`}
          >
            <nav>
              <ul className="flex gap-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Right Side Tools */}
        <div className="flex items-center gap-3">
          {/* Theme + Settings + Resume */}
          <div className="hidden rounded-full lg:flex items-center shadow-lg gap-3 ">
            <ThemeToggle/>

            {/* <Link href="/settings">
              <Button variant="ghost" className="flex items-center gap-2">
                <Settings size={16} />
                Settings
              </Button>
            </Link>

            <a
              href="/KP-Matlakala-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="flex items-center gap-2">
                <Download size={16} />
                Resume
              </Button>
            </a> */}
          </div>

          {/* Mobile Menu (Drawer - Optional) */}
          {/* Placeholder for mobile drawer trigger if implemented later */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground bg-background/40 backdrop-blur-md rounded-full border border-border/20 shadow-lg hover:bg-background/60"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );
}
