'use client';

import React from 'react';
import { Briefcase, Calendar, Sparkles } from 'lucide-react';
import { LaptopSticker } from './stickers';

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  location?: string;
  bullets: string[];
  skills: string[];
  isCurrent?: boolean;
}

const experiences: Experience[] = [
  {
    id: 'rankaltus',
    role: 'Software Engineer (Cloud & AI) | Web Developer',
    company: 'Rankaltus.com',
    period: 'Nov 2025 – Present',
    duration: 'Current Role',
    isCurrent: true,
    bullets: [
      'Contributed to AI-driven cloud infrastructure initiatives, applying Kubernetes and observability practices to support scalable, reliable systems.',
      'Worked on Generative AI and RAG-based engineering tasks, leveraging LangChain/LangGraph pipelines and Gemini API integrations.',
      'Supported infrastructure reliability and monitoring efforts consistent with prior VictoriaMetrics/Kubernetes systems experience.',
      'Collaborated cross-functionally to align technical infrastructure work with broader project and business goals.',
    ],
    skills: ['Kubernetes', 'AI Engineering', 'RAG Pipelines', 'LangChain', 'LangGraph', 'Gemini API'],
  },
  {
    id: 'grovyn',
    role: 'Growth & Partnerships Associate (Intern)',
    company: 'Grovyn',
    period: 'Jan 2026 – Mar 2026',
    duration: '3 Mos',
    bullets: [
      'Executed B2B strategic outreach campaigns and targeted lead generation workflows to expand partnership network.',
      'Fostered high-value relationship building and brand positioning with prospective key partners.',
    ],
    skills: ['Partnership Management', 'B2B Outreach', 'Lead Generation', 'Communication Strategy'],
  },
  {
    id: 'webixy',
    role: 'Customer Relationship Management (CRM) Manager',
    company: 'Webixy Technologies Private Limited',
    period: 'Feb 2025 – Oct 2025',
    duration: '9 Mos',
    bullets: [
      'Spearheaded CRM strategy, customer lifecycle retention workflows, and client relationship management.',
      'Orchestrated technical communication channels between internal engineering teams and key business stakeholders.',
      'Streamlined client onboarding pipelines and issue resolution turnarounds.',
    ],
    skills: ['CRM Strategy', 'Stakeholder Management', 'Client Relations', 'Process Optimization'],
  },
  {
    id: 'freelance',
    role: 'Freelance WordPress Developer & Web Designer',
    company: 'Independent Contracting',
    period: 'Ongoing Contracting',
    duration: 'Freelance',
    bullets: [
      'Designed and developed custom web platforms including Happynest.com and Kanupriya.net.',
      'Leveraged WordPress, Elementor Pro, custom CSS, and responsive UX design principles.',
      'Implemented technical SEO optimizations, page speed enhancements, and security protocols.',
    ],
    skills: ['WordPress', 'Elementor Pro', 'Web Design', 'SEO Optimization', 'Client Delivery'],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-white text-[#0F172A] relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-xs font-semibold tracking-wider uppercase border border-[#D0E3F7]">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>04 / Career Journey</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Professional Experience
            </h2>
            <LaptopSticker size={36} rotate={-8} />
          </div>
          <p className="text-[#475569] text-[15px] max-w-xl">
            Track record across cloud infrastructure engineering, partnership growth, CRM management, and web development.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-[#D0E3F7] ml-4 sm:ml-8 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Bullet Node */}
              <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                exp.isCurrent
                  ? 'border-[#0284C7] bg-[#38BDF8] ring-4 ring-[#E0F2FE]'
                  : 'border-[#0284C7] bg-white group-hover:bg-[#0284C7]'
              } group-hover:scale-125`} />

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#D0E3F7] shadow-[0_6px_20px_rgba(2,132,199,0.06)] hover:shadow-[0_12px_28px_rgba(2,132,199,0.14)] hover:border-[#38BDF8] transition-all duration-300">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-[#0284C7] mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F0F7FF] border border-[#D0E3F7] text-[#475569] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>{exp.period}</span>
                    </span>
                    {exp.isCurrent && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] border border-[#38BDF8]/40 animate-pulse">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-5">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-[14px] text-[#334155] flex items-start gap-2.5 leading-relaxed">
                      <span className="text-[#0284C7] font-bold mt-0.5">&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E0F2FE]">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#F0F7FF] text-[#334155] border border-[#D0E3F7]"
                    >
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
