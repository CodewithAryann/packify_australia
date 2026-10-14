'use client'

import PageAccent from '@/components/PageAccent'
import { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import type { SearchItem, SearchItemType } from '@/lib/search-index'

const TYPE_ORDER: SearchItemType[] = ['Product', 'Variant', 'Industry', 'IndustryProduct', 'Page', 'Blog']

const TYPE_LABEL: Record<SearchItemType, string> = {
  Product: 'Products',
  Variant: 'Box Styles',
  Industry: 'Industries',
  IndustryProduct: 'By Industry',
  Page: 'Pages',
  Blog: 'From the Blog',
}

const SUGGESTIONS = ['Mailer Boxes', 'Rigid', 'Bakery', 'Vape', 'Jewelry', 'Eco-Friendly']

function score(item: SearchItem, q: string): number {
  const title = item.title.toLowerCase()
  if (title === q) return 100
  if (title.startsWith(q)) return 80
  if (new RegExp(`\\b${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(title)) return 60
  if (title.includes(q)) return 40
  if (item.keywords.includes(q)) return 20
  return -1
}

function TypeIcon({ type }: { type: SearchItemType }) {
  const cls = 'w-5 h-5'
  switch (type) {
    case 'Product':
      return (<svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25L12 3 3 8.25m18 0L12 13.5m9-5.25v7.5L12 21m0-7.5L3 8.25m9 5.25V21M3 8.25v7.5L12 21" /></svg>)
    case 'Variant':
      return (<svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 16l9 5 9-5" /></svg>)
    case 'Industry':
      return (<svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 10v9a1 1 0 001 1h14a1 1 0 001-1v-9M3 6l1.5-3h15L21 6M3 6h18M3 6l1 3a2.5 2.5 0 004.9 0L9 6m12 0l-1 3a2.5 2.5 0 01-4.9 0L15 6M9 6h6M9 20v-5a1 1 0 011-1h4a1 1 0 011 1v5" /></svg>)
    case 'IndustryProduct':
      return (<svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h.01M3 6.6v4.75a2 2 0 00.586 1.414l7.65 7.65a2 2 0 002.828 0l4.75-4.75a2 2 0 000-2.828l-7.65-7.65A2 2 0 0011.75 4.6H5a2 2 0 00-2 2z" /></svg>)
    case 'Blog':
      return (<svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2zM14 4v5a1 1 0 001 1h5M8 13h8M8 17h5" /></svg>)
    default:
      return (<svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-7.5M14 4h6m0 0v6m0-6L10 14" /></svg>)
  }
}

export default function SearchPageClient({ items }: { items: SearchItem[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initial = searchParams.get('q') ?? ''
  const [query, setQuery] = useState(initial)
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus the field on load for a fast start.
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Keep the URL in sync (shareable / back-button friendly) without scrolling.
  useEffect(() => {
    const q = query.trim()
    const current = searchParams.get('q') ?? ''
    if (q === current) return
    const t = setTimeout(() => {
      router.replace(q ? `/search?q=${encodeURIComponent(q)}` : '/search', { scroll: false })
    }, 200)
    return () => clearTimeout(t)
  }, [query, router, searchParams])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return [] as SearchItem[]
    return items
      .map((item) => ({ item, s: score(item, q) }))
      .filter((r) => r.s >= 0)
      .sort((a, b) => b.s - a.s)
      .map((r) => r.item)
  }, [items, query])

  const grouped = useMemo(() => {
    const map = new Map<SearchItemType, SearchItem[]>()
    for (const r of results) {
      const arr = map.get(r.type) ?? []
      arr.push(r)
      map.set(r.type, arr)
    }
    return TYPE_ORDER.filter((t) => map.has(t)).map((t) => ({ type: t, items: map.get(t)! }))
  }, [results])

  const clear = useCallback(() => {
    setQuery('')
    inputRef.current?.focus()
  }, [])

  const hasQuery = query.trim().length > 0

  return (
    <div className="bg-kraft-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">

        {/* Heading */}
        <div className="relative mb-8 md:pr-44">
          <PageAccent variant="cricket" inline />
          <h1 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-ink">
            Search <span className="text-orange-600">Packify</span>
          </h1>
          <p className="text-ink/60 mt-2">
            Find boxes, styles, industries, and articles across the site.
          </p>
        </div>

        {/* Search input */}
        <div className="relative max-w-2xl mx-auto">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500 pointer-events-none">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search boxes, styles, industries, articles..."
            aria-label="Search the site"
            className="w-full notch-sm-tl dieline bg-white pl-14 pr-12 py-4 text-lg text-ink placeholder:text-ink/40 focus:border-orange-400 transition-colors"
          />
          {hasQuery && (
            <button
              onClick={clear}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full text-ink/40 hover:text-ink/60 hover:bg-kraft-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          )}
        </div>

        {/* Popular searches (empty state) */}
        {!hasQuery && (
          <div className="max-w-2xl mx-auto mt-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-ink/40 mb-3">Popular searches</p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => { setQuery(s); inputRef.current?.focus() }}
                  className="px-4 py-2 rounded-full dieline bg-white text-sm font-medium text-ink/70 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Result count */}
        {hasQuery && (
          <p className="max-w-2xl mx-auto mt-6 text-sm text-ink/50">
            {results.length > 0
              ? `${results.length} result${results.length === 1 ? '' : 's'} for "${query.trim()}"`
              : null}
          </p>
        )}

        {/* No results */}
        {hasQuery && results.length === 0 && (
          <div className="max-w-2xl mx-auto mt-8 text-center bg-white notch-sm-tl dieline px-6 py-12">
            <p className="text-lg font-semibold text-ink mb-1">
              No results for &ldquo;{query.trim()}&rdquo;
            </p>
            <p className="text-ink/50 mb-6">
              We make fully custom boxes. If you can describe it, we can build it.
            </p>
            <Link
              href="/get-quote/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors"
            >
              Request a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        )}

        {/* Results, grouped */}
        {grouped.map((group) => (
          <section key={group.type} className="mt-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-orange-500 mb-4">
              {TYPE_LABEL[group.type]}
              <span className="text-ink/40 font-semibold ml-2">({group.items.length})</span>
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-4 bg-white notch-sm-tl dieline px-5 py-4 hover:hover:-translate-y-0.5 hover:ring-2 hover:ring-orange-300 transition-all duration-200"
                >
                  <span className="flex items-center justify-center w-11 h-11  bg-orange-50 text-orange-500 shrink-0 group-hover:bg-orange-100 transition-colors">
                    <TypeIcon type={item.type} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base font-semibold text-ink truncate group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </span>
                    <span className="block text-xs text-ink/40 mt-0.5">{TYPE_LABEL[item.type]}</span>
                  </span>
                  <svg className="w-5 h-5 text-gray-300 ml-auto shrink-0 group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
