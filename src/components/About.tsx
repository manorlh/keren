import {
  ScaleIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

const cards = [
  {
    title: 'ניסיון בייצוג מהצד השני',
    description:
      'יייצוג קודם של המוסדות הרפואיים, הרופאים, חברות הביטוח, מעניק לנו יתרון משמעותי בניהול התיק',
    icon: ScaleIcon,
  },
  {
    title: 'רשת מומחים',
    description: 'שיתוף פעולה מתמשך עם טובי המומחים הרפואיים בישראל',
    icon: UserGroupIcon,
  },
  {
    title: 'ניתוח מעמיק',
    description:
      'יכולת מוכחת בפיצוח תיקים מורכבים והבנת הליבה הרפואית והמשפטית של כל מקרה ומקרה',
    icon: MagnifyingGlassIcon,
  },
  {
    title: 'ליווי אישי ויחס אנושי',
    description:
      'משרדנו שם דגש על ליווי אישי, קשוב ומותאם לצרכים הייחודיים של כל לקוח. אנו מתחייבים ליחס אישי, אנושי ומסור',
    icon: HeartIcon,
  },
  {
    title: 'שכר טרחת עו״ד על בסיס הצלחה בלבד',
    description:
      'תשלום דמי שכר הטרחה בסוף ההליך ומהצלחה בלבד. ללא תשלום שכ"ט מראש או דמי פתיחת תיק',
    icon: BanknotesIcon,
  },
  {
    title: 'מימון',
    description:
      'למשרדנו שיתוף פעולה פורה עם חברות מימון משפטיות למקרים של העדר יכולת כלכלית לשאת בעלות חוות הדעת הרפואיות או הוצאות משפט אחרות הדרושות לניהול ההליך',
    icon: CurrencyDollarIcon,
  },
];

export default function About() {
  return (
    <section className="py-16 md:py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">אודות המשרד</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            משרדנו בעל ניסיון רב בייצוג בתביעות רשלנות רפואית ונזקי גוף עם רזומה עשיר של הצלחות.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {cards.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group p-6 bg-slate-50 border border-accent rounded-lg shadow-[0_0_0_1px_#c9a962,0_0_16px_rgba(201,169,98,0.35)] transition-all duration-300 text-right"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-accent/20">
                <Icon className="w-6 h-6 text-accent" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-accent mb-2">{title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 