import Image from 'next/image'
import Link from 'next/link'

interface FooterProps {
  onReserveClick: () => void
}

export default function Footer({ onReserveClick }: FooterProps) {
  return (
    <footer
      className="relative py-12 lg:py-16"
      style={{ backgroundColor: '#f3efe8' }}
    >
      <Image
        className="absolute bottom-0 left-0"
        src="/assets/backgrounds/waves-footer.png"
        alt=""
        width={200}
        height={200}
        priority
      />
      <div className="container relative mx-auto px-4">
        <div className="mb-12 flex flex-col justify-between lg:flex-row">
          <div className="mb-8 lg:mb-0">
            <Link className="mb-6 inline-block" href="/">
              <Image
                src="/assets/branding/logo.svg"
                alt="A Moita"
                width={120}
                height={40}
              />
            </Link>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.instagram.com/moitanativa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6 text-teal-900 transition-colors hover:text-lime-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.415-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.415-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-1.281.22-2.33.678-3.21a5.5 5.5 0 013.21-3.21c.88-.457 1.929-.678 3.21-.678h.63c1.429 0 1.784.013 2.808.06.102.005.203.011.303.017v2.198h-1.22c-1.323 0-1.747.06-2.32.246a3.28 3.28 0 00-1.8 1.8c-.185.573-.245.997-.245 2.32v1.47c0 1.323.06 1.747.245 2.32.42 1.3 1.52 2.4 2.82 2.82.573.185.997.245 2.32.245h1.47c1.323 0 1.747-.06 2.32-.245a3.28 3.28 0 001.8-1.8c.185-.573.245-.997.245-2.32v-1.47c0-1.323-.06-1.747-.245-2.32a3.28 3.28 0 00-1.8-1.8c-.573-.185-.997-.245-2.32-.245h-1.1v-2.22c.1-.006.2-.012.303-.017 1.024-.047 1.379-.06 3.808-.06zM12 8.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 5.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@moitanativa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6 text-teal-900 transition-colors hover:text-lime-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.43.27-.83.63-1.01 1.07-.36.88-.32 1.83-.3 2.76.1 1.09.81 2.16 1.83 2.5 1.2.4 2.62-.1 3.31-1.08.23-.33.43-.69.48-1.09.1-.74.16-1.47.17-2.21.14-1.24-.06-2.7-.26-3.7.81.56 1.73.95 2.6 1.44.45.25.94.51 1.35.85.21.18.45.32.7.44.1.05.2.1.3.14.1.03.2.07.31.08.1.02.2.03.3.03.1 0 .2-.01.3-.03.1-.01.2-.05.31-.08.1-.04.2-.09.3-.14.25-.11.49-.26.7-.44.41-.34.9-.6 1.35-.85.87-.49 1.79-.88 2.6-1.44v-4.64c-1.63.1-3.26.05-4.89.04-.01 1.17.03 2.35-.01 3.52-.56-.38-1.23-.67-1.89-.9-1.1-.39-2.26-.57-3.43-.7-.12-.02-.24-.02-.36-.02-1.23 0-2.46.11-3.66.36-1.48.31-2.92.91-4.2 1.76-1.26.84-2.27 1.99-2.91 3.32-.64 1.32-.9 2.79-.85 4.27.1 2.85 1.5 5.53 3.87 7.09 1.37.9 2.99 1.42 4.64 1.5 1.06.05 2.12-.03 3.16-.29 1.56-.39 3-1.14 4.2-2.2 1.2-1.06 2.03-2.45 2.4-3.99.2-.82.27-1.66.28-2.5.03-1.87.02-3.74.02-5.61 0-1.23.01-2.47 0-3.7.01-1.65 0-3.3 0-4.95z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                Navegação
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-base text-gray-600 transition-colors hover:text-lime-600"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#nossos-pilares"
                    className="text-base text-gray-600 transition-colors hover:text-lime-600"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#chales"
                    className="text-base text-gray-600 transition-colors hover:text-lime-600"
                  >
                    Chalés
                  </Link>
                </li>
                <li>
                  <button
                    onClick={onReserveClick}
                    className="text-base text-gray-600 transition-colors hover:text-lime-600"
                  >
                    Reservar
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contato
            </h3>
            <address className="mt-4 text-base not-italic text-gray-600">
              <p>Rio Capivari, Abadiânia-GO</p>
              <a
                href="mailto:contato@moitanativa.com.br"
                className="mt-2 block transition-colors hover:text-lime-600"
              >
                contato@moitanativa.com.br
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-base text-gray-500">
            &copy; 2025 A Moita. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
