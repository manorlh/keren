import testimonialsConfig from '@/config/testimonials.json';

function getInitial(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return '?';
  return trimmed.charAt(0).toUpperCase();
}

export default function Testimonials() {
  const { testimonials } = testimonialsConfig;
  const avatarColors = ['bg-primary', 'bg-amber-600', 'bg-sky-600'];
  return (
    <section className="py-16 md:py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">מה אומרים הלקוחות</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            עדויות מלקוחות שהסתמכו עלינו ברגעים הקשים
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map(({ quote, name, role }, index) => (
            <div
              key={index}
              className="group bg-slate-50 border border-accent rounded-lg p-6 text-right flex flex-col shadow-[0_0_0_1px_#c9a962,0_0_16px_rgba(201,169,98,0.35)] transition-all duration-300"
            >
              <p className="text-gray-700 mb-6 flex-grow leading-relaxed">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-3 justify-end">
                <div className={`w-10 h-10 rounded-full ${avatarColors[index]} text-white flex items-center justify-center text-lg font-semibold shrink-0`}>
                  {getInitial(name)}
                </div>
                <div>
                  <p className="font-semibold text-accent">{name}</p>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
