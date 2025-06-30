'use client';

import React, { useState, useEffect } from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Handle scroll event
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show button only on mobile when scrolled past 300px
      setShowButton(isMobile && currentScrollY > 300);
    };
    
    // Initial checks
    checkIfMobile();
    handleScroll();
    
    // Add event listeners
    window.addEventListener('resize', checkIfMobile);
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Position above WhatsApp button (mobile only)
  const bottomPosition = 'bottom-28';
  
  return (
    <button
      onClick={scrollToTop}
      className={`fixed ${bottomPosition} right-4 w-8 h-8 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center z-50 ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}
      aria-label="חזור לראש העמוד"
      title="חזור לראש העמוד"
    >
      <KeyboardArrowUp className="w-5 h-5" />
    </button>
  );
} 