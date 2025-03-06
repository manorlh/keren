'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Article } from '@/lib/contentful';
import { CalendarIcon, ArrowLeftIcon, TagIcon } from '@heroicons/react/24/outline';

interface SuccessStoriesProps {
  articles: Article[];
}

export default function SuccessStories({ articles }: SuccessStoriesProps) {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if the device is mobile on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the standard md breakpoint in Tailwind
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Determine how many articles to show initially
  const initialArticleCount = isMobile ? 2 : 6;
  
  // Show only the initial count of articles, or all if showAll is true
  const displayedArticles = showAll ? articles : articles.slice(0, initialArticleCount);
  
  return (
    <section className="py-20 bg-white" id="success-stories" aria-labelledby="success-stories-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="success-stories-heading" className="text-4xl font-bold text-gray-900 mb-4">סיפורי הצלחה</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            מקרים בהם סייענו ללקוחותינו לקבל את הפיצוי המגיע להם
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedArticles.map((article) => {
            // Format the publication date
            const formattedDate = article.fields.publishedDate 
              ? new Date(article.fields.publishedDate).toLocaleDateString('he-IL')
              : null;
              
            // Check if article has tags
            const hasTags = article.fields.tags && article.fields.tags.length > 0;
            
            return (
              <article 
                key={article.sys.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full border border-gray-100"
                itemScope 
                itemType="https://schema.org/Article"
              >
                {/* Hidden metadata for SEO */}
                <meta itemProp="headline" content={article.fields.title} />
                {article.fields.publishedDate && <meta itemProp="datePublished" content={article.fields.publishedDate} />}
                {article.fields.author && <meta itemProp="author" content={article.fields.author} />}
                {article.fields.description && <meta itemProp="description" content={article.fields.description} />}
                {hasTags && <meta itemProp="keywords" content={article.fields.tags.join(', ')} />}
                
                <div className="p-6 flex flex-col h-full">
                  <div className="border-r-4 border-red-500 pr-3 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900" itemProp="name">{article.fields.title}</h3>
                  </div>
                  
                  {/* Display up to 2 tags for visual interest */}
                  {hasTags && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      <TagIcon className="h-4 w-4 text-gray-500" aria-hidden="true" />
                      {article.fields.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs text-gray-500"
                          itemProp="keywords"
                        >
                          {tag}{article.fields.tags.indexOf(tag) < Math.min(1, article.fields.tags.length - 1) ? ',' : ''}
                        </span>
                      ))}
                      {article.fields.tags.length > 2 && (
                        <span className="text-xs text-gray-500">...</span>
                      )}
                    </div>
                  )}
                  
                  <p className="text-gray-600 mb-6 flex-grow line-clamp-4" itemProp="description">{article.fields.description}</p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <Link 
                      href={`/articles/${article.sys.id}`}
                      className="text-red-600 font-medium hover:text-red-700 transition-colors flex items-center"
                      aria-label={`קרא עוד על ${article.fields.title}`}
                    >
                      <span>קרא עוד</span>
                      <ArrowLeftIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                    </Link>
                    {formattedDate && (
                      <time 
                        className="text-sm text-gray-500 flex items-center" 
                        itemProp="datePublished" 
                        dateTime={article.fields.publishedDate}
                      >
                        <CalendarIcon className="h-4 w-4 ml-1" aria-hidden="true" />
                        {formattedDate}
                      </time>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        
        {articles.length > (isMobile ? 2 : 6) && !showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
              aria-expanded={showAll}
              aria-controls="success-stories"
            >
              הצג עוד
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 