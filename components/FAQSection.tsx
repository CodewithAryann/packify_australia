'use client'

import { useState } from 'react'
import { homepageFaqs } from '@/lib/faqs'

const faqs = homepageFaqs

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">Questions</p>
        <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-ink mb-3">
          FAQs on Custom Packaging Boxes
        </h2>
        <p className="text-ink/60 mb-10 max-w-2xl">
          Common questions about ordering, pricing, artwork, samples, and delivery.
        </p>

        <div className="dieline-t divide-y divide-kraft-200">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group py-1"
              open={openIndex === index}
            >
              <summary
                className="flex justify-between items-center cursor-pointer py-4 text-base font-semibold text-ink hover:text-orange-600 list-none [&::-webkit-details-marker]:hidden"
                onClick={(e) => {
                  e.preventDefault()
                  toggleFAQ(index)
                }}
              >
                {faq.question}
                <span className={`ml-2 text-orange-500 transition-transform duration-300 flex-shrink-0 font-display font-bold ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </summary>
              <div className={`pb-4 ${openIndex !== index ? 'sr-only' : ''}`}>
                <p className="mt-0 text-ink/60">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}