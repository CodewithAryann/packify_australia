import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getIndustryBySlug, industries, navIndustries } from '@/lib/industries-data'
import { getProductImages } from '@/lib/industry-product-content'
import IndustryClient from './IndustryClient'
import { BreadcrumbSchema, FAQSchema } from '@/components/JsonLd'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ind = getIndustryBySlug(params.slug)
  if (!ind) return {}
  return {
    title: ind.metaTitle,
    description: ind.metaDesc,
    alternates: { canonical: `/industries/${ind.slug}/` },
    openGraph: {
      title: ind.metaTitle,
      description: ind.metaDesc,
      type: 'website',
      siteName: 'Packify Custom Boxes',
    },
  }
}

export default function IndustryPage({ params }: Props) {
  const ind = getIndustryBySlug(params.slug)
  if (!ind) notFound()

  // Build-time lookups so industry-product-content.ts and the full
  // industries list never ship in the client JS bundle.
  const related = ind.relatedSlugs
    .map((s) => navIndustries.find((n) => n.slug === s))
    .filter(Boolean) as typeof navIndustries

  const productImages: Record<string, string> = {}
  ind.products.forEach((product) => {
    const pSlug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    productImages[pSlug] = getProductImages(ind.slug, pSlug)[0]
  })

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com.au/' },
          { name: `${ind.name} Packaging`, url: `https://packifycustomboxes.com.au/industries/${ind.slug}/` },
        ]}
      />
      <FAQSchema faqs={ind.faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <IndustryClient ind={ind} related={related} productImages={productImages} />
    </>
  )
}
