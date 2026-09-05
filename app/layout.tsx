import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://deepalimotwani.com'),
  title: 'Deepali Motwani — AI & Cloud Infrastructure Engineer | DevOps & Web Developer',
  description: 'Personal portfolio of Deepali Motwani. AI & Cloud Infrastructure Engineer, DevOps Specialist, RAG Pipeline Developer, and Business Professional.',
  keywords: [
    'Deepali Motwani',
    'AI Engineer',
    'Cloud Infrastructure Engineer',
    'DevOps Engineer',
    'Kubernetes',
    'VictoriaMetrics',
    'Generative AI',
    'RAG Architectures',
    'LangChain',
    'Web Developer',
  ],
  authors: [{ name: 'Deepali Motwani' }],
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Deepali Motwani — AI & Cloud Infrastructure Engineer',
    description: 'AI & Cloud Infrastructure Engineer bridging high-availability telemetry stacks with agentic AI pipelines.',
    url: 'https://deepalimotwani.com',
    siteName: 'Deepali Motwani Portfolio',
    images: [
      {
        url: '/profile-photo.jpg',
        width: 800,
        height: 800,
        alt: 'Deepali Motwani Profile Photo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body className="bg-navy-950 text-slate-200 min-h-screen flex flex-col font-sans selection:bg-brand-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
