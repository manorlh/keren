'use client';

import {motion} from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">אודות המשרד</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          משרדנו בעל ניסיון רב בייצוג בתביעות רשלנות רפואית ונזקי גוף עם רזומה עשיר של הצלחות.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ניסיון בייצוג מהצד השני</h3>
              <p className="text-gray-600">יייצוג קודם של המוסדות הרפואיים, הרופאים, חברות הביטוח, מעניק לו יתרון
                משמעותי בניהול התיק</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">רשת מומחים</h3>
              <p className="text-gray-600">שיתוף פעולה מתמשך עם טובי המומחים הרפואיים בישראל</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ניתוח מעמיק</h3>
              <p className="text-gray-600">יכולת מוכחת בפיצוח תיקים מורכבים והבנת הליבה הרפואית והמשפטית של כל מקרה
                ומקרה</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ייצוג משפטי וליווי אישי</h3>
              <p className="text-gray-600">להשלים
                ומקרה</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">שכר טרחת עו״ד על בסיס הצלחה בלבד</h3>
              <p className="text-gray-600">תשלום דמי שכר הטרחה בסוף ההליך ומהצלחה בלבד. ללא תשלום שכ"ט מראש או דמי פתיחת
                תיק
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">מימון</h3>
              <p className="text-gray-600">שיתוף פעולה עם חברות מימון בהעדר יכולת כלכלית לשאת בעלות חוות הדעת הרפואיות הדרושות לניהול ההליך
                תיק
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 