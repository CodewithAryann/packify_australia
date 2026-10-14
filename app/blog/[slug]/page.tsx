import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from '@/components/JsonLd'
import { blogPosts } from '@/lib/blog-content'
import BlogPostClient from '@/components/BlogPostClient'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Blog Post Not Found' }

  const url = `https://packifycustomboxes.com.au/blog/${params.slug}/`
  const title = post.seoTitle || `${post.title} | Packify Custom Boxes Blog`

  return {
    metadataBase: new URL('https://packifycustomboxes.com.au'),
    title,
    description: post.metaDescription || post.excerpt,
    keywords: 'custom packaging, eco-friendly packaging, packaging tips, Packify Custom Boxes, mailer boxes, rigid boxes, Australia custom boxes',
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.metaDescription || post.excerpt,
      url,
      type: 'article',
      siteName: 'Packify Custom Boxes',
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      authors: [post.author],
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post.metaDescription || post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  // Build-time: pass only the small fields the related-post cards render,
  // so the full blog-content.ts never ships in the client bundle.
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post!.slug)
    .slice(0, 3)
    .map(({ slug, title, image, author, readTime, excerpt, date }) => ({
      slug, title, image, author, readTime, excerpt, date,
    }))

  return (
    <>
      <ArticleSchema
        title={post.title}
        excerpt={post.excerpt}
        image={post.image}
        url={`https://packifycustomboxes.com.au/blog/${params.slug}/`}
        datePublished={post.date}
        author={post.author}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://packifycustomboxes.com.au/' },
          { name: 'Blog', url: 'https://packifycustomboxes.com.au/blog/' },
          { name: post.title },
        ]}
      />
      {post.faq && post.faq.length > 0 && <FAQSchema faqs={post.faq} />}
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  )
}
