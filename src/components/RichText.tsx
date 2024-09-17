import React from 'react';

interface CompanyIntroProps {

  tagline: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const CompanyIntro: React.FC<CompanyIntroProps> = ({

  tagline,
  description,
  className = '',
  style = {},
}) => {
  return (
    <section className={`company-intro ${className}`} style={style}>
      <h2 className="text-xl mb-4">{tagline}</h2>
      <p className="text-6xl pl-4 font-extralight text-navy max-w-3xl">{description}</p>
    </section>
  );
};

export default CompanyIntro;