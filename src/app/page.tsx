import { motion } from 'framer-motion';
import { GavelIcon, ScaleIcon, UserGroupIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PracticeAreas from '@/components/PracticeAreas';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <PracticeAreas />
      <WhyChooseUs />
      <Contact />
    </main>
  );
}
