'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';
import testimonialsConfig from '@/config/testimonials.json';

const AUTO_ADVANCE_MS = 3000;

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const cardBaseClass =
  'relative w-full max-w-sm md:max-w-md mx-auto rounded-lg overflow-hidden border border-accent shadow-[0_0_0_1px_#c9a962,0_0_16px_rgba(201,169,98,0.35)] bg-slate-50 aspect-[3/4] max-h-[500px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2';

export default function Testimonials() {
  const { recommendations } = testimonialsConfig as { recommendations: { src: string; alt: string }[] };
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoAdvanceStopped, setAutoAdvanceStopped] = useState(false);

  const n = recommendations.length;
  const current = recommendations[currentIndex] ?? recommendations[0];
  const currentAlt = current?.alt || `המלצת לקוח ${currentIndex + 1}`;

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  };

  const closeLightbox = () => {
    setLightboxSrc(null);
  };

  const goPrev = () => {
    setAutoAdvanceStopped(true);
    setCurrentIndex((i) => (i - 1 + n) % n);
  };

  const goNext = () => {
    setAutoAdvanceStopped(true);
    setCurrentIndex((i) => (i + 1) % n);
  };

  // Preload all recommendation images on mount
  useEffect(() => {
    recommendations.forEach(({ src }) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [recommendations]);

  // Replace card every 3s; pause when lightbox open or user used arrows
  useEffect(() => {
    if (lightboxSrc !== null || autoAdvanceStopped) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % n);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [lightboxSrc, autoAdvanceStopped, n]);

  return (
    <section className="py-16 md:py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">מה אומרים הלקוחות</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            עדויות מלקוחות שהסתמכו עלינו ברגעים הקשים
          </p>
        </div>

        {/* Single card that replaces every 3s (all viewports) */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              type="button"
              onClick={goPrev}
              className="p-2 rounded-full bg-slate-100 text-primary hover:bg-accent/20 hover:text-accent transition-colors shrink-0"
              aria-label="המלצה קודמת"
            >
              <ChevronRight />
            </button>
            <p className="text-sm text-gray-500">השתמשו בחצים למעבר בין ההמלצות</p>
            <button
              type="button"
              onClick={goNext}
              className="p-2 rounded-full bg-slate-100 text-primary hover:bg-accent/20 hover:text-accent transition-colors shrink-0"
              aria-label="המלצה הבאה"
            >
              <ChevronLeft />
            </button>
          </div>
          <div className="w-full max-w-sm md:max-w-md mx-auto">
            <button
              type="button"
              key={currentIndex}
              onClick={() => openLightbox(current.src, currentAlt)}
              className={`${cardBaseClass} animate-fade-in-fast`}
            >
              <Image
                src={current.src}
                alt={currentAlt}
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, 28rem"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="תצוגה מלאה של המלצה"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute inset-0 cursor-default"
            aria-hidden
          />
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white z-20"
            aria-label="סגור"
          >
            <XMarkIcon className="h-8 w-8" aria-hidden />
          </button>
          <div
            className="relative z-10 max-w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxSrc}
              alt={lightboxAlt}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
