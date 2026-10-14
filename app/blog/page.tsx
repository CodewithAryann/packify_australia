import PageAccent from '@/components/PageAccent'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/lib/blog-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Box Sizing Guides & Packaging Tips | Packify',
  description:
    'Custom packaging guides from Packify: box sizes, materials, and print tips for mailer, rigid, food, and bakery boxes. No minimums and free Australia-wide shipping.',
  alternates: { canonical: 'https://packifycustomboxes.com.au/blog/' },
  openGraph: {
    title: 'Custom Box Sizing Guides & Packaging Tips | Packify',
    description:
      'Custom packaging guides from Packify: box sizes, materials, and print tips for mailer, rigid, food, and bakery boxes. No minimums and free Australia-wide shipping.',
    url: 'https://packifycustomboxes.com.au/blog/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Box Sizing Guides & Packaging Tips | Packify',
    description:
      'Custom packaging guides from Packify: box sizes, materials, and print tips for mailer, rigid, food, and bakery boxes. No minimums and free Australia-wide shipping.',
  },
}

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

export default function BlogPage() {
  return (
    <main className="bg-kraft-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ink text-white py-24 pt-[8rem]">
        <PageAccent variant="cross" dark />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="stamp text-orange-500 border-orange-500 text-[10px] font-bold px-2.5 py-0.5 mb-4">Resources & guides</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-6 tracking-tight">
            Packaging Insights & Trends
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Expert advice, industry trends, and practical tips to help you make better packaging decisions.
          </p>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mt-6 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors underline underline-offset-2">Home</Link>
            <span>›</span>
            <span className="text-white font-medium">Blog</span>
          </div>
        </div>
      </section>

      {/* Internal Navigation Pills */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-2">
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="text-ink/50 font-medium self-center">Browse:</span>
          {boxTypes.map((box) => (
            <Link
              key={box.href}
              href={box.href}
              className="px-3 py-1.5 bg-white border border-kraft-200 text-ink/60 hover:text-orange-600 hover:border-orange-300 transition-colors"
            >
              {box.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="dieline notch-sm-tl bg-white overflow-hidden hover:border-orange-500 transition-colors duration-300 group"
            >
              <div className="relative w-full h-56 overflow-hidden dieline-b">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-ink/45 mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-ink mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-ink/60 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}/`}
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-bold text-sm uppercase tracking-wide"
                >
                  Read Full Article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Product Backlinks Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="dieline notch-tl bg-white p-8">
          <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">Browse products</p>
          <h2 className="font-display text-lg font-black uppercase tracking-tight text-ink mb-2">Browse Our Custom Packaging Products</h2>
          <p className="text-sm text-ink/50 mb-6">Free Australia-wide shipping · No minimums · 8–10 day turnaround</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {boxTypes.map((box) => (
              <Link
                key={box.href}
                href={box.href}
                className="flex items-center justify-center text-center px-3 py-3 bg-kraft-50 border border-kraft-200 hover:border-orange-400 hover:text-orange-600 text-ink/70 font-medium text-sm transition-colors"
              >
                {box.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Get a custom quote for your packaging needs today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-quote/"
              className="notch-tl inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide px-8 py-4 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/products/"
              className="dieline inline-flex items-center gap-2 text-white hover:bg-white/10 font-bold uppercase tracking-wide px-8 py-4 transition-colors border-white/30"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}