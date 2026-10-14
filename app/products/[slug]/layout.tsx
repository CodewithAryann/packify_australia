import { Metadata } from 'next'
import { productsData } from '@/lib/products-data'

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = productsData[params.slug as keyof typeof productsData]
  if (!product) return {}
  const kw = product.keywords?.join(', ') || ''
  return {
    title: `${product.title} | Custom Boxes Australia | Packify Custom Boxes`,
    description: product.metaDescription,
    keywords: `${kw}, custom printed boxes Australia, eco-friendly packaging, free Australia-wide shipping, no minimums`,
    alternates: { canonical: `https://packifycustomboxes.com.au/products/${params.slug}/` },
  }
}

export async function generateStaticParams() {
  return Object.keys(productsData).map((key) => ({
    slug: productsData[key as keyof typeof productsData].slug,
  }))
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}