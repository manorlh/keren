'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const isValidIsraeliPhone = (phone: string) => {
    const regex = /^(?:(?:(\+972)|0)(?:-)?([23489])|0([23489]))(?:-)?([0-9]{3})(?:-)?([0-9]{4})$/;
    return regex.test(phone.replace(/\D/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const phone = formData.get('phone') as string;

    if (!isValidIsraeliPhone(phone)) {
      setPhoneError('אנא הכנס מספר טלפון תקין');
      return;
    }

    setPhoneError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      form.reset();
      alert('ההודעה נשלחה בהצלחה!');
    } catch (error) {
      console.error(error)
      alert('אירעה שגיאה בשליחת ההודעה. אנא נסה שוב מאוחר יותר.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-right text-gray-900">צור קשר</h2>
            <p className="text-lg md:text-xl mb-8 text-right text-gray-700">
              נשמח לעמוד לרשותכם ולסייע בכל שאלה
            </p>

            <div className="space-y-6">
              {/* Direct Contact Option */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-right">התקשרות ישירה</h3>
                <div className="space-y-4 flex flex-col items-start">
                  <a href="tel:054-564-5921" className="flex items-center justify-end gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    054-564-5921
                  </a>
                  <a href="tel:073-283-9503" className="flex items-center justify-end gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    073-283-9503
                  </a>
                  <a href="mailto:keren@klh-law.co.il" className="flex items-center justify-end gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    keren@klh-law.co.il
                  </a>
                  <div className="flex items-center justify-end gap-2 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    האחים בז׳רנו 7, מתחם הבורסה, רמת גן
                  </div>
                </div>
              </div>

              {/* Contact Form Option */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-right">השארת פרטים</h3>
                <p className="text-gray-700 text-right mb-4">מלאו את הטופס ונחזור אליכם בהקדם</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-right text-gray-700 mb-2" htmlFor="name">
                      שם מלא
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-right text-gray-900 placeholder-gray-500"
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
                      name="phone"
                      className={`w-full px-4 py-2 bg-white border rounded-md text-right text-gray-900 placeholder-gray-500 ${
                        phoneError ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="הכנס את מספר הטלפון שלך"
                      onChange={(e) => {
                        if (isValidIsraeliPhone(e.target.value)) {
                          setPhoneError('');
                        }
                      }}
                      required
                    />
                    {phoneError && (
                      <p className="text-red-500 text-sm text-right mt-1">{phoneError}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-right text-gray-700 mb-2" htmlFor="email">
                      דוא״ל
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-right text-gray-900 placeholder-gray-500"
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
                      name="message"
                      rows={3}
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-right text-gray-900 placeholder-gray-500"
                      placeholder="כתוב את הודעתך כאן"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 text-white py-2 px-4 rounded-md text-base font-semibold hover:bg-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'שולח...' : 'שלח הודעה'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 