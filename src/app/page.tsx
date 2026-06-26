'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import SmartCalendar from '@/components/SmartCalendar'
import ActiveReservationBar from '@/components/ActiveReservationBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { analytics } from '@/lib/analytics'

// Dynamically import components with no SSR
const FAQ = dynamic(() => import('@/app/components/FAQ'), { ssr: false })
const Commitment = dynamic(() => import('@/app/components/Commitment'), {
  ssr: false,
})

export default function HomePage() {
  const handleReserveClick = () => {
    window.location.href = '/chaleAOrigem'
  }

  const solutions = [
    {
      title: 'Soluções Sustentáveis',
      description:
        'Desenvolvemos e implementamos soluções inovadoras que reduzem o impacto ambiental, mantendo alta eficiência e confiabilidade.',
      image: '/assets/gallery/origem/01.png',
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
            fill="white"
          />
          <path
            d="M24 12L28 20H32L25 24L29 32L24 27L19 32L23 24L16 20H20L24 12Z"
            fill="#022C22"
          />
        </svg>
      ),
    },
    {
      title: 'Impacto na Comunidade',
      description:
        'Mais do que construir, cultivamos raízes: o pé de manga no coração da Moita simboliza nosso compromisso em gerar vida, compartilhar frutos e fortalecer a comunidade local.',
      image: '/assets/gallery/origem/02.png',
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
            fill="white"
          />
          <path
            d="M32 32H16V28H32V32ZM36 24H12V20H36V24ZM40 16H8V12H40V16Z"
            fill="#022C22"
          />
        </svg>
      ),
    },
    {
      title: 'Inovação & Pesquisa',
      description:
        'Do ferro que sustenta nossas estruturas aos tijolos ecológicos que moldam os espaços, cada solução nasce da busca por equilíbrio entre inovação e sustentabilidade. Transformamos técnicas construtivas em ambientes que oferecem conforto, estética e eficiência energética.',
      image: '/assets/gallery/origem/03.png',
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
            fill="white"
          />
          <path
            d="M24 12L30 22H18L24 12ZM24 28C27.3137 28 30 25.3137 30 22C30 18.6863 27.3137 16 24 16C20.6863 16 18 18.6863 18 22C18 25.3137 20.6863 28 24 28Z"
            fill="#022C22"
          />
        </svg>
      ),
    },
    {
      title: 'Responsabilidade Ambiental',
      description:
        'Entre o canto da seriema e o voo do tucano, reafirmamos nossa missão: proteger a biodiversidade do Cerrado e garantir que a Moita seja um espaço de convivência harmônica com a natureza.',
      image: '/assets/gallery/origem/04.png',
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
            fill="white"
          />
          <path
            d="M32 32H16V28H32V32ZM36 24H12V20H36V24ZM40 16H8V12H40V16Z"
            fill="#022C22"
          />
        </svg>
      ),
    },
  ]

  return (
    <div>
      <Header onReserveClick={handleReserveClick} />

      {/* Hero Section */}
      <div className="relative bg-teal-900 pb-32 pt-8 sm:pb-40 lg:pb-64 lg:pt-20">
        {/* Hero Background */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/backgrounds/bg-waves.png"
            alt="Background waves"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/60 via-teal-900/40 to-teal-900/80" />
        </div>

        {/* Active Reservation Bar - Moved to top */}
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ActiveReservationBar />
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-4 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              className="mb-6 font-heading text-4xl tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              A Moita: Natureza que acolhe, tempo, presença e vida plena.
            </motion.h1>
            <motion.p
              className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Conexão profunda com a natureza, simplicidade que acolhe e
              hospitalidade regenerativa no coração do Cerrado.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="/chaleAOrigem"
                className="inline-block rounded-full bg-teal-900 px-8 py-3 font-medium text-[#f5f5f0] transition-colors hover:bg-teal-800"
                onClick={() =>
                  analytics.trackCTAClick('ver_mais', 'hero_section')
                }
              >
                Ver Mais
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="mb-10 w-full px-4 sm:w-1/2 lg:w-1/4">
              <div className="text-center">
                <h3 className="mb-3 text-3xl font-medium text-teal-800 lg:text-4xl">
                  3.040 m²
                </h3>
                <p className="text-gray-700">
                  Natureza preservada às margens do Capivari
                </p>
              </div>
            </div>
            <div className="mb-10 w-full px-4 sm:w-1/2 lg:w-1/4">
              <div className="text-center">
                <h3 className="mb-3 text-3xl font-medium text-teal-800 lg:text-4xl">
                  4 unidades
                </h3>
                <p className="text-gray-700">
                  Chalés e cabanas exclusivas para descanso
                </p>
              </div>
            </div>
            <div className="mb-10 w-full px-4 sm:w-1/2 lg:w-1/4">
              <div className="text-center">
                <h3 className="mb-3 text-3xl font-medium text-teal-800 lg:text-4xl">
                  80%+ área permeável
                </h3>
                <p className="text-gray-700">Conexão real com o Cerrado vivo</p>
              </div>
            </div>
            <div className="mb-10 w-full px-4 sm:w-1/2 lg:w-1/4">
              <div className="text-center">
                <h3 className="mb-3 text-3xl font-medium text-teal-800 lg:text-4xl">
                  100+ hóspedes
                </h3>
                <p className="text-gray-700">
                  Experiências autênticas já compartilhadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="nossos-pilares" className="bg-white p-4">
        <div className="rounded-3xl bg-lime-500 px-5 pb-24 pt-16 xs:px-8 xl:px-12">
          <div className="container mx-auto px-4">
            <div className="mb-4 flex items-center">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#022C22" />
              </svg>
              <span className="ml-2 inline-block text-sm font-medium">
                Nossos Pilares
              </span>
            </div>
            <div className="border-t border-teal-900 border-opacity-25 pt-14">
              <h1 className="mb-24 font-heading text-4xl sm:text-6xl">
                O que nos move e inspira
              </h1>
              <div className="-mx-4 flex flex-wrap">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={solution.title}
                    className="mb-16 w-full px-4 sm:w-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div>
                      {solution.icon}
                      <div className="mt-6">
                        <h5 className="mb-3 text-2xl font-medium">
                          {solution.title}
                        </h5>
                        <p className="mb-6">{solution.description}</p>
                        {/* Comentando o botão Read more conforme solicitado
                        <Link
                          href="#"
                          className="inline-block text-lg font-medium transition-colors hover:text-teal-700"
                        >
                          Read more
                        </Link>
                        */}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section with Origem Images */}
      <section id="chales" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-col items-center md:flex-row">
            {/* Left Column - Text Content */}
            <div className="mb-10 w-full px-4 md:mb-0 md:w-1/2">
              <div className="mx-auto max-w-lg md:mx-0">
                <h2 className="mb-6 text-3xl font-medium text-teal-900 md:text-4xl lg:text-5xl">
                  Entre árvores e silêncios, devolvemos o essencial: tempo,
                  presença e vida plena.
                </h2>
                <p className="mb-8 text-lg text-gray-700">
                  Descubra um refúgio onde a natureza e o conforto se encontram,
                  criando experiências que renovam corpo e alma.
                </p>
                <a
                  href="/chaleAOrigem"
                  onClick={handleReserveClick}
                  className="inline-block rounded-full bg-teal-900 px-8 py-3 font-medium text-[#f5f5f0] transition-colors hover:bg-teal-800"
                >
                  Ver Mais
                </a>
              </div>
            </div>

            {/* Right Column - Image Grid */}
            <div className="w-full px-4 md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/gallery/origem/01.png"
                    alt="Natureza e tranquilidade"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/gallery/origem/02.png"
                    alt="Momento de paz"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/gallery/origem/03.png"
                    alt="Experiência única"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/gallery/origem/04.png"
                    alt="Conexão com a natureza"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mx-auto mb-8 max-w-5xl"
      >
        {/* Commitment Section */}
        <Commitment />

        {/* FAQ Section */}
        <FAQ />
      </motion.div>

      <Footer onReserveClick={handleReserveClick} />
    </div>
  )
}
