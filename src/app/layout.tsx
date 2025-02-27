import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

// Add Facebook Pixel type declaration
declare global {
  interface Window {
    fbq?: (command: string, eventName: string, params?: Record<string, any>) => void;
    _fbq?: any;
  }
}

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
  metadataBase: new URL('https://brilliance25.com'),
  keywords: ["Christian event", "spiritual growth", "relationship with God", "Graham Cooke", "virtual conference", "Christian conference", "spiritual transformation", "Christian teaching"],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brilliance25.com',
    siteName: 'Brilliance 2025',
    title: 'Brilliance 2025 - March 21st-23rd 2025 Virtual Event',
    description: 'Step into a 3-day transformational online experience hosted by leading voice Graham Cooke + Team. Discover the proven path to an extraordinary relationship with God.',
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Brilliance 2025 Virtual Event',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brilliance 2025 - Discover an Extraordinary Relationship With God',
    description: 'Join us March 21st-23rd 2025 for a transformative 3-day virtual experience with Graham Cooke + Team.',
    images: ['/hero-bg.jpg'],
    creator: '@BrilliantPerspectives',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link 
          rel="icon" 
          type="image/png" 
          href="/Brilliant_ICON_Full-Color.png?v=1"
        />
        <link
          rel="shortcut icon"
          href="/Brilliant_ICON_Full-Color.png?v=1"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/Brilliant_ICON_Full-Color.png?v=1"
        />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '120417822121950');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=120417822121950&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>
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
