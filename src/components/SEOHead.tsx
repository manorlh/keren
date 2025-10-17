import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export default function SEOHead({
  title = 'קרן להגאני - עורך דין רשלנות רפואית | ייצוג מקצועי לפיצויים',
  description = 'קרן להגאני - עורך דין מוביל לרשלנות רפואית ונזקי גוף. ייצוג מקצועי להשגת פיצוי מירבי. התקשרו: 054-564-5921',
  keywords = 'קרן להגאני, עורך דין רשלנות רפואית, עורך דין נזקי גוף, תביעות רשלנות רפואית, פיצויים, עורך דין תל אביב, keren lahagani, medical malpractice lawyer',
  canonicalUrl = 'https://www.klh-law.co.il',
  ogImage = 'https://www.klh-law.co.il/images/lawyer1200-630-comp.jpg'
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="קרן להגאני" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="Hebrew" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="קרן להגאני - משרד עורכי דין" />
      <meta property="og:locale" content="he_IL" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="geo.region" content="IL" />
      <meta name="geo.placename" content="תל אביב" />
      <meta name="geo.position" content="32.0853;34.7818" />
      <meta name="ICBM" content="32.0853, 34.7818" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="יגאל אלון 94 (מגדל אלון 2)" />
      <meta name="business:contact_data:locality" content="תל אביב" />
      <meta name="business:contact_data:country_name" content="ישראל" />
      <meta name="business:contact_data:phone_number" content="054-564-5921" />
      <meta name="business:contact_data:email" content="keren@klh-law.co.il" />
    </Head>
  );
}
