'use client';

import React from 'react';
import {
  Github,
  Linkedin,
  Youtube,
  Mail,
  ArrowRight,
  FileText,
  Terminal,
  ShieldCheck,
  Cpu,
  Sparkles,
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-14 flex items-center justify-center overflow-hidden bg-navy-950 text-slate-100"
    >
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1E2A5020_1px,transparent_1px),linear-gradient(to_bottom,#1E2A5020_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Available for AI &amp; Cloud Infra Engineering Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Deepali Motwani
              </h1>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-200 flex flex-wrap items-center gap-2">
                <span className="text-brand-accent">AI &amp; Cloud Infrastructure Engineer</span>
                <span className="text-slate-600 font-normal">|</span>
                <span className="text-slate-300 font-medium">DevOps &amp; Web Developer</span>
              </h2>
            </div>

            {/* Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Architecting resilient cloud observability stacks, high-availability Kubernetes clusters, and zero-hallucination agentic AI pipelines — backed by strategic business leadership.
            </p>

            {/* Visually Light Tech Tags */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                <Terminal className="w-3.5 h-3.5 text-brand-accent" />
                Kubernetes &amp; VictoriaMetrics
              </span>
              <span className="text-slate-700">&bull;</span>
              <span className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                <Cpu className="w-3.5 h-3.5 text-brand-accent" />
                RAG &amp; LangGraph
              </span>
              <span className="text-slate-700">&bull;</span>
              <span className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
                S3 Disaster Recovery
              </span>
            </div>

            {/* Main CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-heading font-bold text-sm shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-850 border border-slate-700 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-850 border border-slate-800 text-slate-400 hover:text-white font-medium text-sm transition-all duration-200"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-4 pt-3 border-t border-slate-850">
              <span className="text-xs font-mono text-slate-500">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/deepali-motwani"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-navy-900 hover:bg-navy-850 border border-slate-800 text-slate-400 hover:text-brand-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/deep-dev-12489"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-navy-900 hover:bg-navy-850 border border-slate-800 text-slate-400 hover:text-brand-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com/@TheInformedMind"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel"
                  className="p-2.5 rounded-lg bg-navy-900 hover:bg-navy-850 border border-slate-800 text-slate-400 hover:text-red-400 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="mailto:deepalimotwani8@gmail.com"
                  aria-label="Send Email"
                  className="p-2.5 rounded-lg bg-navy-900 hover:bg-navy-850 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Photo Card with NEW yellow top headshot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>

              {/* Photo Frame Container - Fixed 1:1 Aspect Ratio Box */}
              <div className="relative p-3 rounded-2xl bg-navy-900 border border-slate-700/80 shadow-2xl flex flex-col items-center">
                
                {/* Fixed-Aspect-Ratio Square Box */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 aspect-square rounded-xl overflow-hidden bg-slate-900 relative shadow-inner">
                  <img
                    src="/profile-photo.jpg"
                    alt="Deepali Motwani - AI & Cloud Infrastructure Engineer"
                    className="w-full h-full object-cover object-[center_18%] transition-transform duration-500 group-hover:scale-105"
                    width={256}
                    height={256}
                  />
                </div>

                {/* Location & Professional Title Bar below photo */}
                <div className="mt-3 px-4 py-2 rounded-xl bg-navy-950/90 border border-slate-800 flex items-center gap-2 w-full justify-center text-xs font-medium text-slate-300">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Kanpur, India &bull; AI &amp; Cloud Infra Engineer</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
