import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://deepalimotwani.com'),
  title: 'Deepali Motwani — Software Engineer (Cloud & AI) | Web Developer',
  description: 'Personal portfolio of Deepali Motwani. Software Engineer (Cloud & AI) | Web Developer, DevOps Specialist, RAG Pipeline Developer, and Business Professional.',
  keywords: [
    'Deepali Motwani',
    'AI Engineer',
    'Cloud Infrastructure Engineer',
    'DevOps Engineer',
    'Kubernetes',
    'VictoriaMetrics',
    'Microsoft Azure',
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
    title: 'Deepali Motwani — Software Engineer (Cloud & AI) | Web Developer',
    description: 'Software Engineer (Cloud & AI) | Web Developer bridging high-availability telemetry stacks with agentic AI pipelines.',
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
    <html lang="en" className={`${inter.variable} ${nunito.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body className="bg-white text-[#0F172A] min-h-screen flex flex-col font-sans selection:bg-[#DBEAFE] selection:text-[#0369A1] antialiased">
        {children}
      </body>
    </html>
  );
}
