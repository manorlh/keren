'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row-reverse bg-white" id="contact">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-screen flex items-center justify-center">
        <Image
          src="/images/law-office.jpg"
          alt="משרד עורכי דין"
          width={800}
          height={600}
          className="w-auto h-full object-contain"
          priority
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 px-4 md:px-8 py-12 md:py-20">
        <div className="w-full max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-right text-gray-900">צור קשר</h2>
            <p className="text-lg md:text-xl mb-8 text-right text-gray-700">
              נשמח לעמוד לרשותכם ולסייע בכל שאלה
            </p>
            <form className="space-y-6">
              <div>
                <label className="block text-right text-gray-700 mb-2" htmlFor="name">
                  שם מלא
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-right text-gray-900 placeholder-gray-500"
                  placeholder="הכנס את שמך"
                  required
                />
              </div>
              <div>
                <label className="block text-right text-gray-700 mb-2" htmlFor="phone">
                  טלפון
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-right text-gray-900 placeholder-gray-500"
                  placeholder="הכנס את מספר הטלפון שלך"
                  required
                />
              </div>
              <div>
                <label className="block text-right text-gray-700 mb-2" htmlFor="email">
                  דוא״ל
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-right text-gray-900 placeholder-gray-500"
                  placeholder="הכנס את כתובת הדוא״ל שלך"
                  required
                />
              </div>
              <div>
                <label className="block text-right text-gray-700 mb-2" htmlFor="message">
                  הודעה
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-right text-gray-900 placeholder-gray-500"
                  placeholder="כתוב את הודעתך כאן"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-black transition-colors duration-300"
              >
                שלח הודעה
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 