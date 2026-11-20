import { type NextRequest, NextResponse } from 'next/server'
import { isLocale } from './lib/copy'

const COOKIE = 'lang'
const YEAR = 60 * 60 * 24 * 365

/**
 * Sends a first-time Indonesian visitor from `/` to the Indonesian landing page.
 * A stored language cookie wins over the Cloudflare country guess.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const requestHeaders = new Headers(request.headers)

  const onLanguagePath = /^\/(en|id)(?=\/|$)/.exec(pathname)
  if (onLanguagePath) {
    const current = onLanguagePath[1]
    if (!isLocale(current)) return NextResponse.next()
    requestHeaders.set('x-locale', current)
    const response = NextResponse.next({ request: { headers: requestHeaders } })
    if (request.cookies.get(COOKIE)?.value !== current) {
      response.cookies.set(COOKIE, current, { maxAge: YEAR, path: '/', sameSite: 'lax' })
    }
    return response
  }

  if (pathname !== '/') return NextResponse.next()

  const stored = request.cookies.get(COOKIE)?.value
  const locale =
    stored === 'en' || stored === 'id'
      ? stored
      : request.headers.get('cf-ipcountry') === 'ID'
        ? 'id'
        : 'en'

  const url = request.nextUrl.clone()
  url.pathname = `/${locale}`
  return NextResponse.redirect(url, 307)
}

export const config = {
  matcher: ['/', '/en/:path*', '/id/:path*'],
}
