import Head from 'next/head';

const SEOHead = ({ title, description, canonicalUrl, ogImage }) => (
  <Head>
    <title>{title} | Bihub Technology</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalUrl} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalUrl} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />
  </Head>
);

const StructuredData = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

const HomePageSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bihub Technology",
    "url": "https://www.bihub.tech",
    "logo": "https://www.bihub.tech/logo.png",
    "sameAs": [
      "https://www.facebook.com/bi Hub",
      "https://www.twitter.com/bihub_tech",
      "https://www.linkedin.com/company/bihub-technology",
      "https://www.instagram.com/bihub_tech"
    ],
    "description": "Bihub Technology crafts digital solutions that push boundaries while ensuring inclusivity."
  };

  return <StructuredData data={schemaData} />;
};

export { SEOHead, StructuredData, HomePageSchema };