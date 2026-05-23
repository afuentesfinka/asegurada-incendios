# Asegurada de Comunidades - Monorepo

## Estructura
- `apps/web`: Next.js SSR
- `apps/api`: NestJS API REST + OpenAPI + Prisma
- `packages/ui`: UI kit base
- `packages/types`: tipos compartidos
- `docs`: documentación funcional

## Requisitos
- Node 20+
- PostgreSQL 15+ con pgvector

## Arranque local
1. Instala dependencias: `npm install`
2. Configura `apps/api/.env` con `DATABASE_URL`
3. Ejecuta migración: `npm --workspace @asegurada/api run prisma:migrate`
4. Levanta API: `npm run dev:api`
5. Levanta web: `npm run dev:web`

## Notas
- API docs OpenAPI en `http://localhost:3001/docs`
- Endpoint health-check en `GET /health`
