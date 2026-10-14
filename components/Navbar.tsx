'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Sparkles } from 'lucide-react';

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
          ? 'bg-white/90 backdrop-blur-md border-b border-[#D0E3F7] shadow-[0_4px_20px_rgba(2,132,199,0.08)] py-2.5'
          : 'bg-white/60 backdrop-blur-sm py-4 border-b border-[#E0F2FE]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#38BDF8] rounded-full p-1"
          >
            <div className="relative">
              <img
                src="/logo.svg"
                alt="Deepali Motwani logo"
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors flex items-center gap-1.5">
                Deepali Motwani
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              </span>
              <span className="text-[11px] text-[#475569] font-medium hidden sm:inline-block">
                Software Engineer (Cloud &amp; AI) | Web Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-[#F0F7FF] p-1.5 rounded-full border border-[#D0E3F7]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-[#0284C7] bg-white border border-[#38BDF8]/50 shadow-sm'
                      : 'text-[#475569] hover:text-[#0284C7] hover:bg-white/60'
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
              className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-[#38BDF8] text-[#0284C7] bg-white hover:bg-[#E0F2FE] shadow-sm transition-all duration-200 hover:scale-105"
            >
              <FileText className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-[#0284C7]" />
            </a>
            <a
              href="#contact"
              className="text-xs font-bold px-5 py-2 rounded-full btn-blue-gradient text-white flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-white" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border border-[#38BDF8] text-[#0284C7] bg-[#E0F2FE]"
            >
              <FileText className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#0F172A] hover:text-[#0284C7] hover:bg-[#E0F2FE] focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#D0E3F7] px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-[#0F172A] hover:text-[#0284C7] hover:bg-[#F0F7FF] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E0F2FE] flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full btn-blue-gradient text-white font-bold text-sm shadow-md"
            >
              Contact Me ✨
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
