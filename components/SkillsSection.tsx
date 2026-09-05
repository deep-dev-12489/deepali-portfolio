'use client';

import React from 'react';
import {
  Server,
  Cpu,
  Code2,
  Video,
  TrendingUp,
  Wrench,
} from 'lucide-react';

interface SkillGroup {
  id: string;
  category: string;
  icon: React.ReactNode;
  skills: string[];
  description: string;
}

const skillGroups: SkillGroup[] = [
  {
    id: 'cloud-infra',
    category: 'Cloud Infrastructure & Observability',
    icon: <Server className="w-5 h-5 text-blue-600" />,
    description: 'High-availability telemetry, cluster management & S3 resilience',
    skills: [
      'Kubernetes (K8s)',
      'VictoriaMetrics (vmsingle/vmcluster)',
      'Helm & kubectl',
      'Prometheus & MetricsQL',
      'Grafana Dashboards',
      'vmalert & AlertManager',
      'vmauth & Multi-Tenancy',
      'MinIO & S3 Backups',
      'Disaster Recovery (DR)',
      'Telemetry Migration (vmctl)',
    ],
  },
  {
    id: 'ai-software',
    category: 'AI & Software Engineering',
    icon: <Cpu className="w-5 h-5 text-blue-600" />,
    description: 'Agentic workflows, RAG pipelines & LLM orchestration',
    skills: [
      'Generative AI',
      'RAG Architectures',
      'LangChain',
      'LangGraph',
      'Agentic Workflows',
      'Gemini API',
      'Prompt Engineering',
      'Vector Databases',
    ],
  },
  {
    id: 'programming-db',
    category: 'Programming & Databases',
    icon: <Code2 className="w-5 h-5 text-sky-600" />,
    description: 'Core languages, vector stores, and relational data',
    skills: [
      'Python',
      'TypeScript',
      'JavaScript',
      'ChromaDB',
      'SQL',
      'Git & GitHub',
    ],
  },
  {
    id: 'web-design-video',
    category: 'Web, Design & Video Editing',
    icon: <Video className="w-5 h-5 text-sky-600" />,
    description: 'Video-as-code pipelines, modern web & media design',
    skills: [
      'Adobe Premiere Pro',
      'Remotion (Video as Code)',
      'React',
      'Streamlit',
      'Canva',
      'SEO Optimization',
    ],
  },
  {
    id: 'business-ops',
    category: 'Business & Client Operations',
    icon: <TrendingUp className="w-5 h-5 text-cyan-600" />,
    description: 'Strategic growth, partnerships & stakeholder alignment',
    skills: [
      'Business Development',
      'Partnership Management',
      'Client Relations',
      'Communication Strategy',
    ],
  },
  {
    id: 'supporting-exp',
    category: 'Supporting Experience',
    icon: <Wrench className="w-5 h-5 text-cyan-600" />,
    description: 'CRM platforms and content management tools',
    skills: ['CRM Systems', 'WordPress & CMS', 'Elementor Pro'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-slate-100/90 text-slate-900 relative border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start gap-2 mb-10">
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-accent uppercase">
            03 / Core Competencies
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Skills &amp; Stack
          </h2>
          <p className="text-slate-600 text-sm max-w-xl">
            Clean breakdown of technical tools, observability frameworks, AI libraries, and business operations platforms.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-100 shrink-0">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-slate-900 leading-tight">
                      {group.category}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-150">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-50 text-slate-800 border border-slate-200 hover:border-blue-300 hover:text-slate-900 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
