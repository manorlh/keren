'use client';

import {motion} from 'framer-motion';
import {
  BeakerIcon,
  BuildingOfficeIcon,
  ClipboardDocumentCheckIcon,
  HeartIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const practices = [
  {
    title: 'טעויות בניתוח',
    description: 'ייצוג קורבנות של טעויות כירורגיות, בניתוחים כירורגים, אורתופדים, גניקולוגים, פלסטיים, אורולוגים, לבביים ועוד',
    icon: HeartIcon,
  },
  {
    title: 'אבחון שגוי',
    description: 'רשלנות בגין איחור באבחון, החמצת אבחון או אבחון שגוי של מצבים רפואיים כדוגמת מחלות סרטן, מחלות כרוניות, מומים בעובר ועוד',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: 'פענוח שגוי',
    description: 'פענוח שגוי של בדיקות הדמייה כולל אולטרה-סאונד, רנטגן, CT, MRI, PET CT, בדיקות מעבדה ובדיקות אחרות',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: 'רשלנות בהריון ולידה',
    description: 'רשלנות במהלך מעקב ההריון בגין אי הפנייה לבדיקות, אי מתן הסברים מלאים או בכלל, העדר אבחון של מומים בעובר, מחלות גנטיות ועוד. רשלנות במהלך הלידה בגין ביצוע לקוני של לידה וגינאלית או קיסרית',
    icon: UserGroupIcon,
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">תחומי התמחות</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            אנו מתמחים בכל סוגי תיק הרשלנות ונלחמים עבור לקוחותינו
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <practice.icon className="h-12 w-12 text-gray-900 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{practice.title}</h3>
              <p className="text-gray-600">{practice.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 