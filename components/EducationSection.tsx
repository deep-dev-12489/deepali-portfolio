'use client';

import React from 'react';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { SparkleSticker } from './stickers';

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
    <section id="education" className="py-24 bg-[#F4F9FF] text-[#0F172A] relative border-y border-[#D0E3F7] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-xs font-semibold tracking-wider uppercase border border-[#D0E3F7]">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>05 / Academic Foundation</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Education
            </h2>
            <SparkleSticker size={30} rotate={12} />
          </div>
          <p className="text-[#475569] text-[15px] max-w-xl">
            Business management degrees pairing strategic leadership with technical engineering capabilities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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

      </div>
    </section>
  );
}
