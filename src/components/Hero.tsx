'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end md:items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lawyer.jpg"
          alt="תמונת עורכת דין"
          fill
          className="object-cover md:object-[15%_center] object-[65%_center]"
          priority
        />
      </div>

      {/* Dark Overlay - Mobile Only */}
      <div className="absolute inset-0 bg-black/50 md:hidden z-10"></div>
      
      {/* Gradient Overlay - Mobile Only */}
      <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-t from-black via-black/80 to-transparent md:hidden z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 pb-12 md:pb-0" dir="ltr">
        <div className="w-full md:w-auto md:max-w-xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-right text-white drop-shadow-lg">
              קרן להגאני
              <span className="block text-lg md:text-3xl mt-2 md:mt-4 font-light">משרד עורכי דין מוביל לרשלנות רפואית</span>
            </h1>
            <p className="text-base md:text-2xl mb-3 md:mb-4 text-right text-white drop-shadow-lg">
              משרדנו מתמחה בייצוג נפגעי רשלנות רפואית ונזקי גוף להשגת פיצוי מירבי ומימוש זכויותיכם
            </p>
            <p className="text-sm md:text-xl mb-6 md:mb-8 text-gray-100 font-light text-right drop-shadow-lg">
              מומחים לרשלנות רפואית - הקול שלך בבית משפט
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start">
              <Link 
                href="#contact"
                className="bg-gray-900/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-md text-base md:text-lg font-semibold hover:bg-black transition-colors duration-300 text-center sm:text-right backdrop-blur-sm"
              >
                לייעוץ ראשוני ללא עלות
              </Link>
              <Link 
                href="#practice-areas"
                className="bg-white/90 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-md text-base md:text-lg font-semibold hover:bg-white transition-colors duration-300 text-center sm:text-right backdrop-blur-sm"
              >
                תחומי התמחות
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 