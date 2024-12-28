import './globals.css';
import { Rubik } from 'next/font/google';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Link from "next/link";

const rubik = Rubik({ 
  subsets: ['latin', 'hebrew'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'קרן להגאני - משרד עורכי דין',
  description: 'מומחים בתביעות רשלנות רפואית',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body className={rubik.className}>
        <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">
                קרן להגאני
              </Link>
              <div className="hidden md:flex items-center space-x-8">
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
