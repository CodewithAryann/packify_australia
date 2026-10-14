'use client'

import QuoteRequestForm from '@/components/quote/QuoteRequestForm'

interface ProductQuoteFormProps {
  productName: string
}

export default function ProductQuoteForm({ productName }: ProductQuoteFormProps) {
  return (
    <section className="col-span-1 dieline notch-tl bg-kraft-50 p-6">
      <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">Quote request</p>
      <h3 className="font-display text-xl font-black uppercase tracking-tight mb-1 text-ink">Request a custom quote</h3>
      <p className="text-sm text-ink/50 mb-4">
        Six quick questions. Add specs if you have them.
      </p>
      <QuoteRequestForm
        variant="compact"
        source={`product-page:${productName}`}
        productName={productName}
        submitLabel="Get my quote"
      />
    </section>
  )
}
