'use client';

import React from 'react';
import {
  Server,
  Cloud,
  Cpu,
  Code2,
  TrendingUp,
  Sparkles,
  Layers,
} from 'lucide-react';
import { HelmWheelSticker } from './stickers';

interface SkillItem {
  name: string;
}

interface SkillGroup {
  id: string;
  category: string;
  badge?: string;
  icon: React.ReactNode;
  description: string;
  skills: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    id: 'cloud-infra',
    category: 'Cloud Infrastructure & Observability',
    icon: <Server className="w-5 h-5 text-sky-600" />,
    description: 'High-availability telemetry, cluster management & resilient S3 architectures',
    skills: [
      { name: 'Kubernetes (K8s)' },
      { name: 'Helm & kubectl' },
      { name: 'Prometheus & MetricsQL' },
      { name: 'Grafana Dashboards' },
      { name: 'VictoriaMetrics (single & cluster)' },
      { name: 'vmalert & AlertManager' },
      { name: 'Disaster Recovery & S3 Backups (MinIO)' },
      { name: 'Multi-Tenancy & RBAC (vmauth)' },
      { name: 'Telemetry Migration (vmctl)' },
      { name: 'Cost Benchmarking' },
    ],
  },
  {
    id: 'microsoft-azure',
    category: 'Microsoft Azure',
    badge: 'Learning ✨',
    icon: <Cloud className="w-5 h-5 text-[#0078D4]" />,
    description: 'Foundational Azure cloud capabilities targeting Azure Support & SRE workflows',
    skills: [
      { name: 'Azure Fundamentals (AZ-900)' },
      { name: 'AKS' },
      { name: 'Azure Monitor' },
      { name: 'Azure Blob Storage' },
    ],
  },
  {
    id: 'ai-automation',
    category: 'AI & Automation',
    icon: <Cpu className="w-5 h-5 text-blue-600" />,
    description: 'Agentic workflows, RAG pipelines & source-grounded LLM orchestration',
    skills: [
      { name: 'Generative AI' },
      { name: 'RAG Architectures' },
      { name: 'LangChain' },
      { name: 'LangGraph' },
      { name: 'Agentic Workflows' },
      { name: 'Prompt Engineering' },
      { name: 'Vector Databases (ChromaDB)' },
      { name: 'Gemini API' },
    ],
  },
  {
    id: 'programming-tools',
    category: 'Programming & Tools',
    icon: <Code2 className="w-5 h-5 text-sky-600" />,
    description: 'Core languages, developer tooling, and modern full-stack web frameworks',
    skills: [
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Git & GitHub' },
      { name: 'Streamlit' },
      { name: 'React' },
    ],
  },
  {
    id: 'customer-business',
    category: 'Customer & Business Skills',
    icon: <TrendingUp className="w-5 h-5 text-sky-600" />,
    description: 'Client success, cross-functional stakeholder alignment & strategic operations',
    skills: [
      { name: 'Client Relations' },
      { name: 'CRM Systems' },
      { name: 'Partnership Management' },
      { name: 'Business Development' },
      { name: 'Communication Strategy' },
    ],
  },
  {
    id: 'additional',
    category: 'Additional',
    icon: <Layers className="w-5 h-5 text-blue-500" />,
    description: 'Video-as-code engineering, creative asset production & organic search discovery',
    skills: [
      { name: 'Remotion (Video as Code)' },
      { name: 'Adobe Premiere Pro' },
      { name: 'WordPress & Elementor Pro' },
      { name: 'SEO' },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-[#F4F9FF] text-[#0F172A] relative border-y border-[#D0E3F7] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-xs font-semibold tracking-wider uppercase border border-[#D0E3F7]">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>03 / Core Competencies</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Technical Skills &amp; Stack
            </h2>
            <HelmWheelSticker size={38} rotate={6} />
          </div>
          <p className="text-[#0284C7] font-semibold text-base mt-1">
            Cloud &amp; observability engineer with an AI and customer-success edge.
          </p>
          <p className="text-[#475569] text-[14px] max-w-2xl mt-0.5 leading-relaxed">
            Targeted across high-availability cloud telemetry, Microsoft Azure workflows, agentic AI systems, and stakeholder-facing client solutions.
          </p>
        </div>

        {/* 6-Card Grid: 3x2 on Large, 2x3 on Medium, items-start to prevent unnatural stretching */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {skillGroups.map((group) => {
            const isAzure = group.id === 'microsoft-azure';

            return (
              <div
                key={group.id}
                className={`p-6 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between shadow-[0_8px_24px_rgba(2,132,199,0.08)] hover:shadow-[0_12px_28px_rgba(2,132,199,0.16)] hover:-translate-y-1 ${
                  isAzure
                    ? 'border-[#0078D4] ring-1 ring-[#0078D4]/30 bg-gradient-to-b from-white to-[#F0F7FF]'
                    : 'border-[#D0E3F7] hover:border-[#38BDF8]'
                }`}
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-[#E0F2FE] border border-[#D0E3F7] shrink-0 text-[#0284C7]">
                        {group.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-heading text-base font-bold text-[#0F172A] leading-tight">
                            {group.category}
                          </h3>
                          {/* Learning Badge shown ONLY once in the card header */}
                          {group.badge && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E0F2FE] text-[#0078D4] border border-[#0078D4]/30 shadow-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0078D4] animate-pulse" />
                              {group.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[14px] text-[#475569] mt-1 leading-snug">
                          {group.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E0F2FE]">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                          isAzure
                            ? 'bg-[#E0F2FE]/70 text-[#0F172A] border-[#38BDF8]/40 hover:bg-[#E0F2FE]'
                            : 'bg-white text-[#0F172A] border-[#D0E3F7] hover:border-[#38BDF8] hover:bg-[#F0F7FF]'
                        } hover:scale-105 hover:-translate-y-0.5`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
