import Hero from '@/components/Hero';
import About from '@/components/About';
import PracticeAreas from '@/components/PracticeAreas';
import SuccessStories from '@/components/SuccessStories';
import Contact from '@/components/Contact';
import { getArticles, Article } from '@/lib/contentful';

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
