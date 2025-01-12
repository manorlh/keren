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

      {/* Mobile Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-black/90 via-black/50 to-transparent md:hidden z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 pb-12 md:pb-0" dir="ltr">
        <div className="w-full md:w-[35%] lg:w-auto lg:max-w-xl">
          <div>
            {/* Mobile Content */}
            <div className="md:hidden">
              <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-3 lg:mb-6 text-right text-white drop-shadow-lg">
                קרן להגאני
                <span className="block text-base sm:text-lg lg:text-3xl mt-2 lg:mt-4 font-light">משרד עו״ד מוביל לרשלנות רפואית</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-2xl mb-2 lg:mb-4 text-right text-white drop-shadow-lg">
                משרדנו מתמחה בייצוג נפגעי רשלנות רפואית ונזקי גוף להשגת פיצוי מירבי
              </p>
              <p className="text-xs sm:text-sm lg:text-xl mb-4 lg:mb-8 text-gray-100 font-light text-right drop-shadow-lg">
                מומחים לרשלנות רפואית ונזקי גוף - הקול שלכם בבית משפט
              </p>
              <div className="flex flex-col sm:flex-row gap-2 lg:gap-4 justify-start">
                <Link 
                  href="#contact"
                  className="bg-gray-900/90 text-white px-3 sm:px-4 lg:px-8 py-1.5 sm:py-2 lg:py-4 rounded-md text-xs sm:text-sm lg:text-lg font-semibold hover:bg-black transition-colors duration-300 text-center sm:text-right backdrop-blur-sm"
                >
                  לייעוץ ראשוני ללא עלות
                </Link>
                <Link 
                  href="#practice-areas"
                  className="bg-white/90 text-gray-900 px-3 sm:px-4 lg:px-8 py-1.5 sm:py-2 lg:py-4 rounded-md text-xs sm:text-sm lg:text-lg font-semibold hover:bg-white transition-colors duration-300 text-center sm:text-right backdrop-blur-sm"
                >
                  תחומי התמחות
                </Link>
              </div>
            </div>

            {/* Desktop Content */}
            <div className="hidden md:block">
              <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-3 lg:mb-6 text-right text-white drop-shadow-lg">
                קרן להגאני
                <span className="block text-base sm:text-lg lg:text-3xl mt-2 lg:mt-4 font-light">משרד עו״ד מוביל לרשלנות רפואית</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-2xl mb-2 lg:mb-4 text-right text-white drop-shadow-lg">
                משרדנו מתמחה בייצוג נפגעי רשלנות רפואית ונזקי גוף להשגת פיצוי מירבי
              </p>
              <p className="text-xs sm:text-sm lg:text-xl mb-4 lg:mb-8 text-gray-100 font-light text-right drop-shadow-lg">
                מומחים לרשלנות רפואית ונזקי גוף - הקול שלכם בבית משפט
              </p>
              <div className="flex flex-col sm:flex-row gap-2 lg:gap-4 justify-start">
                <Link 
                  href="#contact"
                  className="bg-gray-900/90 text-white px-3 sm:px-4 lg:px-8 py-1.5 sm:py-2 lg:py-4 rounded-md text-xs sm:text-sm lg:text-lg font-semibold hover:bg-black transition-colors duration-300 text-center sm:text-right backdrop-blur-sm"
                >
                  לייעוץ ראשוני ללא עלות
                </Link>
                <Link 
                  href="#practice-areas"
                  className="bg-white/90 text-gray-900 px-3 sm:px-4 lg:px-8 py-1.5 sm:py-2 lg:py-4 rounded-md text-xs sm:text-sm lg:text-lg font-semibold hover:bg-white transition-colors duration-300 text-center sm:text-right backdrop-blur-sm"
                >
                  תחומי התמחות
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 