import type { Metadata } from 'next'
import ChaleAOrigemClient from './ChaleAOrigemClient'

export const metadata: Metadata = {
  title: 'Chalé A Origem — A Moita | Refúgio Natural',
  description:
    'Chalé exclusivo no Cerrado. 4 hóspedes, 2 quartos, vista para a natureza preservada. Reserve direto.',
  alternates: {
    canonical: 'https://www.moitanativa.com.br/chaleAOrigem',
  },
  openGraph: {
    title: 'Chalé A Origem — A Moita | Refúgio Natural',
    description:
      'Chalé exclusivo no Cerrado. 4 hóspedes, 2 quartos, vista para a natureza preservada. Reserve direto.',
    url: 'https://www.moitanativa.com.br/chaleAOrigem',
    siteName: 'A Moita',
    images: [
      {
        url: 'https://www.moitanativa.com.br/assets/branding/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chalé A Origem — Refúgio Natural no Cerrado',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chalé A Origem — A Moita | Refúgio Natural',
    description:
      'Chalé exclusivo no Cerrado. 4 hóspedes, 2 quartos, vista para a natureza preservada.',
    images: ['https://www.moitanativa.com.br/assets/branding/og-image.jpg'],
  },
}

export default function ChaleAOrigemPage() {
  return <ChaleAOrigemClient />
}
