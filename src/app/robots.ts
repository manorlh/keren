import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Base URL of your website
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
} 