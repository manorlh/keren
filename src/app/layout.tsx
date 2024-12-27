import './globals.css';
import { Inter } from 'next/font/google';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Keren Lahagani Law Firm',
  description: 'Professional legal services with expertise and integrity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-gray-900">
                Keren Lahagani
              </a>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="#practice-areas" className="text-gray-600 hover:text-gray-900">Practice Areas</a>
                <a href="#why-choose-us" className="text-gray-600 hover:text-gray-900">Why Choose Us</a>
                <a
                  href="#contact"
                  className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-black transition-colors duration-300"
                >
                  Contact Us
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
