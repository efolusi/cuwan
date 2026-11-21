import Link from 'next/link'
import { APP_URL, SSO_URL, type Dictionary, type Locale } from '@/lib/copy'
import { BrandMark } from './BrandMark'

export function SiteHeader({ t, locale }: { t: Dictionary; locale: Locale }) {
  const other = locale === 'en' ? 'id' : 'en'
  const base = `/${locale}`
  return (
    <header className="cw-site-header cw-wrap">
      <Link href={base} className="cw-brand" prefetch={false} aria-label={`${t.brand} home`}>
        <BrandMark />
        <span>{t.brand}</span>
      </Link>
      <nav className="cw-nav" aria-label="Primary">
        <a href={`${base}#features`}>{t.nav.features}</a>
        <a href={`${base}#guardrails`}>{t.nav.guardrails}</a>
        <a href={`${base}#how`}>{t.nav.how}</a>
        <Link href={`/${other}`} prefetch={false}>
          {t.switchLang}
        </Link>
        <a className="cw-btn cw-btn--primary cw-btn--header" href={SSO_URL}>
          {t.hero.cta}
        </a>
      </nav>
    </header>
  )
}

export function SiteFooter({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <footer className="cw-site-footer">
      <div className="cw-wrap">
        <div className="cw-footer-row">
          <span>{t.footer.product}</span>
          <span className="cw-nav" aria-label={t.footer.legal}>
            <Link href={`/${locale}/privacy`} prefetch={false}>
              {t.nav.privacy}
            </Link>
            <Link href={`/${locale}/terms`} prefetch={false}>
              {t.nav.terms}
            </Link>
            <a href={APP_URL}>App</a>
          </span>
        </div>
        <p>{t.footer.note}</p>
      </div>
    </footer>
  )
}
