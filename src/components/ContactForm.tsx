'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const isValidIsraeliPhone = (phone: string) => {
    // Clean the phone number from any non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Check for valid formats:
    // 1. With country code: +972XXXXXXXXX or 972XXXXXXXXX
    // 2. Without country code: 0XXXXXXXXX
    const withPrefixRegex = /^(?:972|\+972)([23459]\d{8})$/;
    const withoutPrefixRegex = /^0([23459]\d{8})$/;
    
    return withPrefixRegex.test(cleanPhone) || withoutPrefixRegex.test(cleanPhone);
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
      toast.success('ההודעה נשלחה בהצלחה!', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#10B981',
          color: '#fff',
          direction: 'rtl'
        },
      });
    } catch (error) {
      console.error(error);
      toast.error('אירעה שגיאה בשליחת ההודעה. אנא נסה שוב מאוחר יותר.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#EF4444',
          color: '#fff',
          direction: 'rtl'
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6">
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
            placeholder="הכנס את כתובת הדוא״ל שלך (לא חובה)"
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
  );
} 