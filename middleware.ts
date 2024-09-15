import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { fallbackLng, languages } from '@/app/i18n/settings'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = request.headers.get('accept-language')?.split(',')?.[0] || fallbackLng
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)',
  ],
}
