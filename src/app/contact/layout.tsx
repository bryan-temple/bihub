import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our team',
}

export default function ContactLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="bg-gray min-h-screen w-full container mt-56 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden">
          {children}
        </div>
      </div>
    )
  }