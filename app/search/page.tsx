import type { Metadata } from 'next'
import { Suspense } from 'react'
import { buildSearchIndex } from '@/lib/search-index'
import SearchPageClient from './SearchPageClient'

export const metadata: Metadata = {
  title: 'Search | Packify Custom Boxes',
  description: 'Search custom boxes, styles, industries, and articles across Packify Custom Boxes.',
  // Search results pages shouldn't be indexed by Google.
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://packifycustomboxes.com.au/search/' },
}

export default function SearchPage() {
  const index = buildSearchIndex()
  return (
    <Suspense fallback={null}>
      <SearchPageClient items={index} />
    </Suspense>
  )
}
