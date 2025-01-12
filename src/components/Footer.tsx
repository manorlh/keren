import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-4">צור קשר</h3>
            <div className="space-y-2">
              <p><span className="sr-only">טלפון: </span>054-7932398</p>
              <p><span className="sr-only">דוא״ל: </span>keren@klh-law.co.il</p>
              <p><span className="sr-only">כתובת: </span>יגאל אלון 65, תל אביב</p>
            </div>
          </div>

          <nav className="text-right" aria-label="ניווט מהיר">
            <h3 className="text-lg font-semibold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-gray-300">אודות</a></li>
              <li><a href="#practice-areas" className="hover:text-gray-300">תחומי התמחות</a></li>
              <li><a href="#contact" className="hover:text-gray-300">צור קשר</a></li>
            </ul>
          </nav>

          <nav className="text-right" aria-label="מידע משפטי">
            <h3 className="text-lg font-semibold mb-4">מידע משפטי</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-gray-300">
                  תנאי שימוש
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-300">
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-gray-300">
                  הצהרת נגישות
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} קרן להגאני - משרד עורכי דין. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
} 