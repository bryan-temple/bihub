import React from 'react';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      {children}
    </div>
  );
}