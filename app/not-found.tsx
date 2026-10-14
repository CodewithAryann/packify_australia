import Link from 'next/link'
import { Kangaroo, CricketBall, OutbackSkyline } from '@/components/AusMotifs'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center px-6 pt-[6rem] pb-24 bg-kraft-50 kraft-grain">
      <OutbackSkyline className="absolute bottom-1 left-0 w-full h-32 pointer-events-none" />
      <div className="relative max-w-xl w-full text-center">
        <Kangaroo className="w-32 h-auto mx-auto mb-2" holdingBox={false} />
        <p className="font-display text-7xl sm:text-8xl font-black text-orange-600 mb-2 flex items-center justify-center gap-1">
          4<CricketBall className="w-14 h-14 sm:w-16 sm:h-16" />4
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-ink mb-3">
          This page hopped off.
        </h1>
        <p className="text-ink/60 mb-8">
          The page you are looking for does not exist or may have moved. Let us get you back to
          something useful.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Link
            href="/"
            className="notch-tl bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide px-6 py-3 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/get-quote/"
            className="dieline text-ink hover:bg-white font-bold uppercase tracking-wide px-6 py-3 transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        <div className="text-sm text-ink/50">
          <span className="mr-2">Popular pages:</span>
          <Link href="/products/" className="text-orange-600 hover:underline mx-2">Products</Link>
          <Link href="/blog/" className="text-orange-600 hover:underline mx-2">Blog</Link>
          <Link href="/how-to-order/" className="text-orange-600 hover:underline mx-2">How to Order</Link>
          <Link href="/reviews/" className="text-orange-600 hover:underline mx-2">Reviews</Link>
        </div>
      </div>
      <div className="aus-stripe absolute bottom-0 left-0 right-0" aria-hidden="true" />
    </section>
  )
}
