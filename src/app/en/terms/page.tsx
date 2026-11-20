import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'
import { copy } from '@/lib/copy'

export const metadata: Metadata = {
  title: copy.en.terms.title,
  description: copy.en.terms.lede,
}

export default function EnglishTerms() {
  return <LegalPage t={copy.en} locale="en" kind="terms" />
}
