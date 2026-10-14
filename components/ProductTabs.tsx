'use client'

import { useState } from 'react'
import Image from 'next/image'
import { 
  materialsData, 
  printingData, 
  finishesData, 
  boxStylesData 
} from '@/lib/tabs-data'

type TabType = 'materials' | 'printing' | 'finishes' | 'boxStyles'

type ProductTabsProps = {
  productSlug: string
}

// List of products that should show tabs
const TAB_PRODUCTS = [
  'mailer-boxes',
  'dispenser-boxes',
  'rigid-boxes',
  'tuck-boxes',
  'magnetic-closure'
  // add other box slugs that need tabs
]

export default function ProductTabs({ productSlug }: ProductTabsProps) {
  // Only render tabs if this product slug is allowed
  if (!TAB_PRODUCTS.includes(productSlug)) return null

  const [activeTab, setActiveTab] = useState<TabType>('materials')

  const tabs = [
    { id: 'materials' as TabType, label: 'MATERIALS' },
    { id: 'printing' as TabType, label: 'PRINTING' },
    { id: 'finishes' as TabType, label: 'FINISHES' },
    { id: 'boxStyles' as TabType, label: 'BOX STYLES' },
  ]

  const getTabData = () => {
    switch (activeTab) {
      case 'materials':
        return materialsData[productSlug] || []
      case 'printing':
        return printingData[productSlug] || []
      case 'finishes':
        return finishesData[productSlug] || []
      case 'boxStyles':
        return boxStylesData[productSlug] || []
      default:
        return []
    }
  }

  const data = getTabData()

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-12 dieline-b pb-px">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors ${
              activeTab === tab.id
                ? 'bg-ink text-white'
                : 'bg-kraft-50 text-ink/60 hover:bg-kraft-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div key={index} className="text-center dieline notch-sm-tl hover:border-orange-500 transition-colors p-6">
           <div className="relative w-full h-40 mb-4 overflow-hidden bg-kraft-50">
  <Image
    src={item.image}
    alt={item.name}
    fill
    className="object-cover" // changed from object-contain to object-cover
  />
</div>

            <h3 className="font-semibold text-ink">{item.name}</h3>
            {item.description && (
              <p className="text-sm text-ink/60 mt-2">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
