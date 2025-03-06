import './globals.css';
import {Rubik} from 'next/font/google';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Link from "next/link";
import type {Metadata} from 'next';
import AccessibilityWidget from '@/components/AccessibilityWidget';
import {Analytics} from "@vercel/analytics/react"
import {Toaster} from 'react-hot-toast';

const rubik = Rubik({
  subsets: ['latin', 'hebrew'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'קרן להגאני - משרד עורכי דין',
  description: 'מומחים בתביעות רשלנות רפואית',
  metadataBase: new URL('https://www.klh-law.co.il'),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://www.klh-law.co.il',
    siteName: 'קרן להגאני - משרד עורכי דין',
    title: 'קרן להגאני - משרד עו״ד מוביל לרשלנות רפואית',
    description: 'משרדנו מתמחה בייצוג נפגעי רשלנות רפואית ונזקי גוף להשגת פיצוי מירבי ומימוש זכויותיכם',
    images: [
      {
        url: 'https://www.klh-law.co.il/images/lawyer1200-630-comp.jpg',
        width: 1200,
        height: 630,
        alt: 'קרן להגאני - משרד עו״ד מוביל לרשלנות רפואית',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kerenlahagani',
    title: 'קרן להגאני - משרד עו״ד מוביל לרשלנות רפואית',
    description: 'משרדנו מתמחה בייצוג נפגעי רשלנות רפואית ונזקי גוף להשגת פיצוי מירבי ומימוש זכויותיכם',
    images: ['https://www.klh-law.co.il/images/lawyer.jpg'],
    creator: '@kerenlahagani',
  },
  alternates: {
    canonical: 'https://www.klh-law.co.il'
  },
  other: {
    'og:title': 'קרן להגאני - משרד עו״ד מוביל לרשלנות רפואית',
    'og:description': 'משרדנו מתמחה בייצוג נפגעי רשלנות רפואית ונזקי גוף להשגת פיצוי מירבי ומימוש זכויותיכם',
    'og:url': 'https://www.klh-law.co.il',
    'og:site_name': 'קרן להגאני - משרד עורכי דין',
    'og:locale': 'he_IL',
    'og:type': 'website',
    'og:image': 'https://www.klh-law.co.il/images/lawyer1200-630-comp.jpg',
    'og:image:secure_url': 'https://www.klh-law.co.il/images/lawyer1200-630-comp.jpg',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/jpeg',
    'og:image:alt': 'קרן להגאני - משרד עו״ד מוביל לרשלנות רפואית',
    'og:logo':'https://www.klh-law.co.il/images/logo.webp',
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body className={rubik.className}>
        <Toaster />
        <Analytics/>
        <AccessibilityWidget />
        <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
          <nav className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logo.webp" alt="קרן להגאני - משרד עורכי דין" className="h-10 w-auto" />
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <a href="#about" className="text-gray-600 hover:text-gray-900">אודות</a>
                <a href="#practice-areas" className="text-gray-600 hover:text-gray-900">תחומי התמחות</a>
                <a href="#success-stories" className="text-gray-600 hover:text-gray-900">סיפורי הצלחה</a>
                <a
                  href="#contact"
                  className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-black transition-colors duration-300"
                >
                  צור קשר
                </a>
              </div>
              <MobileNav />
            </div>
          </nav>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
