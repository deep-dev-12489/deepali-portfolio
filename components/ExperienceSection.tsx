'use client';

import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

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
    role: 'AI & Cloud Infrastructure Engineer',
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
    <section id="experience" className="py-24 bg-navy-950 text-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-accent uppercase">
            04 / Career Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Track record across cloud infrastructure engineering, partnership growth, CRM management, and web development.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Bullet Node */}
              <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-navy-950 border-2 ${
                exp.isCurrent ? 'border-emerald-400 bg-emerald-400' : 'border-brand-accent'
              } group-hover:scale-125 transition-all duration-200`} />

              {/* Experience Card */}
              <div className={`dark-card dark-card-hover p-6 sm:p-8 rounded-2xl border ${
                exp.isCurrent ? 'border-emerald-500/40 shadow-lg shadow-emerald-500/5' : 'border-slate-800'
              } space-y-4`}>
                
                {/* Header: Role & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-850">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-heading text-xl font-bold text-white group-hover:text-brand-accent transition-colors">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          Current Role
                        </span>
                      )}
                    </div>
                    <p className="text-base font-medium text-slate-300 flex items-center gap-2 mt-0.5">
                      <Briefcase className="w-4 h-4 text-brand-accent" />
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-brand-accent bg-navy-900 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period} ({exp.duration})</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 pt-2">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm text-slate-300 leading-relaxed flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="pt-4 flex flex-wrap gap-1.5 border-t border-slate-850">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-navy-900 text-slate-300 border border-slate-800"
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
