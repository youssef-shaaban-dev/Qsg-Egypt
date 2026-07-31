import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const BASE_URL = 'https://qsgegypt.net';

interface SeoProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
}

export default function Seo({ title, description, canonicalPath, ogImage }: SeoProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  const normalizedPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  
  const enUrl = `${BASE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;
  const arUrl = `${BASE_URL}/ar${normalizedPath === '/' ? '' : normalizedPath}`;
  
  const currentUrl = currentLang === 'ar' ? arUrl : enUrl;

  return (
    <Helmet>
      <html lang={currentLang} dir={currentLang === 'ar' ? 'rtl' : 'ltr'} />
      <title>{title} | QSG Egypt</title>
      <meta name="title" content={`${title} | QSG Egypt`} />
      <meta name="description" content={description} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* hreflang tags for bilingual SEO */}
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ar" href={arUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={`${title} | QSG Egypt`} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={`${BASE_URL}${ogImage}`} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={`${title} | QSG Egypt`} />
      <meta property="twitter:description" content={description} />
      {ogImage && <meta property="twitter:image" content={`${BASE_URL}${ogImage}`} />}
    </Helmet>
  );
}
