import Link from 'next/link';
import {
  LocalHospital,
  Search,
  ImageSearch,
  PregnantWoman,
  Medication,
  Business,
  MedicalServices,
  DirectionsCar,
  ReportProblem,
} from '@mui/icons-material';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const practices = [
  {
    title: 'רשלנות בניתוחים',
    description:
      'ייצוג קורבנות של טעויות כירורגיות, בניתוחים כירורגים, אורתופדים, גניקולוגים, פלסטיים, אורולוגים, לבביים ועוד',
    icon: LocalHospital,
  },
  {
    title: 'רשלנות באבחון',
    description:
      'רשלנות בגין איחור באבחון, החמצת אבחון או אבחון שגוי של מצבים רפואיים כדוגמת מחלות סרטן, מחלות כרוניות, מומים בעובר ועוד',
    icon: Search,
  },
  {
    title: 'רשלנות בפענוח',
    description:
      'פענוח שגוי של בדיקות הדמייה כולל אולטרה-סאונד,צילום רנטגן, CT, MRI, PET CT, בדיקות מעבדה ובדיקות אחרות',
    icon: ImageSearch,
  },
  {
    title: 'רשלנות בהריון ולידה',
    description:
      'רשלנות במהלך מעקב ההריון בגין אי הפנייה לבדיקות, אי מתן הסברים מלאים או בכלל, העדר אבחון של מומים בעובר, מחלות גנטיות ועוד. רשלנות במהלך הלידה בגין ביצוע רשלני של לידה וגינאלית או קיסרית או בגין טיפול רשלני שניתן ליולדת או ליילוד בתום הלידה',
    icon: PregnantWoman,
  },
  {
    title: 'רשלנות במתן בתרופות',
    description: 'רשלנויות הכוללות מתן תרופה שגויה, מינון שגוי ואינטראקציות מסוכנות בין תרופות',
    icon: Medication,
  },
  {
    title: 'רשלנות בבית חולים',
    description:
      'תביעות נגד בתי חולים בגין כשלים מערכתיים, טיפול רשלני, לרבות שחרור מוקדם של המטופל ואי מתן הנחיות רפואיות נכונות או בכלל לעניין המשך הבירור או הטיפול הדרושים',
    icon: Business,
  },
  {
    title: 'רשלנות ברפואת שיניים',
    description:
      'אבחון שגוי או מאוחר של בעיות שיניים וחניכיים, טיפולי שורש, עקירות או השתלות שבוצעו ברשלנות, פגיעות עצביות שנגרמו במהלך טיפול, יישום לקוי של גשרים, כתרים ועוד',
    icon: MedicalServices,
  },
  {
    title: 'תאונות דרכים',
    description:
      'נזקי גוף שנגרמו בעקבות שימוש ברכב מנועי, לרבות בעקבות נסיעה בו, כניסה או יציאה ממנו, חניה, דחיפה, גרירה, טיפול דרך ואף התלקחותו',
    icon: DirectionsCar,
  },
  {
    title: 'תאונות במרחב הציבורי',
    description:
      'חבלות כתוצאה ממפגעים או תשתיות פגומות כגון מדרכה פגומה, חבלות בעקבות מתקן ציבורי מסוכן, חבלות כתוצאה מריצוף רטוב בבית עסק או בית מלון ועוד',
    icon: ReportProblem,
  },
];

export default function PracticeAreas() {
  return (
    <section className="py-16 md:py-20 bg-slate-50" id="practice-areas">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">תחומי עיסוק</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            אנו עוסקים בכל סוגי תיקי הרשלנות הרפואית ונזקי הגוף ונלחמים עבור לקוחותינו
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {practices.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group bg-white p-6 md:p-8 rounded-lg border border-accent shadow-[0_0_0_1px_#c9a962,0_0_16px_rgba(201,169,98,0.35)] transition-all duration-300 text-right [&:last-child:nth-child(odd)]:col-span-2 md:[&:last-child:nth-child(odd)]:col-span-1"
            >
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-accent/20 text-accent">
                <Icon sx={{ fontSize: '2.5rem', color: 'currentColor' }} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-accent mb-2">{title}</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">{description}</p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1 text-primary font-medium hover:text-accent transition-colors text-sm"
              >
                <span>לפרטים</span>
                <ArrowLeftIcon className="w-4 h-4 text-primary" aria-hidden />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}