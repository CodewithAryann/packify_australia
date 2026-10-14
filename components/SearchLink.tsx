'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

/**
 * The search icon shown in the navbar. It's a normal link to the /search page
 * (no overlay), and optionally registers Cmd/Ctrl+K to jump there quickly.
 * Set `enableShortcut={false}` on the secondary (mobile) instance so the
 * shortcut isn't handled twice.
 */
export default function SearchLink({
  enableShortcut = true,
  className = '',
}: {
  enableShortcut?: boolean
  className?: string
}) {
  const router = useRouter()
  const [isMac, setIsMac] = useState(true)

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad|iPod/.test(navigator.userAgent))
  }, [])

  useEffect(() => {
    if (!enableShortcut) return
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        router.push('/search')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [enableShortcut, router])

  return (
    <Link
      href="/search"
      aria-label="Search"
      title={isMac ? 'Search (\u2318K)' : 'Search (Ctrl+K)'}
      className={`flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/10 hover:text-orange-400 transition-colors ${className}`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
      </svg>
    </Link>
  )
}
