// Packify brand mark: an orange notched tile holding a white 3D box.
// Inline SVG, so it is always crisp, always white-on-orange and needs no image request.

export function PackifyMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <span
      className={`notch-sm-tl inline-flex items-center justify-center shrink-0 bg-gradient-to-br from-orange-400 to-orange-600 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 48 48"
        width={Math.round(size * 0.84)}
        height={Math.round(size * 0.84)}
        fill="none"
        stroke="#ea580c"
        strokeWidth="1.8"
        strokeLinejoin="round"
      >
        {/* top face */}
        <path d="M24 7 38.5 15.5 24 24 9.5 15.5Z" fill="#ffffff" />
        {/* left face */}
        <path d="M9.5 15.5 24 24V41L9.5 32.5Z" fill="#ffffff" fillOpacity="0.82" />
        {/* right face */}
        <path d="M38.5 15.5 24 24V41L38.5 32.5Z" fill="#ffffff" fillOpacity="0.58" />
      </svg>
    </span>
  )
}

export default function PackifyLogo({ showTagline = true }: { showTagline?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <PackifyMark size={40} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl sm:text-2xl font-black tracking-tight uppercase text-white">
          Packify<span className="text-orange-500">.</span>
        </span>
        {showTagline && (
          <span className="mt-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">
            Custom Boxes
          </span>
        )}
      </span>
    </span>
  )
}
