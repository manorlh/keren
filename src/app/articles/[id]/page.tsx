import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleById, getArticles } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { Metadata, ResolvingMetadata } from 'next';

interface ArticlePageProps {
  params: {
    id: string;
  };
}

// Generate metadata for better SEO
export async function generateMetadata(
  { params }: ArticlePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const article = await getArticleById(params.id);
    
    if (!article) {
      return {
        title: 'Article Not Found',
      };
    }
    
    // Extract tags for keywords
    const keywords = article.fields.tags ? article.fields.tags.join(', ') : '';
    
    return {
      title: article.fields.title,
      description: article.fields.description || 'Read our success story',
      keywords: keywords,
      openGraph: {
        title: article.fields.title,
        description: article.fields.description || 'Read our success story',
        type: 'article',
        publishedTime: article.fields.publishedDate,
        authors: article.fields.author ? [article.fields.author] : undefined,
        images: article.fields.featuredImage ? 
          [`https:${article.fields.featuredImage.fields.file.url}`] : undefined,
        tags: article.fields.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: article.fields.title,
        description: article.fields.description || 'Read our success story',
        images: article.fields.featuredImage ? 
          [`https:${article.fields.featuredImage.fields.file.url}`] : undefined,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Article',
      description: 'Read our success story',
    };
  }
}

// Generate static paths for all articles
export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map(article => ({
    id: article.sys.id,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  try {
    const article = await getArticleById(params.id);

    if (!article) {
      notFound();
    }

    // Rich text options for rendering Contentful rich text
    const options = {
      renderMark: {
        [MARKS.BOLD]: (text: React.ReactNode) => <strong className="text-black">{text}</strong>,
        [MARKS.ITALIC]: (text: React.ReactNode) => <em className="text-black">{text}</em>,
        [MARKS.UNDERLINE]: (text: React.ReactNode) => <u className="text-black">{text}</u>,
        [MARKS.CODE]: (text: React.ReactNode) => <code className="text-black bg-gray-100 px-1 rounded">{text}</code>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <p className="mb-4 text-black">{children}</p>,
        [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => <h1 className="text-3xl font-bold mb-4 text-black">{children}</h1>,
        [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => <h2 className="text-2xl font-bold mb-3 text-black">{children}</h2>,
        [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => <h3 className="text-xl font-bold mb-2 text-black">{children}</h3>,
        [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => <h4 className="text-lg font-bold mb-2 text-black">{children}</h4>,
        [BLOCKS.HEADING_5]: (node: any, children: React.ReactNode) => <h5 className="text-base font-bold mb-2 text-black">{children}</h5>,
        [BLOCKS.HEADING_6]: (node: any, children: React.ReactNode) => <h6 className="text-sm font-bold mb-2 text-black">{children}</h6>,
        [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => <ul className="list-disc pl-6 mb-4 text-black">{children}</ul>,
        [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => <ol className="list-decimal pl-6 mb-4 text-black">{children}</ol>,
        [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => <li className="mb-1 text-black">{children}</li>,
        [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
          <blockquote className="border-r-4 border-gray-300 pr-4 italic my-4 text-black">{children}</blockquote>
        ),
        [BLOCKS.HR]: () => <hr className="my-6" />,
        [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {children}
          </a>
        ),
      },
    };

    // Check if the article has a valid featured image
    const hasFeaturedImage = article.fields.featuredImage && 
                            article.fields.featuredImage.fields && 
                            article.fields.featuredImage.fields.file && 
                            article.fields.featuredImage.fields.file.url;

    // Format the publication date
    const formattedDate = article.fields.publishedDate 
      ? new Date(article.fields.publishedDate).toLocaleDateString('he-IL')
      : null;

    // Check if article has tags
    const hasTags = article.fields.tags && article.fields.tags.length > 0;

    return (
      <main className="min-h-screen py-12">
        <div className="container mx-auto px-6">
          <Link href="/#success-stories" className="text-red-600 hover:text-red-700 mb-8 inline-block">
            &larr; חזרה לסיפורי הצלחה
          </Link>

          <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8" itemScope itemType="https://schema.org/Article">
            {/* Hidden metadata for SEO */}
            <meta itemProp="headline" content={article.fields.title} />
            {formattedDate && <meta itemProp="datePublished" content={article.fields.publishedDate} />}
            {article.fields.author && <meta itemProp="author" content={article.fields.author} />}
            {article.fields.description && <meta itemProp="description" content={article.fields.description} />}
            {hasTags && (
              <meta itemProp="keywords" content={article.fields.tags.join(', ')} />
            )}
            
            <h1 className="text-3xl font-bold mb-4 text-black" itemProp="name">{article.fields.title}</h1>
            
            <div className="flex items-center text-black mb-6">
              {article.fields.author && (
                <span className="ml-4" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">מאת: {article.fields.author}</span>
                </span>
              )}
              {formattedDate && (
                <time itemProp="datePublished" dateTime={article.fields.publishedDate}>
                  פורסם: {formattedDate}
                </time>
              )}
            </div>

            {hasFeaturedImage ? (
              <div className="relative h-96 w-full mb-8">
                <Image
                  src={`https:${article.fields.featuredImage.fields.file.url}`}
                  alt={article.fields.featuredImage.fields.title || article.fields.title}
                  fill
                  className="object-cover rounded-lg"
                  itemProp="image"
                  priority
                />
              </div>
            ) : (
              <div className="h-4 mb-4 border-b border-gray-100"></div>
            )}

            <div className="prose max-w-none text-black" itemProp="articleBody">
              {article.fields.content && documentToReactComponents(article.fields.content, options)}
            </div>

            {/* Tags at the bottom for better organization and user experience */}
            {hasTags && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-2 text-black">תגיות:</h3>
                <div className="flex flex-wrap gap-2">
                  {article.fields.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      itemProp="keywords"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error rendering article page:', error);
    notFound();
  }
} 