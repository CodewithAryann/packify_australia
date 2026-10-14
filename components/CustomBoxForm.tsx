'use client'

import Image from 'next/image'
import QuoteRequestForm from '@/components/quote/QuoteRequestForm'

export default function CustomBoxForm() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left Content */}
      <div className="dieline notch-tl bg-kraft-50 p-6 sm:p-12 relative overflow-hidden">
        <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">Custom request</p>
        <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-ink mb-4 leading-tight">
          Didn&apos;t find your desired product?
        </h2>
        <p className="text-ink/60 text-base sm:text-lg mb-6">
          Tell us what you are packaging and our team comes back with a custom solution,
          pricing, and a realistic delivery date.
        </p>

        <div className="hidden md:block relative w-full mt-4 overflow-hidden group h-[380px] dieline-t pt-4">
          <Image
            src="/images/submit-img.webp"
            alt="Custom Packaging"
            fill
            className="object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 absolute z-10"
          />
          <Image
            src="/images/WhatsApp Image 2025-08-05 at 11.14.21 PM.webp"
            alt="Hovered Packaging"
            fill
            className="object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>

      {/* Right Form Block */}
      <div className="dieline notch-br bg-white p-6 sm:p-8">
        <QuoteRequestForm source="homepage-custom-box-form" submitLabel="Send my request" />
      </div>
    </section>
  )
}
