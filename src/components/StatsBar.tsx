import statsConfig from '@/config/stats.json';

export default function StatsBar() {
  const { stats } = statsConfig;
  return (
    <section className="bg-primary text-white py-8 md:py-10" aria-label="סטטיסטיקות">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center border-l border-white/20 first:border-l-0 first:pl-0 first:border-none pl-6"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                {item.value}
              </p>
              <p className="text-sm md:text-base text-white/90 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
