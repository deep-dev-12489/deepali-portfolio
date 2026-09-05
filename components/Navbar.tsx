'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-navy-950/40 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-lg p-1"
          >
            <img
              src="/logo.svg"
              alt="Deepali Motwani logo"
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-105"
              width={40}
              height={40}
            />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-white tracking-tight group-hover:text-brand-accent transition-colors">
                Deepali Motwani
              </span>
              <span className="text-[11px] text-slate-400 font-mono hidden sm:inline-block">
                AI &amp; Cloud Infra Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-brand-accent bg-navy-850 border border-brand-accent/30 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-navy-850/60'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg border border-brand-accent/40 text-brand-accent hover:bg-brand-accent/10 transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
            <a
              href="#contact"
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-brand-accent hover:bg-brand-bright text-white shadow-md transition-all duration-200"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded border border-brand-accent/30 text-brand-accent"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-850 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur-xl border-b border-navy-800 px-4 pt-3 pb-6 space-y-2 mt-3 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-brand-accent hover:bg-navy-850"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-3 border-t border-navy-800 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-brand-accent text-white font-medium text-sm shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
