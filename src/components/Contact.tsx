'use client';

import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">צור קשר</h2>
            <p className="text-xl text-gray-600">
              צרו איתנו קשר לייעוץ ראשוני
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">שלח הודעה</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    שם מלא
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    placeholder="ישראל ישראלי"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    דואר אלקטרוני
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    placeholder="israel@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    placeholder="כיצד נוכל לעזור?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-black transition-colors duration-300"
                >
                  שלח הודעה
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">פרטי התקשרות</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">טלפון</h4>
                    <p className="text-gray-600" dir="ltr">+972 (55) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">דואר אלקטרוני</h4>
                    <p className="text-gray-600" dir="ltr">contact@kerenlahagani.co.il</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">משרד</h4>
                    <p className="text-gray-600">
                      רחוב המשפט 123<br />
                      קומה 10<br />
                      תל אביב, ישראל
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-medium text-gray-900 mb-4">שעות פעילות</h4>
                <div className="space-y-2 text-gray-600">
                  <p>ראשון - חמישי: 09:00 - 18:00</p>
                  <p>שישי: בתיאום מראש</p>
                  <p>שבת: סגור</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 