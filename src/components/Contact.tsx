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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-right text-gray-700 mb-2" htmlFor="name">
                  שם מלא
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                  name="phone"
                  className={`w-full px-4 py-3 bg-white border rounded-md text-right text-gray-900 placeholder-gray-500 ${
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
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-right text-gray-900 placeholder-gray-500"
                  placeholder="כתוב את הודעתך כאן"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'שולח...' : 'שלח הודעה'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 