'use client'

import { OutbackSkyline, Wattle } from '@/components/AusMotifs'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import type { Industry } from '@/lib/industries-data'
import QuoteRequestForm from '@/components/quote/QuoteRequestForm'

// ─── SVG helpers ─────────────────────────────────────────────────────────────
function IndustryIcon({ d, cls = 'w-6 h-6' }: { d: string; cls?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={cls}
      dangerouslySetInnerHTML={{ __html: d }} />
  )
}

const Check = ({ cls = 'w-3.5 h-3.5' }: { cls?: string }) => (
  <svg className={`${cls} text-orange-500 shrink-0`} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

const Arrow = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)


// ─── Simple Inline Quote Form ────────────────────────────────────────────────
function InlineQuoteForm({ industry, industrySlug }: { industry: string; industrySlug?: string }) {
  return (
    <QuoteRequestForm
      variant="compact"
      source={`industry-sidebar:${industry}`}
      industry={industry}
      industrySlug={industrySlug}
      submitLabel="Get a free quote"
    />
  )
}

// ─── Full Detailed Quote Form ─────────────────────────────────────────────────
function FullQuoteForm({ industry, industrySlug }: { industry: string; industrySlug?: string }) {
  return (
    <QuoteRequestForm
      source={`industry-page:${industry}`}
      industry={industry}
      industrySlug={industrySlug}
      submitLabel="Request my quote"
      specsOpenByDefault
    />
  )
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`dieline transition-colors duration-200 ${open ? 'border-orange-500' : ''}`}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-semibold text-ink text-sm leading-snug">{q}</span>
        <span className={`font-display font-bold text-orange-500 text-xl shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {/* Answer always rendered in static HTML for crawlers and AI retrieval; CSS-toggled */}
      <div className={`px-6 pb-5 text-ink/60 text-sm leading-relaxed dieline-t pt-4 ${open ? '' : 'hidden'}`}>
        {a}
      </div>
    </div>
  )
}


// ─── Industry image helpers ───────────────────────────────────────────────────
const industryMainImages: Record<string, string> = {
  'auto-parts': '/images/industries/auto-parts-packaging/auto-parts-main.webp',
  christmas: '/images/industries/christmas-packaging/christmas-main.webp',
  chocolate: '/images/industries/chocolate-packaging/chocolate-main.webp',
  apparel: '/images/industries/apparel-packaging/apparel-main.webp',
  food: '/images/industries/food-packaging/food-packaging-main.webp',
  ecommerce: '/images/industries/ecommerce-packaging/e-com-main.webp',
  cannabis: '/images/industries/cannabis-and-cbd/cbd-main.webp',
  jewelry: '/images/industries/jewelry/jewelry-main.webp',
  electronics: '/images/industries/electronics-packaging/electronics-main.webp',
  gift: '/images/industries/gift-packaging/gift-main.webp',
  retail: '/images/industries/retail-boxes/retail-boxes-main.webp',
  pharmaceutical: '/images/industries/pharmacy-packaging/pharmacy-main.webp',
  candle: '/images/industries/candles/candles-main.webp',
  soap: '/images/industries/soap-packaging/soap-main.webp',
  toy: '/images/industries/toy-packaging/toy-main.webp',
  coffee: '/images/industries/coffee-packaging/coffee-main.webp',
  tea: '/images/industries/tea-packaging/tea-main.webp',
  beverage: '/images/industries/tea-packaging/tea-main.webp',
  shipping: '/images/industries/ecommerce-packaging/e-com-main.webp',
}

const industryOverviewImages: Record<string, string> = {
  'auto-parts': '/images/industries/auto-parts-packaging/auto-parts-overview.webp',
  christmas: '/images/industries/christmas-packaging/christmas-overview.webp',
  chocolate: '/images/industries/chocolate-packaging/chocolate-overview.webp',
  apparel: '/images/industries/apparel-packaging/apparel-packaging-product-overview.webp',
  food: '/images/industries/food-packaging/food-packaging-overview.webp',
  ecommerce: '/images/industries/ecommerce-packaging/e-com-overview.webp',
  cannabis: '/images/industries/cannabis-and-cbd/cbd-over.webp',
  jewelry: '/images/industries/jewelry/jewelry-over.webp',
  electronics: '/images/industries/electronics-packaging/electronics-main.webp',
  gift: '/images/industries/gift-packaging/gift-packaging-overview.webp',
  retail: '/images/industries/retail-boxes/retail-boxes-over-view.webp',
  pharmaceutical: '/images/industries/pharmacy-packaging/pharmacy-overview.webp',
  candle: '/images/industries/candles/candle-over.webp',
  soap: '/images/industries/soap-packaging/soap-overview.webp',
  toy: '/images/industries/toy-packaging/toy-overview.webp',
  coffee: '/images/industries/coffee-packaging/coffee-overview.webp',
  tea: '/images/industries/tea-packaging/tea-overview.webp',
  beverage: '/images/industries/tea-packaging/tea-overview.webp',
  shipping: '/images/industries/ecommerce-packaging/e-com-overview.webp',
}

function getIndustryMainImage(slug: string): string {
  return industryMainImages[slug] || '/images/banner.webp'
}

function getIndustryOverviewImage(slug: string): string {
  return industryOverviewImages[slug] || '/images/banner.webp'
}

// ─── Main Client Component ────────────────────────────────────────────────────
type NavIndustry = { slug: string; name: string; [key: string]: any }

export default function IndustryClient({
  ind,
  related,
  productImages,
}: {
  ind: Industry
  related: NavIndustry[]
  productImages: Record<string, string>
}) {

  return (
    <div className="min-h-screen bg-white">

      {/* ══════════════════════════════════════════════════════════
          1. PRODUCT OVERVIEW, form left, industry image right
      ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 px-6 lg:px-16 bg-kraft-50">
        <OutbackSkyline className="absolute bottom-0 left-0 w-full h-28 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          {/* breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-ink/40 mb-10 font-medium">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-ink/40">Industries</span>
            <span>/</span>
            <span className="text-ink/70">{ind.name}</span>
          </nav>
        </div>
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT, Contact / Quote Form */}
          <div>
            <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">{ind.name}</p>
            <h1 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-ink leading-[0.95] mb-3">
              Custom Packaging for<br /><span className="text-orange-600">{ind.name} Brands</span>
            </h1>
            <p className="text-ink/60 text-sm leading-relaxed mb-7">
              Tell us about your packaging needs and we&apos;ll get back to you with a detailed, no-obligation quote within 4 business hours.
            </p>

            {/* trust bullets */}
            <div className="grid grid-cols-2 gap-2 mb-7">
              {['No Die or Plate Charges', 'No Minimum Order', 'Free Design Support', 'Free Australia-Wide Shipping'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-ink/70 text-xs font-medium">
                  <span className="text-orange-600 font-bold">✓</span>
                  {t}
                </div>
              ))}
            </div>

            <div className="dieline notch-tl bg-white p-6">
              <InlineQuoteForm industry={ind.name} industrySlug={ind.slug} />
            </div>
          </div>

          {/* RIGHT, Industry Main Image */}
          <div className="sticky top-8">
            <div className="dieline notch-tl relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src={getIndustryMainImage(ind.slug)}
                alt={`Custom ${ind.name} Packaging`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Industry branding overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="notch-sm-tl bg-ink/80 backdrop-blur-sm px-5 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center text-orange-500 shrink-0">
                    <IndustryIcon d={ind.icon} cls="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-none">Custom {ind.name}</p>
                    <p className="text-white/60 text-xs mt-0.5">Premium Packaging Solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO content block below image (Ahrefs-rewritten industries); legacy trust badges as fallback */}
            {ind.heroSeoText ? (
              <div className="mt-5 dieline notch-sm-tl bg-white px-5 py-4">
                <p className="text-ink/60 text-[13px] leading-relaxed">{ind.heroSeoText}</p>
              </div>
            ) : (
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: '4hr Response', sub: 'Free quotes within 4 business hours' },
                { icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z', title: 'Free Design', sub: 'Dieline & artwork support at no charge' },
                { icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', title: 'No Minimums', sub: 'Order 1 unit or 100,000 units' },
                { icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4', title: 'Free Shipping', sub: 'Free Australian delivery on every order' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 dieline notch-sm-tl bg-white px-4 py-3">
                  <svg className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <div>
                    <p className="font-bold text-ink text-xs">{item.title}</p>
                    <p className="text-ink/50 text-[11px] leading-tight mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. PRODUCT CARDS, styled like Custom Mailer Boxes Collection
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-kraft-50 py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-14">
            <div className="notch-sm-tl inline-flex items-center justify-center w-12 h-12 bg-orange-500 text-white mb-5">
              <IndustryIcon d={ind.icon} cls="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight mb-3">
              Popular {ind.name} Packaging Solutions
            </h2>
            <p className="text-ink/50 text-base max-w-xl mx-auto">
              Every format engineered for your product requirements, brand standards, and channel needs.
            </p>
            {/* decorative line */}
            <div className="flex items-center justify-center gap-2 mt-5">
              <div className="w-10 h-0.5 bg-orange-500 rounded-full" />
              <div className="w-6 h-0.5 bg-orange-300 rounded-full" />
              <div className="w-3 h-0.5 bg-orange-200 rounded-full" />
            </div>
          </div>

          {/* Product Cards, horizontal scroll on mobile, 5-col on large */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {ind.products.map((product) => (
              <Link key={product.name} href={`/industries/${ind.slug}/${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}/`}
                className="group dieline notch-sm-tl bg-white hover:border-orange-500 transition-colors duration-300 overflow-hidden flex flex-col">

                {/* image block */}
                <div className="relative h-40 bg-kraft-50 overflow-hidden">
                  {(() => {
                    const pImg = productImages[product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')] || '/images/banner.webp'
                    return (
                      <Image src={pImg} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    )
                  })()}
                  <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                {/* text */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-ink text-sm mb-3 group-hover:text-orange-600 transition-colors leading-snug text-center">
                    {product.name}
                  </h3>
                  <div className="mt-auto flex items-center gap-1 text-orange-500 text-xs font-semibold group-hover:gap-2 transition-all">
                    <span>View Details</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/products/"
              className="inline-flex items-center gap-2 dieline text-ink/60 hover:border-orange-400 hover:text-orange-600 font-semibold px-7 py-3  text-sm transition-all">
              View All Products <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. PRODUCT OVERVIEW, text + bullet points left, image right
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT, Title, intro, bullet points, CTA */}
          <div>
            <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-4">Product overview</p>
            <h2 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-ink leading-tight mb-5">
              {ind.heroHeading}
            </h2>
            <p className="text-ink/60 text-sm leading-relaxed mb-8">
              {ind.intro}
            </p>
            <ul className="space-y-3 mb-10">
              {ind.overviewPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-ink/70 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <Link href="#full-quote"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8  transition-all text-sm shadow-orange-200">
              Request a Quote <Arrow />
            </Link>
          </div>

          {/* RIGHT, Industry Overview Image */}
          <div className="relative notch-sm-tl overflow-hidden " style={{ aspectRatio: '4/3' }}>
            <img
              src={getIndustryOverviewImage(ind.slug)}
              alt={`${ind.name} Packaging Overview`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. READY TO START, CTA section only, no review
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 lg:px-16 bg-kraft-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-orange-500/60 border border-orange-200 notch-sm-tl p-10 md:p-14">
            <div className="text-center mb-8">
              <div className="notch-sm-tl w-14 h-14 bg-orange-500 flex items-center justify-center text-white mx-auto mb-5">
                <IndustryIcon d={ind.icon} cls="w-7 h-7" />
              </div>
              <h3 className="font-black text-ink text-2xl md:text-3xl mb-3 leading-tight">
                Ready to start your {ind.name} packaging?
              </h3>
              <p className="text-ink/60 text-base leading-relaxed max-w-xl mx-auto">
                Our packaging specialists are ready to help. Get a free quote, no obligations, no minimum order, no die charges.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Response within 4 business hours' },
                { icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z', text: 'Free dieline & design support' },
                { icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', text: 'No minimum order required' },
                { icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4', text: 'Free Australia-wide shipping on every order' },
              ].map((item) => (
                <div key={item.text} className="flex flex-col items-center gap-3 dieline notch-sm-tl bg-white p-5 text-center">
                  <div className="w-10 h-10  bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-ink/70 text-sm font-medium leading-snug">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="#full-quote"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8  transition-all text-sm shadow-orange-200">
                Get a Free Quote <Arrow />
              </Link>
              <a href="tel:+61390004821"
                className="inline-flex items-center justify-center gap-2 bg-white border border-orange-200 text-orange-600 font-bold py-3.5 px-8  transition-all text-sm hover:bg-orange-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: +61 3 9000 4821
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. LEARN MORE ABOUT, styled like image 6 (plain editorial style)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="dieline notch-tl bg-white p-10 md:p-14">
            <h2 className="text-2xl font-bold text-ink text-center mb-10 pb-5 border-b border-kraft-200">
              Learn More About Custom {ind.name} Packaging
            </h2>

            {ind.learnMore && ind.learnMore.length > 0 ? (
              /* Ahrefs-rewritten per-industry content (populated by batches B1+) */
              <>
                {ind.learnMore.map((sec) => (
                  <div key={sec.heading} className="mb-8">
                    <h3 className="text-lg font-bold text-ink mb-3">{sec.heading}</h3>
                    <p className="text-ink/60 text-sm leading-relaxed">{sec.body}</p>
                  </div>
                ))}
              </>
            ) : (
            <>
            {/* LEGACY hardcoded fallback for industries not yet rewritten */}

            {/* Section 1, Keep Products Safe */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-ink mb-3">
                Keep Your Products Protected with Durable Custom {ind.name} Packaging
              </h3>
              <p className="text-ink/60 text-sm leading-relaxed mb-3">
                Our custom {ind.name.toLowerCase()} packaging is designed to protect your products during transit while communicating your brand story. We use high-quality board constructions that maintain shape under postal pressure, full-color printing that reproduces brand colors accurately, and premium lamination finishes that stay pristine through fulfillment center handling.
              </p>
              <p className="text-ink/60 text-sm leading-relaxed">
                With no minimum order requirements, you can test packaging designs at small scale before committing to full production runs. We offer material options including kraft, cardboard, corrugated cardboard, and rigid paperboard to suit every need.
              </p>
            </div>

            {/* Section 2, Design */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-ink mb-3">
                Delight Your Customers with Well Designed {ind.name} Packaging
              </h3>
              <p className="text-ink/60 text-sm leading-relaxed mb-3">
                We use high-end printing techniques to perfectly render your designs on custom {ind.name.toLowerCase()} packaging. You can choose from offset or digital printing to ensure the perfect print job. Along with the most advanced techniques, we offer free design support so you can create packaging that stands out.
              </p>
              <p className="text-ink/60 text-sm leading-relaxed">
                Our designers help you pick the most ideal location for branding details on your packaging so every passerby gets hooked. We offer Pantone and CMYK color models to ensure accurate colors that perfectly match your brand identity across every run.
              </p>
            </div>

            {/* Section 3, Styles */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-ink mb-3">
                Irresistibly Stylish {ind.name} Box Designs
              </h3>
              <p className="text-ink/60 text-sm leading-relaxed mb-3">
                We have the skills to produce premium-quality {ind.name.toLowerCase()} packaging that meets your needs. Whether you are looking for sleeve boxes at affordable prices, tuck-top auto-bottom boxes with high functionality, or gable boxes, we can deliver. We offer an extensive range of packaging styles with unique features suited to your product and brand.
              </p>
              <p className="text-ink/60 text-sm leading-relaxed">
                All styles come with customizable inserts, window cutouts, handles, and other structural options depending on your unique needs. We can offer many more style options for custom {ind.name.toLowerCase()} packaging.
              </p>
            </div>

            {/* Section 4, Finishes */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-ink mb-3">
                Boost the Look and Feel with Premium Finishes
              </h3>
              <p className="text-ink/60 text-sm leading-relaxed mb-3">
                We offer a range of finishes to add more grace to your custom {ind.name.toLowerCase()} packaging. If you sell products in a humid environment, you need our aqueous-resistant coating to keep items fresh for longer. We offer a range of captivating finishes to turn your packaging into pieces of art:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-ink/60">
                {[
                  { label: 'UV Coating', desc: 'Extend the shelf life and keep printing colors vibrant.' },
                  { label: 'Varnish', desc: 'Ideal for getting a glossy and protective layer on the exterior.' },
                  { label: 'Matte Lamination', desc: 'Complement any artwork and get the velvety look.' },
                  { label: 'Anti-Scratch Lamination', desc: 'Make your exterior abrasion-free by adding a resilience layer.' },
                  { label: 'Soft-Touch Lamination', desc: 'A silky texture promising premium aesthetic and durability.' },
                  { label: 'Foil Stamping', desc: 'Gold, silver, rose gold, and holographic foil options available.' },
                ].map((f) => (
                  <div key={f.label} className="flex gap-2 py-1">
                    <span className="font-semibold text-ink shrink-0">{f.label}:</span>
                    <span className="text-ink/50">{f.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5, Add-ons */}
            <div>
              <h3 className="text-lg font-bold text-ink mb-3">
                Add Functionality and Visual Appeal with Practical Add-on Features
              </h3>
              <p className="text-ink/60 text-sm leading-relaxed">
                Packify provides top-tier add-ons for custom {ind.name.toLowerCase()} packaging that improve the overall integrity of your brand and the value of your products. Use ribbons, bows, compartments, and inserts to organize your products inside your packaging efficiently. You can also add window cut-outs to add a touch of transparency, and we offer many other add-on choices depending on your unique needs.
              </p>
            </div>
            </>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. FAQ
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-16 bg-kraft-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em] mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-black text-ink mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-ink/50 text-sm">Common questions about custom {ind.name.toLowerCase()} packaging, answered.</p>
          </div>
          <div className="space-y-3">
            {ind.faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
          <div className="mt-10 text-center">
            <p className="text-ink/50 text-sm mb-4">Still have questions?</p>
            <Link href="#full-quote"
              className="notch-sm-tl inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide px-6 py-3 text-sm transition-colors">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. FULL ACCURATE QUOTE FORM SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-kraft-50 py-24 px-6 lg:px-16 dieline-t border-kraft-400/40" id="full-quote">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">Detailed quote</p>
            <h2 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-ink mb-3">
              Get an Accurate Quote in Just 7 Minutes
            </h2>
            <p className="text-ink/60 text-base max-w-xl">
              Fill in your specifications below for a precise, no-obligation quote. Order 5000+ &amp; get up to 50% discount.
            </p>
          </div>

          <div className="dieline notch-tl bg-white overflow-hidden">
            <div className="bg-ink px-8 py-5 dieline-b border-kraft-400/25">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <IndustryIcon d={ind.icon} cls="w-6 h-6 text-orange-500" />
                  <div>
                    <p className="text-white font-black uppercase tracking-tight text-lg leading-none">Custom {ind.name} Boxes</p>
                    <p className="text-white/50 text-xs mt-0.5">Specify your requirements for an accurate quote</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {['No Minimums', 'Free Shipping', 'Free Design'].map((tag) => (
                    <span key={tag} className="text-orange-500 text-[11px] font-bold uppercase tracking-wide">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-10">
              <FullQuoteForm industry={ind.name} industrySlug={ind.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          8. RELATED INDUSTRIES
      ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-16 px-6 lg:px-16 bg-white dieline-t">
        <Wattle className="hidden lg:block absolute right-10 top-4 w-20 h-28 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">Explore more</p>
          <h2 className="font-display text-2xl font-black uppercase tracking-tight text-ink mb-1">Related Industries We Serve</h2>
          <p className="text-ink/50 text-sm mb-7">We tailor packaging solutions for these related industries too.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {related.map((r) => (
              <Link key={r.slug} href={`/industries/${r.slug}/`}
                className="flex items-center gap-3 dieline notch-sm-tl bg-white px-5 py-4 hover:border-orange-500 transition-colors group">
                <span className="text-orange-500 group-hover:text-orange-600 transition-colors">
                  <IndustryIcon d={r.icon} cls="w-4 h-4" />
                </span>
                <span className="font-semibold text-ink/70 group-hover:text-orange-600 text-sm transition-colors leading-tight">{r.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
