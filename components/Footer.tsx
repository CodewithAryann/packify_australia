'use client'

import Link from 'next/link'
import { PackifyMark } from '@/components/PackifyLogo'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AusFlag, SouthernCross } from '@/components/AusMotifs'

// ─────────────────────────────────────────────────────────────────────────────
// TRUSTPILOT TOGGLE
// Set to true to show the Trustpilot badge in the footer again.
// Nothing else needs to change: the markup and both images are still in place.
const SHOW_TRUSTPILOT = false
// ─────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  const pathname = usePathname()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === '/') {
      e.preventDefault()
      const element = document.querySelector(id)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const companyLinks = [
    { label: 'Products', href: '/products/' },
    { label: 'Featured Products', href: '/featured-products/' },
    { label: 'About Us', href: '/about/' },
    { label: 'Contact', href: pathname === '/' ? '#quote' : '/#quote', scroll: '#quote' },
    { label: 'Refund & Returns', href: '/refund-returns/' },
    { label: 'Shipping Policy', href: '/shipping-policy/' },
    { label: 'Reviews', href: '/reviews/' },
  ]

  const helpLinks = [
    { label: 'How to Order', href: '/how-to-order/' },
    { label: 'FAQ', href: pathname === '/' ? '#faqs' : '/#faqs', scroll: '#faqs' },
    { label: 'Artwork Guidelines', href: '/artwork-guidelines/' },
    { label: 'How to Measure a Box', href: '/how-to-measure/' },
    { label: 'Blog', href: '/blog/' },
  ]

  const productLinks = [
    { label: 'Mailer Boxes', href: '/products/mailer-boxes/' },
    { label: 'Tuck Boxes', href: '/products/tuck-boxes/' },
    { label: 'Rigid Boxes', href: '/products/rigid-boxes/' },
    { label: 'Dispenser Boxes', href: '/products/dispenser-boxes/' },
    { label: 'Cosmetic Boxes', href: '/products/cosmetic-boxes/' },
    { label: 'Bakery Boxes', href: '/products/bakery-boxes/' },
  ]

  return (
    <footer className="relative text-white overflow-hidden bg-kraft-950">
      {/* Corrugated flute edge marks the seam with the page above */}
      <div className="aus-stripe" aria-hidden="true" />
      <SouthernCross className="absolute top-10 right-8 w-36 h-36 opacity-[0.07] pointer-events-none" />

      {/* ── CTA Banner ── */}
      <div className="relative z-10 dieline-b border-kraft-400/25">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="stamp text-orange-500 border-orange-500 text-[10px] font-bold px-2.5 py-0.5 mb-2">Get started</p>
            <h3 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
              Ready to hit your packaging for six?
            </h3>
            <p className="text-sm text-white/70 mt-1">No minimums · Free Australia-wide shipping · 8–10 day turnaround</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/get-quote/"
              className="notch-tl inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 transition-colors text-sm"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/products/"
              className="dieline inline-flex items-center gap-2 text-white/90 hover:text-white hover:border-white font-semibold px-6 py-3 transition-colors text-sm"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand spans 2 cols */}
        <div className="lg:col-span-2 flex flex-col items-start">
          <div className="mb-5">
            <div className="flex items-center gap-3 flex-wrap">
              <PackifyMark size={44} />
              <span className="font-display text-3xl font-black uppercase tracking-tight text-white">Packify Custom Boxes</span>
              {/* <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80 border border-white/30 px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm">
                Custom Boxes
              </span> */}
            </div>
            <p className="text-[11px] text-white/50 tracking-widest uppercase mt-1.5 font-medium">
              House of Premium Packaging
            </p>
          </div>

          <p className="text-sm text-white/75 leading-relaxed max-w-sm mb-7">
            Australia-based custom packaging manufacturer serving e-commerce, retail, and D2C brands worldwide.
            Full-color printing, foil stamping, embossing. No die charges, free design support.
          </p>

          {/* Stats */}
          {/* <div className="flex gap-6 mb-7 p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm w-full max-w-xs">
            {[
              { value: '3,000+', label: 'Brands' },
              { value: '50M+', label: 'Boxes' },
              { value: '4.9★', label: 'Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center flex-1">
                <p className="text-lg font-black text-white">{stat.value}</p>
                <p className="text-[10px] text-white/55 uppercase tracking-wider mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div> */}

          {/* Trustpilot — hidden while SHOW_TRUSTPILOT is false (see top of file) */}
          {SHOW_TRUSTPILOT && (
          <a
            href="https://www.trustpilot.com/review/packifycustomboxes.com.au"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read our reviews on Trustpilot"
            className="group mb-7 inline-flex flex-col items-center gap-2.5 rounded-2xl bg-white px-6 py-4 shadow-lg shadow-orange-900/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
          >
            <Image
              src="/images/trustpilot-wordmark.webp"
              alt="Trustpilot"
              width={632}
              height={107}
              className="h-6 w-auto"
            />
            <Image
              src="/images/trustpilot-stars.webp"
              alt="Trustpilot star rating"
              width={736}
              height={132}
              className="h-7 w-auto"
            />
            <span className="text-sm font-medium text-gray-500 transition-colors duration-300 group-hover:text-orange-600">
              Read our reviews
            </span>
          </a>
          )}

          {/* Socials */}
          <div className="flex gap-3">
            {[
              { href: 'https://www.instagram.com/packifycustomboxes', icon: 'fab fa-instagram', label: 'Instagram' },
              { href: 'https://www.facebook.com/people/Packifycustomboxes/61581915925085/#', icon: 'fab fa-facebook-f', label: 'Facebook' },
              { href: 'https://wa.me/+61390004821', icon: 'fa-brands fa-whatsapp', label: 'WhatsApp' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="notch-sm-tl w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-colors duration-200"
              >
                <i className={`${s.icon} text-sm`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-500 mb-5 dieline-b border-kraft-400/25 pb-2 inline-block">Products</h3>
          <ul className="space-y-3">
            {productLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="w-2 h-[2px] bg-white/0 group-hover:bg-orange-500 transition-all duration-200 flex-shrink-0" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-500 mb-5 dieline-b border-kraft-400/25 pb-2 inline-block">Company</h3>
          <ul className="space-y-3">
            {companyLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={item.scroll ? (e) => handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>, item.scroll!) : undefined}
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="w-2 h-[2px] bg-white/0 group-hover:bg-orange-500 transition-all duration-200 flex-shrink-0" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help + Contact */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-500 mb-5 dieline-b border-kraft-400/25 pb-2 inline-block">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={item.scroll ? (e) => handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>, item.scroll!) : undefined}
                    className="text-sm text-white/80 hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-2 h-[2px] bg-white/0 group-hover:bg-orange-500 transition-all duration-200 flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-500 mb-5 dieline-b border-kraft-400/25 pb-2 inline-block">Contact</h3>
            <ul className="space-y-3.5">
              <li>
                <a href="tel:+61390004821" className="text-sm text-white/80 hover:text-white transition-colors flex items-start gap-2.5 group">
                  <span className="notch-sm-tl w-7 h-7 bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                    <i className="fas fa-phone text-[10px]"></i>
                  </span>
                  +61 3 9000 4821
                </a>
              </li>
              <li>
                <a href="mailto:hello@packifycustomboxes.com.au" className="text-sm text-white/80 hover:text-white transition-colors flex items-start gap-2.5 group break-all">
                  <span className="notch-sm-tl w-7 h-7 bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                    <i className="fas fa-envelope text-[10px]"></i>
                  </span>
                  hello@packifycustomboxes.com.au
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="notch-sm-tl w-7 h-7 bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="fas fa-map-marker-alt text-[10px]"></i>
                </span>
                <span className="text-sm text-white/80 leading-relaxed">
                  5 Riverside Quay,<br />Southbank VIC 3006, Australia
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Trust Bar ── */}
      <div className="relative z-10 dieline-t border-kraft-400/25">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Global Ops</span>
              <div className="w-px h-3 bg-white/20" />
              {['au', 'cn', 'sa', 'gb', 'ae', 'pk'].map((code) => (
                <Image
                  key={code}
                  src={`https://flagcdn.com/${code}.svg`}
                  alt={code}
                  width={22}
                  height={16}
                  className="rounded-sm border border-white/20 opacity-80 hover:opacity-100 transition"
                />
              ))}
            </div>

            <div className="hidden md:block h-5 w-px bg-white/20" />

            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Logistics</span>
              <div className="w-px h-3 bg-white/20" />
              <span className="text-[11px] font-bold tracking-wide text-white/70">Australia Post</span>
              <Image src="/images/DHL-Symbol.webp" alt="DHL" width={46} height={18} className="opacity-70 hover:opacity-100 transition brightness-0 invert" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg" alt="FedEx" width={46} height={18} className="opacity-70 hover:opacity-100 transition brightness-0 invert" />
            </div>

            <div className="hidden md:block h-5 w-px bg-white/20" />

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Payments</span>
              <div className="w-px h-3 bg-white/20" />
              <Image src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" width={34} height={34} className="opacity-80 hover:opacity-100 transition" />
              <Image src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" width={34} height={34} className="opacity-80 hover:opacity-100 transition" />
              <Image src="https://img.icons8.com/color/48/000000/paypal.png" alt="Paypal" width={34} height={34} className="opacity-80 hover:opacity-100 transition" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="relative z-10 dieline-t border-kraft-400/25">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50 flex items-center gap-2">
            <AusFlag className="w-5 h-2.5" />
            © 2026 <span className="text-white/80 font-semibold">Packify Custom Boxes</span>. Proudly Australian. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/50">
            <Link href="/terms/" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="w-px h-3 bg-white/20" />
            <Link href="/privacy/" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}