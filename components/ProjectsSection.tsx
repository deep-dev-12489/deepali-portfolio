'use client';

import React, { useState } from 'react';
import {
  Github,
  Youtube,
  Sparkles,
  TrendingUp,
  Award,
} from 'lucide-react';
import { GitBranchSticker } from './stickers';
import CertificateModal from './CertificateModal';

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
  certificateUrl?: string;
  certificateTitle?: string;
}

const projects: Project[] = [
  {
    id: 'agentguard',
    title: 'AgentGuard — Zero-Trust AI Agent Action Control Plane',
    subtitle: 'HackIndia AI & CyberTech 2026 · Team YUGANTAR',
    role: 'Frontend & Telemetry Console Lead',
    category: 'ai',
    featured: true,
    impactMetric: 'HackIndia 2026 · KIT Kanpur',
    description:
      'Zero-trust runtime defense architecture intercepting autonomous AI agent tool execution. Prevents indirect prompt injection (OWASP LLM01) via origin-to-action taint tracking and real-time provenance lineage enforcement.',
    highlights: [
      'Lead Developer for Next.js 14 interactive telemetry console & real-time React Flow attack lineage graph',
      'Sub-8ms runtime MCP tool interception separating document reading from tool execution permissions',
      'Engineered human-in-the-loop review queue for high-impact mutations with cryptographic forensic trace',
    ],
    tags: ['Next.js 14', 'React Flow', 'TypeScript', 'Tailwind CSS', 'MCP Protocol', 'FastAPI'],
    githubUrl: 'https://github.com/deep-dev-12489/AgentGuard',
    githubStatus: 'live',
    certificateUrl: '/certificates/hackindia-certificate-2026.png',
    certificateTitle: 'HackIndia AI & CyberTech Hackathon 2026 Certificate',
  },
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
    impactMetric: 'Citation-Verified Proofing',
    description:
      'Multimodal RAG engine for SEC 10-K analysis with citation-verified visual verification using LangChain pipelines with Gemini 3 Flash to verify numerical claims via exact page-level coordinate proofing.',
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
    impactMetric: '95% Lower Observability Cost',
    description:
      'Built kind Kubernetes clusters running vmsingle and vmcluster architecture (vminsert, vmselect, vmstorage); validated pod self-healing, PVC crash recovery, replication node failover.',
    highlights: [
      'Programmed vmauth RBAC boundaries & vmalert evaluation rules',
      'Automated MinIO S3 backup & restore runbooks for telemetry resilience',
      'Benchmarked up to 95% lower infrastructure cost vs commercial SaaS observability',
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
  const [selectedCertificate, setSelectedCertificate] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-white text-[#0F172A] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col items-start gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-xs font-semibold tracking-wider uppercase border border-[#D0E3F7]">
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>02 / Real Work &amp; Systems Built</span>
            </div>
            <div className="flex items-center gap-3">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Featured Projects
              </h2>
              <GitBranchSticker size={36} rotate={-6} />
            </div>
            <p className="text-[#475569] text-[15px] max-w-xl">
              Architectural highlight reel across AI engineering, high-availability telemetry stacks, and product development.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#F0F7FF] p-1.5 rounded-full border border-[#D0E3F7]">
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
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  filter === tab.value
                    ? 'btn-blue-gradient text-white shadow-sm'
                    : 'text-[#475569] hover:text-[#0284C7] hover:bg-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative group overflow-hidden border border-[#D0E3F7] shadow-[0_8px_24px_rgba(2,132,199,0.08)] hover:shadow-[0_16px_36px_rgba(2,132,199,0.16)] hover:border-[#38BDF8] transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Top Accent bar for featured */}
              {project.featured && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#38BDF8] to-[#0284C7]" />
              )}

              <div className="space-y-4">
                {/* Header Badge & Impact Metric Tag */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#F0F7FF] border border-[#D0E3F7] text-[#475569]">
                    {project.subtitle}
                  </span>

                  {project.impactMetric && (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7] border border-[#38BDF8]/40 flex items-center gap-1 shadow-sm">
                      <TrendingUp className="w-3 h-3 text-[#38BDF8]" />
                      {project.impactMetric}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-[#0F172A] group-hover:text-[#0284C7] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#334155] text-[14px] leading-relaxed">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-1.5 pt-3 border-t border-[#E0F2FE]">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="text-[14px] text-[#475569] flex items-start gap-2 leading-relaxed">
                      <span className="text-[#0284C7] font-bold mt-0.5">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Tech tags + Verified Action Links */}
              <div className="pt-6 mt-6 border-t border-[#E0F2FE] space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#F0F7FF] text-[#334155] border border-[#D0E3F7]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center flex-wrap gap-2.5 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#D0E3F7] bg-[#F0F7FF] text-[#0F172A] hover:border-[#38BDF8] hover:text-[#0284C7] hover:bg-white transition-all shadow-sm"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View on GitHub</span>
                    </a>
                  )}

                  {project.certificateUrl && (
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCertificate({
                          url: project.certificateUrl!,
                          title: project.certificateTitle || 'Certificate of Participation',
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100 hover:border-amber-400 transition-all shadow-sm"
                    >
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      <span>View Certificate</span>
                    </button>
                  )}

                  {project.youtubeUrl && (
                    <a
                      href={project.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#D0E3F7] bg-[#E0F2FE] text-[#0284C7] hover:border-[#38BDF8] hover:bg-white transition-all shadow-sm"
                    >
                      <Youtube className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Watch Channel</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCertificate && (
        <CertificateModal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          certificateUrl={selectedCertificate.url}
          title={selectedCertificate.title}
          event="HackIndia AI & CyberTech Hackathon 2026"
          date="October 28, 2026"
          certificateId="HI-2026-E0048-U031689-RDIO"
        />
      )}
    </section>
  );
}
