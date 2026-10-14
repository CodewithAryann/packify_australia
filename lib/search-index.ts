// lib/search-index.ts
//
// Builds a lightweight, client-safe search index from data that already
// exists in the app. Runs on the server (imported by app/layout.tsx), so the
// heavy source files stay OUT of the client bundle — only the small mapped
// array (plain title/href/keyword strings) is serialized to the browser.
//
// EVERYTHING here auto-indexes from your data. The only hand-kept list is the
// static info pages at the bottom.
//   • Products         — from productsData (uses each product's real title;
//                        optional `displayName` override supported)
//   • Box Styles       — every product.variants[] entry
//   • Industries       — from industries
//   • Industry items   — every industry.products[] entry (dedicated pages)
//   • Blog             — from blogPosts
//   • Pages            — hand-kept staticPages list

import { productsData } from './products-data'
import { industries } from './industries-data'
import { blogPosts } from './blog-content'

export type SearchItemType =
  | 'Product'
  | 'Variant'
  | 'Industry'
  | 'IndustryProduct'
  | 'Page'
  | 'Blog'

export interface SearchItem {
  title: string
  href: string
  type: SearchItemType
  /** Lowercased extra terms used only for matching (never rendered). */
  keywords: string
}

// ── slug helpers: these MUST mirror the app's route logic exactly ────────────
// Product variant route: app/products/[slug]/[variant]/page.tsx
const variantSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-')
// Industry product route: app/industries/[slug]/[product]/page.tsx
const industryProductSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

// "mailer-boxes" -> "Mailer Boxes" (fallback only)
function titleFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ')
}

function str(v: unknown): string {
  return typeof v === 'string' ? v : ''
}

// ── Static / info pages (the only hand-maintained list) ──────────────────────
const staticPages: { title: string; href: string; keywords: string }[] = [
  { title: 'All Products',        href: '/products/',            keywords: 'boxes styles catalog browse shop' },
  { title: 'Featured Products',   href: '/featured-products/',   keywords: 'popular best sellers highlights' },
  { title: 'Request a Quote',     href: '/get-quote/',           keywords: 'quote pricing estimate custom order contact' },
  { title: 'About',               href: '/about/',               keywords: 'company story who we are' },
  { title: 'How It Works',        href: '/how-to-order/',        keywords: 'process ordering steps how to order' },
  { title: 'How to Measure',      href: '/how-to-measure/',      keywords: 'dimensions sizing measure box length width height' },
  { title: 'Artwork Guidelines',  href: '/artwork-guidelines/',  keywords: 'design template dieline bleed file setup print' },
  { title: 'Reviews',             href: '/reviews/',             keywords: 'testimonials customers ratings feedback' },
  { title: 'Blog',                href: '/blog/',                keywords: 'articles guides news packaging tips' },
  { title: 'Shipping Policy',     href: '/shipping-policy/',     keywords: 'delivery turnaround free shipping' },
  { title: 'Refund & Returns',    href: '/refund-returns/',      keywords: 'refund return policy money back' },
  { title: 'Privacy Policy',      href: '/privacy/',             keywords: 'privacy data' },
  { title: 'Terms',               href: '/terms/',               keywords: 'terms conditions legal' },
]

/**
 * Assemble the full index. Called once on the server (app/layout.tsx) and the
 * result passed to <Header>. Group order here is the display order.
 */
export function buildSearchIndex(): SearchItem[] {
  const products: SearchItem[] = []
  const variants: SearchItem[] = []

  for (const [slug, entryRaw] of Object.entries(productsData)) {
    const entry = entryRaw as {
      title?: string
      displayName?: string
      description?: string
      variants?: Array<{ name: string; description?: string; metaDescription?: string }>
    }
    const productTitle = str(entry.displayName) || str(entry.title) || titleFromSlug(slug)

    products.push({
      title: productTitle,
      href: `/products/${slug}/`,
      type: 'Product',
      keywords: `${productTitle} ${str(entry.description).slice(0, 100)} box boxes packaging custom`.toLowerCase(),
    })

    for (const v of entry.variants ?? []) {
      if (!v?.name) continue
      variants.push({
        title: v.name,
        href: `/products/${slug}/${variantSlug(v.name)}/`,
        type: 'Variant',
        keywords: `${v.name} ${productTitle} ${str(v.description).slice(0, 80)}`.toLowerCase(),
      })
    }
  }

  const industryList: SearchItem[] = []
  const industryProducts: SearchItem[] = []

  for (const ind of industries) {
    industryList.push({
      title: ind.name,
      href: `/industries/${ind.slug}/`,
      type: 'Industry',
      keywords: `${ind.name} industry packaging boxes`.toLowerCase(),
    })

    const prods = (ind as { products?: Array<{ name: string; description?: string }> }).products ?? []
    for (const p of prods) {
      if (!p?.name) continue
      industryProducts.push({
        title: p.name,
        href: `/industries/${ind.slug}/${industryProductSlug(p.name)}/`,
        type: 'IndustryProduct',
        keywords: `${p.name} ${ind.name} ${str(p.description).slice(0, 80)}`.toLowerCase(),
      })
    }
  }

  const blog: SearchItem[] = blogPosts.map((post) => ({
    title: post.title,
    href: `/blog/${post.slug}/`,
    type: 'Blog',
    keywords: `${post.title} ${post.excerpt.slice(0, 140)}`.toLowerCase(),
  }))

  const pages: SearchItem[] = staticPages.map((p) => ({
    title: p.title,
    href: p.href,
    type: 'Page',
    keywords: `${p.title} ${p.keywords}`.toLowerCase(),
  }))

  return [
    ...products,
    ...variants,
    ...industryList,
    ...industryProducts,
    ...pages,
    ...blog,
  ]
}
