import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'
import { copy } from '@/lib/copy'

export const metadata: Metadata = {
  title: copy.en.privacy.title,
  description: copy.en.privacy.lede,
}

export default function EnglishPrivacy() {
  return <LegalPage t={copy.en} locale="en" kind="privacy" />
}
