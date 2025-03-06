import { createClient } from 'contentful';

// Initialize Contentful client
export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

// Type definitions for Contentful responses
export interface ArticleFields {
  title: string;
  publishedDate: string;
  content: any; // Rich text content
  featuredImage: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
  tags: string[];
  relatedArticles: any[];
  author: string;
  description: string;
}

export interface Article {
  sys: {
    id: string;
  };
  fields: ArticleFields;
}

// Function to fetch all articles
export async function getArticles(): Promise<Article[]> {
  // Check if environment variables are set
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    console.error('Contentful environment variables are not set');
    return [];
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: 'article',
      order: '-fields.publishedDate',
    });
    
    return response.items as unknown as Article[];
  } catch (error) {
    console.error('Error fetching articles from Contentful:', error);
    return [];
  }
}

// Function to fetch a single article by ID
export async function getArticleById(id: string): Promise<Article | null> {
  // Check if environment variables are set
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    console.error('Contentful environment variables are not set');
    return null;
  }

  try {
    const article = await contentfulClient.getEntry(id);
    return article as unknown as Article;
  } catch (error) {
    console.error(`Error fetching article with ID ${id}:`, error);
    return null;
  }
} 