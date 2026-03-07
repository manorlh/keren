import Image from 'next/image';
import ContactForm from './ContactForm';
import contactConfig from '@/config/contact.json';

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function Contact() {
  const { contact, content } = contactConfig;
  return (
    <section className="flex flex-col md:flex-row-reverse bg-slate-50 min-h-screen" id="contact">
      {/* Image Section */}
      <div className="w-full md:w-2/5 h-[40vh] md:min-h-[500px] flex items-center justify-center bg-white">
        <Image
          src="/images/law-office.jpg"
          alt="משרד עורכי דין"
          width={800}
          height={600}
          className="w-auto h-full object-contain"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-3/5 px-4 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 text-right">{content.contactTitle}</h2>
          <p className="text-lg text-gray-600 mb-2 text-right">{content.contactSubtitle}</p>
          <p className="text-base text-gray-500 mb-10 text-right">משרדנו זמין ללקוחות מכל רחבי הארץ</p>

          {/* Three contact blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10">
            <div className="bg-white rounded-lg border border-gray-100 p-4 md:p-5 text-right" dir="rtl">
              <h3 className="font-semibold text-primary mb-2 flex items-center justify-start gap-2">
                <PhoneIcon />
                התקשרו
              </h3>
              <div className="space-y-1">
                {contact.phones.map((phone, i) => (
                  <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-gray-700 hover:text-primary transition-colors">
                    {phone}
                  </a>
                ))}
                <p className="text-sm text-gray-500">פקס: {contact.fax}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-4 md:p-5 text-right" dir="rtl">
              <h3 className="font-semibold text-primary mb-2 flex items-center justify-start gap-2">
                <EmailIcon />
                כתבו אלינו
              </h3>
              <a href={`mailto:${contact.email}`} className="text-gray-700 hover:text-primary transition-colors break-all">
                {contact.email}
              </a>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-4 md:p-5 text-right" dir="rtl">
              <h3 className="font-semibold text-primary mb-2 flex items-center justify-start gap-2">
                <MapPinIcon />
                בקרו אצלנו
              </h3>
              <p className="text-gray-700">{contact.address}</p>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
} 