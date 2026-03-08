import Link from 'next/link';
import Image from 'next/image';

// Hero image: edit these to control crop, size, and position. Zoom applies at all viewports (change to 0.5 to see more image).
const MOBILE_HERO = {
  zoom: '1.6',       // Size: how much of image fits (0.5 = more image, 1 = fill). Lower = see more.
  cropX: '50%',      // Crop: which part of image horizontally (0% = left edge, 50% = center, 100% = right).
  cropY: '26%',      // Crop: which part of image vertically (0% = top, 100% = bottom).
  screenX: '50%',    // Position on screen: horizontal (0% = left, 50% = center, 100% = right).
  screenY: '78%',    // Position on screen: vertical (0% = top, 50% = center, 100% = bottom).
} as const;

// Hero title and text position (on the image). Use these to place the content block.
const HERO_CONTENT = {
  x: '8%',           // Horizontal: distance from left (e.g. '8%', '2rem', '24px').
  y: '51%',          // Vertical: position from top (e.g. '50%' = middle, '30%' = higher, '70%' = lower).
  align: 'right' as 'left' | 'right',  // Text alignment: 'left' | 'right'.
  maxWidth: 'min(90vw, 40rem)', // Max width of the text block (e.g. '28rem', '500px').
} as const;

// Hero container height: mobile uses HERO_HEIGHT_MOBILE; from md up uses aspect ratio.
const HERO_HEIGHT_MOBILE = '315px';   // Mobile only (e.g. '60vh', '70vh', '80vh', '400px').
const HERO_ASPECT_RATIO = 16 / 10;   // Desktop: width/height (e.g. 16/10, 3/2, 4/3).

// CTA button: position absolute within the section. Separate values for mobile and desktop (md and up).
const HERO_BUTTON = {
  mobile:  { left: '10px', bottom: '10px' },
  desktop: { left: '60px', bottom: '60px' },
} as const;

export default function Hero() {
  const mobileHeroStyle = {
    ['--hero-zoom' as string]: MOBILE_HERO.zoom,
    ['--hero-crop-x' as string]: MOBILE_HERO.cropX,
    ['--hero-crop-y' as string]: MOBILE_HERO.cropY,
    ['--hero-screen-x' as string]: MOBILE_HERO.screenX,
    ['--hero-screen-y' as string]: MOBILE_HERO.screenY,
  };

  // Zoom = scale of the image (0.2 = 20% size = see full image with letterboxing; 1 = fill).
  // Uses 100% container + scale() so overflow-hidden doesn't clip it.
  const zoomWrapperStyle: React.CSSProperties = {
    position: 'absolute',
    left: MOBILE_HERO.screenX,
    top: MOBILE_HERO.screenY,
    width: '100%',
    height: '100%',
    transform: `translate(-50%, -50%) scale(${MOBILE_HERO.zoom})`,
    transformOrigin: 'center center',
  };

  return (
    <section id="hero-section" className="relative overflow-hidden" style={{ ['--hero-height-mobile' as string]: HERO_HEIGHT_MOBILE }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-size {
          height: var(--hero-height-mobile);
        }
        @media (min-width: 768px) {
          .hero-size {
            height: auto;
            aspect-ratio: ${HERO_ASPECT_RATIO};
          }
        }
        #hero-section {
          --hero-cta-left: ${HERO_BUTTON.mobile.left};
          --hero-cta-bottom: ${HERO_BUTTON.mobile.bottom};
        }
        @media (min-width: 768px) {
          #hero-section {
            --hero-cta-left: ${HERO_BUTTON.desktop.left};
            --hero-cta-bottom: ${HERO_BUTTON.desktop.bottom};
          }
        }
      `}} />
      {/* Sizing element: mobile = HERO_HEIGHT_MOBILE, desktop = HERO_ASPECT_RATIO */}
      <div className="hero-size relative w-full" aria-hidden />
      <div className="absolute inset-0 z-0 flex items-center justify-center" style={mobileHeroStyle}>
        <div style={zoomWrapperStyle}>
          <div className="relative w-full h-full">
            <Image
              src="/images/lawyer.jpg"
              alt="תמונת עורכת דין"
              fill
              className="object-contain object-[var(--hero-crop-x)_var(--hero-crop-y)] md:object-cover 2xl:object-center xl:object-center lg:object-center md:object-center"
              priority
            />
          </div>
        </div>
      </div>

      {/* Overlay for readability and formal look */}
      <div className="absolute inset-0 z-[1] bg-primary/40" aria-hidden />

      {/* Mobile Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-black/90 via-black/50 to-transparent md:hidden z-10" />

      {/* CTA button: absolute within section (position via HERO_BUTTON; uses CSS vars so it stays relative to #hero-section) */}
      <Link
        href="#contact"
        className="absolute z-20 bg-primary text-white px-3 sm:px-4 lg:px-8 py-1.5 sm:py-2 lg:py-4 rounded-md text-sm lg:text-lg font-semibold hover:bg-primary-dark transition-colors duration-300 backdrop-blur-sm shrink-0 border border-accent shadow-[0_0_0_1px_#c9a962,0_0_16px_rgba(201,169,98,0.5)] hover:shadow-[0_0_0_1px_#c9a962,0_0_20px_rgba(201,169,98,0.6)]"
        style={{ left: 'var(--hero-cta-left)', bottom: 'var(--hero-cta-bottom)' }}
      >
        לייעוץ ראשוני ללא עלות
      </Link>

      {/* Content - position via HERO_CONTENT (x, y, align, maxWidth). */}
      <div
        className="absolute z-20 px-4 md:px-6 pb-12 md:pb-0 flex flex-col items-start"
        dir="ltr"
        style={{
          left: HERO_CONTENT.x,
          top: HERO_CONTENT.y,
          transform: 'translateY(-50%)',
          maxWidth: HERO_CONTENT.maxWidth,
          width: 'max-content',
        }}
      >
        <div className="w-full mt-[12rem]">
          <h1 className={`text-2xl sm:text-3xl lg:text-6xl font-bold mb-3 lg:mb-6 text-white drop-shadow-lg font-[family-name:var(--font-heebo)] ${HERO_CONTENT.align === 'right' ? 'text-right' : 'text-left'}`}>
            קרן להגאני
            <span className="block text-base sm:text-lg lg:text-3xl mt-2 lg:mt-4 font-bold text-accent-light">משרד עו״ד מוביל לרשלנות רפואית ונזקי גוף</span>
          </h1>
          <p className={`text-sm sm:text-base lg:text-2xl text-white drop-shadow-lg ${HERO_CONTENT.align === 'right' ? 'text-right' : 'text-left'}`}>
            משרד העוסק בייצוג נפגעי רשלנות רפואית ונזקי גוף להשגת פיצוי מירבי
          </p>
          <p className={`text-xs sm:text-sm lg:text-xl text-gray-100 font-light drop-shadow-lg mt-2 ${HERO_CONTENT.align === 'right' ? 'text-right' : 'text-left'}`}>
            הקול שלכם בבית משפט
          </p>
        </div>
      </div>
    </section>
  );
} 