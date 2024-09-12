import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bihub Technology',
  description: 'Innovative and accessible web solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-navy text-beige min-h-screen">
        <div className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 z-10">
            <div className="container mx-auto px-4 py-8 h-full flex flex-col">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}