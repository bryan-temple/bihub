"use client"
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  tags?: string[];
  link: string;
  linkText: string;
  className?: string;
  accent?: string;
}

interface SegmentedBarProps {
  segments: number;
  filledSegments: number;
  color: string;
}

const SegmentedBar: React.FC<SegmentedBarProps> = ({ segments, filledSegments, color }) => (
  <div className="w-full h-4 bg-gray-200 rounded-full flex overflow-hidden">
    {[...Array(segments)].map((_, i) => (
      <div 
        key={i} 
        className={`flex-1 ${i < filledSegments ? color : 'bg-gray-200'} ${i > 0 ? 'border-l border-white' : ''}`}
      />
    ))}
  </div>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, tags, link, linkText, className = '', accent }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      <h3 
        className={`text-xl font-bold mb-4 ${accent ? 'border-l-4 pl-3' : ''} transition-all duration-300 ${isHovered ? 'border-l-8' : ''}`}
        style={{ borderColor: accent }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
      <span className="text-gray-400 font-semibold flex items-center cursor-not-allowed">
        {linkText} <ArrowRight className="ml-2 h-4 w-4" />
      </span>
    </div>
  );
};

const SEOCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-lg shadow-md relative overflow-hidden">
      <h3 
        className={`text-xl font-bold mb-4 border-l-4 border-green-500 pl-3 transition-all duration-300 ${isHovered ? 'border-l-8' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        SEO
      </h3>
      <p className="text-gray-600 mb-4">
        Optimizing your online presence requires a strategic approach, and our SEO experts ensure your website not only climbs the search rankings but also engages your target audience effectively.
      </p>
      <div className="space-y-4 mb-4">
        <div>
          <span className="text-sm font-medium text-orange-400 block mb-1">BEFORE</span>
          <SegmentedBar segments={10} filledSegments={2} color="bg-orange" />
        </div>
        <div>
          <span className="text-sm font-medium text-green-500 block mb-1">AFTER</span>
          <SegmentedBar segments={10} filledSegments={9} color="bg-green" />
        </div>
      </div>
      <Link href="/seo" className="text-blue-600 font-semibold flex items-center hover:underline">
        See plans <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

const ImageCard: React.FC = () => (
  <div className="relative rounded-lg overflow-hidden shadow-md ">
    <Image src="/developer-image.jpg" alt="Leaside Blvd" layout="fill" objectFit="cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-6">
      <span className="text-white text-sm font-semibold mb-2">FEATURED WORK</span>
      <h4 className="text-white text-2xl font-bold mb-4">Leaside Blvd</h4>
      <Link href="/case-study" className="inline-flex items-center text-white font-semibold hover:underline">
        Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  </div>
);

const ServicesShowcase: React.FC = () => {
  return (
    <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 relative" id="services-showcase" >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">How can we help you?</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column: Introduction and CTA */}
          <div className="lg:w-1/4">
            <h2 className="text-3xl font-regular mb-4">Our Services</h2>
            <p className="text-gray-600 mb-8">
              Creative solutions crafted to help you achieve the perfect digital presence
            </p>
            {/* <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition inline-flex items-center mb-4">
              Request a Proposal <ArrowRight className="ml-2 h-4 w-4" />
            </Link> */}
            <Link href="/contact" className="text-navy font-semibold flex items-center hover:underline">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Right column: Services */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Web Design & Development"
                description="Every web design project at Bihub Technology stands out as unique, receiving unparalleled attention and care. Our team, composed of award-winning web designers and web developers, is renowned for its ability to craft visually striking websites."
                tags={["SHOPIFY", "WEBFLOW", "UI/UX", "CUSTOM DESIGN", "TESTING"]}
                link="/web-design"
                linkText="Web Design Service"
                className="lg:col-span-2"
                accent="#3B82F6"
              />
              
              <SEOCard />
              
              <ImageCard />
              
              <ServiceCard
    title="Digital Accessibility"
    description="Ensure your digital presence is inclusive and compliant with accessibility standards. Our experts optimize your websites and applications to provide equal access and opportunities for all users, regardless of their abilities."
    tags={["WCAG COMPLIANCE", "SCREEN READER OPTIMIZATION", "KEYBOARD NAVIGATION", "COLOR CONTRAST", "ALT TEXT", "ARIA ATTRIBUTES"]}
    link="/accessibility"
    linkText="Learn more"
    accent="#8B5CF6"
  />
              <ServiceCard
                title="Visual Branding"
                description="Shaping your brand's visual identity requires precision, creativity, and expertise, all of which our award-winning team delivers. From designing logos to crafting cohesive color palettes, we ensure your brand communicates effectively across all channels."
                tags={["LOGO DESIGN", "TYPOGRAPHY", "ICONOGRAPHY", "BRAND STYLE GUIDE", "COLOR PALETTE", "TEXTURES AND PATTERNS"]}
                link="/visual-branding"
                linkText="Learn more"
                accent="#F59E0B"
                          />
              
              {/* <ServiceCard
                title="Brand Research & Strategy"
                description="Comprehensive brand research and strategy are the foundations of effective branding. Through in-depth analysis of competitors, market trends, and target audiences, we inform strategic decision-making to shape your brand's future."
                tags={["BRAND POSITIONING", "COMPETITOR ANALYSIS", "MARKET TREND ANALYSIS", "BRAND MESSAGING FRAMEWORK", "BRAND VOICE AND TONE", "BRAND VALUE AND PROMISE"]}
                link="/brand-strategy"
                linkText="Learn more"
                accent="#10B981"
              /> */}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {[
                { title: "Consultation & Audit", description: "Tailored solutions for your business through one-on-one personalized sessions." },
                { title: "Graphic Design", description: "Impactful marketing visuals and illustrations that elevate brand recognition." },
                { title: "Content Marketing", description: "Unique content that adds value, boosts organic reach, and engages your audience." },
                { title: "User Interface & User Experience", description: "User-centric designs ensuring intuitive and satisfying digital experiences." },
              ].map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  link={`/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  linkText="Learn more"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;