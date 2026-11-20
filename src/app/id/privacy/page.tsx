import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'
import { copy } from '@/lib/copy'

export const metadata: Metadata = {
  title: copy.id.privacy.title,
  description: copy.id.privacy.lede,
}

export default function IndonesianPrivacy() {
  return <LegalPage t={copy.id} locale="id" kind="privacy" />
}
