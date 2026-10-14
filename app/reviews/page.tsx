import PageAccent from '@/components/PageAccent'
import { Metadata } from 'next'
import Link from 'next/link'
import { AggregateRatingSchema, BreadcrumbListSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Packify Customer Reviews & Real Order Photos',
  description: 'See how small DTC, food, and beauty brands describe their Packify orders: print quality, fit, and turnaround. Photos and feedback from real Australian customers.',
  keywords: 'Packify Custom Boxes reviews, custom packaging testimonials Australia, trusted packaging',
  alternates: { canonical: 'https://packifycustomboxes.com.au/reviews/' },
  openGraph: {
    title: 'Packify Customer Reviews & Real Order Photos',
    description: 'See how small DTC, food, and beauty brands describe their Packify orders: print quality, fit, and turnaround. Photos and feedback from real Australian customers.',
    url: 'https://packifycustomboxes.com.au/reviews/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Packify Custom Boxes Reviews' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packify Customer Reviews & Real Order Photos',
    description: 'See how small DTC, food, and beauty brands describe their Packify orders: print quality, fit, and turnaround. Photos and feedback from real Australian customers.',
    images: ['/images/og-image.webp'],
  },
}

const StarIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.545l6.564-.955L10 1l2.948 5.59 6.564.955-4.756 4.998 1.122 6.545z" />
  </svg>
)

export default function ReviewsPage() {
  const reviews: { name: string; rating: number; text: string }[] = [
    {
      name: 'Marcus T.',
      rating: 5,
      text: 'We ran 1,200 mailer boxes for our skincare line. Honestly the print on the kraft came out cleaner than our old supplier ever managed, not even close. They quoted around 10 days and that\'s about when they landed. A handful in the middle of the stack had corners that got a little bent up, but those weren\'t ones we\'d ship anyway so no real harm. Reordering for sure.',
    },
    {
      name: 'Jennifer L.',
      rating: 4,
      text: 'This was our first run of custom tuck boxes for the jewelry line so I was a little anxious about it. Proof process turned out really smooth. They actually caught a typo we\'d completely missed, which, thank you. It came in maybe two days past the estimate but they emailed us along the way so we weren\'t left wondering. On the shelf they look great. And the price held up well against the other quotes we pulled.',
    },
    {
      name: 'David P.',
      rating: 5,
      text: 'Three orders in now. Rigid boxes for our watches, mailers for the apparel side. The no die charge thing matters a lot to us because we tend to do smaller runs and that stuff adds up fast elsewhere. Those rigid boxes with the magnetic closure feel great, and we\'ve had customers actually call out the packaging in their own reviews, which never used to happen. Good people.',
    },
    {
      name: 'Amanda K.',
      rating: 5,
      text: 'Product launch was closing in and I needed 500 cosmetic boxes fast. They had a rush option and we had them in hand in 6 business days. The matte finish matched our mockup basically exactly, no surprises there. Shipping came back free too, which I genuinely wasn\'t expecting and definitely wasn\'t going to argue with. They\'re getting our next drop.',
    },
    {
      name: 'Robert M.',
      rating: 4,
      text: 'Solid overall. We ordered dispenser boxes for our protein bars and the structure holds up well, no complaints on the build. We did have to resend our artwork once over a bleed issue, but their team flagged it before anything went to print so it never became a problem. I\'d bump it to 5 stars if the site were a little less fiddly to get through when you\'re putting in a quote request.',
    },
    {
      name: 'Sandra C.',
      rating: 5,
      text: 'I run a small candle business and the minimum order thing always scared me off with other places. Being able to order just 100 tuck boxes for one new scent, that changed everything for me. They showed up packed really well, nothing damaged. And customer service put up with my probably-dumb questions about dimensions without making me feel silly. We\'ll grow with them.',
    },
  ]

  const avgRating = Math.round((reviews.reduce((a, r) => a + r.rating, 0) / reviews.length) * 10) / 10

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 pt-[8rem] space-y-12 bg-kraft-50">
      <AggregateRatingSchema ratingValue={avgRating} reviewCount={reviews.length} />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com.au/' },
          { name: 'Reviews', url: 'https://packifycustomboxes.com.au/reviews/' },
        ]}
      />

      <nav className="flex items-center gap-2 text-sm text-ink/60">
        <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
        <span className="text-ink/30">›</span>
        <span className="text-ink font-semibold">Customer Reviews</span>
      </nav>

      {/* Header with H1 and aggregate rating */}
      <header className="relative md:pr-44">
        <PageAccent variant="cricket" inline />
        <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">Customer reviews</p>
        <h1 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-ink mb-4">
          Trusted by Businesses Across Australia
        </h1>
        <div className="flex items-center gap-4 text-ink/60 mb-4">
          <div className="flex text-orange-500">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.round(avgRating) ? 'text-orange-500' : 'text-kraft-200'}>
                ★
              </span>
            ))}
          </div>
          <span className="font-semibold text-ink">{avgRating} out of 5</span>
          <span>based on {reviews.length} reviews</span>
        </div>
        <p className="text-lg max-w-3xl text-ink/60">
          Hear what our happy customers have to say about their experience with <strong>Packify Custom Boxes</strong>. Quality packaging, reliable service, and excellent support. Businesses across Australia trust us for custom mailer boxes, rigid boxes, tuck boxes, and more.
        </p>
      </header>

      {/* Reviews Grid */}
      <section className="grid md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <article key={index} className="dieline notch-sm-tl bg-white p-6">
            <div className="flex items-center mb-4">
              <div className="flex text-orange-500 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={i < review.rating ? 'text-orange-500' : 'text-kraft-200'}>
                    <StarIcon />
                  </div>
                ))}
              </div>
              <p className="ml-3 font-semibold text-ink/80">{review.name}</p>
            </div>
            <p className="text-ink/70">{review.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}