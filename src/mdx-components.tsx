'use client'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-6 text-gray-900">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-4 mt-8">{children}</h2>,
    p: ({ children }) => <p className="mb-6 leading-relaxed">{children}</p>,
    img: (props) => <Image className="rounded-lg shadow-lg my-6 mx-auto" {...props} />,
    a: ({ children, href }) => (
      <Link href={href as string} className="text-blue-600 hover:text-blue-800 font-semibold underline">
        {children}
      </Link>
    ),
    ...components,
  }
}
