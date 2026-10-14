'use client'

import PageAccent from '@/components/PageAccent'
import React from 'react'
import QuoteRequestForm from '@/components/quote/QuoteRequestForm'

const CHECKS = [
  'No die or plate charges',
  'Free design support',
  'Pantone-matched custom printing',
]

const GetCustomQuote = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 pt-[6rem] bg-kraft-50">
      {/* Heading */}
      <div className="relative mb-10 md:pr-44">
        <PageAccent variant="cricket" inline />
        <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">Get a quote</p>
        <h1 className="font-display text-4xl font-black uppercase tracking-tight text-ink mb-3">Get a Custom Packaging Quote</h1>
        <p className="text-ink/60 text-base max-w-2xl mb-6">
          Answer six questions and we come back with pricing and a delivery date, usually within
          4 business hours. Mailer boxes, tuck boxes, rigid boxes, and more. No minimum order.
          Free shipping across Australia. 8 to 10 business day turnaround.
        </p>
        <div className="dieline-t divide-y divide-kraft-200">
          {CHECKS.map((check) => (
            <div key={check} className="flex items-center gap-3 py-2.5 text-sm text-ink/70 font-medium">
              <span className="text-orange-600 font-bold">✓</span>
              {check}
            </div>
          ))}
        </div>
      </div>

      <div className="dieline notch-tl bg-white p-6 sm:p-8">
        <QuoteRequestForm
          source="get-quote-page"
          submitLabel="Submit quote request"
          specsOpenByDefault
        />
      </div>
    </section>
  )
}

export default GetCustomQuote
