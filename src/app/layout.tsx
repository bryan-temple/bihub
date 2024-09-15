import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import AnimationWrapper from '../components/AnimationWrapper'
import NavBar from '@/components/Navbar'

const founderGrotesk = localFont({
  src: [
    {
      path: '../fonts/FoundersGrotesk-Light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/FoundersGrotesk-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/FoundersGrotesk-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/FoundersGrotesk-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-founder-grotesk',
})

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
    <html lang="en" className={founderGrotesk.variable}>
      <body>
        <NavBar />
        <AnimationWrapper>
          {children}
        </AnimationWrapper>
      </body>
    </html>
  )
}