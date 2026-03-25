# Meu Site

## Tech Stack
- Next.js 15+ (App Router)
- TypeScript (strict: true)
- Tailwind CSS v4
- shadcn/ui

## Estrutura de Diretórios
- `src/app/` — Rotas do App Router
- `src/components/ui/` — Componentes shadcn/ui
- `src/components/` — Componentes customizados
- `src/lib/` — Funções utilitárias
- `src/types/` — Definições de tipos

## Comandos
- `npm run dev` — Servidor de desenvolvimento
- `npm run build` — Build de produção
- `npm run lint` — Verificação ESLint

## Regras de Código
- Server Components por padrão; só usar "use client" quando necessário
- Usar componentes shadcn/ui para elementos de UI (botões, cards, dialogs, forms)
- Estilizar apenas com Tailwind utility classes — sem CSS-in-JS, sem CSS modules
- TypeScript strict: sem tipo `any`
- Preferir `type` sobre `interface`
- Named exports, não default exports
- Nomes de funções/componentes/variáveis sempre em inglês, português apenas para conteúdos do site

## Tailwind CSS
- Versão v4: configuração vai no globals.css com @theme, NÃO criar tailwind.config.ts
- Usar design tokens semânticos (bg-primary, text-muted-foreground)

## Off-Limits
- Nenhum código fora de `src/`
- Sem console.log em código commitado
- Sem dependências CSS além do Tailwind