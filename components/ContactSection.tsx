'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Youtube,
  Send,
  CheckCircle2,
  ArrowUp,
  Sparkles,
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:deepalimotwani8@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 bg-navy-950 text-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-accent uppercase">
            06 / Get In Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Me
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Whether you have a technical role, consulting project, AI engineering inquiry, or strategic partnership in mind — drop a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="dark-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-accent" />
                <span>Let's Build Together</span>
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                I am actively seeking roles in AI Engineering, Cloud Infrastructure, Observability Stack Migration, and Technical Consulting.
              </p>

              {/* Direct Info Items */}
              <div className="space-y-4 pt-2">
                
                {/* Email */}
                <a
                  href="mailto:deepalimotwani8@gmail.com"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-navy-900 border border-slate-800 hover:border-brand-accent/60 group transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-navy-850 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                      deepalimotwani8@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+917887236431"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-navy-900 border border-slate-800 hover:border-brand-accent/60 group transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-navy-850 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Phone / WhatsApp
                    </span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                      +91 7887236431
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-navy-900 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-navy-850 text-brand-accent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-slate-200">
                      Kanpur, India
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-850 space-y-3">
                <span className="text-xs font-mono text-slate-400 block">
                  Connect Across Platforms:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com/in/deepali-motwani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-navy-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-brand-accent/40 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-brand-accent" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/deep-dev-12489"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-navy-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-brand-accent/40 transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://youtube.com/@TheInformedMind"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-navy-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-red-400/40 transition-colors"
                  >
                    <Youtube className="w-4 h-4 text-red-500" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Mailto Contact Form */}
          <div className="lg:col-span-7">
            <div className="dark-card p-6 sm:p-8 rounded-2xl border border-slate-800">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Your Name <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Your Email <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent text-sm"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent text-sm"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Message <span className="text-brand-accent">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell me about your project or role details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent text-sm resize-none"
                  />
                </div>

                {/* Submit Button - Reserved Accent #5B9CE8 */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-bright text-white font-heading font-semibold text-sm shadow-lg shadow-blue-500/20 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>

                {submitted && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Your mail client has opened with your message pre-filled!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="mt-20 pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Deepali Motwani logo" className="w-6 h-6" width={24} height={24} />
            <span>&copy; {new Date().getFullYear()} Deepali Motwani. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono">Built with Next.js 14 &amp; Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-navy-900 border border-slate-800 hover:text-white hover:border-brand-accent/40 transition-colors flex items-center gap-1"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 text-brand-accent" />
              <span className="font-mono">Top</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
