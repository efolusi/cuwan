import { describe, expect, it } from 'vitest'
import { LEVERAGE_CAP, MIN_MARGIN_BUFFER_PCT, PREVENTIVE_STOP_OUT_PCT, copy, isLocale } from './copy'

describe('copy', () => {
  it('keeps guardrail constants in both locales', () => {
    expect(LEVERAGE_CAP).toBe(20)
    expect(MIN_MARGIN_BUFFER_PCT).toBe(15)
    expect(PREVENTIVE_STOP_OUT_PCT).toBe(5)
    expect(copy.en.facts[0]?.k).toContain('20')
    expect(copy.id.facts[0]?.k).toContain('20')
  })

  it('exposes matching section shape in en and id', () => {
    expect(copy.en.features.items).toHaveLength(copy.id.features.items.length)
    expect(copy.en.guardrails.items).toHaveLength(copy.id.guardrails.items.length)
    expect(copy.en.how.steps).toHaveLength(copy.id.how.steps.length)
    expect(copy.en.privacy.sections).toHaveLength(copy.id.privacy.sections.length)
    expect(copy.en.terms.sections).toHaveLength(copy.id.terms.sections.length)
  })

  it('recognises locales', () => {
    expect(isLocale('en')).toBe(true)
    expect(isLocale('id')).toBe(true)
    expect(isLocale('fr')).toBe(false)
  })
})
