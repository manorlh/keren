import { getArticles } from '@/lib/contentful';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all articles
  const articles = await getArticles();
  
  // Base URL of your website
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';
  
  // Create article URLs
  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.sys.id}`,
    lastModified: new Date(article.fields.publishedDate || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  
  // Create static page URLs
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];
  
  // Combine all URLs
  return [...staticPages, ...articleUrls];
} 