'use client';

import React from 'react';
import { Server, Brain, Briefcase, CheckCircle2, Quote, Sparkles } from 'lucide-react';
import { ShieldSecuritySticker } from './stickers';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#F4F9FF] text-[#0F172A] relative border-y border-[#D0E3F7] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-xs font-semibold tracking-wider uppercase border border-[#D0E3F7]">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>01 / Profile Overview</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              About Me
            </h2>
            <ShieldSecuritySticker size={34} rotate={8} />
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#0284C7] rounded-full mt-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Profile Summary Box */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D0E3F7] shadow-[0_8px_24px_rgba(2,132,199,0.08)] space-y-4">
              <h3 className="font-heading text-xl font-bold text-[#0F172A]">
                Bridging Cloud Infrastructure &amp; Business Operations
              </h3>
              
              <p className="text-[#334155] leading-relaxed text-[15px] sm:text-base">
                Results-driven <strong className="text-[#0284C7] font-semibold">Software Engineer (Cloud &amp; AI) | Web Developer</strong> and <strong className="text-[#0284C7] font-semibold">CRM Professional</strong> currently pursuing an MBA. Combines hands-on experience in Kubernetes cluster management, VictoriaMetrics HA observability, and S3 disaster recovery with AI engineering (Generative AI, RAG pipelines, agentic frameworks).
              </p>
              
              <p className="text-[#475569] leading-relaxed text-[14px] sm:text-[15px]">
                Proven expertise in cost-benchmarking telemetry migrations (benchmarked up to 95% lower infrastructure cost vs commercial SaaS observability), client relationship management, and digital media production.
              </p>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E0F2FE]">
                <div className="flex items-start gap-2.5 text-[14px] text-[#0F172A] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>High-Availability K8s &amp; VictoriaMetrics</span>
                </div>
                <div className="flex items-start gap-2.5 text-[14px] text-[#0F172A] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>Source-Grounded RAG &amp; LangGraph</span>
                </div>
                <div className="flex items-start gap-2.5 text-[14px] text-[#0F172A] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>S3 Automated DR Runbooks</span>
                </div>
                <div className="flex items-start gap-2.5 text-[14px] text-[#0F172A] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>MBA Candidate &amp; Business Operations</span>
                </div>
              </div>

              {/* Executive Credibility Highlight Banner */}
              <div className="mt-4 p-4 rounded-2xl bg-[#F0F7FF] border border-[#D0E3F7] flex items-start gap-3 shadow-inner">
                <Quote className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                <p className="text-[13px] text-[#334155] italic leading-relaxed">
                  "Combines deep technical engineering execution across Kubernetes &amp; RAG architectures with client-facing business leadership and MBA strategy."
                </p>
              </div>
            </div>
          </div>

          {/* Three Core Pillar Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Pillar 1: Cloud Infra */}
            <div className="p-5 rounded-3xl bg-white border border-[#D0E3F7] shadow-[0_6px_20px_rgba(2,132,199,0.06)] flex items-start gap-4 hover:border-[#38BDF8] hover:shadow-[0_10px_28px_rgba(2,132,199,0.14)] transition-all">
              <div className="p-3 rounded-2xl bg-[#E0F2FE] text-[#0284C7] shrink-0 border border-[#D0E3F7]">
                <Server className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-[#0F172A] text-base">Cloud &amp; Observability Stacks</h4>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  Architecting resilient Kubernetes clusters, VictoriaMetrics HA setups, MetricsQL telemetry, and automated MinIO S3 backup runbooks.
                </p>
              </div>
            </div>

            {/* Pillar 2: AI & RAG */}
            <div className="p-5 rounded-3xl bg-white border border-[#D0E3F7] shadow-[0_6px_20px_rgba(2,132,199,0.06)] flex items-start gap-4 hover:border-[#38BDF8] hover:shadow-[0_10px_28px_rgba(2,132,199,0.14)] transition-all">
              <div className="p-3 rounded-2xl bg-[#E0F2FE] text-[#0284C7] shrink-0 border border-[#D0E3F7]">
                <Brain className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-[#0F172A] text-base">Agentic AI &amp; RAG Systems</h4>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  Engineering multimodal RAG engines, LangGraph self-correcting graphs, and Gemini/Claude API integrations with coordinate proofing.
                </p>
              </div>
            </div>

            {/* Pillar 3: Business & MBA */}
            <div className="p-5 rounded-3xl bg-white border border-[#D0E3F7] shadow-[0_6px_20px_rgba(2,132,199,0.06)] flex items-start gap-4 hover:border-[#38BDF8] hover:shadow-[0_10px_28px_rgba(2,132,199,0.14)] transition-all">
              <div className="p-3 rounded-2xl bg-[#E0F2FE] text-[#0284C7] shrink-0 border border-[#D0E3F7]">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-[#0F172A] text-base">Business &amp; Client Relations</h4>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  CRM management, partnership outreach, Elementor/WordPress production, and video pipeline engineering with Adobe Premiere &amp; Remotion.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
