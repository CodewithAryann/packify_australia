'use client'

import QuoteRequestForm from '@/components/quote/QuoteRequestForm'

export default function QuoteForm() {
  return (
    <section className="py-16 bg-kraft-50" id="quote">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">Get a quote</p>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-ink mb-3">
            Request a Quote
          </h2>
          <p className="text-ink/60 text-lg">
            Tell us what you are packaging and when you need it. We come back with pricing,
            a lead time, and a dieline within 4 business hours.
          </p>
        </div>

        <div className="dieline notch-tl bg-white p-6 sm:p-8">
          <QuoteRequestForm source="homepage-quote-section" />
        </div>
      </div>
    </section>
  )
}
