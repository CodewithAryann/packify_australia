import type { ReactNode } from 'react'
import { AusFlag, Kangaroo, CricketBall, CricketBat, SouthernCross, Wattle } from '@/components/AusMotifs'

type Variant = 'kangaroo' | 'cricket' | 'wattle' | 'cross'

// Decorative Australian accent for the right edge of a page header.
// Hidden on small screens so it never crowds the content.
export default function PageAccent({ variant = 'kangaroo', dark = false, inline = false }: { variant?: Variant; dark?: boolean; inline?: boolean }) {
  return (
    <div className={`pointer-events-none absolute bottom-0 hidden md:flex items-end gap-3 ${inline ? 'right-0' : 'right-6 lg:right-16'}`} aria-hidden="true">
      {variant === 'kangaroo' && <Kangaroo className="w-32 lg:w-40 h-auto" />}
      {variant === 'cricket' && (
        <div className="flex items-end gap-2 pb-6 rotate-6">
          <CricketBat className="w-8 h-20" />
          <CricketBall className="w-12 h-12" />
        </div>
      )}
      {variant === 'wattle' && <Wattle className="w-24 h-32" />}
      {variant === 'cross' && <SouthernCross className="w-28 h-28 mb-6" color={dark ? '#F97316' : '#C9A66B'} />}
    </div>
  )
}

export function AusStripe({ className = '' }: { className?: string }) {
  return <div className={`aus-stripe ${className}`} aria-hidden="true" />
}

export function AusChip({ children }: { children: ReactNode }) {
  return (
    <span className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3 gap-1.5">
      <AusFlag className="w-4 h-2" /> {children}
    </span>
  )
}
