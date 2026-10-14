'use client'

import { AusFlag } from '@/components/AusMotifs'

import { useState, useEffect, useRef, Fragment } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import SearchLink from '@/components/SearchLink'
import PackifyLogo from '@/components/PackifyLogo'
type NavIndustry = { name: string; slug: string; icon: string }

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about/' },
  { name: 'Boxes by Styles', href: '/products/' },
  { name: 'How it Works', href: '#it-works' },
  { name: 'Blog', href: '/blog/' },
  { name: 'Request a Quote', href: '/get-quote/' },
]

const boxTypes = [
  { name: 'View All Products', href: '/products/' },
  { name: 'Mailer Boxes', href: '/products/mailer-boxes/' },
  { name: 'Tuck Boxes', href: '/products/tuck-boxes/' },
  { name: 'Rigid Boxes', href: '/products/rigid-boxes/' },
  { name: 'Dispenser Boxes', href: '/products/dispenser-boxes/' },
  { name: 'Cigarette Boxes', href: '/products/cigarette-boxes/' },
  { name: 'Burger Boxes', href: '/products/burger-boxes/' },
  { name: 'Magnetic Closure', href: '/products/magnetic-closure/' },
  { name: 'Cosmetic Boxes', href: '/products/cosmetic-boxes/' },
  { name: 'Bakery Boxes', href: '/products/bakery-boxes/' },
]

// ── Per-industry SVG icon rendered inline ────────────────────────────────────
function IndustryIcon({ pathData }: { pathData: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-[18px] h-[18px] shrink-0"
      dangerouslySetInnerHTML={{ __html: pathData }}
    />
  )
}

// ── Industries mega-menu (controlled externally) ──────────────────────────────
function IndustriesMenu({
  onNavigate,
  open,
  onOpen,
  onClose,
  navIndustries,
}: {
  onNavigate: (href: string) => void
  open: boolean
  onOpen: () => void
  navIndustries: NavIndustry[]
  onClose: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open, onClose])

  const third = Math.ceil(navIndustries.length / 3)
  const col1 = navIndustries.slice(0, third)
  const col2 = navIndustries.slice(third, third * 2)
  const col3 = navIndustries.slice(third * 2)

  return (
    <div ref={ref} className="relative">
      <button
        onMouseEnter={onOpen}
        onClick={() => (open ? onClose() : onOpen())}
        className="flex items-center gap-1 hover:text-orange-400 transition-colors font-medium whitespace-nowrap"
      >
        Boxes by Industry
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Always rendered so industry links exist in static HTML for crawlers; CSS-toggled */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 ${open ? 'block' : 'hidden'}`}
          style={{ width: '700px' }}
        >
          <div onMouseLeave={onClose} className="bg-kraft-50 text-ink dieline notch-tl">
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-3 dieline-b">
            <span className="text-[13px] font-bold text-orange-600">
              Shop by Industry
            </span>
            <button
              onClick={() => { onClose(); onNavigate('/get-quote') }}
              className="text-[11px] font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700 transition-colors"
            >
              Get a Free Quote
            </button>
          </div>

          {/* 3-column list */}
          <div className="grid grid-cols-3 p-4 gap-x-2">
            {[col1, col2, col3].map((col, ci) => (
              <div key={ci} className="flex flex-col gap-0.5">
                {col.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}/`}
                    onClick={onClose}
                    className="flex items-center gap-2.5 px-3 py-2 hover:bg-orange-100/50 transition-all duration-150 text-left group w-full"
                  >
                    <span className="text-kraft-600 group-hover:text-orange-600 transition-colors">
                      <IndustryIcon pathData={ind.icon} />
                    </span>
                    <span className="text-[13px] font-medium text-ink/80 group-hover:text-orange-700 transition-colors leading-tight">
                      {ind.name}
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-6 py-2.5 bg-kraft-100 dieline-t text-center">
            <p className="text-[11px] text-kraft-600">
              Custom packaging solutions for every industry, no minimum order required
            </p>
          </div>
          </div>
        </div>
    </div>
  )
}

// ── Main Header ───────────────────────────────────────────────────────────────
export default function Header({
  navIndustries,
}: {
  navIndustries: NavIndustry[]
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)

  // 'products' | 'industries' | null, only one desktop dropdown open at a time
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<'products' | 'industries' | null>(null)

  const pathname = usePathname()
  const router = useRouter()

  // Read ?scrollTo= from window.location instead of useSearchParams().
  // useSearchParams() forced the ENTIRE header into client-side-only rendering
  // (BAILOUT_TO_CLIENT_SIDE_RENDERING), which removed every header nav link
  // from the static HTML on all pages, invisible to Googlebot. Same behavior,
  // but the header now server-renders.
  useEffect(() => {
    const scrollTo = new URLSearchParams(window.location.search).get('scrollTo')
    if (scrollTo) {
      const el = document.querySelector(scrollTo)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [pathname])

  const closeAllMenus = () => {
    setMobileMenuOpen(false)
    setDropdownOpen(false)
    setMobileIndustriesOpen(false)
    setActiveDesktopMenu(null)
  }

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (pathname === '/') {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push(`/?scrollTo=${href}`)
      }
    } else {
      router.push(href)
    }
    setMobileMenuOpen(false)
    setDropdownOpen(false)
    setMobileIndustriesOpen(false)
    setActiveDesktopMenu(null)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-ink/95 backdrop-blur-md text-white transition-all duration-300 dieline-b border-kraft-400/30">

      {/* Top utility bar — one clear action: call. Everything else recedes. */}
      <div className="w-full bg-black/30 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-8 flex items-center justify-between gap-6 text-[12.5px]">

          {/* LEFT — the hero action */}
          <a
            href="tel:+61390004821"
            className="group flex items-center gap-2 whitespace-nowrap"
            aria-label="Call Packify CustomBoxes"
          >
            <AusFlag className="w-5 h-2.5 shrink-0" />
            <span className="text-white/50 font-normal hidden sm:inline">
              Talk to a packaging expert
            </span>
            <span className="font-semibold tracking-wide tabular-nums text-white group-hover:text-orange-400 transition-colors">
              +61 3 9000 4821
            </span>
          </a>

          {/* RIGHT — quiet secondary links */}
          <div className="flex items-center gap-4 text-white/45">
            <a
              href="mailto:hello@packifycustomboxes.com.au"
              className="hidden lg:inline hover:text-orange-400 transition-colors whitespace-nowrap"
            >
              hello@packifycustomboxes.com.au
            </a>

            <span className="hidden lg:inline h-3 w-px bg-white/15" aria-hidden="true" />

            <div className="hidden sm:flex items-center gap-3">
              {[
                { href: 'https://www.facebook.com/people/Packifycustomboxes/61581915925085/#', icon: 'fab fa-facebook-f', label: 'Facebook' },
                { href: 'https://www.instagram.com/packifycustomboxes', icon: 'fab fa-instagram', label: 'Instagram' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="hover:text-orange-400 transition-colors"
                >
                  <i className={`${s.icon} text-[13px]`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4 lg:px-8 lg:py-2.5">

        {/* Logo */}
        <div
          className="flex items-center gap-2.5 cursor-pointer select-none shrink-0"
          onClick={() => handleNavClick('/')}
          role="link"
          aria-label="Go to homepage"
        >
          <PackifyLogo />
        </div>

        {/* Mobile: search + hamburger */}
        <div className="lg:hidden flex items-center gap-1">
          <SearchLink enableShortcut={false} />
        <button
          className="flex flex-col justify-center items-center gap-[6px] w-10 h-10 p-2 rounded-md hover:bg-white/10 transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
          <span className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
        </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-3 xl:gap-5 items-center font-medium text-[15px] xl:text-base">
          {navLinks.map((link) =>
            link.name === 'Request a Quote' ? (
              <Link
                key={link.name}
                href={link.href}
                className="notch-sm-tl bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 transition-all duration-200 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ) : link.name === 'Boxes by Styles' ? (
              <Fragment key="products-group">
                {/* Products dropdown, controlled by activeDesktopMenu */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDesktopMenu('products')}
                >
                  <button className="flex items-center gap-1 hover:text-orange-400 transition-colors whitespace-nowrap">
                    {link.name}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${activeDesktopMenu === 'products' ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {activeDesktopMenu === 'products' && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50"
                      onMouseLeave={() => setActiveDesktopMenu(null)}
                    >
                      <div className="w-56 bg-kraft-50 text-ink dieline notch-sm-tl py-1">
                        {boxTypes.map((box) => (
                          <Link
                            key={box.name}
                            href={box.href}
                            onClick={() => setActiveDesktopMenu(null)}
                            className="block px-4 py-2 w-full text-left text-sm hover:bg-orange-100/60 hover:text-orange-700 transition-colors"
                          >
                            {box.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Industries, right after Products, shares activeDesktopMenu state */}
                <IndustriesMenu
                  navIndustries={navIndustries}
                  onNavigate={handleNavClick}
                  open={activeDesktopMenu === 'industries'}
                  onOpen={() => setActiveDesktopMenu('industries')}
                  onClose={() => setActiveDesktopMenu(null)}
                />
              </Fragment>
            ) : link.href.startsWith('#') ? (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-orange-400 transition-colors whitespace-nowrap"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-orange-400 transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            )
          )}

          {/* Search */}
          <span className="shrink-0">
            <SearchLink />
          </span>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden w-full bg-ink/95 backdrop-blur-md text-white transition-all duration-300 overflow-hidden dieline-t ${mobileMenuOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
        <div className="flex flex-col py-4 space-y-1 px-4">
          {navLinks.map((link) =>
            link.name === 'Request a Quote' ? (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeAllMenus}
                className="notch-sm-tl block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-3 py-3 transition-all mt-1"
              >
                {link.name}
              </Link>
            ) : link.name === 'Boxes by Styles' ? (
              <div key={link.name}>
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="w-full flex items-center justify-between px-3 py-2.5 hover:text-orange-400 transition-colors rounded-lg hover:bg-white/5">
                  <span>{link.name}</span>
                  <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="ml-4 border-l border-white/10 pl-3 mt-1 space-y-0.5">
                    {boxTypes.map((box) => (
                      <Link key={box.name} href={box.href} onClick={closeAllMenus} className="block w-full text-left px-3 py-2 text-sm text-white/70 hover:text-orange-400 transition-colors">
                        {box.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : link.href.startsWith('#') ? (
              <button key={link.name} onClick={() => handleNavClick(link.href)} className="w-full text-left px-3 py-2.5 hover:text-orange-400 transition-colors rounded-lg hover:bg-white/5">
                {link.name}
              </button>
            ) : (
              <Link key={link.name} href={link.href} onClick={closeAllMenus} className="block w-full text-left px-3 py-2.5 hover:text-orange-400 transition-colors rounded-lg hover:bg-white/5">
                {link.name}
              </Link>
            )
          )}

          {/* Mobile Industries */}
          <div>
            <button onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)} className="w-full flex items-center justify-between px-3 py-2.5 hover:text-orange-400 transition-colors rounded-lg hover:bg-white/5">
              <span>Boxes by Industry</span>
              <svg className={`w-4 h-4 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileIndustriesOpen && (
              <div className="ml-4 border-l border-white/10 pl-3 mt-1 max-h-64 overflow-y-auto space-y-0.5">
                {navIndustries.map((ind) => (
                  <Link key={ind.slug} href={`/industries/${ind.slug}/`} onClick={closeAllMenus} className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white/70 hover:text-orange-400 transition-colors">
                    <span className="opacity-60">
                      <IndustryIcon pathData={ind.icon} />
                    </span>
                    {ind.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}