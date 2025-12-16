'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/perspectives', label: 'Perspectives' },
    { path: '/clicks', label: 'Clicks' },
    { path: '/contact', label: 'Contact' },
    { path: '/pics/Resume_KaruparthiJyothsna_.pdf', label: 'Resume', external: true },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav className="max-w-6xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-base font-semibold text-accent hover:text-accent-dark transition-colors">
            Jyothsna
          </Link>
          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`text-xs font-medium transition-all duration-200 relative py-1 px-2 rounded ${isActive(link.path)
                    ? 'text-accent bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <ul className="md:hidden mt-3 space-y-3 pb-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`block text-xs font-medium transition-all duration-200 py-2 px-3 rounded ${isActive(link.path)
                    ? 'text-accent bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Navbar

