import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'
import { copy } from '@/lib/copy'

export const metadata: Metadata = {
  title: copy.id.terms.title,
  description: copy.id.terms.lede,
}

export default function IndonesianTerms() {
  return <LegalPage t={copy.id} locale="id" kind="terms" />
}
