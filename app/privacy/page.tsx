import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Packify Custom Boxes',
  description: 'Privacy Policy for Packify Custom Boxes Australia. How we collect, use, protect your data. Custom packaging orders, quotes. GDPR compliant.',
  keywords: 'privacy policy, Packify Custom Boxes, data protection Australia',
  alternates: { canonical: 'https://packifycustomboxes.com.au/privacy/' },
  openGraph: {
    title: 'Privacy Policy | Packify Custom Boxes',
    description: 'How we collect, use, and protect your data. Custom packaging orders. GDPR compliant.',
    url: 'https://packifycustomboxes.com.au/privacy/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Packify Custom Boxes Privacy Policy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Packify Custom Boxes',
    description: 'How we collect, use, and protect your data.',
    images: ['/images/og-image.webp'],
  },
}

export default function PrivacyPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 pt-[8rem] space-y-10 text-lg leading-relaxed text-ink/70 bg-kraft-50">
      <p>
        PackifyCustomBoxes respects your privacy and is committed to protecting the personal information you share
        with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our
        website or use our services.
      </p>

      {/* Section 1 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">1. Information We Collect</h2>
        <p>
          We collect information that you provide directly, such as your name, email address, shipping address,
          phone number, and payment details when placing an order or contacting us.
        </p>
      </section>

      {/* Section 2 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>To process and fulfill your orders.</li>
          <li>To respond to your inquiries and provide customer support.</li>
          <li>To improve our website and user experience.</li>
          <li>To send order confirmations, updates, and promotional offers (only if opted in).</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">3. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal data. We may share it with third-party service providers (like
          payment gateways and delivery partners) only for order processing and delivery purposes.
        </p>
      </section>

      {/* Section 4 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">4. Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your experience, analyze traffic, and
          personalize content. You can modify your browser settings to decline cookies at any time.
        </p>
      </section>

      {/* Section 5 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">5. Data Security</h2>
        <p>
          We implement security measures such as SSL encryption to protect your personal data. However, no method
          of transmission over the internet is 100% secure.
        </p>
      </section>

      {/* Section 6 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">6. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. To request changes or
          removal, please email us at{' '}
          <a href="mailto:hello@packifycustomboxes.com.au" className="text-orange-600 underline">
            hello@packifycustomboxes.com.au
          </a>
          .
        </p>
      </section>

      {/* Section 7 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices
          or content of those sites.
        </p>
      </section>

      {/* Section 8 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">8. Children&apos;s Privacy</h2>
        <p>
          Our website is not intended for use by children under the age of 13. We do not knowingly collect
          personal information from children.
        </p>
      </section>

      {/* Section 9 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Updates will be posted on this page with the date
          of revision.
        </p>
      </section>

      {/* Section 10 */}
      <section>
        <h2 className="font-display text-xl font-black uppercase tracking-tight mb-3 text-ink dieline-b border-kraft-400/30 pb-2 inline-block">10. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please contact us at{' '}
          <a href="mailto:hello@packifycustomboxes.com.au" className="text-orange-600 underline">
            hello@packifycustomboxes.com.au
          </a>
          .
        </p>
      </section>

      <p className="text-sm text-gray-500">Last updated: July 18, 2025</p>
    </main>
  )
}