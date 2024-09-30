import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  title: string;
  price: number;
  features: PlanFeature[];
  isPopular?: boolean;
}

const PlanCard: React.FC<Plan> = ({ title, price, features, isPopular }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md ${isPopular ? 'border-2 border-blue-500' : ''} relative`}>
    {isPopular && (
      <span className="bg-blue-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full absolute top-0 right-0 mt-4 mr-4">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-4xl font-bold mb-6">${price}<span className="text-xl text-gray-500">/mo</span></p>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <span>{feature.name}</span>
        </li>
      ))}
        </ul>
        {/* {`/contact?plan=${encodeURIComponent(title)}`} */}
    <Link href="/contact/seo" className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
      Choose Plan
    </Link>
  </div>
);

const SEOPlansPage: React.FC = () => {
  const plans: Plan[] = [
    {
      title: "Starter SEO",
      price: 199,
      features: [
        { name: "Keyword Research (5 keywords)", included: true },
        { name: "On-Page SEO for 5 pages", included: true },
        { name: "Monthly Performance Report", included: true },
        { name: "Google My Business Setup", included: true },
        { name: "Basic Link Building (2 links/mo)", included: true }
      ]
    },
    {
      title: "Growth SEO",
      price: 499,
      features: [
        { name: "Keyword Research (15 keywords)", included: true },
        { name: "On-Page SEO for 10 pages", included: true },
        { name: "Bi-weekly Performance Reports", included: true },
        { name: "Google My Business Optimization", included: true },
        { name: "Link Building (5 links/mo)", included: true },
        { name: "Content Creation (1 blog post/mo)", included: true },
        { name: "Basic Technical SEO Audit", included: true }
      ],
      isPopular: true
    },
    {
      title: "Pro SEO",
      price: 999,
      features: [
        { name: "Comprehensive Keyword Strategy", included: true },
        { name: "On-Page SEO for 20 pages", included: true },
        { name: "Weekly Performance Reports", included: true },
        { name: "Google My Business Management", included: true },
        { name: "Advanced Link Building (10 links/mo)", included: true },
        { name: "Content Strategy & Creation (2 posts/mo)", included: true },
        { name: "Full Technical SEO Implementation", included: true },
        { name: "Basic Conversion Rate Optimization", included: true },
        { name: "Competitor Analysis", included: true }
      ]
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">SEO Plans & Pricing</h1>
        <p className="text-xl text-gray-600 mb-12">Choose the perfect SEO plan to boost your online visibility and drive organic traffic.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose Bihub Technology for SEO?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Tailored Strategies</h3>
              <p className="text-gray-600">We create custom SEO plans that fit your specific business needs and budget, ensuring you get the most value for your investment.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Transparent Reporting</h3>
              <p className="text-gray-600">Stay informed with regular, easy-to-understand reports that showcase your SEO progress and ROI.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Agile Approach</h3>
              <p className="text-gray-600">As a startup ourselves, we understand the need for flexibility. We adapt our strategies quickly based on results and industry changes.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Dedicated Support</h3>
              <p className="text-gray-600">Work directly with our passionate team of SEO specialists who are committed to your success.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Online Presence?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact us today for a free SEO consultation and discover how we can help you achieve your digital marketing goals.</p>
          <Link href="/contact/seo" className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition text-lg font-semibold">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SEOPlansPage;