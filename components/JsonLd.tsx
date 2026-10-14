export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Packify Custom Boxes',
    url: 'https://packifycustomboxes.com.au',
    logo: 'https://packifycustomboxes.com.au/images/Favicon.webp',
    description:
      'Premium custom packaging boxes for Australian businesses. Mailer boxes, tuck boxes, rigid boxes. Free Australia-wide shipping, no minimums. Trusted by 3,000+ businesses.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5 Riverside Quay',
      addressLocality: 'Southbank',
      addressRegion: 'VIC',
      postalCode: '3006',
      addressCountry: 'AU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@packifycustomboxes.com.au',
      telephone: '+61-3-9000-4821',
      contactType: 'customer service',
      availableLanguage: 'English',
      areaServed: 'AU',
    },
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Packify Custom Boxes',
    url: 'https://packifycustomboxes.com.au',
    description: 'Custom Packaging Boxes | Premium & Eco-Friendly | Australia',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://packifycustomboxes.com.au/get-quote/',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbListSchema({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function HowToSchema({
  name,
  description,
  steps,
}: {
  name: string
  description: string
  steps: { name: string; text: string }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function AggregateRatingSchema({
  ratingValue,
  reviewCount,
  bestRating = 5,
}: {
  ratingValue: number
  reviewCount: number
  bestRating?: number
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Packify Custom Boxes',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(ratingValue),
      bestRating: String(bestRating),
      worstRating: '1',
      reviewCount: String(reviewCount),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleSchema({
  title,
  excerpt,
  image,
  url,
  datePublished,
  author,
}: {
  title: string
  excerpt: string
  image: string
  url: string
  datePublished: string
  author: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: excerpt,
    image: image.startsWith('http')
      ? image
      : `https://packifycustomboxes.com.au${image}`,
    url,
    datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Packify Custom Boxes',
      logo: {
        '@type': 'ImageObject',
        url: 'https://packifycustomboxes.com.au/images/Favicon.webp',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url?: string }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
