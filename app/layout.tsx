import type { Metadata } from 'next'
import { Inter, Big_Shoulders_Display } from 'next/font/google'
import { OrganizationSchema, WebSiteSchema } from '@/components/JsonLd'
// @ts-ignore: Allow side-effect CSS import without type declarations
import './globals.css'
import Header from '@/components/Header'
import { navIndustries } from '@/lib/industries-data'
import Footer from '@/components/Footer'
import Script from 'next/script'
import Tawk from '@/components/Tawk'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-body' })
const bigShoulders = Big_Shoulders_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700', '800', '900'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://packifycustomboxes.com.au'),

  alternates: {
    canonical: '/',
  },

  title: 'Custom Packaging Boxes Australia, Free Ship & No MOQ | Packify',
  description: 'Order custom printed boxes shipped free across Australia with no minimum and 8–10 day production. Mailers, rigid, tuck, food, and beauty boxes built to spec.',

  keywords:
    'custom packaging boxes, custom boxes with logo, wholesale custom boxes, custom printed boxes Australia, mailer boxes, tuck boxes, rigid boxes, cosmetic boxes, CBD boxes, subscription box packaging, kraft boxes, corrugated boxes, no minimum order, free design support, Packify Custom Boxes',

  authors: [{ name: 'Custom Box Australia' }],
  robots: 'index, follow',

  openGraph: {
    title: 'Custom Packaging Boxes Australia, Free Ship & No MOQ | Packify',
    description: 'Order custom printed boxes shipped free across Australia with no minimum and 8–10 day production. Mailers, rigid, tuck, food, and beauty boxes built to spec.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Packify Custom Boxes',
    url: 'https://packifycustomboxes.com.au',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Custom Packaging Boxes Australia',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Custom Packaging Boxes Australia, Free Ship & No MOQ | Packify',
    description: 'Order custom printed boxes shipped free across Australia with no minimum and 8–10 day production. Mailers, rigid, tuck, food, and beauty boxes built to spec.',
    images: ['/images/og-image.webp'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

        {/* Establish the connection to the Font Awesome CDN early. */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />

        {/* Favicons are file-convention based: app/favicon.ico, app/icon.png,
            app/apple-icon.png. Next.js injects the <link> tags automatically.
            Do NOT point these at .webp — Google's favicon crawler rejects WebP
            and falls back to the blank globe in search results. */}

        {/* Font Awesome: preload + non-blocking load so it doesn't delay first paint */}
        <link
          rel="preload"
          as="style"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          />
        </noscript>
        <Script id="load-fontawesome" strategy="afterInteractive">
          {`(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';document.head.appendChild(l);})();`}
        </Script>

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="tsfU_k96qBeW0MTfbS8ER5eUy1XQ_E4OMfKFUJSelPo"
        />

        {/* ✅ GOOGLE ANALYTICS (FIXED) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q9X5E4D8X4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q9X5E4D8X4', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <OrganizationSchema />
        <WebSiteSchema />
      </head>

      <body className={`${inter.variable} ${bigShoulders.variable} font-sans`}>
        <Suspense fallback={null}>
          <Header navIndustries={navIndustries} />
        </Suspense>

        <main className="min-h-screen">{children}</main>

        <Tawk />
        <Footer />
      </body>
    </html>
  )
}