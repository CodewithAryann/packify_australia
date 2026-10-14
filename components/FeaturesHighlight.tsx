'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { SouthernCross } from '@/components/AusMotifs'

// Simple line-icon set drawn for this brand, replacing generic clipart
// inside rounded circles — kept flat and structural, like a spec sheet.
const icons: Record<string, ReactNode> = {
  noCharge: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7l7-4 9 5-9 5-9-5zm0 0v10l9 5m9-15v10l-9 5m0-10v10" />
  ),
  noMin: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 6l1.5 13.5A2 2 0 007.5 21h9a2 2 0 002-2.5L20 6M4 6l2-3h12l2 3" />
  ),
  design: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15.5 4.5l4 4L8 20H4v-4L15.5 4.5z" />
  ),
  speed: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v5l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  brands: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-6a4 4 0 110-8 4 4 0 010 8zm6 3a4 4 0 10-4-4M7 11a4 4 0 100-8" />
  ),
}

export default function WhyChoosePackify() {
  const highlights = [
    { title: 'No Die or Plate Charges', desc: 'No setup fees for dies or plates. The price you see is the price you pay.', icon: 'noCharge' },
    { title: 'No Minimum Order', desc: 'Order from 1 unit — good for prototypes, small batches, and wholesale runs alike.', icon: 'noMin' },
    { title: 'Free Design Support', desc: 'Our team preps print-ready files and artwork, with free file checks along the way.', icon: 'design' },
    { title: '8–10 Day Production', desc: 'Quick turnaround with free shipping across Australia on every order.', icon: 'speed' },
    { title: '3,000+ Brands Served', desc: 'Trusted by e-commerce, retail, subscription, and D2C brands nationwide.', icon: 'brands' },
  ]

  return (
    <section className="relative overflow-hidden py-20 px-6 bg-ink text-white" id="why-packify">
      <SouthernCross className="absolute -top-4 right-6 w-40 h-40 opacity-20 pointer-events-none" color="#F97316" />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12">
          {/* Left: sticky-feeling intro */}
          <div>
            <p className="stamp text-orange-500 border-orange-500 text-[10px] font-bold px-2.5 py-0.5 mb-3">Why Packify</p>
            <h2 className="font-display text-4xl font-black uppercase tracking-tight leading-[0.95] mb-5">
              Built for brands
              <br />that ship.
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Full-colour printing, kraft, corrugated, and rigid stock. Mailer boxes, tuck boxes and more, for e-commerce, retail, and subscription brands across Australia.
            </p>
            <Link
              href="/get-quote/"
              className="notch-tl inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 text-sm uppercase tracking-wide transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          {/* Right: manifest-style rows */}
          <div className="divide-y divide-white/10 border-t border-white/10">
            {highlights.map((item) => (
              <div key={item.title} className="flex items-start gap-4 py-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-orange-500 shrink-0 mt-0.5">
                  {icons[item.icon]}
                </svg>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
