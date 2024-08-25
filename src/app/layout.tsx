import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

const ThreeDScene = dynamic(() => import('@/components/ThreeDScene'), { ssr: false });

export const metadata = {
  title: 'Bihub Technology',
  description: 'Innovative and accessible web solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-navy min-h-screen">
        <div className="relative min-h-screen overflow-hidden">
          <ThreeDScene />
          <div className="absolute inset-0 z-10">
            <div className="container mx-auto px-4 py-8 h-full flex flex-col">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}