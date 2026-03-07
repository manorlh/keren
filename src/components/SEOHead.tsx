/**
 * SEO extra meta tags for App Router.
 * Export getSEOExtraMeta() and use it in layout.tsx metadata.other so these tags are emitted.
 * (next/head is Pages Router only; App Router uses the metadata API.)
 */

const BASE_URL = 'https://www.klh-law.co.il';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const defaultProps: Required<SEOHeadProps> = {
  title: 'קרן להגאני - עורכת דין רשלנות רפואית ונזקי גוף | ייצוג מקצועי לפיצויים',
  description: 'קרן להגאני - עורכת דין מובילה לרשלנות רפואית ונזקי גוף. ייצוג מקצועי להשגת פיצוי מירבי. התקשרו: 054-564-5921',
  keywords: 'קרן להגאני, עורכת דין רשלנות רפואית ונזקי גוף, תביעת רשלנות רפואית ונזקי גוף, פיצוי רשלנות רפואית ונזקי גוף, עורכת דין מומחית לרשלנות רפואית ונזקי גוף, עורכת דין נזקי גוף, תביעות רשלנות רפואית ונזקי גוף, פיצויים, עורכת דין תל אביב, keren lahagani, medical malpractice lawyer',
  canonicalUrl: BASE_URL,
  ogImage: `${BASE_URL}/images/lawyer1200-630-comp.jpg`,
};

/**
 * Returns meta tag key-value pairs for Next.js metadata.other.
 * Use in layout: metadata = { other: { ...existing, ...getSEOExtraMeta() } }
 */
export function getSEOExtraMeta(props: SEOHeadProps = {}): Record<string, string> {
  const { canonicalUrl, ogImage } = { ...defaultProps, ...props };
  return {
    author: 'קרן להגאני',
    robots: 'index, follow',
    googlebot: 'index, follow',
    language: 'Hebrew',
    'revisit-after': '7 days',
    'geo.region': 'IL',
    'geo.placename': 'תל אביב',
    'geo.position': '32.0853;34.7818',
    ICBM: '32.0853, 34.7818',
    'business:contact_data:street_address': 'יגאל אלון 94 (מגדל אלון 2)',
    'business:contact_data:locality': 'תל אביב',
    'business:contact_data:country_name': 'ישראל',
    'business:contact_data:phone_number': '054-564-5921',
    'business:contact_data:email': 'keren@klh-law.co.il',
  };
}

export { defaultProps as defaultSEOHeadProps };
