// components/ProductSeoSection.tsx

import { productSeoContent } from '@/lib/product-seo-content'

type Props = {
  productSlug: string
}

export default function ProductSeoSection({ productSlug }: Props) {
  const seoContent = productSeoContent[productSlug]

  if (!seoContent) {
    return null
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="dieline notch-tl bg-white p-8 md:p-12">
        {/* Main Heading - H2 for hierarchy (page H1 is in ProductDetail) */}
        <h2 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-ink mb-4">
          {seoContent.h1}
        </h2>

        {/* Subheading */}
        <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-6">
          {seoContent.h2}
        </h3>

        {/* Description */}
        <p className="text-lg text-ink/70 leading-relaxed mb-10">
          {seoContent.description}
        </p>

        {/* Two Column Layout for Lists */}
        <div className="grid md:grid-cols-2 gap-8 dieline-t pt-8">
          {/* Why Choose Section */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-600 mb-4">
              {seoContent.whyChoose.title}
            </h3>
            <ul className="space-y-3">
              {seoContent.whyChoose.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-ink/75">
                  <span className="text-orange-600 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Section */}
          <div className="md:border-l md:border-kraft-200 md:pl-8">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-600 mb-4">
              {seoContent.industries.title}
            </h3>
            <ul className="space-y-3">
              {seoContent.industries.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-ink/75">
                  <span className="text-orange-600 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}