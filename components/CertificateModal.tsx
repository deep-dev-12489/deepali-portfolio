'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Award, ShieldCheck } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateUrl: string;
  title: string;
  issuedTo?: string;
  event?: string;
  date?: string;
  certificateId?: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  certificateUrl,
  title,
  issuedTo = 'Deepali Motwani',
  event = 'HackIndia AI & CyberTech Hackathon 2026',
  date = 'October 28, 2026',
  certificateId = 'HI-2026-E0048-U031689-RDIO',
}: CertificateModalProps) {
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F172A]/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-3xl border border-[#D0E3F7] shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="px-5 py-3.5 bg-gradient-to-r from-[#F0F7FF] to-white border-b border-[#E0F2FE] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#E0F2FE] text-[#0284C7] border border-[#D0E3F7]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#0F172A]">
                    {title}
                  </h3>
                  <p className="text-[11px] text-[#475569] hidden sm:block">
                    {event} &bull; {date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={certificateUrl}
                  download="Deepali-Motwani-HackIndia-Certificate-2026.png"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#E0F2FE] text-[#0284C7] hover:bg-[#38BDF8] hover:text-white transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <a
                  href={certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#F0F7FF] text-[#475569] hover:text-[#0284C7] border border-[#D0E3F7] transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open Full Tab</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full text-[#64748B] hover:text-[#0F172A] hover:bg-[#F0F7FF] transition-all"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Certificate Preview Image */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 bg-[#F8FAFC] flex items-center justify-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D0E3F7] shadow-xl max-w-full">
                <img
                  src={certificateUrl}
                  alt={`${title} - ${issuedTo}`}
                  className="w-full h-auto object-contain max-h-[65vh] rounded-xl"
                  width={1280}
                  height={720}
                />
              </div>
            </div>

            {/* Footer Metadata */}
            <div className="px-5 py-3 bg-white border-t border-[#E0F2FE] flex flex-wrap items-center justify-between gap-3 text-xs text-[#475569]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-[#0F172A]">Verified Credential:</span>
                <span className="font-mono bg-[#F0F7FF] px-2 py-0.5 rounded border border-[#D0E3F7] text-[#0284C7] font-bold">
                  {certificateId}
                </span>
              </div>
              <span className="text-[11px] text-[#64748B]">
                Organized at Kanpur Institute of Technology &bull; Team YUGANTAR
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
