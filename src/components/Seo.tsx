import { Metadata } from 'next';
import Script from 'next/script';

export function generateMetadata({
  title,
  description,
  canonicalUrl,
  ogImage,
}: {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
}): Metadata {
  return {
    title: `${title} | Bihub Technology`,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Bihub Technology',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

interface StructuredDataProps {
  data: Record<string, any>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => (
  <Script
    id="structured-data"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export const HomePageSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bihub Technology",
    "url": "https://www.bihub.tech",
    "logo": "https://www.bihub.tech/logo.png",
    "sameAs": [
      "https://www.facebook.com/bihubtech",
      "https://www.twitter.com/bihubtech",
      "https://www.linkedin.com/company/bihubtech"
    ],
    "description": "Bihub Technology crafts digital solutions that push boundaries while ensuring inclusivity."
  };

  return <StructuredData data={schemaData} />;
};