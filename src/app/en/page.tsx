import type { Metadata } from 'next'
import { LandingPage } from '@/components/LandingPage'
import { copy } from '@/lib/copy'

export const metadata: Metadata = {
  title: { absolute: copy.en.metaTitle },
  description: copy.en.metaDescription,
  alternates: { canonical: '/en', languages: { en: '/en', id: '/id' } },
}

export default function EnglishHome() {
  return <LandingPage t={copy.en} locale="en" />
}
