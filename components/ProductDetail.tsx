'use client'

import Image from 'next/image'
import { Product } from '@/lib/products-data'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <section className="Products col-span-1">
      <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">Product</p>
      <h1 className="font-display text-4xl font-black uppercase tracking-tight mb-6 text-ink">
        {product.title}
      </h1>

      <div className="dieline notch-tl relative w-full h-[350px] overflow-hidden mb-6 bg-kraft-50">
        <Image
          src={product.mainImage}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

      <p className="text-ink/70 text-lg mb-8">
        {product.description}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm dieline-t pt-6">
        {product.features.map((feature, index) => (
          <div key={index}>
            <Image
              src={`/images/${getFeatureIcon(feature)}.webp`}
              alt={feature}
              width={32}
              height={32}
              className="mx-auto"
            />
            <p className="mt-2 text-ink/60">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function getFeatureIcon(feature: string): string {
  const iconMap: Record<string, string> = {
    'Fast Turnaround': 'clock',
    'Full Color Printing': 'paint-swatch',
    'Design Support': 'paint-palette',
    'Free Shipping': 'delivery',
  }
  return iconMap[feature] || 'clock'
}