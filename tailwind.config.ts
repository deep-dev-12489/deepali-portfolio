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
        cloud: {
          surface: '#F4F9FF',
          card: '#EBF4FE',
          border: '#D0E3F7',
          sky: '#38BDF8',
          primary: '#0284C7',
          azure: '#0078D4',
          deep: '#1D4ED8',
        },
        slateText: {
          main: '#0F172A',
          muted: '#475569',
          subtle: '#64748B',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        heading: ['var(--font-heading)', 'Nunito', 'sans-serif'],
      },
      boxShadow: {
        'blue-soft': '0 8px 24px rgba(2, 132, 199, 0.12)',
        'blue-hover': '0 12px 32px rgba(2, 132, 199, 0.22)',
        'blue-glow': '0 0 25px rgba(56, 189, 248, 0.35)',
        'blue-card': '0 4px 16px rgba(2, 132, 199, 0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
