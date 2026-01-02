import { getPosts } from '@/utils/posts'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await getPosts()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Blog 🚀
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Web development journey from Kanpur
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-indigo-200 text-decoration-none"
            >
              <h2 className="text-2xl font-bold text-gray-900 hover:text-indigo-600 mb-3 cursor-pointer">
                {post.frontmatter.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.frontmatter.description}
              </p>
              <time className="text-sm text-indigo-600 font-medium">
                {new Date(post.frontmatter.date).toLocaleDateString('en-IN')}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
