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
      <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          {children}
        </div>
      </div>
    )
  }