'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AusFlag, Kangaroo, CricketBall, CricketBat } from '@/components/AusMotifs'
import type { Industry, IndustryProduct } from '@/lib/industries-data'
import type { getProductLearnMore, getProductOverview, getProductHighlight } from '@/lib/industry-product-content'
import ProductSpecsTable from '@/components/ProductSpecsTable'
import QuoteRequestForm from '@/components/quote/QuoteRequestForm'

function nameToSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function hrefToTabSlug(href: string) {
  const map: Record<string, string> = {
    '/products/mailer-boxes': 'mailer-boxes',
    '/products/tuck-boxes': 'tuck-boxes',
    '/products/rigid-boxes': 'rigid-boxes',
    '/products/dispenser-boxes': 'dispenser-boxes',
    '/products/magnetic-closure': 'magnetic-closure',
    '/products/bakery-boxes': 'bakery-boxes',
    '/products/burger-boxes': 'burger-boxes',
  }
  return map[href.replace(/\/$/, '')] ?? 'tuck-boxes'
}


// ─── Quote Form ────────────────────────────────────────────────────────────
function QuoteForm({
  productName,
  industry,
  industrySlug,
}: {
  productName: string
  industry: string
  industrySlug: string
}) {
  return (
    <QuoteRequestForm
      variant="compact"
      source={`industry-product:${industry} / ${productName}`}
      productName={productName}
      industry={industry}
      industrySlug={industrySlug}
      showConsent
      submitLabel="Get a quote"
    />
  )
}

// ─── Feature icon helper (mirrors products variant page) ─────────────────────
function getFeatureIcon(feature: string): string {
  const map: Record<string, string> = {
    'Fast Turnaround': 'clock',
    'Full Color Printing': 'paint-swatch',
    'Free Color Printing': 'paint-swatch',
    'Full-Color Printing': 'paint-swatch',
    'Full-Color CMYK Printing': 'paint-swatch',
    'Design Support': 'paint-palette',
    'Free Design Support': 'paint-palette',
    'Free Shipping': 'delivery',
    'Free Australia-Wide Shipping': 'delivery',
  }
  return map[feature] || 'clock'
}

// ─── Capability icon helper, keyword based so it works for any industry ─────
function getCapabilityIcon(label: string) {
  const l = label.toLowerCase()

  if (l.includes('ship')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    )
  }
  if (l.includes('print') || l.includes('color') || l.includes('pantone')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  }
  if (l.includes('design') || l.includes('3d')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    )
  }
  if (l.includes('lead time') || l.includes('turnaround') || l.includes('production') || l.includes('day') || l.includes('fast')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
  if (l.includes('moq') || l.includes('minimum') || l.includes('order')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  }
  if (l.includes('eco') || l.includes('sustain') || l.includes('recycl') || l.includes('compost')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
  if (l.includes('die') || l.includes('plate') || l.includes('charge') || l.includes('fee')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
  if (l.includes('support') || l.includes('consult') || l.includes('expert') || l.includes('team')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
  if (l.includes('compliant') || l.includes('compliance') || l.includes('regulat') || l.includes('safe') || l.includes('quality') || l.includes('certif')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
  if (l.includes('moisture') || l.includes('barrier') || l.includes('resist')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.5c3 4 6 7.5 6 11a6 6 0 11-12 0c0-3.5 3-7 6-11z" />
      </svg>
    )
  }
  if (l.includes('material') || l.includes('stock') || l.includes('warehous')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  }

  // Default, checkmark / quality badge
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────
export default function IndustryProductClient({
  ind,
  product,
  overview,
  learnMore,
  highlight,
  images,
  relatedImages,
}: {
  ind: Industry
  product: IndustryProduct
  overview: ReturnType<typeof getProductOverview>
  learnMore: ReturnType<typeof getProductLearnMore>
  highlight: ReturnType<typeof getProductHighlight>
  images: string[]
  relatedImages: Record<string, string>
}) {
  const productSlug = nameToSlug(product.name)
  const tabSlug = hrefToTabSlug(product.href)
  const heroImage = images[0]

  return (
    <div className="bg-kraft-50 min-h-screen">

      {/* Enhanced Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-[6rem] pb-6">
        <nav className="flex items-center gap-2 text-sm flex-wrap">
          <Link href="/" className="text-ink/60 hover:text-orange-600 transition-colors flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
          <svg className="w-4 h-4 text-ink/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-ink/50">
            Industries
          </span>
          <svg className="w-4 h-4 text-ink/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href={`/industries/${ind.slug}/`} className="text-ink/60 hover:text-orange-600 transition-colors capitalize">
            {ind.name}
          </Link>
          <svg className="w-4 h-4 text-ink/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-ink font-semibold">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white notch-sm-tl p-8 md:p-12 dieline">

          {/* LEFT COLUMN - Product Details */}
          <section className="space-y-8">

            {/* Product Title with Badge */}
            <div>
              <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-4 gap-1.5"><AusFlag className="w-4 h-2" /> {ind.name} Packaging</p>
              <h1 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-ink leading-[0.95] mb-4">
                {product.name}
              </h1>
            </div>

            {/* Product Image */}
            <div className="relative group">
              <div className="relative bg-kraft-50 notch-sm-tl p-8 dieline group-hover:border-orange-200 transition-all duration-500">
                <div className="relative h-[400px]">
                  <Image
                    src={heroImage}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Product Description */}
            <div className="bg-kraft-50 p-8 notch-sm-tl border-2 border-orange-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-ink">Product Description</h2>
              </div>
              <p className="text-ink/70 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Enhanced Key Features */}
            {product.features?.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-ink">Key Features</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {product.features.map((feature, i) => (
                    <div
                      key={i}
                      className="group relative bg-white notch-sm-tl p-6 hover:transition-all duration-300 border-2 border-transparent hover:border-orange-200 text-center flex flex-col items-center justify-center min-h-[160px]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 notch-sm-tl transition-opacity duration-300" />
                      <div className="relative flex flex-col items-center justify-center">
                        <div className="w-16 h-16 mb-4 bg-orange-500 notch-sm-tl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ">
                          <Image
                            src={`/images/${getFeatureIcon(feature)}.webp`}
                            alt={feature}
                            width={32}
                            height={32}
                            className="group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <p className="text-sm font-semibold text-ink group-hover:text-orange-600 transition-colors">
                          {feature}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Back Button */}
            <Link
              href={`/industries/${ind.slug}/`}
              className="inline-flex items-center gap-2 bg-kraft-50 hover:from-gray-200 hover:to-gray-300 text-ink font-semibold px-8 py-4  hover:transition-all duration-300 group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              View All {ind.name} Products
            </Link>
          </section>

          {/* RIGHT COLUMN - Quote Form */}
          <section id="quote" className="lg:sticky lg:top-32 lg:self-start">
            <div className="bg-kraft-50 notch-sm-tl p-8 dieline ">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-500 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink">Request a Custom Quote</h3>
              </div>
              <QuoteForm productName={product.name} industry={ind.name} industrySlug={ind.slug} />
            </div>
          </section>
        </div>
      </div>

      {/* PRODUCT SPECIFICATION TABLE */}
      <ProductSpecsTable productSlug={tabSlug} />

      {/* PRODUCT OVERVIEW SECTION */}
      <ProductOverviewSection overview={overview} learnMore={learnMore} productName={product.name} />

      {/* ENHANCED LEARN MORE / FAQ / CTA SECTION */}
      <EnhancedLearnMoreSection ind={ind} product={product} highlight={highlight} overviewHeading={overview?.heading} />

      {/* ENHANCED RELATED PRODUCTS */}
      {ind.products.length > 1 && (
        <section className="relative max-w-7xl mx-auto px-6 py-20 overflow-hidden">

          {/* Background Decoration */}

          <div className="relative">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block p-3 bg-orange-500 notch-sm-tl mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight mb-4 text-ink">
                More {ind.name} Packaging
              </h2>
              <p className="text-lg text-ink/60 max-w-2xl mx-auto">
                Explore our complete collection of premium {ind.name.toLowerCase()} packaging solutions
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-16 h-1 bg-orange-500 rounded-full" />
                <div className="w-16 h-1 bg-orange-500 rounded-full" />
                <div className="w-16 h-1 bg-orange-500 rounded-full" />
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {ind.products
                .filter((p) => nameToSlug(p.name) !== productSlug)
                .slice(0, 9)
                .map((p, i) => {
                  const pImg = relatedImages[nameToSlug(p.name)] || '/images/banner.webp'
                  return (
                    <Link
                      key={i}
                      href={`/industries/${ind.slug}/${nameToSlug(p.name)}/`}
                      className="group relative bg-white notch-sm-tl overflow-hidden hover:transition-all duration-500 border-2 border-transparent hover:border-orange-200"
                    >
                      {/* Image Container */}
                      <div className="relative bg-kraft-50 aspect-square overflow-hidden">
                        <Image
                          src={pImg}
                          alt={p.name}
                          fill
                          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Quick View Badge */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 text-center">
                        <h3 className="font-bold text-base text-ink mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                          {p.name}
                        </h3>
                        <div className="flex items-center justify-center gap-2 text-sm text-ink/60 group-hover:text-orange-600 transition-colors">
                          <span className="font-medium">View Details</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </Link>
                  )
                })}

              {/* View All Card */}
              <Link
                href={`/industries/${ind.slug}/`}
                className="group relative bg-orange-500 notch-sm-tl overflow-hidden hover:transition-all duration-500 flex flex-col items-center justify-center p-8 text-center min-h-[280px] border-2 border-orange-400/20"
              >
                {/* Decorative Elements */}

                {/* Icon */}
                <div className="relative mb-4 p-4 bg-white/20 notch-sm-tl backdrop-blur-sm">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative space-y-3">
                  <h3 className="text-white font-bold text-lg leading-tight">
                    View All {ind.name} Products
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Explore our complete collection
                  </p>

                  {/* Arrow */}
                  <div className="inline-flex items-center gap-2 text-white font-semibold mt-4">
                    <span>See More</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Sparkle Effects */}
                <div className="absolute top-6 left-6 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse" />
                <div className="absolute top-12 right-8 w-1.5 h-1.5 bg-white rounded-full opacity-40 animate-pulse delay-75" />
                <div className="absolute bottom-8 right-6 w-2 h-2 bg-white rounded-full opacity-50 animate-pulse delay-150" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CAPABILITIES SECTION */}
      <CapabilitiesSection ind={ind} />

    </div>
  )
}

/* =========================
   PRODUCT OVERVIEW SECTION
   Mirrors the products variant page's "Product Overview" card - 
   built from getProductOverview() (body + bullets) and
   getProductLearnMore() (heading/body guide sections).
========================= */
function ProductOverviewSection({
  overview,
  learnMore,
  productName,
}: {
  overview: { heading?: string; body: string; bullets: string[] }
  learnMore: { heading: string; body: string }[]
  productName: string
}) {
  if (!overview) return null

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-16">
      <div className="bg-kraft-50/30 notch-sm-tl border-2 border-orange-100/50 p-10 md:p-12">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-4">
            {overview.heading
              ? overview.heading.replace(': ', ' | ')
              : `${productName.toLowerCase().startsWith('custom') ? productName : `Custom ${productName}`} | Materials, Printing, and Options`}
          </h2>
          {overview.body && (
            <p className="text-lg text-ink/70 max-w-4xl mx-auto leading-relaxed">
              {overview.body}
            </p>
          )}
        </div>

        {/* Bullet Points Grid */}
        {overview.bullets && overview.bullets.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {overview.bullets.map((bullet, i) => (
              <div
                key={i}
                className="group bg-white notch-sm-tl p-6 hover:transition-all duration-300 dieline hover:border-orange-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-500  flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-ink/70 text-sm leading-relaxed font-medium pt-2">
                    {bullet}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Learn More / Buying Guide */}
        {learnMore && learnMore.length > 0 && (
          <div className="bg-kraft-50 notch-sm-tl p-8 border-2 border-kraft-200">
            <h3 className="text-2xl font-bold text-ink mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-orange-500 rounded-full" />
              {overview.heading || `${productName} Buying Guide`}
            </h3>

            <div className="space-y-6">
              {learnMore.map((section, idx) => (
                <div key={idx}>
                  {section.heading && (
                    <h4 className="text-xl font-bold text-ink mb-3">
                      {section.heading}
                    </h4>
                  )}
                  {section.body && (
                    <p className="text-ink/70 leading-relaxed mb-4">
                      {section.body}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

/* =========================
   ENHANCED LEARN MORE SECTION
   Mirrors the products variant page's hero header + feature cards
   + FAQ accordion + CTA block, sourced from industry-level data
   (ind.capabilities, ind.faqs, ind.whyHeading / ind.whyBody).
========================= */
function EnhancedLearnMoreSection({ ind, product, highlight, overviewHeading }: { ind: Industry; product: IndustryProduct; highlight?: { subline: string; cards: { title: string; desc: string }[] }; overviewHeading?: string }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  // Per-product highlight cards (Ahrefs batches) replace the industry-level
  // capability cards; industry capabilities remain the fallback.
  const features = highlight?.cards ?? (ind.capabilities ?? []).slice(0, 3)

  const faqs = [
    ...(ind.faqs ?? []).map((f) => ({ question: f.q, answer: f.a })),
    { question: `What is the minimum order quantity for ${product.name}?`, answer: `We have no minimum order quantity. You can order as few as 1 unit or as many as 100,000+. Pricing scales with quantity, so larger orders receive significant discounts.` },
    { question: `How long does production take for ${product.name}?`, answer: `Standard production is 8-10 business days after artwork approval. Free dieline and design support runs before production begins.` },
  ]

  return (
    <section className="relative bg-kraft-50 py-20 overflow-hidden mt-8">
      <Kangaroo className="hidden lg:block absolute right-8 top-8 w-24 h-auto pointer-events-none" />

      {/* Decorative Background Elements */}

      <div className="relative max-w-7xl mx-auto px-6 space-y-20">

        {/* Hero Header with Icon */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-block p-4 bg-orange-500 notch-sm-tl mb-4">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tight text-ink">
            {highlight && overviewHeading ? overviewHeading : ind.whyHeading}
          </h2>
          <p className="text-xl text-ink/60 leading-relaxed max-w-3xl mx-auto">
            {highlight ? highlight.subline : ind.whyBody}
          </p>
        </div>

        {/* Feature Cards */}
        {features.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative bg-white p-8 notch-sm-tl hover:transition-all duration-300 dieline hover:border-orange-200"
              >
                <div className="absolute -top-6 left-8 p-4 bg-orange-500 notch-sm-tl group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                    {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />}
                    {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />}
                  </svg>
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-ink mb-3 group-hover:text-orange-600 transition">
                    {feature.title}
                  </h3>
                  <p className="text-ink/60 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FAQ Accordion */}
        {faqs.length > 0 && (
          <div className="bg-white p-10 notch-sm-tl dieline">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-orange-500 ">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-ink">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border-2 border-kraft-200 notch-sm-tl overflow-hidden hover:border-orange-300 transition"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center bg-kraft-50 hover:from-orange-50 hover:to-white transition group"
                  >
                    <span className="font-semibold text-ink pr-4 group-hover:text-orange-600 transition">
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center transition-transform ${openFaqIndex === idx ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`p-6 bg-white border-t-2 border-kraft-200 ${openFaqIndex !== idx ? 'sr-only' : ''}`}>
                    <p className="text-ink/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced CTA Section */}
        <div className="relative bg-orange-500 p-12 notch-sm-tl overflow-hidden">
          {/* Decorative Elements */}

          <div className="relative text-center text-white space-y-6">
            <h3 className="text-4xl md:text-5xl font-black">
              Get a Custom Quote for {product.name}
            </h3>
            <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto">
              No minimum order, free design support, and free Australia-wide shipping on every {ind.name.toLowerCase()} packaging order.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/get-quote/"
                className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold py-4 px-10  hover:hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get Custom Quote
              </Link>
            </div>

            <div className="pt-8 space-y-2 text-sm opacity-90">
              <p className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@packifycustomboxes.com.au
              </p>
              <p className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (307) 218-2883 (24/7 Support)
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

/* =========================
   ENHANCED CAPABILITIES SECTION
   Mirrors the products variant page's capabilities grid, sourced
   from ind.capabilities (title/desc) for the current industry.
========================= */
function CapabilitiesSection({ ind }: { ind: Industry }) {
  const items = ind.capabilities ?? []
  if (!items.length) return null

  return (
    <section className="relative bg-kraft-50 py-24 overflow-hidden">
      <div className="hidden lg:flex absolute left-8 top-10 items-end gap-2 rotate-[-6deg] pointer-events-none"><CricketBat className="w-6 h-14" /><CricketBall className="w-9 h-9" /></div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(251, 146, 60) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <div className="inline-block p-4 bg-orange-500 notch-sm-tl mb-6">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tight mb-6 text-ink">
            {ind.name} Packaging Capabilities
          </h2>
          <p className="text-xl text-ink/60 max-w-3xl mx-auto mb-6">
            No MOQ, 8-10 business day production, free shipping in Australia, and Pantone PMS color matching on every {ind.name.toLowerCase()} packaging order.
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-20 h-1.5 bg-orange-500 rounded-full" />
            <div className="w-20 h-1.5 bg-orange-500 rounded-full" />
            <div className="w-20 h-1.5 bg-orange-500 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white notch-sm-tl p-8 hover:transition-all duration-500 dieline hover:border-orange-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 mx-auto bg-orange-500 notch-sm-tl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:">
                    <div className="text-orange-600 group-hover:text-orange-700 transition-colors">
                      {getCapabilityIcon(item.title || '')}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-bold text-lg text-ink mb-3 group-hover:text-orange-600 transition-colors text-center">
                  {item.title}
                </h3>

                <p className="text-sm text-ink/60 text-center leading-relaxed group-hover:text-ink/70 transition-colors">
                  {item.desc}
                </p>

                <div className="mt-6 h-1 w-0 group-hover:w-full bg-orange-500 rounded-full transition-all duration-500 mx-auto" />
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <Link
            href="/get-quote/"
            className="group inline-flex items-center gap-3 bg-orange-500 text-white font-bold py-4 px-8 notch-sm-tl hover:hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Request a Custom Quote
          </Link>
          <Link
            href="/"
            className="group inline-flex items-center gap-3 bg-white text-orange-600 font-bold py-4 px-8 notch-sm-tl hover:border-2 border-orange-200 hover:border-orange-300 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            View Company Profile
          </Link>
        </div>

      </div>
    </section>
  )
}
