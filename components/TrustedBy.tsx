'use client'

import Image from 'next/image'
import { AusFlag } from '@/components/AusMotifs'

const logos = [
  { name: 'FedEx', src: '/images/133-1330613_fedex-logo-vector-by-windytheplaneh-on-deviantart-fedex-logo-vector-by-windytheplaneh-removebg-preview.webp' },
  { name: 'Esther Formula', src: '/images/esther-formula.webp' },
  { name: 'Maison Velours', src: '/images/maison.webp' },
  { name: 'Dracula Citrus', src: '/images/dracula-citrus.webp' },
  { name: 'Barilla', src: '/images/barilla.webp' },
  { name: 'Symmetric IT Group', src: '/images/symmetric-it.webp' },
]

export default function TrustedBy() {
  return (
    <section className="py-8 bg-kraft-100 dieline-t dieline-b border-kraft-400/40">
      <div className="max-w-7xl mx-auto px-6">
        <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-kraft-600 mb-5">
          <AusFlag className="w-5 h-2.5" /> Trusted by brands shipping across Australia
        </p>
        <div className="marquee-mask relative w-full overflow-hidden py-4 select-none">
          <div className="marquee-track flex items-center gap-10 lg:gap-12">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={36}
                  draggable={false}
                  className="h-9 w-auto max-w-[150px] object-contain grayscale opacity-60"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
