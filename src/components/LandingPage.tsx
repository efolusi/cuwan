import { SSO_URL, type Dictionary, type Locale } from '@/lib/copy'
import { SiteFooter, SiteHeader } from './SiteChrome'

export function LandingPage({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <>
      <SiteHeader t={t} locale={locale} />
      <main id="main" tabIndex={-1}>
        <section className="cw-wrap cw-hero" aria-labelledby="cw-hero-title">
          <div>
            <p className="cw-eyebrow">{t.hero.eyebrow}</p>
            <h1 id="cw-hero-title" className="cw-hero-title">
              {t.hero.titleBefore}
              <em className="cw-accent">{t.hero.titleAccent}</em>
              {t.hero.titleAfter}
            </h1>
            <p className="cw-lede">{t.hero.lede}</p>
            <div className="cw-actions">
              <a className="cw-btn cw-btn--primary" href={SSO_URL}>
                {t.hero.cta}
              </a>
              <a className="cw-btn cw-btn--ghost" href="#how">
                {t.hero.secondary}
              </a>
            </div>
            <p className="cw-proof">{t.hero.proof}</p>
          </div>
          <aside className="cw-board" aria-label="Example bot">
            <div className="cw-board-label">Example · BTC/USDT · Futures · Grid</div>
            <div className="cw-board-stats">
              {t.facts.slice(0, 3).map((fact) => (
                <div key={fact.v}>
                  <div className="cw-eyebrow">{fact.v}</div>
                  <div className="cw-stat-value">{fact.k}</div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="cw-facts" aria-label="Guardrails at a glance">
          <div className="cw-wrap cw-facts-grid">
            {t.facts.map((fact) => (
              <div key={fact.v} className="cw-fact">
                <div className="cw-fact-k">{fact.k}</div>
                <div className="cw-fact-v">{fact.v}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="cw-section">
          <div className="cw-wrap">
            <div className="cw-section-head">
              <p className="cw-eyebrow">{t.features.eyebrow}</p>
              <h2 className="cw-h2">{t.features.title}</h2>
            </div>
            <div className="cw-grid cw-grid--2">
              {t.features.items.map((item) => (
                <article key={item.title} className="cw-card">
                  <h3 className="cw-h3">{item.title}</h3>
                  <p className="cw-card-body">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="guardrails" className="cw-section">
          <div className="cw-wrap">
            <div className="cw-section-head">
              <p className="cw-eyebrow">{t.guardrails.eyebrow}</p>
              <h2 className="cw-h2">{t.guardrails.title}</h2>
              <p className="cw-lede">{t.guardrails.lede}</p>
            </div>
            <div className="cw-grid cw-grid--3">
              {t.guardrails.items.map((item) => (
                <article key={item.title} className="cw-card">
                  <h3 className="cw-h3">{item.title}</h3>
                  <p className="cw-card-body">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="cw-section">
          <div className="cw-wrap">
            <div className="cw-section-head">
              <p className="cw-eyebrow">{t.how.eyebrow}</p>
              <h2 className="cw-h2">{t.how.title}</h2>
            </div>
            <ol className="cw-steps">
              {t.how.steps.map((step) => (
                <li key={step.title} className="cw-step">
                  <h3 className="cw-h3">{step.title}</h3>
                  <p className="cw-card-body">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="cw-closing">
          <div className="cw-wrap">
            <h2 className="cw-h2">{t.closing.title}</h2>
            <p className="cw-lede">{t.closing.lede}</p>
            <div className="cw-actions">
              <a className="cw-btn cw-btn--primary" href={SSO_URL}>
                {t.closing.cta}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter t={t} locale={locale} />
    </>
  )
}
