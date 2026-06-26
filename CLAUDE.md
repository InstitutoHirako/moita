# A Moita — Claude Configuration

## Projeto

Site de ecoturismo para **A Moita** (Abadiânia-GO), propriedade com chalés às margens do Rio Capivari.
Repositório: `InstitutoHirako/moita`
Board: https://github.com/orgs/InstitutoHirako/projects/1
Deploy: Vercel (automático via push para `main`)

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 14 (App Router) |
| Linguagem | TypeScript 5 — strict, sem `any` |
| Estilo | Tailwind CSS 3 — paleta customizada (ver abaixo) |
| Animação | Framer Motion 10 |
| PMS | Hostex (widget + Open API) |
| Package manager | **pnpm** (nunca npm ou yarn) |
| Deploy | Vercel |

---

## Estrutura de Arquivos

```
src/
├── app/
│   ├── page.tsx                    # Homepage (A Moita)
│   ├── layout.tsx                  # Root layout
│   ├── globals.css
│   ├── chaleAOrigem/page.tsx       # Página do Chalé A Origem
│   ├── dashboard/page.tsx          # Dashboard interno (rota protegida)
│   ├── search-results/page.tsx     # Resultados de busca Hostex
│   ├── test-hostex/page.tsx        # Teste de integração Hostex
│   ├── integration-test/page.tsx   # Testes de integração
│   ├── properties/[id]/page.tsx    # Página dinâmica de propriedade
│   ├── components/
│   │   ├── FAQ.tsx                 # FAQ (carregado dinamicamente)
│   │   └── Commitment.tsx          # Seção de compromissos
│   └── api/hostex/                 # API routes do Hostex
│       ├── dashboard/route.ts
│       ├── properties/route.ts
│       ├── reservations/route.ts
│       ├── status/route.ts
│       └── webhooks/route.ts
├── components/                     # Componentes compartilhados
│   ├── Header.tsx                  # Header global (onReserveClick, bgImage?)
│   ├── Footer.tsx                  # Footer global (onReserveClick)
│   ├── SmartCalendar.tsx
│   ├── ActiveReservationBar.tsx
│   └── hostex/
│       ├── HostexThemeStyles.tsx
│       ├── MetricsWidget.tsx
│       └── PropertiesWidget.tsx
├── hooks/hostex/
│   ├── useDashboardMetrics.ts
│   └── useProperties.ts
├── lib/
│   ├── analytics.ts
│   └── hostex/
│       ├── constants.ts            # IDs e URLs do Hostex — NUNCA hardcode inline
│       ├── client.ts
│       ├── config.ts
│       ├── index.ts
│       ├── calendar-sync.ts
│       ├── messaging.ts
│       └── property-manager.ts
└── types/
    └── hostex-widget.d.ts
```

---

## Design System

Paleta definida em `tailwind.config.ts` — use sempre os tokens, nunca hex inline.

| Token | Valor | Uso |
|-------|-------|-----|
| `teal-800` / `teal-900` | `#0d2b24` | Fundo de header, botões primários |
| `gold-300` | `#d9c086` | Botão Reservar, destaques |
| `lime-500` | `#84cc16` (padrão Tailwind) | Seção Nossos Pilares (bg verde) |
| `gray-100` | `#f3efe8` | Fundo do footer (off-white) |

Fonte: **Figtree** (body e headings). Sem outras fontes externas.

---

## Regras de Código

### Next.js
- `'use client'` apenas para state, eventos ou browser APIs
- `next/image` para todas as imagens (`priority` nas above-the-fold)
- `next/link` para navegação interna — nunca `<a href="/">` para rotas internas
- Sem `style` prop para layout — use Tailwind

### Hostex PMS
- IDs e URLs **sempre** via `src/lib/hostex/constants.ts`
- Widget script carregado em `useEffect` com guard `typeof window !== 'undefined'`
- Parâmetros check-in/out/guests lidos de URL search params via `useEffect`

### Framer Motion
- `whileInView` + `viewport={{ once: true }}` para animações de scroll
- `initial/animate` para entrada de página
- Stagger: `transition={{ delay: index * 0.1 }}`

### TypeScript
- Strict mode ativo — sem `any`, sem `@ts-ignore`
- Tipos de componentes com interfaces explícitas

---

## Rotas Protegidas

As rotas `/dashboard`, `/test-hostex`, `/integration-test`, `/properties` exigem `admin_token` cookie.
Middleware em `src/middleware.ts` (PR #18 — pendente merge).
Variável de ambiente: `ADMIN_ACCESS_TOKEN` (ver `.env.example`).

---

## Comandos

```bash
pnpm dev          # Servidor local (http://localhost:3000)
pnpm build        # Build de produção
pnpm lint:ci      # ESLint zero warnings
pnpm type-check   # tsc --noEmit
pnpm format:check # Prettier
pnpm format       # Prettier (fix)
```

CI obrigatório antes de qualquer commit: `pnpm format:check && pnpm type-check && pnpm lint:ci && pnpm build`

---

## Git Workflow

1. Nunca commitar diretamente em `main`
2. Criar branch a partir de `origin/main`: `git checkout -b <type>/<description> origin/main`
3. Commits com Conventional Commits: `feat(scope): description`
4. **Commits sempre com autoria de Carlos Gomes** — sem `Co-Authored-By: Claude`
5. Abrir PR com `gh pr create --repo InstitutoHirako/moita`
6. Adicionar ao board: `gh project item-add 1 --owner InstitutoHirako --url <pr-url>`

## Issues & Board

- Repo: `InstitutoHirako/moita`
- Board ID: `1` (owner: `InstitutoHirako`)
- Labels disponíveis: `bug`, `enhancement`, `chore`, `documentation`, `seo`, `p0-critical`, `p1-high`, `p2-medium`
- Épico principal: issue #1

---

## Variáveis de Ambiente

Ver `.env.example`. Nunca commitar `.env` ou segredos.

```
HOSTEX_ACCESS_TOKEN    # Token da API Hostex
HOSTEX_API_SECRET      # Secret do Hostex
HOSTEX_BASE_URL        # https://open-api.hostex.io
HOSTEX_WEBHOOK_SECRET  # Secret do webhook
ADMIN_ACCESS_TOKEN     # Token de acesso às rotas internas
```
