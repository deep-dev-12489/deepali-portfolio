'use client';

import React from 'react';
import {
  Linkedin,
  Github,
  Youtube,
  Mail,
  ArrowRight,
  FileText,
  Terminal,
  ShieldCheck,
  Cpu,
  Sparkles,
} from 'lucide-react';
import {
  SparkleSticker,
  TerminalSticker,
  LaptopSticker,
  CloudStackSticker,
  CpuChipSticker,
} from './stickers';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 flex items-center justify-center overflow-hidden bg-white text-[#0F172A] scroll-mt-28"
    >
      {/* Background Subtle Soft Light Blue Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[360px] bg-[#E0F2FE]/70 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#BAE6FD]/40 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-[#F0F9FF] blur-[100px] rounded-full pointer-events-none -z-10" />
      
      {/* Delicate Dotted Pattern */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#D0E3F7_1px,transparent_1px)] [background-size:24px_24px] opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10"
      />

      {/* Floating Hero Background Decorative Stickers */}
      <div className="absolute top-24 left-[10%] hidden md:block pointer-events-none">
        <SparkleSticker size={32} rotate={-10} floatDelay={0} />
      </div>
      <div className="absolute top-44 left-[4%] hidden lg:block pointer-events-none">
        <TerminalSticker size={42} rotate={-8} floatDelay={0.8} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left relative">
            
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0F7FF] border border-[#D0E3F7] text-[#0284C7] text-xs font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0284C7]"></span>
              </span>
              <span>Available for AI &amp; Cloud Infra Engineering Roles</span>
              <Sparkles className="w-3 h-3 text-[#0284C7]" />
            </div>

            {/* Main Headline */}
            <div className="space-y-3 relative">
              <div className="flex items-center gap-3">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
                  Deepali Motwani
                </h1>
                <SparkleSticker size={36} rotate={8} floatDelay={0.4} className="hidden sm:inline-block" />
              </div>

              <h2 className="font-heading text-lg sm:text-2xl font-bold text-[#0284C7] flex flex-wrap items-center gap-2">
                <span>AI &amp; Cloud Infrastructure Engineer</span>
                <span className="text-[#38BDF8] font-normal">|</span>
                <span className="text-[#475569] font-semibold text-base sm:text-xl">
                  Kubernetes &middot; Observability &middot; Generative AI
                </span>
              </h2>
            </div>

            {/* Positioning Statement */}
            <p className="text-base sm:text-lg text-[#475569] max-w-2xl leading-relaxed font-normal">
              Architecting resilient cloud observability stacks, high-availability Kubernetes clusters, and source-grounded agentic AI pipelines — backed by strategic business leadership.
            </p>

            {/* Visually Crisp Pill Tech Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F0F7FF] text-[#334155] border border-[#D0E3F7] shadow-sm hover:border-[#38BDF8] hover:text-[#0284C7] transition-all">
                <Terminal className="w-3.5 h-3.5 text-[#0284C7]" />
                Kubernetes &amp; VictoriaMetrics
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F0F7FF] text-[#334155] border border-[#D0E3F7] shadow-sm hover:border-[#38BDF8] hover:text-[#0284C7] transition-all">
                <Cpu className="w-3.5 h-3.5 text-[#0284C7]" />
                RAG &amp; LangGraph
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F0F7FF] text-[#334155] border border-[#D0E3F7] shadow-sm hover:border-[#38BDF8] hover:text-[#0284C7] transition-all">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
                S3 Disaster Recovery
              </span>
            </div>

            {/* Main CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full btn-blue-gradient font-heading font-bold text-sm group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#E0F2FE] border border-[#38BDF8] text-[#0284C7] font-heading font-bold text-sm shadow-sm transition-all duration-200 hover:scale-105"
              >
                <FileText className="w-4 h-4 text-[#0284C7]" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#F0F7FF] hover:bg-[#E0F2FE] border border-[#D0E3F7] text-[#475569] hover:text-[#0284C7] font-semibold text-sm transition-all duration-200"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-4 pt-3 border-t border-[#E0F2FE]">
              <span className="text-xs font-semibold text-[#64748B]">Connect:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://linkedin.com/in/deepali-motwani"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-full bg-[#F0F7FF] hover:bg-[#E0F2FE] border border-[#D0E3F7] text-[#0284C7] hover:border-[#38BDF8] shadow-sm transition-all hover:scale-110"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/deep-dev-12489"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-full bg-[#F0F7FF] hover:bg-[#E0F2FE] border border-[#D0E3F7] text-[#0F172A] hover:text-[#0284C7] hover:border-[#38BDF8] shadow-sm transition-all hover:scale-110"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com/@TheInformedMind"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel"
                  className="p-2.5 rounded-full bg-[#F0F7FF] hover:bg-[#E0F2FE] border border-[#D0E3F7] text-[#0284C7] hover:border-[#38BDF8] shadow-sm transition-all hover:scale-110"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="mailto:contact@deepalimotwani.com"
                  aria-label="Send Email"
                  className="p-2.5 rounded-full bg-[#F0F7FF] hover:bg-[#E0F2FE] border border-[#D0E3F7] text-[#0284C7] hover:border-[#38BDF8] shadow-sm transition-all hover:scale-110"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Photo Card with Floating Stickers */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Floating Stickers around Photo */}
            <div className="absolute -top-6 -left-6 z-20">
              <CloudStackSticker size={52} rotate={-10} floatDelay={0.2} />
            </div>
            <div className="absolute -bottom-4 -left-6 z-20">
              <LaptopSticker size={46} rotate={12} floatDelay={0.6} />
            </div>
            <div className="absolute -top-3 -right-3 z-20">
              <CpuChipSticker size={42} rotate={14} floatDelay={1} />
            </div>

            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#0284C7] rounded-4xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />

              {/* Photo Frame Container */}
              <div className="relative p-3.5 rounded-3xl bg-white border-2 border-[#D0E3F7] shadow-[0_16px_40px_rgba(2,132,199,0.14)] flex flex-col items-center">
                
                {/* Fixed-Aspect-Ratio Square Box */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 aspect-square rounded-2xl overflow-hidden bg-[#F0F7FF] relative shadow-inner border border-[#E0F2FE]">
                  <img
                    src="/profile-photo.jpg"
                    alt="Deepali Motwani - AI & Cloud Infrastructure Engineer"
                    className="w-full h-full object-cover object-[center_18%] transition-transform duration-500 group-hover:scale-105"
                    width={256}
                    height={256}
                  />
                </div>

                {/* Location & Title Bar below photo */}
                <div className="mt-3 px-4 py-2 rounded-full bg-[#F0F7FF] border border-[#D0E3F7] flex items-center gap-2 w-full justify-center text-xs font-semibold text-[#475569] shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
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
