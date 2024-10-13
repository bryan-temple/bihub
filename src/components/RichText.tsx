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
    <div className={`company-intro ${className}`} style={style}>
      <h2 className="text-xl mb-4">{tagline}</h2>
      <p className="text-4xl sm:text-6xl pl-4 font-thin text-navy content-center max-w-5xl mb-4">{description}</p>
    </div>
  );
};

export default CompanyIntro;