'use client'

import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-kraft-50" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-1">Who we are</p>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-ink mb-1">
              Your Custom Packaging <span className="text-orange-600">Partner</span>
            </h2>
            <p className="text-ink/60 mb-2">
              Australia-based custom box manufacturer for e-commerce, retail, and subscription brands
            </p>
            <p className="text-ink/70">
              Packify Custom Boxes is an Australia-based custom packaging manufacturer. We produce custom boxes with logo: mailer boxes, tuck boxes, rigid boxes, dispenser boxes, cosmetic boxes, and more for e-commerce, retail, subscription, and D2C brands.
            </p>
            <p className="text-ink/70">
              From kraft mailers to luxury rigid gift boxes, we help you choose the right material, style, and print finish. Full-color CMYK printing, foil stamping, embossing, and custom sizing. No die or plate charges. Free design assistance.
            </p>
            <ul className="dieline-t divide-y divide-kraft-200 text-ink/80">
              {[
                'Custom printed boxes: logo, branding, full-colour',
                'Kraft, corrugated, paperboard. Recyclable materials',
                'No minimums. Order from 1 unit',
                'Free Australia-wide shipping · 8–10 day production · worldwide delivery',
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 py-2.5">
                  <span className="text-orange-600 font-bold">✓</span>
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-nowrap items-center gap-4 overflow-x-auto text-sm text-ink/70">
              <span className="font-medium">Global Operations:</span>
              {['au', 'cn', 'sa', 'gb', 'ae'].map((code) => (
                <Image
                  key={code}
                  src={`https://flagcdn.com/${code}.svg`}
                  alt={code}
                  width={24}
                  height={24}
                  className="rounded-sm border border-kraft-400/40"
                />
              ))}
              <span className="font-medium ml-6">Logistics Partners:</span>
              <span className="text-xs font-semibold text-ink/50">Australia Post</span>
              <Image src="/images/DHL-Symbol.webp" alt="DHL" width={50} height={20} />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg"
                alt="FedEx"
                width={50}
                height={20}
              />
            </div>
          </div>

          <div className="dieline notch-tl relative w-full overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
            <Image
              src="/images/aboutus-img.webp"
              alt="Custom Box"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}