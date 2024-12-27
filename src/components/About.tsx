'use client';

import { motion } from 'framer-motion';

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
          משרדנו בעל נסיון רב בייצוג בתביעות רשלנות רפואית משרדנו ייצג בעבר את הנתבעים, המוסדות הרפואיים, בהם בתי החולים, קופות החולים ורופאים פרטיים. הדבר מהווה יתרון משמעותי בניהול ההליך המשפטי של התובע! שיתוף פעולה 
          עם טובי המומחים הרפואיים בתחום לניתוח מעמיק של המקרה לצורך השגת פיצוי מקסימלי עבורכם. 
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ניסיון מהצד השני</h3>
              <p className="text-gray-600">ייצוג קודם של מוסדות רפואיים מעניק לנו יתרון משמעותי בהבנת התיקים</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">רשת מומחים</h3>
              <p className="text-gray-600">שיתוף פעולה מתמשך עם טובי המומחים הרפואיים בתחומם בישראל</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ניתוח מעמיק</h3>
              <p className="text-gray-600">יכולת מוכחת בפיצוח תיקים מורכבים והבנת הליבה הרפואית של כל מקרה</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 