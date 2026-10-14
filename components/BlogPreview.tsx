import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-content'

export default function BlogPreview() {
  const previewPosts = blogPosts.slice(0, 3)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="stamp text-orange-600 border-orange-600 text-[10px] font-bold px-2.5 py-0.5 mb-3">Packaging insights</p>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-ink">
              Latest from the Blog
            </h2>
          </div>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-bold text-sm uppercase tracking-wide"
          >
            View All Articles
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {previewPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}/`}
              className="group dieline notch-sm-tl bg-white overflow-hidden hover:border-orange-500 transition-colors duration-300"
            >
              <div className="relative h-52 w-full overflow-hidden dieline-b">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-ink/45 mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-ink mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-ink/60 text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-orange-600 font-bold text-sm uppercase tracking-wide">
                  Read Article
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}