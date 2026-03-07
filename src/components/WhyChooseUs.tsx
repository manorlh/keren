'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const reasons = [
  {
    title: 'צוות מומחים',
    description: 'צוות המשרד כולל מומחים בתחום הרפואי והמשפטי, המעניקים ייעוץ מקצועי ומקיף.',
  },
  {
    title: 'ניסיון מוכח',
    description: 'שיעור הצלחה גבוה בתיקי רשלנות רפואית ונזקי גוף והשגת פיצויים משמעותיים עבור לקוחותינו.',
  },
  {
    title: 'מומחים רפואיים',
    description: 'שיתוף פעולה עם רופאים מומחים מובילים לצורך חוות דעת מקצועיות וייעוץ רפואי.',
  },
  {
    title: 'שקיפות מלאה',
    description: 'עבודה בשיטת שכר טרחה על בסיס הצלחה, ללא תשלום מראש.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-primary text-white" id="why-choose-us">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">למה לבחור בנו</h2>
          <p className="text-lg md:text-xl text-white/85 mb-12 md:mb-16">
            משרדנו מתמחה בתביעות רשלנות רפואית ונזקי גוף, עם צוות מקצועי המעניק מענה מקיף לכל מקרה
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-right">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircleIcon className="h-6 w-6 text-accent-light flex-shrink-0 mt-0.5" aria-hidden />
                <div>
                  <h3 className="text-lg font-semibold mb-1">{reason.title}</h3>
                  <p className="text-white/85 text-sm md:text-base">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 text-lg md:text-xl font-light text-white/80"
          >
            מובילים בתחום תביעות הרשלנות הרפואית בישראל
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
} 