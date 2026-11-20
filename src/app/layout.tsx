import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import type { ReactNode } from 'react'
import './globals.css'
import { SITE_URL, isLocale } from '@/lib/copy'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Cuwan',
    template: '%s | Cuwan',
  },
  description: 'Grid bots with anti-liquidation guardrails.',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF9F6' },
    { media: '(prefers-color-scheme: dark)', color: '#191512' },
  ],
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headerStore = await headers()
  const localeHeader = headerStore.get('x-locale')
  const lang = isLocale(localeHeader) ? localeHeader : 'en'

  return (
    <html lang={lang} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a className="cw-skip" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
