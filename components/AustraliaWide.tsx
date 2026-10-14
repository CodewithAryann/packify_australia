import Link from 'next/link'
import { AusFlag, Kangaroo, CricketBall, CricketBat, AUS_MAIN, AUS_TAS, AUS_CITIES } from '@/components/AusMotifs'

export default function AustraliaWide() {
  return (
    <section className="relative bg-kraft-100 dieline-t dieline-b border-kraft-400/40 py-20 px-6 overflow-hidden" id="australia-wide">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div>
          <span className="stamp text-aus-green border-aus-green px-3 py-1 text-[11px] font-bold gap-2">
            <AusFlag className="w-6 h-3" /> Proudly Australian
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight leading-[0.95] text-ink mt-4 mb-5">
            Delivered <span className="text-orange-600">Australia-wide</span>,
            <br />free.
          </h2>
          <p className="text-ink/70 text-lg leading-relaxed mb-6 max-w-lg">
            From Perth to Brisbane and Darwin to Hobart, your custom boxes ship free to every state and territory.
            No minimums, no plate charges, and a team that knows what local brands need.
          </p>

          <ul className="dieline-t divide-y divide-kraft-200 max-w-md mb-8 text-ink/80">
            {[
              'Free shipping to every state and territory',
              'Kraft and recyclable materials on request',
              '8–10 business day production',
            ].map((line) => (
              <li key={line} className="flex items-center gap-3 py-2.5">
                <CricketBall className="w-4 h-4 shrink-0" />
                {line}
              </li>
            ))}
          </ul>

          <Link
            href="/get-quote/"
            className="notch-tl inline-block bg-ink hover:bg-orange-600 text-white font-bold uppercase tracking-wide px-7 py-3.5 text-sm transition-colors"
          >
            Hit Your Packaging for Six
          </Link>
        </div>

        {/* Right: map with kangaroo and cricket */}
        <div className="relative">
          <svg viewBox="-10 -10 400 370" className="w-full h-auto" role="img" aria-label="Map of Australia with delivery cities">
            <path d={AUS_MAIN} fill="#F97316" />
            <path d={AUS_TAS} fill="#F97316" />
            <path d={AUS_MAIN} fill="none" stroke="#7C2D12" strokeWidth="1.5" strokeDasharray="6 5" opacity="0.4" />
            {AUS_CITIES.map((c) => (
              <g key={c.name}>
                <circle cx={c.x} cy={c.y} r="5" fill="#FBF7EF" stroke="#241A12" strokeWidth="2" />
                <text
                  x={c.x + c.dx}
                  y={c.y + 4}
                  textAnchor={c.anchor}
                  fontSize="13"
                  fontWeight="700"
                  fill="#241A12"
                  fontFamily="Arial, sans-serif"
                >
                  {c.name}
                </text>
              </g>
            ))}
          </svg>

          <Kangaroo className="hidden sm:block absolute -bottom-4 -left-2 w-28 h-auto" />
          <div className="absolute -top-2 right-0 flex items-end gap-2 rotate-6">
            <CricketBat className="w-6 h-14" />
            <CricketBall className="w-9 h-9" />
          </div>
        </div>
      </div>
      <div className="aus-stripe absolute bottom-0 left-0 right-0" aria-hidden="true" />
    </section>
  )
}
