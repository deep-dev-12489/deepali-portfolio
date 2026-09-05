'use client';

import React from 'react';
import { Server, Brain, Briefcase, CheckCircle2, Award, Quote } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-50 text-slate-900 relative border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-10">
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-accent uppercase">
            01 / Profile Overview
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Profile Summary Box (Warm Light Card) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="light-card p-6 sm:p-8 rounded-2xl space-y-4">
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Bridging Cloud Infrastructure &amp; Business Operations
              </h3>
              
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Results-driven <strong className="text-slate-900 font-semibold">AI &amp; Cloud Infrastructure Engineer</strong> and <strong className="text-slate-900 font-semibold">CRM Professional</strong> currently pursuing an MBA. Combines hands-on experience in Kubernetes cluster management, VictoriaMetrics HA observability, and S3 disaster recovery with AI engineering (Generative AI, RAG pipelines, agentic frameworks).
              </p>
              
              <p className="text-slate-600 leading-relaxed text-base">
                Proven expertise in cost-benchmarking telemetry migrations (achieving up to 95% infrastructure cost reduction vs commercial SaaS observability tools), client relationship management, and digital media production.
              </p>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                <div className="flex items-start gap-2 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>High-Availability K8s &amp; VictoriaMetrics</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Zero-Hallucination RAG &amp; LangGraph</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>S3 Automated DR Runbooks</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>MBA Candidate &amp; Business Operations</span>
                </div>
              </div>

              {/* Executive Credibility Highlight Banner */}
              <div className="mt-4 p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-3">
                <Quote className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "Combines deep technical engineering execution across Kubernetes &amp; RAG architectures with client-facing business leadership and MBA strategy."
                </p>
              </div>
            </div>
          </div>

          {/* Three Core Pillar Cards — Cohesive Blue Icon Theme */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Pillar 1: Cloud Infra */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0 border border-blue-100">
                <Server className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-slate-900 text-base">Cloud &amp; Observability Stacks</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Architecting resilient Kubernetes clusters, VictoriaMetrics HA setups, MetricsQL telemetry, and automated MinIO S3 backup runbooks.
                </p>
              </div>
            </div>

            {/* Pillar 2: AI Engineering (Blue-500 family) */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4 hover:border-blue-500 hover:shadow-md transition-all">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0 border border-blue-100">
                <Brain className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-slate-900 text-base">Agentic AI &amp; RAG Systems</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineering multimodal RAG engines, LangGraph self-correcting graphs, and Gemini/Claude API integrations with coordinate proofing.
                </p>
              </div>
            </div>

            {/* Pillar 3: Business & Operations (Cyan/Blue family) */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4 hover:border-cyan-500 hover:shadow-md transition-all">
              <div className="p-3 rounded-xl bg-sky-50 text-sky-600 shrink-0 border border-sky-100">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-slate-900 text-base">Business &amp; Client Relations</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
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
