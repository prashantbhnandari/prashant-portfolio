import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Prashant Bhandari — Full Stack Developer',
  description:
    'Prashant Bhandari is a Full Stack Developer building scalable web applications with React, Spring Boot, REST APIs, and modern web technologies.',
  keywords: [
    'Prashant Bhandari',
    'Full Stack Developer',
    'React Developer',
    'Java Developer',
    'Spring Boot Developer',
    'Web Developer',
    'Portfolio',
    'Uttarakhand',
  ],
  authors: [{ name: 'Prashant Bhandari' }],
  creator: 'Prashant Bhandari',
  metadataBase: new URL('https://prashantbhandari.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prashantbhandari.dev',
    title: 'Prashant Bhandari — Full Stack Developer',
    description:
      'Building scalable web applications with React, Spring Boot, REST APIs, and modern web technologies.',
    siteName: 'Prashant Bhandari',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prashant Bhandari — Full Stack Developer',
    description:
      'Building scalable web applications with React, Spring Boot, REST APIs, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var m=localStorage.getItem('theme');if(!m||m==='dark'){d.classList.add('dark');d.style.colorScheme='dark';}else{d.style.colorScheme='light';}}catch(e){d.classList.add('dark');d.style.colorScheme='dark';}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Prashant Bhandari',
              jobTitle: 'Full Stack Developer',
              email: 'mailto:prashantbhandari7678@gmail.com',
              telephone: '+91 8273664778',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Srinagar Garhwal',
                addressRegion: 'Uttarakhand',
                addressCountry: 'India',
              },
              knowsAbout: ['React', 'Spring Boot', 'Java', 'REST APIs', 'MySQL', 'JavaScript'],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
