'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/law-office.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Keren Lahagani
            <span className="block text-2xl md:text-3xl mt-4 font-light">Medical Malpractice Attorney</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Dedicated to Fighting for Victims of Medical Negligence. Your Health, Your Rights, Our Priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact"
              className="bg-gray-900 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-black transition-colors duration-300"
            >
              Free Case Evaluation
            </Link>
            <Link 
              href="#practice-areas"
              className="bg-white text-gray-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 