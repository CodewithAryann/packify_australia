'use client'

import Link from 'next/link'
import { AusFlag, Kangaroo, CricketBall, CricketBat, OutbackSkyline } from '@/components/AusMotifs'

// Original die-line illustration: an isometric stack of kraft boxes with
// fold-score lines and a strip of packing tape. Replaces a stock photo so
// the hero is built from the brand's own visual language.
function BoxStackIllustration() {
  return (
    <svg viewBox="0 0 480 420" className="w-full h-auto max-w-md" role="img" aria-label="Illustration of stacked custom kraft boxes">
      <g opacity="0.9">
        <polygon points="60,300 220,300 220,380 60,380" fill="#C9A66B" />
        <polygon points="60,300 220,300 260,270 100,270" fill="#E4D3AE" />
        <polygon points="220,300 260,270 260,350 220,380" fill="#8A6A3F" />
        <line x1="60" y1="340" x2="220" y2="340" stroke="#4A3423" strokeWidth="1.5" strokeDasharray="6 5" opacity="0.5" />
      </g>
      <g>
        <polygon points="150,180 340,180 340,320 150,320" fill="#F97316" />
        <polygon points="150,180 340,180 385,140 195,140" fill="#FB923C" />
        <polygon points="340,180 385,140 385,280 340,320" fill="#EA580C" />
        <line x1="150" y1="250" x2="340" y2="250" stroke="#7C2D12" strokeWidth="1.5" strokeDasharray="7 6" opacity="0.55" />
        <line x1="245" y1="180" x2="245" y2="320" stroke="#7C2D12" strokeWidth="1.5" strokeDasharray="7 6" opacity="0.4" />
        {/* packing tape strip */}
        <rect x="150" y="205" width="190" height="26" fill="#FBF7EF" opacity="0.9" />
        <line x1="150" y1="212" x2="340" y2="212" stroke="#C9A66B" strokeWidth="1" opacity="0.6" />
        <line x1="150" y1="224" x2="340" y2="224" stroke="#C9A66B" strokeWidth="1" opacity="0.6" />
      </g>
      <g>
        <polygon points="260,60 400,60 400,170 260,170" fill="#4A3423" />
        <polygon points="260,60 400,60 435,30 295,30" fill="#5C4530" />
        <polygon points="400,60 435,30 435,140 400,170" fill="#241A12" />
        <line x1="260" y1="115" x2="400" y2="115" stroke="#C9A66B" strokeWidth="1.5" strokeDasharray="6 5" opacity="0.5" />
      </g>
      {/* courier stamp */}
      <g transform="translate(70,90) rotate(-10)">
        <circle cx="0" cy="0" r="34" fill="none" stroke="#F97316" strokeWidth="3" />
        <circle cx="0" cy="0" r="27" fill="none" stroke="#F97316" strokeWidth="1.5" />
        <text x="0" y="-2" textAnchor="middle" fontSize="9" fontWeight="800" fill="#F97316" fontFamily="Arial, sans-serif">NO MOQ</text>
        <text x="0" y="10" textAnchor="middle" fontSize="7" fontWeight="700" fill="#F97316" fontFamily="Arial, sans-serif">AUSTRALIA</text>
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative bg-kraft-50 kraft-grain overflow-hidden px-6 pt-28 pb-14 md:pt-36 md:pb-20">
      <OutbackSkyline className="absolute bottom-1 left-0 w-full h-32 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center animate-fold-open">
        {/* Left: manifest-style content block */}
        <div className="space-y-6 max-w-xl">
          <span className="stamp text-orange-600 border-orange-600 px-3 py-1 text-[11px] font-bold gap-2">
            <AusFlag className="w-6 h-3" /> Made for Australian brands
          </span>

          <h1 className="font-display text-5xl sm:text-6xl font-black leading-[0.95] text-ink uppercase tracking-tight">
            Custom Packaging,
            <br />
            <span className="text-orange-600">Built to Order</span>
          </h1>

          <p className="text-lg text-ink/70 leading-relaxed">
            Mailer boxes, tuck boxes, and rigid boxes — fully printed, custom
            sized, ready to ship. No die or plate charges. Free design support,
            kraft and recyclable materials on request.
          </p>

          {/* Packing-slip style fact list, not generic bullet icons */}
          <ul className="dieline-t divide-y divide-kraft-200/80">
            {[
              ['01', 'Free Australia-wide shipping'],
              ['02', 'No minimum order quantity'],
              ['03', '8–10 business day turnaround'],
            ].map(([n, label]) => (
              <li key={n} className="flex items-center gap-3 py-2.5 text-ink/80 font-medium">
                <span className="font-display text-orange-500 text-sm font-bold">{n}</span>
                {label}
              </li>
            ))}
          </ul>

          <Link
            href="#type"
            aria-label="Start your custom box"
            className="notch-tl inline-block px-7 py-3.5 bg-ink text-white font-bold uppercase tracking-wide text-sm hover:bg-orange-600 transition-colors"
          >
            Start Your Custom Box
          </Link>
        </div>

        {/* Right: original illustration, the one bold visual moment */}
        <div className="relative flex justify-center md:justify-end">
          <Kangaroo className="hidden sm:block absolute -left-2 bottom-2 w-28 h-auto opacity-95" />
          <BoxStackIllustration />
          <div className="absolute right-2 bottom-1 flex items-end gap-2 rotate-[8deg]">
            <CricketBat className="w-6 h-14" />
            <CricketBall className="w-9 h-9" />
          </div>
        </div>
      </div>

      <div className="aus-stripe absolute bottom-0 left-0 right-0" aria-hidden="true" />
    </section>
  )
}
