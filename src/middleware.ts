import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PROTECTED_PATHS = [
  '/dashboard',
  '/test-hostex',
  '/integration-test',
  '/properties',
]

export function middleware(request: NextRequest) {
  const isProtected = PROTECTED_PATHS.some((p) =>
    request.nextUrl.pathname.startsWith(p)
  )

  if (!isProtected) return NextResponse.next()

  const adminToken = process.env.ADMIN_ACCESS_TOKEN
  const requestToken = request.cookies.get('admin_token')?.value

  if (!adminToken || requestToken !== adminToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/test-hostex/:path*',
    '/integration-test/:path*',
    '/properties/:path*',
  ],
}
