'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/lib/blog-content'

export type RelatedPost = Pick<BlogPost, 'slug' | 'title' | 'image' | 'author' | 'readTime' | 'excerpt' | 'date'>
import BlogInlineLinks, { linkifyContent } from '@/components/BlogInlineLinks'

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

export default function BlogPostClient({ post, relatedPosts }: { post: BlogPost; relatedPosts: RelatedPost[] }) {
  const [activeSection, setActiveSection] = useState<number>(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[data-section-idx]')
      let current = 0
      sections.forEach((el, i) => {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 160) current = i
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (idx: number) => {
    const el = document.querySelector(`section[data-section-idx="${idx}"]`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="bg-white min-h-screen">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-[6rem] pb-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <span>›</span>
          <Link href="/blog/" className="hover:text-orange-600 transition-colors">Blog</Link>
          <span>›</span>
          <span className="text-ink font-medium truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-ink mb-4 leading-[0.95] max-w-4xl">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-ink/50 text-sm mb-6">
          <span className="font-medium text-ink/70">{post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readTime}
          </span>
        </div>
        <div className="dieline notch-tl relative h-64 sm:h-80 md:h-[420px] overflow-hidden mb-0">
          <Image src={post.image} alt={post.title} fill priority className="object-cover" />
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex gap-10 items-start">

          {/* TOC Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-28 self-start">
            <div className="dieline notch-sm-tl bg-white overflow-hidden">
              <div className="px-5 py-4 dieline-b">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-600">Table of Contents</p>
              </div>
              <nav className="px-3 py-3 space-y-1">
                {post.sections.map((section, i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    className={`w-full text-left px-3 py-2.5 text-sm font-medium transition-all duration-200 leading-snug ${
                      activeSection === i
                        ? 'bg-ink text-white'
                        : 'text-ink/60 hover:bg-kraft-50 hover:text-ink'
                    }`}
                  >
                    {section.h2}
                  </button>
                ))}
                {post.faq && post.faq.length > 0 && (
                  <button
                    onClick={() => {
                      const el = document.querySelector('#faq-section')
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className="w-full text-left px-3 py-2.5 text-sm font-medium transition-all duration-200 leading-snug text-ink/60 hover:bg-kraft-50 hover:text-ink"
                  >
                    Frequently Asked Questions
                  </button>
                )}
              </nav>
            </div>

            {/* Sidebar CTA */}
            <div className="mt-6 notch-tl bg-orange-500 p-5 text-white">
              <p className="stamp border-white text-white text-[9px] font-bold px-2 py-0.5 mb-2">Get a quote</p>
              <h3 className="font-display font-black uppercase tracking-tight text-base mb-2">Ready to Order?</h3>
              <p className="text-xs text-white/85 mb-4 leading-relaxed">
                Get a free quote on custom packaging tailored to your brand.
              </p>
              <Link
                href="/get-quote/"
                className="inline-block w-full text-center bg-ink text-white font-bold uppercase tracking-wide text-sm py-2.5 hover:bg-black transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </aside>

          {/* Article Body */}
          <article className="flex-1 min-w-0">
            <div className="space-y-10">
              {post.sections.map((section, i) => (
                <section
                  key={i}
                  data-section-idx={i}
                  className="scroll-mt-32"
                >
                  <h2 className="font-display text-xl md:text-2xl font-black uppercase tracking-tight text-ink mb-3">
                    {section.h2}
                  </h2>
                  <BlogInlineLinks content={section.content} currentPath={`/blog/${post.slug}/`} />

                  {/* Optional data table */}
                  {section.table && (
                    <div className="mt-5 overflow-x-auto dieline">
                      <table className="w-full text-sm text-left">
                        <thead>
                          <tr className="bg-ink text-white">
                            {section.table.headers.map((header, hi) => (
                              <th
                                key={hi}
                                className="px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, ri) => (
                            <tr
                              key={ri}
                              className={ri % 2 === 0 ? 'bg-white' : 'bg-kraft-50'}
                            >
                              {row.map((cell, ci) => (
                                <td
                                  key={ci}
                                  className={`px-4 py-3 text-ink/70 ${ci === 0 ? 'font-semibold text-ink' : ''}`}
                                >
                                  {section.table!.linkCells
                                    ? linkifyContent(cell, `/blog/${post.slug}/`)
                                    : cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Optional inline image */}
                  {section.inlineImage && (
                    <figure className="mt-6">
                      {section.inlineImage.contain ? (
                        <div className="dieline notch-sm-tl overflow-hidden bg-white">
                          <Image
                            src={section.inlineImage.src}
                            alt={section.inlineImage.alt}
                            width={section.inlineImage.width ?? 1200}
                            height={section.inlineImage.height ?? 900}
                            sizes="(max-width: 768px) 100vw, 720px"
                            className="w-full h-auto"
                          />
                        </div>
                      ) : (
                        <div className="dieline notch-sm-tl relative w-full h-64 sm:h-80 overflow-hidden">
                          <Image
                            src={section.inlineImage.src}
                            alt={section.inlineImage.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      {section.inlineImage.caption && (
                        <figcaption className="mt-2 text-xs text-center text-ink/40 italic">
                          {section.inlineImage.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}

                  {/* Inline product links at midpoint */}
                  {i === Math.floor(post.sections.length / 2) - 1 && post.productLinks && (
                    <div className="mt-6 p-5 bg-kraft-50 dieline">
                      <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">Explore Our Packaging</p>
                      <div className="flex flex-wrap gap-2">
                        {post.productLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-orange-600 border border-orange-200 text-sm font-medium hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-colors"
                          >
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* FAQ Section */}
            {post.faq && post.faq.length > 0 && (
              <section id="faq-section" className="mt-14 scroll-mt-32">
                <h2 className="font-display text-xl md:text-2xl font-black uppercase tracking-tight text-ink mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="dieline-t divide-y divide-kraft-200">
                  {post.faq.map((item, i) => (
                    <div
                      key={i}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between py-4 text-left hover:text-orange-600 transition-colors"
                        aria-expanded={openFaq === i}
                      >
                        <span className="font-semibold text-ink text-sm md:text-base pr-4">
                          {item.question}
                        </span>
                        <span className={`font-display font-bold text-orange-500 text-xl shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>
                          +
                        </span>
                      </button>
                      {openFaq === i && (
                        <div className="pb-5">
                          <p className="text-sm text-ink/60 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Product backlinks pill grid */}
            <div className="my-12 p-6 bg-kraft-50 dieline">
              <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-4">Our Packaging Products</p>
              <div className="flex flex-wrap gap-2">
                {boxTypes.map((box) => (
                  <Link
                    key={box.href}
                    href={box.href}
                    className="px-3 py-1.5 bg-white text-sm text-ink/70 border border-kraft-200 hover:text-orange-600 hover:border-orange-300 transition-colors"
                  >
                    {box.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="my-10 notch-tl bg-ink px-8 py-10 text-white">
              <p className="stamp text-orange-500 border-orange-500 text-[10px] font-bold px-2.5 py-0.5 mb-4">Get started</p>
              <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 leading-tight">
                Elevate Your Brand With Custom Packaging
              </h3>
              <p className="text-white/60 mb-6 text-sm md:text-base leading-relaxed max-w-md">
                Get packaging designed for your brand. Free shipping. No minimums.
              </p>
              <Link
                href="/get-quote/"
                className="notch-sm-tl inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide px-6 py-3 transition-colors text-sm"
              >
                Start Today
              </Link>
            </div>

            {/* Author Bio */}
            <div className="my-10 flex items-start gap-5 p-6 bg-white dieline">
              <div className="notch-sm-tl w-16 h-16 shrink-0 bg-orange-500 flex items-center justify-center text-white font-display font-black text-xl">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">Author</p>
                <h4 className="font-bold text-ink text-base mb-2">{post.author}</h4>
                <p className="text-sm text-ink/60 leading-relaxed">
                  {post.authorBio
                    ? post.authorBio
                    : 'A packaging industry expert at Packify Custom Boxes. With deep knowledge of custom packaging solutions, materials, and trends, they help businesses make smarter packaging decisions that elevate brand presence and protect products.'}
                </p>
              </div>
            </div>

            {/* Product CTA links */}
            {post.productLinks && post.productLinks.length > 0 && (
              <div className="mt-10 p-6 bg-kraft-50 dieline">
                <h3 className="text-base font-bold text-ink mb-4">Explore our custom packaging</h3>
                <div className="flex flex-wrap gap-3">
                  {post.productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-orange-600 font-medium border border-orange-200 hover:bg-orange-100 hover:border-orange-300 transition-colors text-sm"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to blog */}
            <div className="mt-10 pt-6 dieline-t">
              <Link
                href="/blog/"
                className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </article>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-kraft-50 dieline-t py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight text-ink">Related Posts</h2>
              <Link href="/blog/" className="text-sm font-bold uppercase tracking-wide text-orange-600 hover:text-orange-700">
                More Related Posts
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}/`}
                  className="group dieline notch-sm-tl bg-white overflow-hidden hover:border-orange-500 transition-colors duration-300"
                >
                  <div className="relative h-48 overflow-hidden dieline-b">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-ink/40 mb-2">
                      <span>{r.author}</span>
                      <span>·</span>
                      <span>{r.readTime}</span>
                    </div>
                    <h3 className="font-bold text-ink group-hover:text-orange-600 transition-colors line-clamp-2 mb-2 text-sm md:text-base">
                      {r.title}
                    </h3>
                    <p className="text-xs text-ink/50 line-clamp-2">{r.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
