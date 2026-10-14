'use client'

import { useState } from 'react'

type Faq = { question: string; answer: string }

/**
 * Interactive FAQ accordion extracted from the product variant page so the
 * page itself can stay a server component (keeps lib/products-data.ts out
 * of the client JS bundle). Markup is identical to the original inline block.
 */
export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <div className="dieline-t divide-y divide-kraft-200">
      {faqs.map((faq: any, idx: number) => (
        <div key={idx}>
          <button
            onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
            className="w-full text-left py-5 flex justify-between items-center hover:text-orange-600 transition group"
          >
            <span className="font-semibold text-ink pr-4 group-hover:text-orange-600 transition">
              {faq.question}
            </span>
            <span className={`flex-shrink-0 font-display font-bold text-orange-500 text-xl transition-transform ${openFaqIndex === idx ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          <div className={`pb-5 ${openFaqIndex !== idx ? 'sr-only' : ''}`}>
            <p className="text-ink/60 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
