'use client';

import {
  Squares2X2Icon,
  MagnifyingGlassIcon,
  DocumentMagnifyingGlassIcon,
  UsersIcon,
  BeakerIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const practices = [
  {
    title: 'טעויות בניתוח',
    description: 'ייצוג קורבנות של טעויות כירורגיות, בניתוחים כירורגים, אורתופדים, גניקולוגים, פלסטיים, אורולוגים, לבביים ועוד',
    icon: Squares2X2Icon,
  },
  {
    title: 'אבחון שגוי',
    description: 'רשלנות בגין איחור באבחון, החמצת אבחון או אבחון שגוי של מצבים רפואיים כדוגמת מחלות סרטן, מחלות כרוניות, מומים בעובר ועוד',
    icon: MagnifyingGlassIcon,
  },
  {
    title: 'פענוח שגוי',
    description: 'פענוח שגוי של בדיקות הדמייה כולל אולטרה-סאונד, רנטגן, CT, MRI, PET CT, בדיקות מעבדה ובדיקות אחרות',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'רשלנות בהריון ולידה',
    description: 'רשלנות במהלך מעקב ההריון בגין אי הפנייה לבדיקות, אי מתן הסברים מלאים או בכלל, העדר אבחון של מומים בעובר, מחלות גנטיות ועוד. רשלנות במהלך הלידה בגין ביצוע לקוני של לידה וגינאלית או קיסרית',
    icon: UsersIcon,
  },
  {
    title: 'טעויות בתרופות',
    description: 'תיקים הכוללים מתן תרופה שגויה, מינון שגוי ואינטראקציות מסוכנות בין תרופות',
    icon: BeakerIcon,
  },
  {
    title: 'רשלנות בבית חולים',
    description: 'תביעות נגד בתי חולים בגין כשלים מערכתיים, טיפול רשלני, לרבות שחרור מוקדם של המטופל ואי מתן הנחיות נכונות או בכלל להמשך בירור או טיפול',
    icon: BuildingOfficeIcon,
  }
];

export default function PracticeAreas() {
  return (
    <section className="py-20 bg-gray-50" id="practice-areas">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">תחומי התמחות</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            אנו מתמחים בכל סוגי תיק הרשלנות ונלחמים עבור לקוחותינו
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div
              key={practice.title}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <practice.icon className="h-12 w-12 text-gray-900 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{practice.title}</h3>
              <p className="text-gray-600">{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 