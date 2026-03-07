'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';




export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-primary transition-colors"
        aria-label="תפריט"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg py-4"
          >
            <nav className="container mx-auto px-6">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#about"
                    className="block text-gray-600 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    אודות
                  </a>
                </li>
                <li>
                  <a
                    href="#practice-areas"
                    className="block text-gray-600 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    תחומי עיסוק
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="block text-gray-600 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    המלצות
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    צור קשר
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 