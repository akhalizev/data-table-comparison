import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { SiteHeader } from '@/components/SiteHeader'
// Removed legacy Emotion SSR logic
import EmotionServerStyles from '@/components/EmotionServerStyles'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Data Table Libraries — Visual Comparison & Examples',
  description:
    'Visual feature comparison and implementation examples for TanStack Table, MUI Data Grid, and Material React Table.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Removed legacy Emotion SSR logic

  return (
    <html lang="en">
      <body className={inter.className}>
        <EmotionServerStyles>
          <SiteHeader />
          {children}
        </EmotionServerStyles>
      </body>
    </html>
  )
}
