import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brilliance 2025 - Discover an Extraordinary Relationship With God",
  description: "Join us March 21st-23rd 2025 for a transformative 3-day virtual experience with Graham Cooke + Team. Discover the proven path to an extraordinary relationship with God.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link 
          rel="icon" 
          type="image/png" 
          href="/favicon.png"
        />
        <Script id="brilliant-tracking" strategy="beforeInteractive">
          {`
              var head = document.head;
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = "https://t.mybrilliant.app/v1/lst/universal-script?ph=2e5b64900a084ea4a2c585fdd71057b618ff67818720df62e56696dee06253f0&tag=!clicked&ref_url=" + encodeURI(document.URL);
              head.appendChild(script);
          `}
        </Script>
      </head>
      <body className={`overflow-x-hidden min-h-screen bg-black antialiased ${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
        <script src="https://cdn.popupsmart.com/bundle.js" data-id="790100" async defer></script>
      </body>
    </html>
  )
}
