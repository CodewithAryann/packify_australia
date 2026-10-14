import PageAccent from '@/components/PageAccent'
import { Metadata } from 'next'
import Link from 'next/link'
import { HowToSchema, BreadcrumbListSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Packaging Artwork Guidelines: Bleed, CMYK, 300 DPI | Packify',
  description: 'Set up print-ready files for custom boxes, file formats, 300 DPI resolution, CMYK color, bleed and safe zones, and how to outline fonts before upload.',
  keywords: 'artwork guidelines, print-ready files, dieline templates, CMYK packaging, Packify Custom Boxes Australia',
  alternates: { canonical: 'https://packifycustomboxes.com.au/artwork-guidelines/' },
  openGraph: {
    title: 'Packaging Artwork Guidelines: Bleed, CMYK, 300 DPI | Packify',
    description: 'Set up print-ready files for custom boxes, file formats, 300 DPI resolution, CMYK color, bleed and safe zones, and how to outline fonts before upload.',
    url: 'https://packifycustomboxes.com.au/artwork-guidelines/',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Artwork Guidelines - Packify Custom Boxes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packaging Artwork Guidelines: Bleed, CMYK, 300 DPI | Packify',
    description: 'Set up print-ready files for custom boxes, file formats, 300 DPI resolution, CMYK color, bleed and safe zones, and how to outline fonts before upload.',
    images: ['/images/og-image.webp'],
  },
}

const guidelines = [
  {
    number: 1,
    title: 'File Format',
    items: [
      'Preferred formats: AI, EPS, PDF (vector files)',
      'High-resolution PSD, PNG, or JPEG (minimum 300 DPI) accepted for images',
      'Convert all text to outlines or curves to avoid font issues',
    ],
  },
  {
    number: 2,
    title: 'Color Mode',
    content: 'Use CMYK color mode for all artwork. RGB files will be converted to CMYK, which may cause color shifts.',
  },
  {
    number: 3,
    title: 'Bleed & Safe Zone',
    items: [
      'Include a bleed of at least 0.125" (3mm) on all sides',
      'Keep important text and logos inside the safe zone (at least 0.125" from the edge)',
    ],
  },
  {
    number: 4,
    title: 'Dielines',
    content: 'If using a custom dieline template, place your artwork within the dieline layers.',
    items: [
      'Cut lines in 100% magenta (no stroke)',
      'Fold lines in 100% cyan dashed lines',
      'Keep dieline on a separate layer named "Dieline"',
    ],
  },
  {
    number: 5,
    title: 'Fonts and Images',
    items: [
      'All fonts must be outlined or embedded',
      'Linked images must be embedded or included with your file',
      'Image resolution should be at least 300 DPI',
    ],
  },
  {
    number: 6,
    title: 'File Naming',
    content: 'Name your files clearly with your company name and box type.',
    example: 'Packify_MailerBox_Design.pdf',
  },
]

const howToSteps = guidelines.map((g) => ({
  name: g.title,
  text: (g.content || (g.items ? g.items.join('. ') : '') || g.title) as string,
}))

export default function ArtworkGuidelinesPage() {
  return (
    <main className="min-h-screen">
      <HowToSchema
        name="Artwork Guidelines for Custom Boxes"
        description="Print-ready specs: AI, EPS, PDF. CMYK, 300 DPI, bleed & safe zone. Free design support. No dieline fees."
        steps={howToSteps}
      />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com.au/' },
          { name: 'Artwork Guidelines', url: 'https://packifycustomboxes.com.au/artwork-guidelines/' },
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-kraft-50 pt-28 pb-16 px-4">
        <PageAccent variant="kangaroo" />
        <div className="relative max-w-4xl mx-auto">
          <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">Print-ready files</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-ink mb-4">
            Artwork Guidelines
          </h1>
          <p className="text-lg text-ink/60 max-w-2xl">
            Follow these guidelines to ensure the highest print quality for your custom packaging at Packify Custom Boxes.
          </p>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {guidelines.map((item) => (
              <div
                key={item.number}
                className="dieline notch-sm-tl bg-white hover:border-orange-500 transition-colors p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-2xl font-black text-orange-500">
                    {String(item.number).padStart(2, '0')}
                  </span>
                  <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                </div>
                {item.content && (
                  <p className="text-ink/60 mb-3">{item.content}</p>
                )}
                {item.items && (
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-start gap-2 text-ink/60">
                        <span className="text-orange-600 font-bold mt-1 flex-shrink-0">✓</span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.example && (
                  <code className="dieline block mt-3 bg-kraft-50 text-ink px-4 py-2 text-sm font-mono">
                    {item.example}
                  </code>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-16 px-4 bg-kraft-50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="dieline notch-tl bg-white p-8 sm:p-10">
            <h2 className="font-display text-2xl font-black uppercase tracking-tight text-ink mb-2">Need Help with Artwork?</h2>
            <p className="text-ink/60 mb-6">
              We offer free file checks and affordable design assistance. Email us your files and we&apos;ll help you get print-ready.
            </p>
            <a
              href="mailto:hello@packifycustomboxes.com.au"
              className="notch-sm-tl inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide py-3 px-6 transition-colors"
            >
              hello@packifycustomboxes.com.au
            </a>
            <p className="mt-6">
              <Link href="/how-to-order/" className="text-orange-600 font-medium hover:underline">
                View how to order
              </Link>
            </p>
          </div>
          <p className="text-sm text-ink/40 mt-6">Last updated: July 12, 2026</p>
        </div>
      </section>
    </main>
  )
}
