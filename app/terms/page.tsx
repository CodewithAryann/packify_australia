import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Packify Custom Boxes',
  description: 'Terms and Conditions for Packify Custom Boxes Australia. Custom packaging orders, payments, shipping, cancellations. Mailer, rigid, tuck boxes.',
  keywords: 'terms and conditions, Packify Custom Boxes, custom packaging terms Australia',
  alternates: { canonical: 'https://packifycustomboxes.com.au/terms/' },
  openGraph: {
    title: 'Terms and Conditions | Packify Custom Boxes',
    description: 'Custom packaging orders, payments, shipping, cancellations. Mailer, rigid, tuck boxes.',
    url: 'https://packifycustomboxes.com.au/terms/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Packify Custom Boxes Terms' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | Packify Custom Boxes',
    description: 'Custom packaging orders, payments, shipping, cancellations.',
    images: ['/images/og-image.webp'],
  },
}

export default function TermsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 pt-[8rem] space-y-10 text-lg leading-relaxed text-ink/70 bg-kraft-50">
      <p>
        Welcome to PackifyCustomBoxes. These Terms and Conditions govern your use of our website and services. By
        accessing our site or placing an order, you agree to abide by the terms stated below.
      </p>

      {/* Section 1 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">1. Acceptance of Terms</h2>
        <p>
          By using our services, you acknowledge that you have read, understood, and agreed to these terms. If you
          do not agree with any part, you must not use our website.
        </p>
      </section>

      {/* Section 2 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">2. Products and Services</h2>
        <p>
          Our products are made to order. All designs, sizes, and materials must be confirmed before production. We
          reserve the right to modify product offerings and prices at any time without prior notice.
        </p>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">3. Orders and Payments</h2>
        <p>
          Orders are processed after payment confirmation. We accept various payment methods including Visa,
          MasterCard, PayPal, and more. All transactions are secure and encrypted.
        </p>
      </section>

      {/* Section 4 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">4. Cancellations and Refunds</h2>
        <p>
          Due to the custom nature of our products, cancellations may not be possible after production has started.
          Please refer to our{' '}
          <Link href="/refund-returns/" className="text-orange-600 underline">
            Refund and Returns Policy
          </Link>{' '}
          for more details.
        </p>
      </section>

      {/* Section 5 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">5. Intellectual Property</h2>
        <p>
          All content including designs, logos, and text are the property of PackifyCustomBoxes. Unauthorized use,
          reproduction, or redistribution is strictly prohibited.
        </p>
      </section>

      {/* Section 6 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">6. User Responsibilities</h2>
        <p>
          Customers are responsible for uploading correct artwork, dielines, and box measurements.
          PackifyCustomBoxes is not liable for errors in user-submitted files or order details.
        </p>
      </section>

      {/* Section 7 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">7. Limitation of Liability</h2>
        <p>
          We strive for 100% satisfaction, but we are not liable for any indirect, incidental, or consequential
          damages resulting from the use of our products or website.
        </p>
      </section>

      {/* Section 8 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">8. Privacy Policy</h2>
        <p>
          Your privacy is important to us. Please read our{' '}
          <Link href="/privacy/" className="text-orange-600 underline">
            Privacy Policy
          </Link>{' '}
          to understand how your information is collected and used.
        </p>
      </section>

      {/* Section 9 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Victoria, Australia. Any disputes shall be resolved through
          binding arbitration or in the courts of Victoria.
        </p>
      </section>

      {/* Section 10 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">10. Updates to Terms</h2>
        <p>
          We reserve the right to update or change these Terms at any time. Continued use of the website after
          changes implies acceptance of the revised terms.
        </p>
      </section>

      <p className="text-sm text-gray-500">Last updated: July 18, 2025</p>
    </main>
  )
}