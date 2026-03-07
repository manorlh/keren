'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import testimonialsConfig from '@/config/testimonials.json';

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

export default function Testimonials() {
  const { recommendations } = testimonialsConfig as { recommendations: { src: string; alt: string }[] };
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  };

  const closeLightbox = () => {
    setLightboxSrc(null);
  };

  const scrollStep = () => {
    if (typeof window === 'undefined') return 0;
    const vw = Math.min(window.innerWidth * 0.85, 400);
    return vw + 16;
  };

  const scrollPrev = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
  };

  const scrollNext = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: scrollStep(), behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">מה אומרים הלקוחות</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            עדויות מלקוחות שהסתמכו עלינו ברגעים הקשים
          </p>
        </div>

        {/* Hint + arrows on mobile only */}
        <div className="flex sm:hidden items-center justify-center gap-4 mb-4">
          <button
            type="button"
            onClick={scrollPrev}
            className="p-2 rounded-full bg-slate-100 text-primary hover:bg-accent/20 hover:text-accent transition-colors shrink-0"
            aria-label="המלצה קודמת"
          >
            <ChevronRight />
          </button>
          <p className="text-sm text-gray-500">גללו או השתמשו בחצים למעבר בין ההמלצות</p>
          <button
            type="button"
            onClick={scrollNext}
            className="p-2 rounded-full bg-slate-100 text-primary hover:bg-accent/20 hover:text-accent transition-colors shrink-0"
            aria-label="המלצה הבאה"
          >
            <ChevronLeft />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex sm:grid sm:grid-cols-2 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto pb-2 scroll-smooth"
        >
          {recommendations.map(({ src, alt }, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openLightbox(src, alt || `המלצת לקוח ${index + 1}`)}
              className="relative flex-shrink-0 w-[85vw] sm:w-auto rounded-lg overflow-hidden border border-accent shadow-[0_0_0_1px_#c9a962,0_0_16px_rgba(201,169,98,0.35)] bg-slate-50 aspect-[3/4] max-h-[500px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 snap-center"
            >
              <Image
                src={src}
                alt={alt || `המלצת לקוח ${index + 1}`}
                fill
                className="object-contain object-center"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox: full resolution on click */}
      {lightboxSrc && (
        <button
          type="button"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 focus:outline-none"
          aria-label="סגור"
        >
          <img
            src={lightboxSrc}
            alt={lightboxAlt}
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </button>
      )}
    </section>
  );
}
