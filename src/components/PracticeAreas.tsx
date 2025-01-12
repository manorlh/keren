import {
  LocalHospital,
  Search,
  ImageSearch,
  PregnantWoman,
  Medication,
  Business,
  MedicalServices
} from '@mui/icons-material';

const practices = [
  {
    title: 'טעויות בניתוח',
    description: 'ייצוג קורבנות של טעויות כירורגיות, בניתוחים כירורגים, אורתופדים, גניקולוגים, פלסטיים, אורולוגים, לבביים ועוד',
    icon: <LocalHospital className="w-16 h-16 text-red-600 group-hover:text-red-700 transition-colors duration-300" />,
  },
  {
    title: 'אבחון שגוי',
    description: 'רשלנות בגין איחור באבחון, החמצת אבחון או אבחון שגוי של מצבים רפואיים כדוגמת מחלות סרטן, מחלות כרוניות, מומים בעובר ועוד',
    icon: <Search className="w-16 h-16 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />,
  },
  {
    title: 'פענוח שגוי',
    description: 'פענוח שגוי של בדיקות הדמייה כולל אולטרה-סאונד,צילום רנטגן, CT, MRI, PET CT, בדיקות מעבדה ובדיקות אחרות',
    icon: <ImageSearch className="w-16 h-16 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300" />,
  },
  {
    title: 'רשלנות בהריון ולידה',
    description: 'רשלנות במהלך מעקב ההריון בגין אי הפנייה לבדיקות, אי מתן הסברים מלאים או בכלל, העדר אבחון של מומים בעובר, מחלות גנטיות ועוד. רשלנות במהלך הלידה בגין ביצוע רשלני של לידה וגינאלית או קיסרית או בגין טיפול רשלני שניתן ליולדת או ליילוד בתום הלידה',
    icon: <PregnantWoman className="w-16 h-16 text-rose-400 group-hover:text-rose-500 transition-colors duration-300" />,
  },
  {
    title: 'טעויות בתרופות',
    description: 'תיקים הכוללים מתן תרופה שגויה, מינון שגוי ואינטראקציות מסוכנות בין תרופות',
    icon: <Medication className="w-16 h-16 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" />,
  },
  {
    title: 'רשלנות בבית חולים',
    description: 'תביעות נגד בתי חולים בגין כשלים מערכתיים, טיפול רשלני, לרבות שחרור מוקדם של המטופל ואי מתן הנחיות רפואיות נכונות או בכלל לעניין המשך הבירור או הטיפול הדרושים',
    icon: <Business className="w-16 h-16 text-sky-600 group-hover:text-sky-700 transition-colors duration-300" />,
  },
  {
    title: 'רשלנות ברפואת שיניים',
    description: 'אבחון שגוי או מאוחר של בעיות שיניים וחניכיים, טיפולי שורש, עקירות או השתלות שבוצעו ברשלנות, פגיעות עצביות שנגרמו במהלך טיפול, יישום לקוי של גשרים, כתרים ועוד',
    icon: <MedicalServices className="w-16 h-16 text-violet-600 group-hover:text-violet-700 transition-colors duration-300" />,
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
          {practices.map((practice) => (
            <div
              key={practice.title}
              className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6 flex justify-center">
                {practice.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{practice.title}</h3>
              <p className="text-gray-600">{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 