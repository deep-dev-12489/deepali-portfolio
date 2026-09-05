'use client';

import React, { useState } from 'react';
import {
  Github,
  Youtube,
  ExternalLink,
  Sparkles,
  Play,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  category: 'ai' | 'cloud' | 'media' | 'saas';
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  githubStatus?: 'live' | 'coming_soon';
  youtubeUrl?: string;
  demoUrl?: string;
  impactMetric?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'perimeter',
    title: 'Perimeter — AI Scope Creep Detector',
    subtitle: 'Founder / Builder Project',
    role: 'Founder / Builder',
    category: 'saas',
    featured: true,
    impactMetric: 'Claude AI SOW Parsing',
    description:
      'A B2B SaaS tool that uses Claude AI to detect scope creep in client requests against signed contracts (SOWs), and auto-drafts change orders to protect agency profit margins.',
    highlights: [
      'SOW contract parsing with semantic delta detection',
      'Automated change-order estimation & email draft generation',
      'Clean modern dashboard built with Next.js and Supabase',
    ],
    tags: ['Next.js', 'Supabase', 'Anthropic Claude API', 'TypeScript'],
    githubUrl: 'https://github.com/deep-dev-12489/perimeter',
    githubStatus: 'live',
  },
  {
    id: 'finan-ai',
    title: 'FinanAI — Multimodal RAG Engine',
    subtitle: 'Self-Led Portfolio Highlight',
    role: 'Self-Led Developer',
    category: 'ai',
    featured: true,
    impactMetric: 'Zero-Hallucination Proofing',
    description:
      'Multimodal RAG engine for SEC 10-K analysis with zero-hallucination visual verification using LangChain pipelines with Gemini 3 Flash to verify numerical claims via exact page-level coordinate proofing.',
    highlights: [
      'Solved vector indexing gaps by running native visual reasoning on complex financial tables & graphs',
      'Styled responsive Streamlit app with glassmorphism headers & citation highlights',
      'Implemented real-time document viewing with exact coordinate bounding box verification',
    ],
    tags: ['Python', 'Gemini 3 Flash', 'LangChain', 'ChromaDB', 'Streamlit'],
    githubUrl: 'https://github.com/deep-dev-12489/finan-ai',
    githubStatus: 'live',
  },
  {
    id: 'intelli-analyze',
    title: 'IntelliAnalyze — Intelligent Document Framework',
    subtitle: 'Lead Architect & Developer',
    role: 'Lead Architect & Developer',
    category: 'ai',
    featured: true,
    impactMetric: 'Self-Correcting Graph Nodes',
    description:
      'Implemented structured analysis graphs in LangGraph supporting self-correcting query nodes and tool routing for parsing high-density technical PDFs.',
    highlights: [
      'Built agentic self-reflection loops for query resolution',
      'Integrated tool routing for multi-format document extraction',
      'Optimized vector retrieval latency across dense technical papers',
    ],
    tags: ['Python', 'LangGraph', 'Gemini API', 'Vector Search'],
    githubUrl: 'https://github.com/deep-dev-12489/IntelliAnalyze',
    githubStatus: 'live',
  },
  {
    id: 'gemini-rag-bot',
    title: 'Gemini-RAG-Bot — Source-Grounded QA Bot',
    subtitle: 'Developer',
    role: 'Developer',
    category: 'ai',
    impactMetric: 'Strict Source Grounding',
    description:
      'Configured absolute grounding constraints and custom vector database indexing using ChromaDB for instant source-backed QA answers.',
    highlights: [
      'Strict anti-hallucination prompt constraints',
      'ChromaDB vector embedding pipeline',
      'Fast citation back-linking to source markdown files',
    ],
    tags: ['Python', 'Gemini API', 'LangChain', 'ChromaDB'],
    githubUrl: 'https://github.com/deep-dev-12489/Gemini-RAG-Knowledge-Bot',
    githubStatus: 'live',
  },
  {
    id: 'vm-ha-dr',
    title: 'VictoriaMetrics HA & Disaster Recovery Suite',
    subtitle: 'Cloud Infrastructure Project',
    role: 'Cloud Infrastructure Lead',
    category: 'cloud',
    featured: true,
    impactMetric: '95% Infra Cost Reduction',
    description:
      'Built kind Kubernetes clusters running vmsingle and vmcluster architecture (vminsert, vmselect, vmstorage); validated pod self-healing, PVC crash recovery, replication node failover.',
    highlights: [
      'Programmed vmauth RBAC boundaries & vmalert evaluation rules',
      'Automated MinIO S3 backup & restore runbooks for telemetry resilience',
      'Achieved up to 95% infrastructure cost reduction vs commercial SaaS observability',
    ],
    tags: ['Kubernetes', 'VictoriaMetrics', 'Helm', 'MinIO S3', 'MetricsQL', 'Grafana'],
  },
  {
    id: 'video-factory',
    title: 'AI Video Factory & YouTube Content Creation',
    subtitle: '"The Informed Mind" Creator',
    role: 'Creator & Automation Engineer',
    category: 'media',
    impactMetric: 'React & Remotion Automation',
    description:
      'Designed a programmatic video assembly pipeline; programmed vertical compositions in React using Remotion animating dynamic word highlights synced with script timelines.',
    highlights: [
      'Programmed video compositions using React & Remotion (Video as Code)',
      'Edited educational business-insights videos with Adobe Premiere Pro',
      'Grew "The Informed Mind" brand channel with digital media assets',
    ],
    tags: ['Adobe Premiere Pro', 'React', 'Remotion', 'Canva'],
    youtubeUrl: 'https://youtube.com/@TheInformedMind',
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'ai' | 'cloud' | 'saas' | 'media'>('all');

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-navy-950 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col items-start gap-2">
            <span className="text-xs font-mono font-semibold tracking-wider text-brand-accent uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              02 / Real Work &amp; Systems Built
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Architectural highlight reel across AI engineering, high-availability telemetry stacks, and product development.
            </p>
          </div>

          {/* Filter Pills with Active Highlight Styling */}
          <div className="flex flex-wrap items-center gap-1.5 bg-navy-900 p-1.5 rounded-xl border border-slate-800">
            {[
              { label: 'All Projects', value: 'all' },
              { label: 'AI & RAG', value: 'ai' },
              { label: 'Cloud & K8s', value: 'cloud' },
              { label: 'SaaS & Web', value: 'saas' },
              { label: 'Media Code', value: 'media' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  filter === tab.value
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-navy-850/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid with Smooth Filter Transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="dark-card dark-card-hover rounded-2xl p-6 flex flex-col justify-between relative group overflow-hidden border border-slate-800 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Highlight accent bar for featured */}
              {project.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
              )}

              <div className="space-y-4">
                {/* Header Badge & Impact Metric Tag */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-navy-900 border border-slate-800 text-slate-300">
                    {project.subtitle}
                  </span>

                  {project.impactMetric && (
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {project.impactMetric}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-brand-accent transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-850">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-400 flex items-start gap-1.5">
                      <span className="text-brand-accent font-bold mt-0.5">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Tech tags + Verified Action Links */}
              <div className="pt-6 mt-6 border-t border-slate-850 space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-navy-900 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Verified Action Links */}
                {(project.githubUrl || project.youtubeUrl) && (
                  <div className="flex items-center justify-between pt-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-brand-accent transition-colors"
                      >
                        <Github className="w-4 h-4 text-brand-accent" />
                        <span>View on GitHub</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                    )}

                    {project.youtubeUrl && (
                      <a
                        href={project.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-red-400 transition-colors"
                      >
                        <Youtube className="w-4 h-4 text-red-500" />
                        <span>Watch Channel</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
