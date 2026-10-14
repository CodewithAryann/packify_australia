import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getIndustryBySlug, industries } from '@/lib/industries-data'
import IndustryProductClient from './IndustryProductClient'
import { BreadcrumbSchema, FAQSchema } from '@/components/JsonLd'
import { getProductMeta, getProductLearnMore, getProductOverview, getProductImages, getProductHighlight } from '@/lib/industry-product-content'

type Props = { params: { slug: string; product: string } }

function nameToSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export async function generateStaticParams() {
  const paths: { slug: string; product: string }[] = []
  for (const industry of industries) {
    for (const product of industry.products) {
      paths.push({ slug: industry.slug, product: nameToSlug(product.name) })
    }
  }
  return paths
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ind = getIndustryBySlug(params.slug)
  if (!ind) return {}
  const product = ind.products.find((p) => nameToSlug(p.name) === params.product)
  if (!product) return {}
  const displayName = product.name.toLowerCase().startsWith('custom')
    ? product.name
    : `Custom ${product.name}`
  // Per-product SEO metadata from the Ahrefs content batches; mechanical
  // formula remains the fallback for products without unique content yet.
  const meta = getProductMeta(ind.slug, params.product)
  const title = meta.seoTitle || `${displayName} | Packify Custom Boxes`
  const description = meta.metaDescription || product.description
  return {
    title,
    description,
    alternates: { canonical: `/industries/${ind.slug}/${params.product}/` },
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: 'Packify Custom Boxes',
    },
  }
}

export default function IndustryProductPage({ params }: Props) {
  const ind = getIndustryBySlug(params.slug)
  if (!ind) notFound()
  const product = ind.products.find((p) => nameToSlug(p.name) === params.product)
  if (!product) notFound()

  // Build-time content lookups — keeps industry-product-content.ts (447KB
  // of source) out of the client JS bundle.
  const productSlug = params.product
  const overview = getProductOverview(ind.slug, productSlug)
  const learnMore = getProductLearnMore(ind.slug, productSlug)
  const highlight = getProductHighlight(ind.slug, productSlug)
  const images = getProductImages(ind.slug, productSlug)

  const relatedImages: Record<string, string> = {}
  ind.products.forEach((p) => {
    const pSlug = nameToSlug(p.name)
    relatedImages[pSlug] = getProductImages(ind.slug, pSlug)[0]
  })

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com.au/' },
          { name: `${ind.name} Packaging`, url: `https://packifycustomboxes.com.au/industries/${ind.slug}/` },
          { name: product!.name, url: `https://packifycustomboxes.com.au/industries/${ind.slug}/${params.product}/` },
        ]}
      />
      <FAQSchema faqs={ind.faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <IndustryProductClient
        ind={ind}
        product={product!}
        overview={overview}
        learnMore={learnMore}
        highlight={highlight}
        images={images}
        relatedImages={relatedImages}
      />
    </>
  )
}
