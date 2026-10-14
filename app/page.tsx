import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import TrustedBy from '@/components/TrustedBy'
import { FAQSchema } from '@/components/JsonLd'
import { homepageFaqs } from '@/lib/faqs'
import ProductGrid from '@/components/ProductGrid'
import FeaturedProductsSection from '@/components/FeaturedProductsSection'
import FeaturesHighlight from '@/components/FeaturesHighlight'
import CustomBoxForm from '@/components/CustomBoxForm'
import WhyChooseUs from '@/components/WhyChooseUs'
import HowItWorks from '@/components/HowItWorks'
import AustraliaWide from '@/components/AustraliaWide'
import WhyCustomBoxes from '@/components/WhyCustomBoxes'
import FAQSection from '@/components/FAQSection'
import BlogPreview from '@/components/BlogPreview'
import QuoteForm from '@/components/QuoteForm'
import Testimonials from '@/components/Testimonials'

export const metadata: Metadata = {
  metadataBase: new URL('https://packifycustomboxes.com.au'),

  alternates: {
    canonical: '/',
  },

  openGraph: {
    url: '/',
    title: 'Custom Packaging Boxes | Custom Boxes with Logo | Wholesale Australia',
    description:
      'Custom packaging boxes for e-commerce, retail & subscription brands. Mailer, tuck, rigid boxes. No die charges. Free design. No minimum order. Free Australia-wide shipping.',
    type: 'website',
    siteName: 'Packify Custom Boxes',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Packify Custom Boxes - Custom Packaging Australia',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Custom Packaging Boxes | Wholesale Australia',
    description:
      'Custom packaging boxes. No die charges. Free design. No minimum order. Free Australia-wide shipping.',
    images: ['/images/og-image.webp'],
  },
}

export default function Home() {
  return (
    <>
      <FAQSchema faqs={homepageFaqs} />
      <Hero />      
      <TrustedBy />
      <ProductGrid />
      <FeaturedProductsSection />
      <AboutSection />
      <FeaturesHighlight />
      <CustomBoxForm />
      {/* <WhyChooseUs /> */}
      <HowItWorks />
      <AustraliaWide />
      {/* <WhyCustomBoxes /> */}
      <FAQSection />
      <QuoteForm />
      {/* <Testimonials /> */}
      <BlogPreview />
      {/* <PromoBanner/>       */}
    </>
  )
}