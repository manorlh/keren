import './globals.css';
import {Rubik} from 'next/font/google';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Link from "next/link";
import type {Metadata} from 'next';
import AccessibilityWidget from '@/components/AccessibilityWidget';

const rubik = Rubik({
  subsets: ['latin', 'hebrew'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'קרן להגאני - משרד עורכי דין',
  description: 'מומחים בתביעות רשלנות רפואית',
  metadataBase: new URL('https://keren-tau.vercel.app'),
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
    url: 'https://keren-tau.vercel.app',
    siteName: 'קרן להגאני - משרד עורכי דין',
    title: 'קרן להגאני - משרד עו״ד מוביל לרשלנות רפואית',
    description: 'משרדנו מתמחה בייצוג נפגעי רשלנות רפואית ונזקי גוף להשגת פיצוי מירבי ומימוש זכויותיכם',
    images: [{
      url: 'https://keren-tau.vercel.app/images/lawyer.jpg',
      width: 1200,
      height: 630,
      alt: 'קרן להגאני - משרד עו״ד מוביל לרשלנות רפואית',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kerenlahagani',
    title: 'קרן להגאני - משרד עו״ד מוביל לרשלנות רפואית',
    description: 'משרדנו מתמחה בייצוג נפגעי רשלנות רפואית ונזקי גוף להשגת פיצוי מירבי ומימוש זכויותיכם',
    images: ['https://keren-tau.vercel.app/images/lawyer.jpg'],
    creator: '@kerenlahagani',
  },
  alternates: {
    canonical: 'https://keren-tau.vercel.app'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body className={rubik.className}>
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
                <a href="#why-choose-us" className="text-gray-600 hover:text-gray-900">למה אנחנו</a>
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
