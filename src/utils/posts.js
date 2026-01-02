import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const POSTS_PATH = path.join(process.cwd(), 'src/content/posts')

export async function getPostSlugs() {
  try {
    const files = await fs.readdir(POSTS_PATH)
    console.log('📁 Found files:', files)
    return files.filter((file) => file.endsWith('.mdx'))
  } catch (error) {
    console.log('❌ No posts folder:', error.message)
    return []
  }
}

export async function getPosts() {
  const slugs = await getPostSlugs()
  const posts = []
  for (const slug of slugs) {
    try {
      const filePath = path.join(POSTS_PATH, slug)
      const file = await fs.readFile(filePath, 'utf8')
      const { data } = matter(file)
      posts.push({
        slug: slug.replace(/\.mdx$/, ''),
        frontmatter: data
      })
    } catch (error) {
      console.log('❌ Error reading:', slug, error.message)
    }
  }
  return posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
}

export async function getPostBySlug(slug) {
  console.log('🔍 Looking for slug:', slug)
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`)
  try {
    const file = await fs.readFile(filePath, 'utf8')
    const { content, data } = matter(file)
    console.log('✅ Found post:', data.title)
    return { content, frontmatter: data }
  } catch (error) {
    console.log('❌ Post not found:', filePath, error.message)
    return null
  }
}
