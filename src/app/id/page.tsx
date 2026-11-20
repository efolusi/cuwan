import type { Metadata } from 'next'
import { LandingPage } from '@/components/LandingPage'
import { copy } from '@/lib/copy'

export const metadata: Metadata = {
  title: { absolute: copy.id.metaTitle },
  description: copy.id.metaDescription,
  alternates: { canonical: '/id', languages: { en: '/en', id: '/id' } },
}

export default function IndonesianHome() {
  return <LandingPage t={copy.id} locale="id" />
}
