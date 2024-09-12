'use client';

import dynamic from 'next/dynamic';
import Header from './header';
import Footer from './footer';

const ThreeDBackground = dynamic(() => import('./ThreeDBackground'), { ssr: false });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThreeDBackground />
      <div className="relative z-10">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}