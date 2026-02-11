import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Expanse Trackers',
  description: 'Family finance, health, and daily life tracker'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
