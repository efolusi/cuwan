import Link from 'next/link'
import type { Dictionary, Locale } from '@/lib/copy'
import { SiteFooter, SiteHeader } from './SiteChrome'

export function LegalPage({
  t,
  locale,
  kind,
}: {
  t: Dictionary
  locale: Locale
  kind: 'privacy' | 'terms'
}) {
  const doc = t[kind]
  return (
    <>
      <SiteHeader t={t} locale={locale} />
      <main id="main" tabIndex={-1} className="cw-wrap cw-legal">
        <p className="cw-eyebrow">
          <Link href={`/${locale}`} prefetch={false}>
            {t.brand}
          </Link>
        </p>
        <h1>{doc.title}</h1>
        <p className="cw-lede">{doc.lede}</p>
        {doc.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </main>
      <SiteFooter t={t} locale={locale} />
    </>
  )
}
