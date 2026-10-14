'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/products-data'

interface ProductOverviewProps {
  product: Product
}

export default function ProductOverview({ product }: ProductOverviewProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-ink mb-4">
            {product.overviewTitle}
          </h2>
          <div className="text-ink/70 mb-6 whitespace-pre-line">
            {product.overviewContent}
          </div>
          <Link
            href="/get-quote/"
            className="notch-tl bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide py-3 px-8 transition-colors inline-block"
          >
            Get My Quote
          </Link>
        </div>

        {/* Right Image */}
        <div className="dieline notch-br relative w-full h-80 lg:h-[37rem] overflow-hidden">
          <Image
            src={product.overviewImage}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}