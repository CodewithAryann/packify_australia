import PageAccent from '@/components/PageAccent'
import { Metadata } from 'next'
import Link from 'next/link'
import ProductGrid from '@/components/ProductGrid'
import { BreadcrumbListSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Custom Packaging Boxes | Mailer, Tuck, Rigid & More | Packify Australia',
  description: 'Browse custom boxes by style: mailer boxes, tuck boxes, rigid boxes, dispenser boxes, cosmetic boxes, and more. No minimum order. Free Australia-wide shipping. 8–10 day turnaround.',
  keywords: 'custom boxes, custom packaging boxes Australia, mailer boxes, tuck boxes, rigid boxes, cosmetic boxes, wholesale packaging, Packify Custom Boxes',
  alternates: { canonical: 'https://packifycustomboxes.com.au/products/' },
  openGraph: {
    title: 'Custom Packaging Boxes | Mailer, Tuck, Rigid & More | Packify Australia',
    description: 'Browse custom boxes by style. No minimum order. Free Australia-wide shipping. 8–10 day turnaround.',
    url: 'https://packifycustomboxes.com.au/products/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Custom Packaging Boxes Australia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Packaging Boxes | Packify Australia',
    description: 'Mailer, tuck, rigid boxes and more. No minimums. Free Australia-wide shipping.',
    images: ['/images/og-image.webp'],
  },
}

export default function ProductsIndexPage() {
  return (
    <div className="min-h-screen bg-kraft-50">
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com.au/' },
          { name: 'Products', url: 'https://packifycustomboxes.com.au/products/' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-6 pt-[6rem] pb-12">
        <nav className="flex items-center gap-2 text-sm text-ink/60 mb-8">
          <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <span className="text-ink/30">›</span>
          <span className="text-ink font-semibold">Custom Packaging Boxes</span>
        </nav>

        <header className="relative mb-4 md:pr-44">
          <PageAccent variant="wattle" inline />
          <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">Shop by style</p>
          <h1 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-ink mb-4">
            Custom Packaging Boxes <span className="text-orange-600">Australia</span>
          </h1>
          <p className="text-lg text-ink/60">
            Mailer boxes for e-commerce. Tuck boxes for cosmetics and retail. Rigid boxes for luxury and gifts. Choose the custom box style that fits your product. No minimums. Free Australia-wide shipping. 8–10 day turnaround.
          </p>
        </header>

        <ProductGrid />
      </div>
    </div>
  )
}
