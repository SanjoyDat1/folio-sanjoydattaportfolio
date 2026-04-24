import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Geist } from 'next/font/google'
import { Geist_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { Nav } from '@/components/sections/nav'
import { Footer } from '@/components/sections/footer'
import { FolioBadge } from '@/components/ui/folio-badge'
import { siteData } from '@/lib/site-data'

const displayFont = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const bodyFont = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const monoFont = Geist_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: "Sanjoy Datta — iOS founder",
  description: "iOS founder and student who ships fast, learns in public, and builds mobile-first products that spread organically.",
  openGraph: {
    title: "Sanjoy Datta — iOS founder",
    description: "iOS founder and student who ships fast, learns in public, and builds mobile-first products that spread organically.",
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-folio-anim="cinematic"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body>
        <Nav data={siteData} />
        <main>{children}</main>
        <Footer data={siteData} />
        <FolioBadge />
      </body>
    </html>
  )
}
