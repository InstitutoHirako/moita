import type { Metadata, Viewport } from 'next'
import { Figtree } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'A Moita — Refúgio Natural | Abadiânia-GO',
  description:
    'Refúgio de ecoturismo no Cerrado. Chalés exclusivos às margens do Rio Capivari, em Abadiânia-GO.',
  keywords: [
    'ecoturismo',
    'chalé cerrado',
    'Abadiânia',
    'Rio Capivari',
    'refúgio natural',
    'hospedagem Goiás',
  ],
  authors: [{ name: 'A Moita' }],
  alternates: {
    canonical: 'https://www.moitanativa.com.br',
  },
  openGraph: {
    title: 'A Moita — Refúgio Natural | Abadiânia-GO',
    description:
      'Refúgio de ecoturismo no Cerrado. Chalés exclusivos às margens do Rio Capivari, em Abadiânia-GO.',
    url: 'https://www.moitanativa.com.br',
    siteName: 'A Moita',
    images: [
      {
        url: 'https://www.moitanativa.com.br/assets/branding/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'A Moita — Refúgio Natural no Cerrado',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Moita — Refúgio Natural | Abadiânia-GO',
    description:
      'Refúgio de ecoturismo no Cerrado. Chalés exclusivos às margens do Rio Capivari.',
    images: ['https://www.moitanativa.com.br/assets/branding/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

// Analytics configuration
const GA_MEASUREMENT_ID = 'G-3C73MX0NKB'
const GTM_ID = 'GTM-NQSDS88L'
const isProduction = process.env.NODE_ENV === 'production'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={figtree.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        {/* Google Tag Manager */}
        {isProduction && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}

        {/* Google Analytics 4 */}
        {isProduction && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                    custom_map: {
                      'custom_dimension_1': 'environment'
                    }
                  });
                  
                  // Set environment dimension
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    'environment': 'production'
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${figtree.className} text-body bg-body font-body antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        {isProduction && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  )
}
