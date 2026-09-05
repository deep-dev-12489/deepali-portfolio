import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070C1B', // Dark section background
          900: '#0B132B', // Main dark container
          850: '#0F1E42', // Dark card surface
          800: '#1A2A50', // Dark border
          700: '#263D70',
        },
        lightsection: {
          50: '#F8FAFC',  // Subtle light blue-gray background
          100: '#F1F5F9', // Light section card surface
          200: '#E2E8F0', // Border in light section
          900: '#0F172A', // Dark text on light background
        },
        brand: {
          accent: '#3B82F6', // Primary vibrant blue (blue-500)
          cyan: '#22D3EE',   // Bright cyan hover/highlight accent (cyan-400)
          bright: '#2563EB', // Deep action blue
          glow: '#60A5FA',   // Soft glow accent
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        heading: ['var(--font-heading)', 'Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glow-accent': '0 0 25px -5px rgba(59, 130, 246, 0.35)',
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.4)',
        'glow-subtle': '0 4px 20px -2px rgba(7, 12, 27, 0.4)',
        'light-card': '0 4px 12px rgba(15, 23, 42, 0.04)',
        'light-card-hover': '0 12px 28px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
