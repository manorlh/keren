'use client';

import { motion } from 'framer-motion';
import { HeartIcon, BeakerIcon, UserGroupIcon, ClipboardDocumentCheckIcon, BuildingOfficeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const practices = [
  {
    title: 'טעויות בניתוח',
    description: 'ייצוג קורבנות של טעויות כירורגיות, ניתוח באיבר שגוי ורשלנות בטיפול שלאחר הניתוח',
    icon: HeartIcon,
  },
  {
    title: 'אבחון שגוי',
    description: 'תיקים הכוללים עיכוב באבחון, החמצת אבחון או אבחון שגוי של מצבים רפואיים',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: 'פגיעות בלידה',
    description: 'סיוע למשפחות שנפגעו מרשלנות במהלך ההיריון, הלידה וההתאוששות',
    icon: UserGroupIcon,
  },
  {
    title: 'טעויות בתרופות',
    description: 'תיקים הכוללים מתן תרופה שגויה, מינון שגוי ואינטראקציות מסוכנות בין תרופות',
    icon: BeakerIcon,
  },
  {
    title: 'רשלנות בית חולים',
    description: 'תביעות נגד בתי חולים בגין כשלים מערכתיים וטיפול רשלני',
    icon: BuildingOfficeIcon,
  },
  {
    title: 'טעויות במיון',
    description: 'תיקים הכוללים טעויות בחדר מיון, עיכוב בטיפול ושחרור לא נכון של מטופלים',
    icon: ExclamationTriangleIcon,
  },
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
            אנו מתמחים בכל סוגי תיקי הרשלנות הרפואית, נלחמים עבור מטופלים שנפגעו מרשלנות בטיפול הרפואי
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