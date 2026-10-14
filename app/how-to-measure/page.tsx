import PageAccent from '@/components/PageAccent'
import { Metadata } from 'next'
import Link from 'next/link'
import { HowToSchema, BreadcrumbListSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'How to Measure a Box: Inside vs Outside Sizing | Packify',
  description: 'Get accurate L × W × H for custom packaging, measure inside dimensions for product fit and outside for shipping costs, with examples for each.',
  keywords: 'measure box dimensions, L×W×H, interior dimensions, custom packaging specs Australia, Packify Custom Boxes',
  alternates: { canonical: 'https://packifycustomboxes.com.au/how-to-measure/' },
  openGraph: {
    title: 'How to Measure a Box: Inside vs Outside Sizing | Packify',
    description: 'Get accurate L × W × H for custom packaging, measure inside dimensions for product fit and outside for shipping costs, with examples for each.',
    url: 'https://packifycustomboxes.com.au/how-to-measure/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'How to Measure Box Dimensions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Measure a Box: Inside vs Outside Sizing | Packify',
    description: 'Get accurate L × W × H for custom packaging, measure inside dimensions for product fit and outside for shipping costs, with examples for each.',
    images: ['/images/og-image.webp'],
  },
}

const measurementTips = [
  'Use a ruler or tape measure with inches or millimeters',
  'Measure to the nearest 1/16" or 1mm',
  'Double-check each dimension to avoid fitting issues',
  'Consider the product, padding, and insert space',
]

const dimensions = [
  { label: 'Length (L)', desc: 'The longest side of the base' },
  { label: 'Width (W)', desc: 'The shorter side of the base' },
  { label: 'Height (H)', desc: 'The vertical dimension' },
]

const howToSteps = [
  { name: 'Use standard L×W×H order', text: 'Measure box dimensions in order: Length (longest side of base) × Width (shorter side of base) × Height (vertical dimension). Use interior dimensions for custom fits.' },
  ...dimensions.map((d) => ({ name: d.label, text: d.desc })),
  { name: 'Measurement tips', text: measurementTips.join('. ') },
]

export default function HowToMeasurePage() {
  return (
    <main className="min-h-screen">
      <HowToSchema
        name="How to Measure Box Dimensions"
        description="Measure custom boxes correctly: Length × Width × Height (interior). Print-ready specs for mailer, tuck, rigid boxes."
        steps={howToSteps}
      />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com.au/' },
          { name: 'How to Measure', url: 'https://packifycustomboxes.com.au/how-to-measure/' },
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-kraft-50 pt-28 pb-16 px-4">
        <PageAccent variant="wattle" />
        <div className="relative max-w-4xl mx-auto">
          <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">Sizing guide</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-ink mb-4">
            How to Measure a Box
          </h1>
          <p className="text-lg text-ink/60 max-w-2xl">
            Accurate box dimensions are essential for a perfect custom fit. Here&apos;s the standard industry method used at Packify Custom Boxes.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* L×W×H Order */}
          <div className="dieline notch-sm-tl bg-white p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="notch-sm-tl w-12 h-12 bg-orange-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </span>
              <h2 className="font-display text-xl font-black uppercase tracking-tight text-ink">Standard Measurement Order</h2>
            </div>
            <p className="text-ink/60 mb-4">The correct order is always:</p>
            <div className="dieline notch-sm-tl bg-orange-50 border-orange-300 p-6 sm:p-8 text-center">
              <p className="font-display text-2xl sm:text-3xl font-black uppercase text-orange-600">
                Length × Width × Height
              </p>
              <p className="text-ink/50 text-sm mt-2">(L × W × H)</p>
            </div>
          </div>

          {/* Interior dimensions */}
          <div className="dieline notch-sm-tl bg-white p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="notch-sm-tl w-12 h-12 bg-orange-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8 4-8-4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </span>
              <h2 className="font-display text-xl font-black uppercase tracking-tight text-ink">Measure from the Inside</h2>
            </div>
            <p className="text-ink/60 mb-6">
              Always measure the <strong>internal dimensions</strong> of the box. External dimensions may vary slightly due to material thickness.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {dimensions.map((d) => (
                <div key={d.label} className="dieline notch-sm-tl bg-kraft-50 p-4">
                  <p className="font-bold text-ink">{d.label}</p>
                  <p className="text-sm text-ink/60 mt-1">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="dieline notch-sm-tl bg-white p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="notch-sm-tl w-12 h-12 bg-orange-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              <h2 className="font-display text-xl font-black uppercase tracking-tight text-ink">Tips for Accurate Measuring</h2>
            </div>
            <ul className="space-y-3">
              {measurementTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-ink/70">
                  <span className="font-display text-orange-600 font-black text-sm shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-kraft-50">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-ink/60 mb-6">
            Ready to order custom boxes? Share your dimensions with us for a quick quote.
          </p>
          <Link
            href="/get-quote/"
            className="notch-tl inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide py-3 px-6 transition-colors"
          >
            Request a Quote
          </Link>
          <p className="text-sm text-ink/40 mt-8">Last updated: July 12, 2026</p>
        </div>
      </section>
    </main>
  )
}
