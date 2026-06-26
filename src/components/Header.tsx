'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/nav-links'

interface HeaderProps {
  onReserveClick: () => void
  bgImage?: string
}

export default function Header({
  onReserveClick,
  bgImage = '/assets/backgrounds/waves-header.png',
}: HeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className="relative bg-teal-800">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={bgImage}
          alt=""
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      <nav className="relative z-10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/branding/logo-white.svg"
                alt="A Moita"
                width={144}
                height={48}
                className="h-10 w-auto md:h-12"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-6 md:flex lg:space-x-8">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-base text-gray-100 transition-colors hover:text-gold-300 lg:text-lg"
                >
                  {label}
                </Link>
              ))}
              <button
                onClick={onReserveClick}
                className="rounded-full bg-gold-300 px-4 py-2 text-sm font-medium text-teal-900 transition-colors hover:bg-gold-400 lg:px-6 lg:text-base"
              >
                Reservar
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="-mr-2 p-2 text-gray-100 md:hidden"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileNavOpen}
            >
              {mobileNavOpen ? (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`transition-all duration-300 ease-in-out md:hidden ${
              mobileNavOpen
                ? 'max-h-96 opacity-100'
                : 'max-h-0 overflow-hidden opacity-0'
            }`}
          >
            <div className="mt-4 space-y-2 rounded-lg bg-teal-800/95 px-4 pb-4 pt-2 shadow-lg backdrop-blur-sm">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-md px-4 py-3 text-base font-medium text-gray-100 transition-colors hover:bg-teal-700/30"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <button
                onClick={() => {
                  onReserveClick()
                  setMobileNavOpen(false)
                }}
                className="mt-2 block w-full rounded-full bg-gold-300 px-6 py-2 text-center font-medium text-teal-900 transition-colors hover:bg-gold-400"
              >
                Reservar
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
