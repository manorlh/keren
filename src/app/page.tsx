import Hero from '@/components/Hero';
import About from '@/components/About';
import PracticeAreas from '@/components/PracticeAreas';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <PracticeAreas />
      {/*<WhyChooseUs />*/}
      <Contact />
    </main>
  );
}
