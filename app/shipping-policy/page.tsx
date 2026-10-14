import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Australia-Wide Shipping Policy for Custom Boxes | Packify',
  description: 'Free ground shipping on every custom box order across Australia, no minimum order. Production 8–10 business days, transit 3–6 days after that. Paid rush and international shipping available.',
  keywords: 'free Australia-wide shipping, custom box delivery Australia, 10-day delivery, Packify Custom Boxes, FedEx UPS DHL',
  alternates: { canonical: 'https://packifycustomboxes.com.au/shipping-policy/' },
  openGraph: {
    title: 'Free Australia-Wide Shipping Policy for Custom Boxes | Packify',
    description: 'Free ground shipping on every custom box order across Australia, no minimum order. Production 8–10 business days, transit 3–6 days after that. Paid rush and international shipping available.',
    url: 'https://packifycustomboxes.com.au/shipping-policy/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Shipping Policy - Packify Custom Boxes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Australia-Wide Shipping Policy for Custom Boxes | Packify',
    description: 'Free ground shipping on every custom box order across Australia, no minimum order. Production 8–10 business days, transit 3–6 days after that. Paid rush and international shipping available.',
    images: ['/images/og-image.webp'],
  },
}

export default function ShippingPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 pt-[6rem] space-y-6 text-ink/70 bg-kraft-50">
        <section>
          <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">Overview</h2>
          <p>
            At <strong>PackifyCustomBoxes</strong>, we're committed to getting your custom packaging delivered
            securely and on time. Below are our current shipping policies and guidelines.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">Production Time</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Standard production time: <strong>8–10 business days</strong> after final artwork approval.
            </li>
            <li>
              Every order is produced in our standard 8–10 business days. If you have a hard in-hands deadline, ask about our paid rush shipping (4–6 business days within Australia) before ordering and we will confirm whether it can be met.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-lg font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">Shipping Time</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Standard shipping within Australia: <strong>3–6 business days</strong>.
            </li>
            <li>
              Rush shipping within Australia: <strong>4–6 business days</strong> for an additional rush fee, available on request.
            </li>
            <li>
              International shipping: <strong>7–15 business days</strong> depending on destination and customs
              clearance.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-lg font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">Shipping Partners</h2>
          <p>
            We partner with major carriers such as FedEx, UPS, and DHL to ensure reliable and trackable delivery.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">Shipping Charges</h2>
          <p>
            Shipping costs are calculated based on order weight, quantity, destination, and selected shipping
            method.
          </p>
          <p className="mt-2">
            We offer <strong>free standard shipping across Australia</strong> on all orders, with no minimum. International orders and rush shipping are quoted separately based on destination and speed.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">Order Tracking</h2>
          <p>
            Once your order is shipped, you'll receive an email with tracking information to monitor delivery
            progress.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">Shipping Delays</h2>
          <p>
            While we strive to meet all delivery estimates, occasional delays may occur due to customs, weather,
            or courier issues. We'll notify you promptly if delays affect your order.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">Lost or Damaged Packages</h2>
          <p>
            If your package is lost or arrives damaged, please contact us within <strong>5 business days</strong>{' '}
            of delivery. We will work with the carrier to resolve the issue or arrange a replacement.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">Contact Us</h2>
          <p>
            For shipping inquiries, email us at{' '}
            <a href="mailto:hello@packifycustomboxes.com.au" className="text-orange-600 underline">
              hello@packifycustomboxes.com.au
            </a>
            . Our team is here to help!
          </p>
        </section>
      </main>
  )
}