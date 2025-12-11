'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <h1 className="logo">
            <Link href="/" className="logo-link">
              React Data Table Comparison
            </Link>
          </h1>
          <nav className="nav">
            <Link href="/" className={pathname === '/' ? 'active' : ''}>
              Home
            </Link>
            <Link href="/tanstack" className={pathname === '/tanstack' ? 'active' : ''}>
              TanStack
            </Link>
            <Link href="/mui" className={pathname === '/mui' ? 'active' : ''}>
              MUI
            </Link>
            <Link href="/mrt" className={pathname === '/mrt' ? 'active' : ''}>
              MRT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
