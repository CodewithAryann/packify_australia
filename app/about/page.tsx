import PageAccent from '@/components/PageAccent'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BreadcrumbListSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'About Us | Custom Packaging Manufacturer Australia | Packify Custom Boxes',
  description: 'Packify Custom Boxes: Australia-based custom packaging manufacturer. Mailer, tuck, rigid boxes. Trusted by businesses across Australia. No minimum order. Free design support. Free Australia-wide shipping.',
  keywords: 'about Packify Custom Boxes, custom box manufacturer Australia, packaging company, mailer box manufacturer, Packify',
  alternates: { canonical: 'https://packifycustomboxes.com.au/about/' },
  openGraph: {
    title: 'About Us | Custom Packaging Manufacturer Australia | Packify Custom Boxes',
    description: 'Australia-based custom packaging manufacturer. Trusted by businesses across Australia. No minimum order. Free Australia-wide shipping.',
    url: 'https://packifycustomboxes.com.au/about/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Packify Custom Boxes - About Us' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Packify Custom Boxes',
    description: 'Australia-based custom packaging manufacturer. Trusted by businesses across Australia.',
    images: ['/images/og-image.webp'],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-kraft-50">
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com.au/' },
          { name: 'About', url: 'https://packifycustomboxes.com.au/about/' },
        ]}
      />
      <main className="max-w-5xl mx-auto px-6 py-10 pt-[8rem] space-y-12">
        <nav className="flex items-center gap-2 text-sm text-ink/60">
          <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <span className="text-ink/30">›</span>
          <span className="text-ink font-semibold">About</span>
        </nav>

        <header className="relative md:pr-44">
          <PageAccent variant="kangaroo" inline />
          <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">About us</p>
          <h1 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-ink mb-4">
            Your Custom Packaging <span className="text-orange-600">Partner</span>
          </h1>
          <p className="text-xl text-ink/60">
            Australia-Based Custom Box Manufacturer for E-Commerce, Retail & Subscription Brands
          </p>
        </header>

        {/* Company Story & Origin */}
        <section className="dieline notch-tl bg-white p-8 md:p-10">
          <h2 className="font-display text-2xl font-black uppercase tracking-tight text-ink mb-6">Our Story</h2>
          <p className="text-ink/70 leading-relaxed mb-4">
            Packify Custom Boxes was built on a simple mission: make premium custom packaging accessible to brands of every size. We started after seeing too many small businesses and startups shut out by high minimums, die charges, and long lead times. Our team had years of experience in packaging manufacturing and knew there was a better way.
          </p>
          <p className="text-ink/70 leading-relaxed mb-4">
            Today we serve businesses across Australia, from single-person e-commerce brands to established retailers and subscription services. We operate with an Australia-based team and global production partners to deliver quality custom boxes without the traditional barriers. No minimums, no die or plate fees, and free design support. That philosophy hasn&apos;t changed since day one.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-black uppercase tracking-tight text-ink">Who We Are</h2>
            <p className="text-ink/70 leading-relaxed">
              Packify Custom Boxes is an Australia-based custom packaging manufacturer. We produce custom boxes with logo: mailer boxes, tuck boxes, rigid boxes, dispenser boxes, cosmetic boxes, and more for e-commerce, retail, subscription, and D2C brands. Trusted by businesses across Australia.
            </p>
            <p className="text-ink/70 leading-relaxed">
              From kraft mailers to luxury rigid gift boxes, we help you choose the right material, style, and print finish. Full-color CMYK printing, foil stamping, embossing, and custom sizing. No die or plate charges. Free design assistance.
            </p>
          </div>
          <div className="dieline notch-br relative w-full h-[18rem] md:h-[26rem] overflow-hidden">
            <Image
              src="/images/WhatsApp Image 2025-08-05 at 11.11.00 PM.webp"
              alt="Custom packaging boxes from Packify Custom Boxes"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-black uppercase tracking-tight text-ink mb-6">What We Offer</h2>
          <ul className="dieline-t divide-y divide-kraft-200 text-ink/80">
            {[
              'Custom printed boxes: logo, branding, full-colour',
              'Kraft, corrugated, paperboard. Recyclable materials',
              'No minimums. Order from 1 unit',
              'Free Australia-wide shipping · 8–10 day production · worldwide delivery',
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 py-2.5">
                <span className="text-orange-600 font-bold">✓</span>
                {line}
              </li>
            ))}
          </ul>
        </section>

        {/* Team & Credibility */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="dieline notch-sm-tl bg-white p-6">
            <h2 className="font-display text-xl font-black uppercase tracking-tight text-ink mb-4">Our Team</h2>
            <p className="text-ink/70 leading-relaxed mb-4">
              Our team includes packaging specialists, print production experts, and customer success managers with decades of combined experience. We focus on expertise. Helping you choose the right box style, material, and finish for your product and budget.
            </p>
            <p className="text-ink/70 leading-relaxed">
              Every quote is reviewed by our production team. Our design support helps with artwork, bleed, and print specs so your files are ready before we run them. That attention to detail reduces errors and keeps projects on track.
            </p>
          </div>
          <div className="dieline notch-sm-tl bg-white p-6">
            <h2 className="font-display text-xl font-black uppercase tracking-tight text-ink mb-4">Quality & Materials</h2>
            <p className="text-ink/70 leading-relaxed mb-4">
              We work with established board and film suppliers and match the material to each job. Grease-resistant coated stocks are available for bakery and food applications, and we offer eco-friendly options including kraft, recycled content, and recyclable materials.
            </p>
            <ul className="space-y-2 text-ink/70 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">✓</span> Recyclable and sustainably sourced options
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">✓</span> Grease-resistant coated stocks for bakery lines
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">✓</span> Production quality control at every stage
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-black uppercase tracking-tight text-ink mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="dieline notch-sm-tl bg-white p-6">
              <h3 className="font-bold text-orange-600 mb-2">Quality</h3>
              <p className="text-ink/60 text-sm">We deliver packaging that protects your product and reflects your brand. Every box is built to meet your specifications.</p>
            </div>
            <div className="dieline notch-sm-tl bg-white p-6">
              <h3 className="font-bold text-orange-600 mb-2">No Hidden Fees</h3>
              <p className="text-ink/60 text-sm">No die or plate charges. Free design support. What you quote is what you pay.</p>
            </div>
            <div className="dieline notch-sm-tl bg-white p-6">
              <h3 className="font-bold text-orange-600 mb-2">Fast Turnaround</h3>
              <p className="text-ink/60 text-sm">8–10 business days production. Free shipping across Australia.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <Link
            href="/get-quote/"
            className="notch-tl inline-flex items-center gap-2 bg-orange-500 text-white font-bold uppercase tracking-wide px-8 py-4 hover:bg-orange-600 transition-colors"
          >
            Request a Custom Quote
          </Link>
        </section>
      </main>
    </div>
  )
}
