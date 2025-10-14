import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Table Libraries — Visual Comparison & Examples',
  description:
    'Visual feature comparison and implementation examples for TanStack Table, MUI Data Grid, and Material React Table.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
