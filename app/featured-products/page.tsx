import PageAccent from '@/components/PageAccent'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BreadcrumbListSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Featured Custom Packaging Products | Packify Custom Boxes',
  description: 'Explore our full range of custom packaging solutions: mailer boxes, rigid boxes, tuck boxes, bakery boxes, cosmetic boxes, and more. Free shipping across Australia. No minimums.',
  keywords: 'custom packaging Australia, featured packaging products, mailer boxes, rigid boxes, tuck boxes, bakery boxes, cigarette boxes, cosmetic boxes',
  alternates: { canonical: 'https://packifycustomboxes.com.au/featured-products/' },
  openGraph: {
    title: 'Featured Custom Packaging Products | Packify Custom Boxes',
    description: 'Every box type we offer. Browse our featured product range with specs, features, and instant quoting.',
    url: 'https://packifycustomboxes.com.au/featured-products/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Packify Featured Products' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Featured Custom Packaging Products | Packify Custom Boxes',
    description: 'Every box type we offer. Browse our featured product range with specs, features, and instant quoting.',
    images: ['/images/og-image.webp'],
  },
}

const featuredProducts = [
  {
    slug: 'mailer-boxes',
    name: 'Custom Mailer Boxes',
    tagline: 'The #1 choice for e-commerce shipping',
    description: 'Self-locking, no-tape-needed mailer boxes built for DTC brands. Sturdy corrugated walls protect products in transit while full-color printing turns every delivery into a branded unboxing moment.',
    image: '/images/mailer/Mailer Box MAIN PAGE.webp',
    badge: 'Best Seller',
    features: ['No Minimum Order', 'Free Australia-Wide Shipping', '8–10 Day Turnaround', 'Full-Color Printing'],
    specs: 'Corrugated · CMYK + PMS · Gloss / Matte / Spot UV',
    variants: ['Standard Mailer', 'Tear Strip Mailer', 'Candle Boxes', 'CBD Mailer'],
  },
  {
    slug: 'rigid-boxes',
    name: 'Custom Rigid Boxes',
    tagline: 'Luxury packaging that commands attention',
    description: 'Premium set-up boxes for jewelry, electronics, cosmetics, and high-end retail. Thick chipboard wrapped in custom printed material delivers an unboxing experience customers remember and share.',
    image: '/images/rigid/Rigid Box MAIN PAGE.webp',
    badge: 'Premium',
    features: ['No Minimum Order', 'Free Australia-Wide Shipping', '8–10 Day Turnaround', 'Embossing & Foiling'],
    specs: '10pt – 28pt Chipboard · Soft-Touch · Hot Foil · Emboss',
    variants: ['Collapsible Rigid', 'Shoulder Neck Box', 'Sliding Drawer', 'Hinged Lid'],
  },
  {
    slug: 'tuck-boxes',
    name: 'Custom Tuck Boxes',
    tagline: 'Versatile folding cartons for every industry',
    description: 'Straight tuck, reverse tuck, and auto-lock bottom cartons for retail, cosmetics, food, and pharma. Fast production, vibrant printing, and eco options make tuck boxes the backbone of product packaging.',
    image: '/images/tuck/Tuck Top MAIN PAGE.webp',
    badge: 'Most Versatile',
    features: ['No Minimum Order', 'Free Australia-Wide Shipping', '8–10 Day Turnaround', 'Eco-Friendly Options'],
    specs: '12pt – 24pt SBS · Kraft · Recycled Board · Window Cutouts',
    variants: ['Straight Tuck End', 'Reverse Tuck End', 'Auto-Lock Bottom', 'Seal End'],
  },
  {
    slug: 'cosmetic-boxes',
    name: 'Custom Cosmetic Boxes',
    tagline: 'Beauty packaging as bold as your brand',
    description: 'Skincare, makeup, perfume, and haircare boxes with premium finishes. Window cutouts, soft-touch lamination, and hot foil stamping make your product irresistible on retail shelves and in online hauls.',
    image: '/images/cosmetic/cosmetic-main.webp',
    badge: 'Trending',
    features: ['No Minimum Order', 'Free Australia-Wide Shipping', '8–10 Day Turnaround', 'Window Cutouts'],
    specs: '12pt – 24pt SBS · Soft-Touch · Window · UV Coating',
    variants: ['Serum Boxes', 'Lipstick Boxes', 'Perfume Boxes', 'Skincare Gift Boxes'],
  },
  {
    slug: 'bakery-boxes',
    name: 'Custom Bakery Boxes',
    tagline: 'Food-safe packaging for every baked good',
    description: 'Grease-resistant coated paperboard for cakes, cupcakes, cookies, donuts, and pastries. Optional PET windows, cupcake inserts, and donut trays. Full-color printing with water-based inks.',
    image: '/images/bakery/Bakery Box MAIN PAGE.webp',
    badge: 'Grease-Resistant',
    features: ['No Minimum Order', 'Free Australia-Wide Shipping', '8–10 Day Turnaround', 'PET Window Options'],
    specs: 'Grease-Resistant Coated Board · Kraft & White · CMYK Water-Based Inks',
    variants: ['Cake Boxes', 'Cupcake Boxes', 'Cookie Boxes', 'Donut Boxes'],
  },
  {
    slug: 'magnetic-closure',
    name: 'Magnetic Closure Boxes',
    tagline: 'The satisfying snap of luxury unboxing',
    description: 'Embedded magnets, satin liners, and ribbon pulls for the ultimate premium gift experience. Perfect for jewellery, watches, electronics, and corporate gifting where first impressions close deals.',
    image: '/images/magnetic/magnetic-main.webp',
    badge: 'Luxury',
    features: ['No Minimum Order', 'Free Australia-Wide Shipping', '8–10 Day Turnaround', 'Ribbon & Insert Options'],
    specs: '24pt – 36pt Chipboard · Embedded Magnets · Satin Liner · Foiling',
    variants: ['Classic Magnetic', 'Foldable Magnetic', 'Magnetic with Tray', 'Gift Set Box'],
  },
  {
    slug: 'cigarette-boxes',
    name: 'Cigarette & Vape Boxes',
    tagline: 'Compliant packaging for tobacco & vape brands',
    description: 'Child-resistant options, health warning space, and compliance labeling built in. For tobacco, e-cigarettes, vape pens, CBD, THC, and e-liquid. Packaging that meets regulations and stands out on the shelf.',
    image: '/images/cigarette/Cigarette Box photo.webp',
    badge: 'Compliant',
    features: ['No Minimum Order', 'Free Australia-Wide Shipping', '8–10 Day Turnaround', 'Child-Resistant Options'],
    specs: '12pt – 24pt SBS · Matte UV · Foil Stamping · Compliance Labels',
    variants: ['Cigarette Boxes', 'Vape Pen Boxes', 'CBD Boxes', 'THC Vape Boxes'],
  },
  {
    slug: 'dispenser-boxes',
    name: 'Dispenser Boxes',
    tagline: 'Counter displays that sell for you',
    description: 'Tear-out and flip-top retail counter display boxes that merchandise your product at point of sale. Perfect for candy, mints, lip balm, health products, and any impulse-buy category.',
    image: '/images/dispenser/dispenser-main.webp',
    badge: 'Retail Ready',
    features: ['No Minimum Order', 'Free Australia-Wide Shipping', '8–10 Day Turnaround', 'Tear Strip Option'],
    specs: '14pt – 24pt SBS · E-Flute Corrugated · Gloss AQ · Spot UV',
    variants: ['Tear-Out Dispenser', 'Flip-Top Display', 'Counter Display', 'Header Card Box'],
  },
  {
    slug: 'burger-boxes',
    name: 'Custom Burger Boxes',
    tagline: 'Food service packaging with brand impact',
    description: 'Grease-resistant, food-grade paperboard burger and sandwich boxes for restaurants, ghost kitchens, and food trucks. Food-safe inks, eco-friendly materials, and bold branding make every meal memorable.',
    image: '/images/burger/burger-main.webp',
    badge: 'Food Grade',
    features: ['No Minimum Order', 'Free Australia-Wide Shipping', '8–10 Day Turnaround', 'Eco Options'],
    specs: 'Grease-Resistant Coated SBS · Kraft & White · CMYK Water-Based Inks',
    variants: ['Burger Clamshell', 'Sandwich Box', 'Slider Box', 'Gourmet Burger Box'],
  },
]

const whyUs = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Fast Turnaround',
    desc: '8–10 business days production from proof approval, then free ground shipping to your door.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Free Design Support',
    desc: 'Our in-house designers help you from concept to print-ready file at zero cost.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    ),
    title: 'No Minimums',
    desc: 'Order from 1 unit. Perfect for prototypes, small batches, and large wholesale runs.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Free Australia-Wide Shipping',
    desc: 'Every order ships free to the continental Australia. No hidden fees at checkout.',
  },
]

export default function FeaturedProductsPage() {
  return (
    <div className="min-h-screen bg-kraft-50">
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com.au/' },
          { name: 'Featured Products', url: 'https://packifycustomboxes.com.au/featured-products/' },
        ]}
      />

      {/* ── Breadcrumb + Intro Header ── */}
      <div className="max-w-7xl mx-auto px-6 pt-[6rem] pb-10">
        <nav className="flex items-center gap-2 text-sm text-ink/60 mb-8">
          <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <span className="text-ink/30">›</span>
          <span className="text-ink font-semibold">Featured Products</span>
        </nav>

        <header className="relative mb-4 md:pr-44">
          <PageAccent variant="kangaroo" inline />
          <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">Our featured range</p>
          <h1 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-ink mb-4">
            Custom Packaging Boxes <span className="text-orange-600">by Category</span>
          </h1>
          <p className="text-lg text-ink/60">
            Mailer boxes for e-commerce. Tuck boxes for cosmetics and retail. Rigid boxes for luxury and gifts.
            Choose the custom box style that fits your product. No minimums. Free Australia-wide shipping. 8–10 day turnaround.
          </p>
        </header>
      </div>

      {/* ── Stats Bar ── */}
      <div className="bg-kraft-100 dieline-t dieline-b border-kraft-400/40 py-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: 'Products & Variants' },
              { value: 'No Min.', label: 'Order Minimum' },
              { value: 'Free', label: 'Australia-Wide Shipping' },
              { value: '24hr', label: 'Quote Turnaround' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl md:text-3xl font-black text-orange-600">{s.value}</div>
                <div className="text-sm text-ink/60 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Products Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-4xl font-black uppercase tracking-tight text-ink mb-4">
            Custom Boxes <span className="text-orange-600">by Style</span>
          </h2>
          <p className="text-ink/60 text-lg">
            Every product is made to order: your dimensions, your design, your brand.
            Full-color printing, premium finishes, and fast delivery on every box.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <div
              key={product.slug}
              className="group dieline notch-sm-tl bg-white overflow-hidden hover:border-orange-500 transition-colors duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-52 bg-kraft-50 dieline-b">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <span className="absolute top-3 left-3 stamp bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1">
                  {product.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tagline */}
                <p className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-1">
                  {product.tagline}
                </p>

                {/* Title */}
                <h3 className="text-xl text-ink font-bold mb-2 group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-ink/60 text-sm mb-4 leading-relaxed flex-1">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="dieline bg-orange-50 border-orange-200 px-4 py-2.5 mb-4">
                  <p className="text-xs text-ink/50 font-medium">{product.specs}</p>
                </div>

                {/* Feature ticks */}
                <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-4">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-xs text-ink/70">
                      <svg className="w-3.5 h-3.5 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>

                {/* Variant pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.variants.map((v) => (
                    <span key={v} className="text-xs bg-kraft-50 text-ink/70 border border-kraft-200 px-2.5 py-1 font-medium">
                      {v}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-3 mt-auto">
                  <Link
                    href={`/products/${product.slug}/`}
                    className="flex-1 text-center bg-ink hover:bg-black text-white font-bold uppercase tracking-wide py-3 transition-colors text-sm"
                  >
                    View Product
                  </Link>
                  <Link
                    href="/get-quote/"
                    className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide py-3 transition-colors text-sm"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="stamp text-orange-500 border-orange-500 text-[10px] font-bold px-2.5 py-0.5 mb-3 mx-auto w-fit">Why Packify</p>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-center text-white mb-4">
            Why Choose Us for Custom Boxes?
          </h2>
          <p className="text-center text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            Australia-based custom box manufacturer. No die or plate charges. Free design support. No minimum order.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-white/10 border-t border-white/10">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="mb-4 text-orange-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/55 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works strip ── */}
      <section className="bg-kraft-50 py-16 dieline-t border-kraft-400/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-4 mx-auto w-fit">Simple ordering process</p>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-ink mb-4">
            How it <span className="text-orange-600">works</span>
          </h2>
          <p className="text-ink/60 text-lg mb-10">
            Order custom packaging in four steps: share your specs, approve design and pricing, we produce and ship. Free and fast.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { n: '1', label: 'Consultation', desc: 'Share your specs & we recommend the best material and style.' },
              { n: '2', label: 'Design Prep', desc: 'We create or check your artwork. Free file checks included.' },
              { n: '3', label: 'Production', desc: 'Print-ready approval triggers production. 8–10 business days.' },
              { n: '4', label: 'Delivery', desc: 'Quality-checked and shipped free across Australia.' },
            ].map((step) => (
              <div
                key={step.n}
                className="relative flex flex-col items-center text-center dieline notch-sm-tl bg-white hover:border-orange-500 transition-colors duration-300 p-6"
              >
                <span className="font-display text-3xl font-black text-orange-200 mb-2">{step.n}</span>
                <h3 className="font-bold text-ink mb-2 text-base">{step.label}</h3>
                <p className="text-ink/50 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/get-quote/"
            aria-label="Request a quote for custom boxes"
            className="notch-tl inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide text-lg py-4 px-10 transition-colors"
          >
            Request a Quote
          </Link>
          <p className="mt-4 text-sm text-ink/50">No die charges · Free design help · 8–10 day turnaround</p>
        </div>
      </section>

      {/* ── Bottom CTA banner (matches QuoteForm section style) ── */}
      <section className="py-16 bg-white" id="quote-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-ink mb-4">
            Ready to Build Your Custom Packaging?
          </h2>
          <p className="text-ink/60 text-lg mb-8 max-w-2xl mx-auto">
            Tell us your product dimensions, quantity, and design vision.
            We'll send you a free quote within 24 hours. No obligation, no hidden fees.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/get-quote/"
              aria-label="Start my free quote"
              className="notch-tl inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide text-lg py-4 px-10 transition-colors"
            >
              Start My Free Quote
            </Link>
            <Link
              href="/products/"
              className="dieline inline-block text-ink hover:bg-kraft-50 font-bold uppercase tracking-wide text-lg py-4 px-10 transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
