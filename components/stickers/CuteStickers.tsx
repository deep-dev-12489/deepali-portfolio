'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StickerProps {
  className?: string;
  size?: number;
  rotate?: number;
  floatDelay?: number;
  animate?: boolean;
}

/**
 * 1. Cloud Stack Sticker (Cloud Infrastructure / AWS / Azure / S3)
 */
export function CloudStackSticker({
  className = '',
  size = 46,
  rotate = -6,
  floatDelay = 0.2,
  animate = true,
}: StickerProps) {
  const content = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_6px_14px_rgba(2,132,199,0.22)] select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* White Sticker Outline */}
      <path
        d="M17 38H41C46.5 38 51 33.5 51 28C51 22.8 47.2 18.5 42.2 18C41.2 11.2 35.4 6 28.5 6C22.6 6 17.6 9.8 15.8 15.2C10.8 15.8 7 20 7 25C7 32 11.5 38 17 38Z"
        fill="white"
        stroke="white"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Cloud Body */}
      <path
        d="M17 36H41C45.5 36 49 32.5 49 28C49 23.8 45.8 20.2 41.5 19.8C40.5 13.5 35.1 9 28.5 9C23 9 18.2 12.5 16.5 17.5C12.2 18 9 21.6 9 26C9 31.5 12.8 36 17 36Z"
        fill="url(#cloud-tech-grad)"
      />
      {/* Tech Server Stack Lines Inside Cloud */}
      <rect x="22" y="21" width="13" height="3" rx="1.5" fill="#0284C7" />
      <circle cx="32" cy="22.5" r="0.75" fill="#38BDF8" />
      <rect x="20" y="26" width="17" height="3" rx="1.5" fill="#0078D4" />
      <circle cx="34" cy="27.5" r="0.75" fill="#38BDF8" />
      <defs>
        <linearGradient id="cloud-tech-grad" x1="9" y1="9" x2="49" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.6" stopColor="#F0F9FF" />
          <stop offset="1" stopColor="#E0F2FE" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (!animate) {
    return <div style={{ transform: `rotate(${rotate}deg)` }} className={`inline-block ${className}`}>{content}</div>;
  }

  return (
    <motion.div
      initial={{ rotate }}
      animate={{
        y: [0, -6, 0],
        rotate: [rotate, rotate + 4, rotate],
      }}
      transition={{
        duration: 3.8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: floatDelay,
      }}
      className={`inline-block ${className}`}
    >
      {content}
    </motion.div>
  );
}

/**
 * 2. Terminal Prompt Sticker (CLI / Bash / kubectl)
 */
export function TerminalSticker({
  className = '',
  size = 42,
  rotate = 8,
  floatDelay = 0.5,
  animate = true,
}: StickerProps) {
  const content = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_6px_14px_rgba(2,132,199,0.20)] select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* White Sticker Outline */}
      <rect x="4" y="4" width="42" height="34" rx="8" fill="white" stroke="white" strokeWidth="6" strokeLinejoin="round" />
      {/* Terminal Window */}
      <rect x="4" y="4" width="42" height="34" rx="7" fill="#0F172A" />
      {/* Header Bar */}
      <path d="M4 11C4 7 7 4 11 4H39C43 4 46 7 46 11V14H4V11Z" fill="#1E293B" />
      <circle cx="9" cy="9" r="1.5" fill="#EF4444" />
      <circle cx="14" cy="9" r="1.5" fill="#F59E0B" />
      <circle cx="19" cy="9" r="1.5" fill="#10B981" />
      {/* Prompt Symbol >_ */}
      <path d="M10 20L15 24L10 28" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="18" y1="28" x2="28" y2="28" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="34" cy="24" r="1.5" fill="#38BDF8" opacity="0.8" />
    </svg>
  );

  if (!animate) {
    return <div style={{ transform: `rotate(${rotate}deg)` }} className={`inline-block ${className}`}>{content}</div>;
  }

  return (
    <motion.div
      initial={{ rotate }}
      animate={{
        y: [0, -7, 0],
        rotate: [rotate, rotate - 3, rotate],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: floatDelay,
      }}
      className={`inline-block ${className}`}
    >
      {content}
    </motion.div>
  );
}

/**
 * 3. CPU Chip Sticker (Generative AI / Processing / Silicon)
 */
export function CpuChipSticker({
  className = '',
  size = 40,
  rotate = -6,
  floatDelay = 0.8,
  animate = true,
}: StickerProps) {
  const content = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_6px_14px_rgba(2,132,199,0.22)] select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* White Sticker Outline */}
      <rect x="10" y="10" width="28" height="28" rx="6" fill="white" stroke="white" strokeWidth="6" strokeLinejoin="round" />
      {/* Pins around */}
      <g stroke="white" strokeWidth="5" strokeLinecap="round">
        <line x1="16" y1="5" x2="16" y2="10" />
        <line x1="24" y1="5" x2="24" y2="10" />
        <line x1="32" y1="5" x2="32" y2="10" />
        <line x1="16" y1="38" x2="16" y2="43" />
        <line x1="24" y1="38" x2="24" y2="43" />
        <line x1="32" y1="38" x2="32" y2="43" />
        <line x1="5" y1="16" x2="10" y2="16" />
        <line x1="5" y1="24" x2="10" y2="24" />
        <line x1="5" y1="32" x2="10" y2="32" />
        <line x1="38" y1="16" x2="43" y2="16" />
        <line x1="38" y1="24" x2="43" y2="24" />
        <line x1="38" y1="32" x2="43" y2="32" />
      </g>
      {/* Chip Pins Blue */}
      <g stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round">
        <line x1="16" y1="6" x2="16" y2="10" />
        <line x1="24" y1="6" x2="24" y2="10" />
        <line x1="32" y1="6" x2="32" y2="10" />
        <line x1="16" y1="38" x2="16" y2="42" />
        <line x1="24" y1="38" x2="24" y2="42" />
        <line x1="32" y1="38" x2="32" y2="42" />
        <line x1="6" y1="16" x2="10" y2="16" />
        <line x1="6" y1="24" x2="10" y2="24" />
        <line x1="6" y1="32" x2="10" y2="32" />
        <line x1="38" y1="16" x2="42" y2="16" />
        <line x1="38" y1="24" x2="42" y2="24" />
        <line x1="38" y1="32" x2="42" y2="32" />
      </g>
      {/* Chip Body */}
      <rect x="10" y="10" width="28" height="28" rx="5" fill="#E0F2FE" stroke="#0078D4" strokeWidth="2" />
      {/* Core Center Die */}
      <rect x="16" y="16" width="16" height="16" rx="3" fill="#0078D4" />
      <text x="24" y="27" textAnchor="middle" fill="white" fontSize="9" fontWeight="800" fontFamily="sans-serif">AI</text>
    </svg>
  );

  if (!animate) {
    return <div style={{ transform: `rotate(${rotate}deg)` }} className={`inline-block ${className}`}>{content}</div>;
  }

  return (
    <motion.div
      initial={{ rotate }}
      animate={{
        y: [0, -6, 0],
        rotate: [rotate, rotate + 4, rotate],
      }}
      transition={{
        duration: 3.6,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: floatDelay,
      }}
      className={`inline-block ${className}`}
    >
      {content}
    </motion.div>
  );
}

/**
 * 4. Kubernetes Helm Steering Wheel Sticker
 */
export function HelmWheelSticker({
  className = '',
  size = 38,
  rotate = 6,
}: StickerProps) {
  return (
    <div style={{ transform: `rotate(${rotate}deg)` }} className={`inline-block ${className} select-none pointer-events-none`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_4px_10px_rgba(2,132,199,0.22)]"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="20" fill="white" stroke="white" strokeWidth="6" />
        <circle cx="24" cy="24" r="18" fill="#E0F2FE" stroke="#0284C7" strokeWidth="3" />
        <circle cx="24" cy="24" r="9" fill="white" stroke="#0078D4" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="3.5" fill="#38BDF8" />
        <line x1="24" y1="6" x2="24" y2="15" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="33" x2="24" y2="42" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="8.4" y1="15" x2="16.2" y2="19.5" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="31.8" y1="28.5" x2="39.6" y2="33" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="8.4" y1="33" x2="16.2" y2="28.5" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="31.8" y1="19.5" x2="39.6" y2="15" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/**
 * 5. Database Cylinder Sticker (Storage / VictoriaMetrics / ChromaDB / S3)
 */
export function DatabaseSticker({
  className = '',
  size = 38,
  rotate = -8,
}: StickerProps) {
  return (
    <div style={{ transform: `rotate(${rotate}deg)` }} className={`inline-block ${className} select-none pointer-events-none`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 46 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_4px_12px_rgba(2,132,199,0.20)]"
        aria-hidden="true"
      >
        {/* White Outline */}
        <path
          d="M7 11C7 6.5 14 3 23 3C32 3 39 6.5 39 11V37C39 41.5 32 45 23 45C14 45 7 41.5 7 37V11Z"
          fill="white"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        {/* Cylinder Body */}
        <path d="M7 11V37C7 41 14 44 23 44C32 44 39 41 39 37V11" fill="#E0F2FE" />
        <ellipse cx="23" cy="11" rx="16" ry="6.5" fill="#38BDF8" stroke="#0078D4" strokeWidth="2" />
        {/* Disc Layer 1 */}
        <path d="M7 22C7 26 14 29 23 29C32 29 39 26 39 22" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="24" r="1.5" fill="#0078D4" />
        {/* Disc Layer 2 */}
        <path d="M7 32C7 36 14 39 23 39C32 39 39 36 39 32" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="34" r="1.5" fill="#0078D4" />
      </svg>
    </div>
  );
}

/**
 * 6. Git Branch Sticker (Version Control / CI/CD)
 */
export function GitBranchSticker({
  className = '',
  size = 38,
  rotate = 6,
}: StickerProps) {
  return (
    <div style={{ transform: `rotate(${rotate}deg)` }} className={`inline-block ${className} select-none pointer-events-none`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_4px_10px_rgba(2,132,199,0.20)]"
        aria-hidden="true"
      >
        <rect x="6" y="6" width="34" height="34" rx="10" fill="white" stroke="white" strokeWidth="6" strokeLinejoin="round" />
        <rect x="6" y="6" width="34" height="34" rx="8" fill="#F0F7FF" stroke="#D0E3F7" strokeWidth="1.5" />
        {/* Branch Lines */}
        <line x1="16" y1="12" x2="16" y2="34" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 26C20 26 28 24 28 18" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
        {/* Commit Nodes */}
        <circle cx="16" cy="14" r="3.5" fill="white" stroke="#0078D4" strokeWidth="2" />
        <circle cx="16" cy="32" r="3.5" fill="white" stroke="#0078D4" strokeWidth="2" />
        <circle cx="28" cy="16" r="3.5" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" />
      </svg>
    </div>
  );
}

/**
 * 7. Security Shield Sticker (Disaster Recovery / Zero Trust / IAM)
 */
export function ShieldSecuritySticker({
  className = '',
  size = 38,
  rotate = -6,
}: StickerProps) {
  return (
    <div style={{ transform: `rotate(${rotate}deg)` }} className={`inline-block ${className} select-none pointer-events-none`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 46 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_4px_12px_rgba(2,132,199,0.22)]"
        aria-hidden="true"
      >
        {/* White Outline */}
        <path
          d="M23 4L8 10V22C8 32 14.5 41 23 44C31.5 41 38 32 38 22V10L23 4Z"
          fill="white"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        {/* Shield Body */}
        <path
          d="M23 5L9 11V22C9 31.5 15.2 40 23 43C30.8 40 37 31.5 37 22V11L23 5Z"
          fill="url(#shield-grad)"
        />
        {/* Verified Checkmark */}
        <path d="M17 23L21 27L29 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="shield-grad" x1="9" y1="5" x2="37" y2="43" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#0078D4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * 8. Laptop Sticker (Developer Workstation)
 */
export function LaptopSticker({
  className = '',
  size = 42,
  rotate = 10,
  floatDelay = 1,
  animate = true,
}: StickerProps) {
  const content = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 54 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_6px_14px_rgba(2,132,199,0.20)] select-none pointer-events-none"
      aria-hidden="true"
    >
      <rect x="7" y="6" width="40" height="26" rx="4" fill="white" stroke="white" strokeWidth="6" strokeLinejoin="round" />
      <path d="M3 36C3 33.5 5.5 32 8 32H46C48.5 32 51 33.5 51 36L52 38C52 40 50 41 48 41H6C4 41 2 40 2 38L3 36Z" fill="white" stroke="white" strokeWidth="5" strokeLinejoin="round" />
      <rect x="9" y="8" width="36" height="22" rx="2.5" fill="#0F172A" />
      <rect x="11" y="10" width="32" height="18" rx="1.5" fill="#F0F7FF" />
      <path d="M14 15L17 17.5L14 20" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="20" y1="17.5" x2="30" y2="17.5" stroke="#0078D4" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="36" cy="23" r="1.5" fill="#38BDF8" />
      <path d="M4 35C4 33.5 6 32 8 32H46C48 32 50 33.5 50 35L51 38H3L4 35Z" fill="#E0F2FE" />
      <rect x="23" y="34" width="8" height="3" rx="1" fill="#BAE6FD" />
    </svg>
  );

  if (!animate) {
    return <div style={{ transform: `rotate(${rotate}deg)` }} className={`inline-block ${className}`}>{content}</div>;
  }

  return (
    <motion.div
      initial={{ rotate }}
      animate={{
        y: [0, -7, 0],
        rotate: [rotate, rotate - 4, rotate],
      }}
      transition={{
        duration: 4.2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: floatDelay,
      }}
      className={`inline-block ${className}`}
    >
      {content}
    </motion.div>
  );
}

/**
 * 9. Tech Sparkle Sticker
 */
export function SparkleSticker({
  className = '',
  size = 32,
  rotate = 6,
  floatDelay = 0,
  animate = true,
}: StickerProps) {
  const content = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_4px_10px_rgba(2,132,199,0.22)] select-none pointer-events-none"
      aria-hidden="true"
    >
      <path
        d="M24 2C24 14 34 24 46 24C34 24 24 34 24 46C24 34 14 24 2 24C14 24 24 14 24 2Z"
        fill="white"
        stroke="white"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M24 4C24 15 33 24 44 24C33 24 24 33 24 44C24 33 15 24 4 24C15 24 24 15 24 4Z"
        fill="url(#sparkle-tech-grad)"
      />
      <circle cx="24" cy="24" r="3.5" fill="#FFFFFF" />
      <defs>
        <linearGradient id="sparkle-tech-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7DD3FC" />
          <stop offset="0.5" stopColor="#38BDF8" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (!animate) {
    return <div style={{ transform: `rotate(${rotate}deg)` }} className={`inline-block ${className}`}>{content}</div>;
  }

  return (
    <motion.div
      initial={{ rotate }}
      animate={{
        y: [0, -6, 0],
        rotate: [rotate, rotate - 4, rotate],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: floatDelay,
      }}
      className={`inline-block ${className}`}
    >
      {content}
    </motion.div>
  );
}

/**
 * 10. Let's Connect Network Sticker (Footer)
 */
export function ConnectSticker({
  className = '',
  size = 56,
  rotate = 4,
}: StickerProps) {
  return (
    <div style={{ transform: `rotate(${rotate}deg)` }} className={`inline-block ${className} select-none pointer-events-none`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_6px_14px_rgba(2,132,199,0.22)]"
        aria-hidden="true"
      >
        <rect x="8" y="10" width="48" height="44" rx="12" fill="white" stroke="white" strokeWidth="6" strokeLinejoin="round" />
        <rect x="8" y="10" width="48" height="44" rx="10" fill="#F0F7FF" stroke="#D0E3F7" strokeWidth="1.5" />
        <rect x="14" y="22" width="36" height="24" rx="4" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" />
        <path d="M14 24L32 36L50 24" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="17" r="3.5" fill="#38BDF8" />
        <path d="M32 12V14M32 20V22M27 17H29M35 17H37" stroke="#0078D4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
