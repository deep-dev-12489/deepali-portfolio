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
import { ConnectSticker, SparkleSticker } from './stickers';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (err: any) {
      console.warn('API route failed, falling back to mailto:', err);
      const mailtoSubject = encodeURIComponent(
        formData.subject || `Portfolio Contact from ${formData.name}`
      );
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:contact@deepalimotwani.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 bg-white text-[#0F172A] relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-xs font-semibold tracking-wider uppercase border border-[#D0E3F7]">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>06 / Get In Touch</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Contact Me
            </h2>
            <SparkleSticker size={32} rotate={-10} />
          </div>
          <p className="text-[#475569] text-[15px] max-w-xl">
            Whether you have a technical role, consulting project, AI engineering inquiry, or strategic partnership in mind — drop a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D0E3F7] shadow-[0_8px_24px_rgba(2,132,199,0.08)] space-y-6 relative overflow-hidden">
              
              {/* Cute Footer Sticker */}
              <div className="absolute top-4 right-4">
                <ConnectSticker size={48} rotate={6} />
              </div>

              <h3 className="font-heading text-xl font-bold text-[#0F172A] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#0284C7]" />
                <span>Let's Build Together</span>
              </h3>
              
              <p className="text-[#334155] text-[14px] leading-relaxed max-w-xs sm:max-w-none">
                I am actively seeking roles in AI Engineering, Cloud Infrastructure, Observability Stack Migration, and Technical Consulting.
              </p>

              {/* Direct Info Items */}
              <div className="space-y-3.5 pt-2">
                
                {/* Email */}
                <a
                  href="mailto:contact@deepalimotwani.com"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0F7FF] border border-[#D0E3F7] hover:border-[#38BDF8] hover:bg-[#E0F2FE]/40 group transition-all"
                >
                  <div className="p-2.5 rounded-xl bg-white text-[#0284C7] border border-[#D0E3F7] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-[#0284C7]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block">
                      Email Address
                    </span>
                    <span className="text-[14px] font-bold text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                      contact@deepalimotwani.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+917887236431"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0F7FF] border border-[#D0E3F7] hover:border-[#38BDF8] hover:bg-[#E0F2FE]/40 group transition-all"
                >
                  <div className="p-2.5 rounded-xl bg-white text-[#0284C7] border border-[#D0E3F7] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-[#0284C7]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block">
                      Phone / WhatsApp
                    </span>
                    <span className="text-[14px] font-bold text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                      +91 7887236431
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0F7FF] border border-[#D0E3F7]">
                  <div className="p-2.5 rounded-xl bg-white text-[#0284C7] border border-[#D0E3F7]">
                    <MapPin className="w-5 h-5 text-[#0284C7]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-[14px] font-bold text-[#0F172A]">
                      Kanpur, India
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#E0F2FE] space-y-3">
                <span className="text-xs font-semibold text-[#64748B] block">
                  Connect Across Platforms:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com/in/deepali-motwani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F0F7FF] border border-[#D0E3F7] text-xs font-semibold text-[#0F172A] hover:text-[#0284C7] hover:border-[#38BDF8] transition-all hover:scale-105"
                  >
                    <Linkedin className="w-4 h-4 text-[#0284C7]" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/deep-dev-12489"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F0F7FF] border border-[#D0E3F7] text-xs font-semibold text-[#0F172A] hover:text-[#0284C7] hover:border-[#38BDF8] transition-all hover:scale-105"
                  >
                    <Github className="w-4 h-4 text-[#0F172A]" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://youtube.com/@TheInformedMind"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F0F7FF] border border-[#D0E3F7] text-xs font-semibold text-[#0F172A] hover:text-[#0284C7] hover:border-[#38BDF8] transition-all hover:scale-105"
                  >
                    <Youtube className="w-4 h-4 text-[#0284C7]" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D0E3F7] shadow-[0_8px_24px_rgba(2,132,199,0.08)]">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#0F172A] block">
                      Your Name <span className="text-[#0284C7]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F0F7FF] border border-[#D0E3F7] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0284C7] focus:bg-white text-[14px] transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#0F172A] block">
                      Your Email <span className="text-[#0284C7]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F0F7FF] border border-[#D0E3F7] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0284C7] focus:bg-white text-[14px] transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0F172A] block">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F0F7FF] border border-[#D0E3F7] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0284C7] focus:bg-white text-[14px] transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0F172A] block">
                    Message <span className="text-[#0284C7]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell me about your project or role details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F0F7FF] border border-[#D0E3F7] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0284C7] focus:bg-white text-[14px] resize-none transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full btn-blue-gradient disabled:opacity-50 disabled:cursor-not-allowed font-heading font-bold text-sm tracking-wide shadow-[0_8px_20px_rgba(2,132,199,0.25)]"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>{loading ? 'Sending Message...' : 'Send Message ✨'}</span>
                </button>

                {submitted && (
                  <div className="p-4 rounded-2xl bg-[#E0F2FE] border border-[#0284C7]/40 text-[#0284C7] text-xs flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#0284C7]" />
                    <span>Thank you! Your message was sent directly to Deepali.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="mt-20 pt-8 border-t border-[#E0F2FE] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="flex items-center gap-2 font-medium">
            <img src="/logo.svg" alt="Deepali Motwani logo" className="w-6 h-6" width={24} height={24} />
            <span>&copy; {new Date().getFullYear()} Deepali Motwani. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-semibold text-[#0284C7] flex items-center gap-1">
              Built for Cloud &amp; AI &bull; Next.js 14
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#F0F7FF] border border-[#D0E3F7] hover:text-[#0284C7] hover:border-[#38BDF8] hover:bg-[#E0F2FE] transition-all flex items-center gap-1 shadow-sm"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#0284C7]" />
              <span className="font-semibold">Top</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
