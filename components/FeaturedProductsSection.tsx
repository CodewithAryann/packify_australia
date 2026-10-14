'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Product = {
  name: string
  image: string
  href: string
  /** 'cover' = lifestyle photo, fills the frame. 'contain' = cut-out on a flat
   *  backdrop; `tone` matches that backdrop so the edges disappear. */
  fit: 'cover' | 'contain'
  tone: string
}

/* One curated pool — no categories. Order is shuffled on each load. */
const products: Product[] = [
  { name: 'Custom Mailer Boxes with Tear Strip', image: '/images/mailer/Custom Tear Strip Mailer Box.webp',        href: '/products/mailer-boxes/custom-mailer-boxes-with-tear-strip/', fit: 'cover',   tone: '#fbdfd1' },
  { name: 'Colored Mailer Boxes',                image: '/images/mailer/Colored Mailer Box.webp',                  href: '/products/mailer-boxes/colored-mailer-boxes/',                fit: 'cover',   tone: '#f78f15' },
  { name: 'Custom Magnetic Closure Boxes',       image: '/images/rigid/Magnetic Closure Rigid Boxes.webp',         href: '/products/rigid-boxes/custom-magnetic-closure-boxes/',        fit: 'cover',   tone: '#fce1c8' },
  { name: 'Donut Boxes',                         image: '/images/bakery/Custom Donut Boxes.webp',                  href: '/products/bakery-boxes/donut-boxes/',                         fit: 'cover',   tone: '#f09ed4' },
  { name: 'E-Cigarette Boxes',                   image: '/images/cigarette/CBD CIGAREETE BOX.webp',                href: '/products/cigarette-boxes/cbd-e-cigarette-boxes/',            fit: 'cover',   tone: '#272817' },
  { name: 'Satin Lined Boxes',                   image: '/images/rigid/Satin Lined Rigid Boxes.webp',              href: '/products/rigid-boxes/satin-lined-boxes/',                    fit: 'contain', tone: '#fefefe' },
  { name: 'Custom Rigid Drawer Boxes',           image: '/images/rigid/Rigid Drawer Boxes (Slide-Out Boxes).webp', href: '/products/rigid-boxes/custom-rigid-drawer-boxes/',            fit: 'contain', tone: '#fefefe' },
  { name: 'Custom Two-Piece Boxes',              image: '/images/rigid/Two-Piece Rigid Boxes (Lid & Base).webp',   href: '/products/rigid-boxes/custom-two-piece-boxes/',               fit: 'contain', tone: '#f1f1f1' },
  { name: 'Kraft Mailer Boxes',                  image: '/images/mailer/Kraft Mailer Box.webp',                    href: '/products/mailer-boxes/kraft-mailer-boxes/',                  fit: 'contain', tone: '#ffffff' },
  { name: 'Ecommerce Mailers',                   image: '/images/mailer/Mailer Box MAIN PAGE.webp',                href: '/products/mailer-boxes/ecommerce-mailers/',                   fit: 'contain', tone: '#cac5c0' },
  { name: 'CBD Tuck Boxes',                      image: '/images/tuck/CBD Tuck Box (2).webp',                      href: '/products/tuck-boxes/cbd-tuck-boxes/',                        fit: 'contain', tone: '#d6e9ef' },
  { name: 'Custom Dispenser Boxes',              image: '/images/dispenser/dispenser-main.webp',                   href: '/products/dispenser-boxes/',                                  fit: 'contain', tone: '#f7f7f7' },
]

const Arrow = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points={dir === 'left' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'} />
  </svg>
)

export default function FeaturedPackaging() {
  const [items, setItems] = useState<Product[]>(products)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  /* Shuffle after mount so the server and client markup still match. */
  useEffect(() => {
    const shuffled = [...products]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    setItems(shuffled)
  }, [])

  const syncArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft < 8)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8)
  }, [])

  useEffect(() => {
    syncArrows()
    window.addEventListener('resize', syncArrows)
    return () => window.removeEventListener('resize', syncArrows)
  }, [syncArrows, items])

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-card]') as HTMLElement | null
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section className="py-16 sm:py-20 bg-kraft-50" id="featured-packaging">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-ink">
              Featured Product Packaging
            </h2>
            <span className="hidden sm:block w-px h-7 bg-kraft-400/40" />
            <p className="text-ink/50 text-sm">
              Packaging built around what you sell.{' '}
              <Link href="/get-quote/" className="text-orange-600 font-medium underline underline-offset-4 decoration-orange-300 hover:decoration-orange-600 transition">
                Need something custom?
              </Link>
            </p>
          </div>

          <Link href="/products/" className="group inline-flex items-center gap-1.5 text-orange-600 font-bold text-xs uppercase tracking-[0.15em] hover:text-orange-700 transition-colors whitespace-nowrap">
            View all
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* ── Carousel ───────────────────────────────────────── */}
        <div className="relative">
          <button
            onClick={() => scrollByCard(-1)}
            aria-label="Previous products"
            disabled={atStart}
            className="notch-sm-tl hidden md:flex absolute -left-4 lg:-left-5 top-[38%] -translate-y-1/2 z-20 w-11 h-11 bg-ink items-center justify-center text-white hover:bg-orange-500 transition-colors duration-200 disabled:opacity-0 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            <Arrow dir="left" />
          </button>

          <div
            ref={trackRef}
            onScroll={syncArrows}
            className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
          >
            {items.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                data-card
                className="group snap-start flex-shrink-0 w-[76%] sm:w-[46%] lg:w-[calc((100%-4.5rem)/4)] focus:outline-none"
              >
                <div
                  className="dieline notch-sm-tl relative w-full aspect-[5/4] overflow-hidden transition-colors duration-300 group-hover:border-orange-500 group-focus-visible:ring-2 group-focus-visible:ring-orange-400 group-focus-visible:ring-offset-2"
                  style={{ backgroundColor: product.tone }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 76vw, (max-width: 1024px) 46vw, 23vw"
                    className={`transition-transform duration-[600ms] ease-out group-hover:scale-105 ${
                      product.fit === 'cover' ? 'object-cover' : 'object-contain p-6'
                    }`}
                  />
                </div>

                <h3 className="mt-4 font-bold text-ink text-[15px] leading-snug transition-colors duration-200 group-hover:text-orange-600">
                  {product.name}
                </h3>
                <span className="mt-1 inline-flex items-center gap-1.5 text-[13px] text-orange-600 font-bold uppercase tracking-wide">
                  Request a Quote
                </span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => scrollByCard(1)}
            aria-label="Next products"
            disabled={atEnd}
            className="notch-sm-tl hidden md:flex absolute -right-4 lg:-right-5 top-[38%] -translate-y-1/2 z-20 w-11 h-11 bg-ink items-center justify-center text-white hover:bg-orange-500 transition-colors duration-200 disabled:opacity-0 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            <Arrow dir="right" />
          </button>
        </div>

      </div>
    </section>
  )
}
