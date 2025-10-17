import Image from 'next/image';
import ContactForm from './ContactForm';
import contactConfig from '../config/contact.json';

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row-reverse bg-gray-50" id="contact">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-right text-gray-900">{contactConfig.content.contactTitle}</h2>
            <p className="text-lg md:text-xl mb-8 text-right text-gray-700">
              {contactConfig.content.contactSubtitle}
            </p>

            <div className="space-y-6">
              {/* Direct Contact Option */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-right">{contactConfig.content.directContactTitle}</h3>
                <div className="space-y-4 flex flex-col items-start">
                  {contactConfig.contact.phones.map((phone, index) => (
                    <a key={index} href={`tel:${phone}`} className="flex items-center justify-end gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {phone}
                    </a>
                  ))}
                  <a href={`mailto:${contactConfig.contact.email}`} className="flex items-center justify-end gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {contactConfig.contact.email}
                  </a>
                  <div className="flex items-center justify-end gap-2 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    פקס: {contactConfig.contact.fax}
                  </div>
                  <div className="flex items-center justify-end gap-2 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {contactConfig.contact.address}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 