import { AusFlag, Kangaroo, CricketBall } from '@/components/AusMotifs'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ProductDetail from '@/components/ProductDetail'
import ProductTabs from '@/components/ProductTabs'
import ProductQuoteForm from '@/components/ProductQuoteForm'
import ProductOverview from '@/components/ProductOverview'
import ProductInserts from '@/components/ProductInserts'
import ProductSeoSection from '@/components/ProductSeoSection'
import { productsData } from '@/lib/products-data'
import ProductSpecsTable from '@/components/ProductSpecsTable'
import { BreadcrumbSchema } from '@/components/JsonLd'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = productsData[params.slug as keyof typeof productsData]
  if (!product) return { title: 'Product Not Found' }
  const keywords = product.keywords?.join(', ') || 'custom packaging boxes, Packify Custom Boxes'
  const url = `https://packifycustomboxes.com.au/products/${params.slug}/`
  const title = (product as any).seoTitle || product.title
  return {
    title,
    description: product.metaDescription,
    keywords: `${keywords}, custom printed boxes Australia, eco-friendly packaging, free Australia-wide shipping, no minimums`,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: product.metaDescription,
      url,
      type: 'website',
      siteName: 'Packify Custom Boxes',
      images: [{ url: product.mainImage, width: 1200, height: 630, alt: product.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: product.metaDescription,
      images: [product.mainImage],
    },
  }
}

export default function ProductPage({ params }: Props) {
  const product = productsData[params.slug as keyof typeof productsData]

  if (!product) {
    notFound()
  }

  // Optional long-form overview / learn-more content
  const productAny = product as any
  const productOverview = productAny.productOverview || null
  const overviewLearnMore = productOverview?.learnMore || null
  const learnMoreSection = productAny.learnMoreSection || null

  return (
    <div className="bg-kraft-50 min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com.au/' },
          { name: 'Products', url: 'https://packifycustomboxes.com.au/products/' },
          { name: product.title },
        ]}
      />
      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-[6rem] pb-4">
        <nav className="flex items-center gap-2 text-sm text-ink/60">
          <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <span className="text-ink/30">/</span>
          <Link href="/products/" className="hover:text-orange-600 transition-colors">Products</Link>
          <span className="text-ink/30">/</span>
          <span className="text-ink font-semibold">{product.title}</span>
        </nav>
      </div>

      {/* Hero Product Detail Section */}
      {'learnMoreSection' in product && 'capabilitiesSection' in product && 'customization' in product ? (
        <main className="dieline notch-tl max-w-6xl mx-auto p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 bg-white">
          <ProductDetail product={product} />
          <div id="quote-form" className="md:sticky md:top-32 md:self-start">
            <ProductQuoteForm productName={(product as any).title} />
          </div>
        </main>
      ) : (
        <main className="dieline notch-tl max-w-6xl mx-auto p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 bg-white">
          <div id="quote-form" className="md:sticky md:top-32 md:self-start">
            <ProductQuoteForm productName={(product as any).title} />
          </div>
        </main>
      )}
      {/* SEO Content Section */}
      <ProductSeoSection productSlug={params.slug} />

      {/* Product Specification Table */}
      <ProductSpecsTable productSlug={params.slug} />

      {/* Product Inserts Section */}
      {params.slug === 'mailer-boxes' && (
        <ProductInserts productType="mailer" />
      )}

      {/* Product Variants Grid */}
      {'variants' in product && product.variants && product.variants.length > 0 && (
        <section className="relative max-w-7xl mx-auto px-6 py-20 overflow-hidden">
          <div className="relative">
            {/* Section Header */}
            <div className="relative mb-12 max-w-2xl md:pr-40">
              <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3 gap-1.5">
                <AusFlag className="w-4 h-2" /> Made to order in Australia
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-ink mb-4">
                {product.title} <span className="text-orange-600">Collection</span>
              </h2>
              <p className="text-lg text-ink/60">
                Explore our premium selection of {product.title.toLowerCase()} designed to protect and elevate your brand
              </p>
              <Kangaroo className="hidden md:block absolute -right-32 -top-4 w-28 h-auto" />
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
              {'variants' in product && product.variants.map((variant: typeof product.variants[number], index: number) => {
                const variantSlug = variant.name
                  .toLowerCase()
                  .replace(/\s+/g, '-')
                  .replace(/[^\w-]/g, '')

                return (
                  <Link
                    key={index}
                    href={`/products/${params.slug}/${variantSlug}/`}
                    className="group dieline notch-sm-tl relative bg-white overflow-hidden hover:border-orange-500 transition-colors duration-300"
                  >
                    <div className="relative bg-kraft-50 aspect-square overflow-hidden dieline-b">
                      <img
                        src={variant.image}
                        alt={variant.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        width={336}
                        height={336}
                      />
                    </div>
                    <div className="p-4 text-left">
                      <h3 className="font-bold text-base text-ink mb-1 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {variant.name}
                      </h3>
                      <span className="text-xs font-bold uppercase tracking-wide text-orange-600">View details</span>
                    </div>
                    <div className="aus-stripe absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden="true" />
                  </Link>
                )
              })}

              {/* Custom Quote CTA Card */}
              <div className="notch-tl relative bg-ink text-white overflow-hidden flex flex-col items-center justify-center p-8 text-center min-h-[280px]">
                <CricketBall className="w-10 h-10 mb-4" />
                <h3 className="font-display text-xl font-black uppercase tracking-tight leading-tight mb-2">
                  Need Something Custom?
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  We create fully customised packaging tailored to your exact specifications: any size, style, or finish.
                </p>
                <Link
                  href="/get-quote/"
                  className="notch-sm-tl inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide px-6 py-3 text-sm transition-colors"
                >
                  Get Custom Quote
                </Link>
              </div>
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
              <Link
                href="#quote-form"
                className="dieline inline-flex items-center gap-3 text-ink hover:bg-white font-bold uppercase tracking-wide px-8 py-4 transition-colors"
              >
                Request a Quote for Any Size
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Materials, Printing, Finishes Tabs */}
      <div className="bg-white">
        <ProductTabs productSlug={params.slug} />
      </div>

      {/* Product Overview Section (hero-style summary) */}
      <ProductOverview product={product} />

      {/* Learn More / Long-Form Content – similar to live site */}
      {(productOverview || learnMoreSection) && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          {/* Heading & intro */}
          <div className="mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-ink mb-4">
              {productOverview?.title || `Learn More About Custom ${product.title}`}
            </h2>
            {productOverview?.description && (
              <p className="text-lg text-ink/70 leading-relaxed">
                {productOverview.description}
              </p>
            )}
          </div>

          {/* Key bullet points */}
          {productOverview?.bullets && productOverview.bullets.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {productOverview.bullets.map((bullet: any, i: number) => (
                <article
                  key={i}
                  className="dieline notch-sm-tl bg-white p-6"
                >
                  <h3 className="text-lg font-bold text-ink mb-2">
                    {bullet.title}
                  </h3>
                  <p className="text-ink/70 leading-relaxed">
                    {bullet.description}
                  </p>
                </article>
              ))}
            </div>
          )}

          {/* Deep-dive learn-more sections (subheadings & paragraphs) */}
          {overviewLearnMore?.sections && overviewLearnMore.sections.length > 0 && (
            <div className="space-y-8 mb-12">
              {overviewLearnMore.sections.map((section: any, idx: number) => (
                <div key={idx}>
                  {section.heading && (
                    <h3 className="font-display text-2xl font-black uppercase tracking-tight text-ink mb-3">
                      {section.heading}
                    </h3>
                  )}
                  {section.content && (
                    <p className="text-ink/70 leading-relaxed mb-3">
                      {section.content}
                    </p>
                  )}
                  {section.list && section.list.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-ink/70">
                      {section.list.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Feature-style learn more (from learnMoreSection.features) */}
          {learnMoreSection?.features && learnMoreSection.features.length > 0 && (
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {learnMoreSection.features.map((feature: any, i: number) => (
                <article
                  key={i}
                  className="dieline notch-sm-tl bg-white p-6"
                >
                  <h3 className="text-lg font-bold text-ink mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-ink/70 leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          )}

          {/* Simple FAQ list (non-collapsing, SEO-friendly) */}
          {learnMoreSection?.faqs && learnMoreSection.faqs.length > 0 && (
            <div className="dieline-t pt-8 space-y-6">
              {learnMoreSection.faqs.map((faq: any, idx: number) => (
                <div key={idx}>
                  <h3 className="text-xl font-bold text-ink mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-ink/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  )
}