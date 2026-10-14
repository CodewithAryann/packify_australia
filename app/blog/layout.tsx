import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Packaging Blog, Design & Sourcing Tips | Packify',
  description: 'Practical guides for ecommerce brands, food, and beauty sellers: how to design boxes that ship safely, choose materials, and control packaging costs.',
  keywords: 'custom packaging blog Australia, eco-friendly packaging 2025, mailer vs rigid boxes, sustainable packaging, Packify Custom Boxes',
  alternates: { canonical: 'https://packifycustomboxes.com.au/blog/' },
  openGraph: {
    title: 'Custom Packaging Blog, Design & Sourcing Tips | Packify',
    description: 'Practical guides for ecommerce brands, food, and beauty sellers: how to design boxes that ship safely, choose materials, and control packaging costs.',
    url: 'https://packifycustomboxes.com.au/blog/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Packify Custom Boxes Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Packaging Blog, Design & Sourcing Tips | Packify',
    description: 'Practical guides for ecommerce brands, food, and beauty sellers: how to design boxes that ship safely, choose materials, and control packaging costs.',
    images: ['/images/og-image.webp'],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
