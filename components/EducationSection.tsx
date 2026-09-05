'use client';

import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

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
  return (
    <section id="education" className="py-24 bg-slate-50 text-slate-900 relative border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-accent uppercase">
            05 / Academic Foundation
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education
          </h2>
          <p className="text-slate-600 text-sm max-w-xl">
            Business management degrees pairing strategic leadership with technical engineering capabilities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-accent/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-accent shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border ${
                    edu.status === 'In Progress'
                      ? 'bg-blue-50 text-brand-accent border-blue-200 font-semibold'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold'
                  }`}>
                    {edu.status}
                  </span>
                </div>

                {/* Degree & Inst */}
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-semibold text-brand-accent mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </p>
                </div>

                {/* Focus Area */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wide">
                    Specialization Focus:
                  </span>
                  <p className="text-sm font-semibold text-slate-800">
                    {edu.focus}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 pt-2 text-xs text-slate-600">
                  {edu.details.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-brand-accent font-bold">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline Footer */}
              <div className="pt-6 mt-6 border-t border-slate-150 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-accent" />
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
