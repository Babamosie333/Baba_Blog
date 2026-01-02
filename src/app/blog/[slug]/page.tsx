import { getPostBySlug, getPostSlugs } from '@/utils/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({ 
    slug: slug.replace(/\.mdx$/, '') 
  }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return <div className="p-8 text-center text-black">POST NOT FOUND: {slug}</div>
  }

  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text">
            {post.frontmatter.title}
          </h1>
          <time className="text-xl text-gray-700 font-medium">
            {new Date(post.frontmatter.date).toLocaleDateString('en-IN')}
          </time>
        </header>
        
        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200">
          <div className="prose prose-lg max-w-none text-gray-900">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 whitespace-pre-wrap text-lg leading-relaxed font-light">
              {post.content}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
