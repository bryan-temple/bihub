// File: src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AnimationWrapper from '../components/AnimationWrapper'
import NavBar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BiHub Technology',
  description: 'Accessible and Innovative web solutions for your Digital Presence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <NavBar />
        <AnimationWrapper>
          {children}
        </AnimationWrapper>
      </body>
    </html>
  )
}