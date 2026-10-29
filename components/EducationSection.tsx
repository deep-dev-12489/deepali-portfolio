'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  MapPin,
  Sparkles,
  Award,
  ExternalLink,
  ShieldCheck,
  Github,
} from 'lucide-react';
import { SparkleSticker } from './stickers';
import CertificateModal from './CertificateModal';

interface Education {
  degree: string;
  institution: string;
  focus: string;
  period: string;
  location: string;
  status: string;
  details: string[];
}

const educationList: Education[] = [
  {
    degree: 'Master of Business Administration (MBA)',
    institution: 'Chhatrapati Shahu Ji Maharaj University',
    focus: 'International Business, Trade & Commerce',
    period: 'May 2025 – Jun 2027 (Expected)',
    location: 'Kanpur, India',
    status: 'In Progress',
    details: [
      'Focusing on global market strategy, international trade frameworks, and business operations.',
      'Integrating advanced analytics and digital media automation with corporate management.',
    ],
  },
  {
    degree: 'Bachelor of Business Administration (BBA)',
    institution: 'Dr. Virendra Swarup Institute of Computer Studies',
    focus: 'Marketing & Digital Communication',
    period: 'Dec 2022 – Dec 2025',
    location: 'Kanpur, India',
    status: 'Completed',
    details: [
      'Comprehensive specialization in strategic marketing, consumer behavior, and brand management.',
      'Led student tech-business initiatives and digital strategy projects.',
    ],
  },
];

export default function EducationSection() {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  return (
    <section id="education" className="py-24 bg-[#F4F9FF] text-[#0F172A] relative border-y border-[#D0E3F7] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-xs font-semibold tracking-wider uppercase border border-[#D0E3F7]">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>05 / Academic &amp; Hackathon Credentials</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Education &amp; Certifications
            </h2>
            <SparkleSticker size={30} rotate={12} />
          </div>
          <p className="text-[#475569] text-[15px] max-w-xl">
            Business management degrees and national-level hackathon engineering achievements.
          </p>
        </div>

        {/* Academic Degrees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D0E3F7] shadow-[0_6px_20px_rgba(2,132,199,0.06)] hover:shadow-[0_12px_28px_rgba(2,132,199,0.14)] hover:border-[#38BDF8] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 rounded-2xl bg-[#E0F2FE] border border-[#D0E3F7] text-[#0284C7] shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    edu.status === 'In Progress'
                      ? 'bg-[#E0F2FE] text-[#0284C7] border-[#38BDF8]/40'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}>
                    {edu.status}
                  </span>
                </div>

                {/* Degree & Inst */}
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#0F172A] leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-bold text-[#0284C7] mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[#475569] flex items-center gap-1.5 mt-1 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>{edu.location}</span>
                  </p>
                </div>

                {/* Focus Area */}
                <div className="p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#D0E3F7] space-y-1">
                  <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wide">
                    Specialization Focus:
                  </span>
                  <p className="text-[14px] font-semibold text-[#0F172A]">
                    {edu.focus}
                  </p>
                </div>

                {/* Details */}
                <ul className="space-y-1.5 pt-2">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-[14px] text-[#334155] flex items-start gap-2 leading-relaxed">
                      <span className="text-[#38BDF8] font-bold mt-0.5">&bull;</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Period */}
              <div className="pt-4 mt-4 border-t border-[#E0F2FE] flex items-center justify-between text-xs text-[#475569]">
                <span className="font-medium">Academic Duration:</span>
                <span className="font-semibold text-[#0284C7]">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Hackathon Achievement & Certificate Showcase Card */}
        <div className="p-6 sm:p-9 rounded-3xl bg-gradient-to-br from-white via-[#F0F7FF] to-white border-2 border-[#38BDF8]/60 shadow-[0_12px_32px_rgba(2,132,199,0.12)] relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#38BDF8]/10 blur-[90px] rounded-full pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#38BDF8]/40 shadow-sm">
                  <Award className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>National Hackathon &bull; Participant 2026</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Team YUGANTAR</span>
                </span>
              </div>

              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight">
                  HackIndia AI &amp; CyberTech Hackathon 2026
                </h3>
                <p className="text-sm font-semibold text-[#0284C7] mt-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>Kanpur Institute of Technology, Kanpur, Uttar Pradesh &bull; Issued Oct 28, 2026</span>
                </p>
              </div>

              <p className="text-[#334155] text-[14px] sm:text-[15px] leading-relaxed">
                Actively competed as <strong className="text-[#0284C7]">Frontend &amp; Telemetry Console Lead Developer</strong> for <strong className="text-[#0F172A]">AgentGuard</strong> — building a zero-trust runtime action control plane that intercepts autonomous AI agent tool execution to prevent indirect prompt injection attacks (OWASP LLM01) using Next.js 14, React Flow, and MCP gateway interception.
              </p>

              {/* Verified Metadata Row */}
              <div className="p-3.5 rounded-2xl bg-white border border-[#D0E3F7] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[11px] font-semibold text-[#64748B] block uppercase tracking-wider">
                    Official Certificate ID
                  </span>
                  <span className="font-mono font-bold text-[#0284C7] text-sm">
                    HI-2026-E0048-U031689-RDIO
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#64748B] block uppercase tracking-wider">
                    Project Built
                  </span>
                  <span className="font-semibold text-[#0F172A]">
                    AgentGuard (Zero-Trust Action Control Plane)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCertModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-blue-gradient text-white text-xs font-bold shadow-md shadow-sky-500/25 transition-all hover:scale-105"
                >
                  <Award className="w-4 h-4" />
                  <span>View Full Certificate ✨</span>
                </button>

                <a
                  href="https://github.com/deep-dev-12489/AgentGuard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#E0F2FE] border border-[#D0E3F7] text-[#0F172A] hover:text-[#0284C7] hover:border-[#38BDF8] text-xs font-semibold shadow-sm transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View AgentGuard Code</span>
                  <ExternalLink className="w-3 h-3 text-[#64748B]" />
                </a>
              </div>
            </div>

            {/* Right Column: Certificate Preview Card */}
            <div className="lg:col-span-5 flex justify-center">
              <button
                type="button"
                onClick={() => setIsCertModalOpen(true)}
                className="group relative rounded-2xl overflow-hidden border-2 border-[#D0E3F7] hover:border-[#0284C7] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-left w-full max-w-md bg-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                aria-label="Click to enlarge HackIndia certificate"
              >
                <img
                  src="/certificates/hackindia-certificate-2026.png"
                  alt="Deepali Motwani - HackIndia AI & CyberTech Hackathon 2026 Certificate"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  width={640}
                  height={360}
                />
                
                {/* Overlay Hover Prompt */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#0284C7] text-xs font-bold shadow-lg">
                    <Award className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>Click to Zoom &amp; Download</span>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Certificate Lightbox Modal */}
      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        certificateUrl="/certificates/hackindia-certificate-2026.png"
        title="HackIndia AI &amp; CyberTech Hackathon 2026 Certificate"
        issuedTo="Deepali Motwani"
        event="HackIndia AI &amp; CyberTech Hackathon 2026"
        date="October 28, 2026"
        certificateId="HI-2026-E0048-U031689-RDIO"
      />
    </section>
  );
}
