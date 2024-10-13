import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AnimationWrapper from "../components/AnimationWrapper";
import NavBar from "@/components/Navbar";
import OutlinedText from "@/components/OutlinedText";
import Script from 'next/script'
import Image from 'next/image';


const founderGrotesk = localFont({
  src: [
    {
      path: "../fonts/FoundersGrotesk-Light.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/FoundersGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/FoundersGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/FoundersGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-founder-grotesk",
});

export const metadata: Metadata = {
  title: "BiHub Technology",
  description:
    "We launch visionary brands and build exceptional digital experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={founderGrotesk.variable}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>
        <NavBar />
        <div className="relative min-h-screen mb-8">
          <div className="fixed inset-0 pointer-events-none ">
            <OutlinedText text="Bihub" outlineColor="#EEC9B6" opacity={0.2} />
          </div>
          <AnimationWrapper>{children}</AnimationWrapper>
        </div>
      </body>
    </html>
  );
}
