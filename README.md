# A Moita — Refúgio Natural

[![CI/CD](https://github.com/CoreGomes/moita/actions/workflows/ci-cd.yml/badge.svg?branch=main)](https://github.com/CoreGomes/moita/actions/workflows/ci-cd.yml)

Site oficial da A Moita (`www.moitanativa.com.br`), destacando chalés, trilhas e experiências de ecoturismo no Cerrado. O projeto entrega uma landing page rica em conteúdo, com animações, galeria de fotos otimizada e integração com indicadores de ocupação.

## Visão Geral

- **Objetivo**
  Criar uma experiência digital envolvente para apresentar a pousada A Moita, capturar reservas e divulgar conteúdos ecológicos.
- **Stack principal**
  `Next.js 14.2.33`, `TypeScript`, `Tailwind CSS`, `Framer Motion`, `Swiper`, `React Icons`, `Zod`.
- **Integrações**
  Widgets Hostex (reservas), formulários via `react-hook-form`, métricas em tempo real com `swr` e `socket.io-client`.
- **Deploy**
  Automatizado pelo Vercel (produção) após validação do pipeline GitHub Actions.

## Estrutura do Repositório

```
moita/
├─ public/
│  ├─ assets/               # Logos, branding e galeria oficial
│  ├─ css/tailwind/         # CSS exportado para versões estáticas
│  ├─ about.html ...        # Páginas estáticas legadas para SEO
│  └─ robots.txt            # Configuração de rastreamento
├─ src/
│  ├─ app/                  # App Router (layouts, páginas e APIs)
│  │  ├─ page.tsx           # Landing principal com animações
│  │  ├─ chaleAOrigem/      # Página dedicada aos chalés
│  │  ├─ api/hostex/        # Rotas serverless para Hostex
│  │  └─ globals.css        # Estilos globais baseados em Tailwind
│  ├─ components/           # Componentes reutilizáveis (Hero, Galeria, CTA)
│  ├─ hooks/hostex/         # Hooks de dados para dashboards Hostex
│  ├─ lib/hostex/           # Client REST, cache e utilitários
│  └─ types/                # Tipagens compartilhadas
├─ .github/workflows/       # Pipelines CI/CD (format, lint, build, deploy)
├─ old_folders/             # Backups e templates arquivados
├─ README.md                # Este documento
└─ ...                      # Configurações (Tailwind, PostCSS, TypeScript)
```

## Pré-requisitos

- **Node.js 18.18+** (recomendado `pnpm env use --global 18`)
- **pnpm 8.15.0**
- Acesso ao repositório GitHub e conta Vercel vinculada ao projeto.

Verifique versões instaladas:

```bash
node -v
pnpm -v
```

## Setup Local

```bash
# 1. Clonar o repositório
git clone https://github.com/CoreGomes/moita.git
cd moita

# 2. Instalar dependências
pnpm install

# 3. Variáveis de ambiente (exemplo)
cp .env.example .env.local
# Edite .env.local conforme necessário (URLs públicas, Hostex, etc.)

# 4. Rodar no modo desenvolvimento
pnpm dev
# Acesse http://localhost:3000
```

### Scripts Úteis

- `pnpm dev` — Servidor Next.js com Turbopack e HMR.
- `pnpm build` — Build de produção (`.next/`).
- `pnpm start` — Servidor de produção após `pnpm build`.
- `pnpm lint` — ESLint com regras do Next.
- `pnpm lint:ci` — ESLint strict (falha em warnings).
- `pnpm type-check` — `tsc --noEmit` para segurança de tipos.
- `pnpm format` / `pnpm format:check` — Prettier com Tailwind.
- `pnpm test` — Placeholder (retorna sucesso até suite ser implementada).

## Qualidade de Código

- **Style & Lint**: ESLint + Prettier com plugin Tailwind.
- **Type Safety**: TypeScript strict; validações runtime com `zod`.
- **Performance**: `next/image`, otimização automática do Next, lazy loading, geração estática onde aplicável.

## CI/CD

Workflow `ci-cd.yml` executa em PRs e pushes para `main`:

1. Checkout + setup Node 20 / pnpm 8.15.0.
2. `pnpm install --frozen-lockfile`.
3. `pnpm format:check`, `pnpm type-check`, `pnpm lint:ci`, `pnpm test`.
4. `pnpm build`.
5. Disparo do hook `VERCEL_DEPLOY_HOOK_URL` (apenas `main`).

### Segredos Necessários (`Settings > Secrets and variables > Actions`)

- `VERCEL_DEPLOY_HOOK_URL`
- (Opcional) `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, `VERCEL_SCOPE` caso utilize deploy direto via API.

## Branching & Deploy

- **Trunk-Based**: `main` sempre pronta para deploy.
- **Branches curtas**: Feature branches com PR obrigatório e revisão.
- **Proteções**: Checks do GitHub Actions obrigatórios antes do merge.
- **Deploy**: Cada merge em `main` dispara build+deploy no Vercel; monitorar em `https://vercel.com/coregomes/a-moita/`.

## Referências & Branding

- Conteúdo visual, textos e identidade: [`www.moitanativa.com.br`](https://www.moitanativa.com.br).
- Logotipos oficiais em `public/assets/branding/`.
- Galeria curada em `public/assets/gallery/orefugio/`.

## Roadmap & Pendências

- Implementar suíte de testes (Playwright + Vitest).
- Automatizar integração com Hostex (sincronização diária de ocupação).
- Criar modo multilíngue (PT/EN) via `next-intl`.
- Publicar blog dinâmico com CMS headless (Strapi ou Contentful).

## Suporte & Contato

- **Email**: `contato@moitanativa.com.br`
- **Instagram**: `@moitanativa`
- Para dúvidas técnicas, abra uma issue no GitHub.

## Licença

Distribuído sob licença **MIT**. Consulte `LICENSE` para detalhes.
