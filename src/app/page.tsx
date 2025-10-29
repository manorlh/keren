import Hero from '@/components/Hero';
import About from '@/components/About';
import PracticeAreas from '@/components/PracticeAreas';
import SuccessStories from '@/components/SuccessStories';
import Contact from '@/components/Contact';
import { getArticles, Article } from '@/lib/contentful';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'קרן להגאני - עורכת דין רשלנות רפואית ונזקי גוף | ייצוג מקצועי לפיצויים',
  description: 'קרן להגאני - עורכת דין מובילה לרשלנות רפואית ונזקי גוף. ייצוג מקצועי להשגת פיצוי מירבי. התקשרו: 054-564-5921',
  keywords: 'קרן להגאני, עורכת דין רשלנות רפואית ונזקי גוף, תביעת רשלנות רפואית ונזקי גוף, פיצוי רשלנות רפואית ונזקי גוף, עורכת דין מומחית לרשלנות רפואית ונזקי גוף, עורכת דין נזקי גוף, תביעות רשלנות רפואית ונזקי גוף, פיצויים, עורכת דין תל אביב, keren lahagani, medical malpractice lawyer',
  openGraph: {
    title: 'קרן להגאני - עורכת דין רשלנות רפואית ונזקי גוף | ייצוג מקצועי לפיצויים',
    description: 'קרן להגאני - עורכת דין מובילה לרשלנות רפואית ונזקי גוף. ייצוג מקצועי להשגת פיצוי מירבי. התקשרו: 054-564-5921',
    url: 'https://www.klh-law.co.il',
    siteName: 'קרן להגאני - משרד עורכי דין',
    images: [
      {
        url: 'https://www.klh-law.co.il/images/lawyer1200-630-comp.jpg',
        width: 1200,
        height: 630,
        alt: 'קרן להגאני - עורכת דין רשלנות רפואית ונזקי גוף',
      },
    ],
    locale: 'he_IL',
    type: 'website',
  },
};

export default async function Home() {
  // Fetch articles from Contentful with error handling
  let articles: Article[] = [];
  let contentfulError = false;
  
  try {
    articles = await getArticles();
  } catch (error) {
    console.error('Failed to fetch articles from Contentful:', error);
    contentfulError = true;
  }
  
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <PracticeAreas />
      {!contentfulError && articles.length > 0 && <SuccessStories articles={articles} />}
      {/*<WhyChooseUs />*/}
      <Contact />
    </main>
  );
}
