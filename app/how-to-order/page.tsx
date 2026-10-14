import PageAccent from '@/components/PageAccent'
import { Metadata } from 'next'
import Link from 'next/link'
import { HowToSchema, BreadcrumbListSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'How to Order Custom Boxes in 4 Steps | Packify',
  description: 'Send your size and artwork, approve the proof, then production runs 8–10 business days with free shipping across Australia. Walk through each step before you order.',
  keywords: 'how to order custom boxes Australia, custom packaging order process, request quote, submit artwork, Packify Custom Boxes',
  alternates: { canonical: 'https://packifycustomboxes.com.au/how-to-order/' },
  openGraph: {
    title: 'How to Order Custom Boxes in 4 Steps | Packify',
    description: 'Send your size and artwork, approve the proof, then production runs 8–10 business days with free shipping across Australia. Walk through each step before you order.',
    url: 'https://packifycustomboxes.com.au/how-to-order/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'How to Order Custom Boxes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Order Custom Boxes in 4 Steps | Packify',
    description: 'Send your size and artwork, approve the proof, then production runs 8–10 business days with free shipping across Australia. Walk through each step before you order.',
    images: ['/images/og-image.webp'],
  },
}

const steps = [
  {
    number: 1,
    title: 'Request a Quote',
    description: 'Fill out our Quote Request Form with your box specifications, including size, material, quantity, printing type, and any custom features. Our team will get back to you within 24 hours with a detailed quote.',
    link: '/get-quote/',
    linkText: 'Get a Quote',
  },
  {
    number: 2,
    title: 'Approve Pricing & Place Order',
    description: "Once you're happy with the pricing, confirm your order and make payment through our secure checkout process. We accept major credit cards, PayPal, and more.",
  },
  {
    number: 3,
    title: 'Submit Your Artwork',
    description: 'Upload your logo, designs, and any artwork files. If needed, our design team can assist you in preparing print-ready files that meet packaging guidelines.',
    link: '/artwork-guidelines/',
    linkText: 'View Artwork Guidelines',
  },
  {
    number: 4,
    title: 'Receive a Digital Proof',
    description: "We'll send you a digital 3D mockup or PDF proof to review. You'll have a chance to approve the final design or request changes before we proceed with production.",
  },
  {
    number: 5,
    title: 'Production & Shipping',
    description: "Once approved, production runs 8–10 business days. After completion, your boxes are securely packaged and shipped free across Australia. You'll receive tracking info via email.",
  },
]

export default function HowToOrder() {
  return (
    <main className="min-h-screen">
      <HowToSchema
        name="How to Order Custom Boxes"
        description="Order custom boxes in 5 steps: request quote, approve pricing, submit artwork, approve proof, receive delivery. Free Australia-wide shipping. No minimum order."
        steps={steps.map((s) => ({ name: s.title, text: s.description }))}
      />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com.au/' },
          { name: 'How to Order', url: 'https://packifycustomboxes.com.au/how-to-order/' },
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-kraft-50 pt-28 pb-16 px-4">
        <PageAccent variant="cricket" />
        <div className="relative max-w-4xl mx-auto">
          <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">Five steps</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-ink mb-4">
            How to Order Custom Boxes
          </h1>
          <p className="text-lg text-ink/60 max-w-2xl">
            Ordering with Packify Custom Boxes is quick, easy, and stress-free. Follow these five simple steps to get started.
          </p>
          <p className="text-ink/60 mt-2">
            Browse our <Link href="/products/mailer-boxes/" className="text-orange-600 font-medium hover:underline">mailer boxes</Link>,{' '}
            <Link href="/products/tuck-boxes/" className="text-orange-600 font-medium hover:underline">tuck boxes</Link>,{' '}
            <Link href="/products/rigid-boxes/" className="text-orange-600 font-medium hover:underline">rigid boxes</Link>, and{' '}
            <Link href="/products/" className="text-orange-600 font-medium hover:underline">more</Link>.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex gap-6 p-6 sm:p-8 dieline notch-sm-tl bg-white hover:border-orange-500 transition-colors"
            >
              {/* Step number */}
              <div className="flex-shrink-0 font-display text-4xl font-black text-orange-500">
                {String(step.number).padStart(2, '0')}
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-xl sm:text-2xl font-bold text-ink mb-2">{step.title}</h2>
                <p className="text-ink/60 leading-relaxed mb-4">{step.description}</p>
                {step.link && (
                  <Link
                    href={step.link}
                    className="inline-flex items-center gap-2 text-orange-600 font-bold uppercase tracking-wide text-sm hover:text-orange-700 transition-colors"
                  >
                    {step.linkText}
                  </Link>
                )}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-16 px-4 bg-kraft-50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="dieline notch-tl bg-white p-8 sm:p-10">
            <h2 className="font-display text-2xl font-black uppercase tracking-tight text-ink mb-2">Need Help?</h2>
            <p className="text-ink/60 mb-6">
              Our customer support team is here to assist you at any step. Reach out anytime.
            </p>
            <a
              href="mailto:hello@packifycustomboxes.com.au"
              className="notch-sm-tl inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide py-3 px-6 transition-colors"
            >
              hello@packifycustomboxes.com.au
            </a>
          </div>
          <p className="text-sm text-ink/40 mt-6">Last updated: July 12, 2026</p>
        </div>
      </section>
    </main>
  )
}
