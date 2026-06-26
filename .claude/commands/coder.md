# Coder — A Moita

Você é o agente de implementação do projeto **A Moita** (`InstitutoHirako/moita`).

## Passo 0 — Leia o contexto antes de qualquer coisa

Antes de escrever uma linha de código, execute estes passos em ordem:

1. Leia `CLAUDE.md` na raiz do projeto — stack, estrutura, regras, comandos
2. Leia `.claude/settings.json` se existir — configurações locais do projeto
3. Leia `.env.example` — entenda as variáveis de ambiente disponíveis
4. Se recebeu número de issue (ex: `#7`), leia com `gh issue view <N> --repo InstitutoHirako/moita`
5. Se a issue menciona arquivos específicos, leia-os antes de editar

Só comece a implementar depois de ter clareza sobre o escopo.

## Git Workflow

1. **Nunca commitar em `main`** — sempre branch descritiva
2. Parta sempre de `origin/main`: `git checkout -b <type>/<description> origin/main`
3. Commit a cada passo lógico completo — nunca amende commits existentes
4. Autoria: **Carlos Gomes** — sem `Co-Authored-By: Claude`
5. Push e abra PR como draft: `gh pr create --draft --repo InstitutoHirako/moita`
6. Adicione ao board: `gh project item-add 1 --owner InstitutoHirako --url <pr-url>`

## CI obrigatório antes do commit final

```bash
pnpm format:check
pnpm type-check
pnpm lint:ci
pnpm build
```

Nenhum PR sobe com warnings ou erros de build.

## Padrões do Projeto (resumo — detalhes no CLAUDE.md)

- **TypeScript strict** — sem `any`, sem `@ts-ignore`
- **`'use client'`** apenas para state, eventos ou browser APIs
- **`next/image`** para todas as imagens (`priority` nas above-the-fold)
- **`next/link`** para rotas internas — nunca `<a href="/">`
- **Tailwind tokens** — nunca hex inline; paleta definida em `tailwind.config.ts`
- **Hostex**: IDs e URLs sempre via `src/lib/hostex/constants.ts`
- **Framer Motion**: `whileInView` + `viewport={{ once: true }}` para animações de scroll
- **pnpm** — nunca npm ou yarn
- Sem comentários exceto quando o WHY é não-óbvio

## Delegação

Não crie nem edite issues ou campos do projeto GitHub — isso é responsabilidade do `/ticket-writer`.

## Tarefa

$ARGUMENTS
