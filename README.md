# Expanse Trackers

A full-stack **Next.js 14 + Prisma** scaffold for a multi-user family management platform.

## Included modules

- Authentication skeleton with Auth.js credentials provider
- Family management and invite acceptance flow
- Categories and transactions architecture
- Pocket money tracking data model
- Health records and daily logs models
- Dashboard shell with chart components

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Prisma ORM + PostgreSQL
- Auth.js / NextAuth
- React Hook Form + Zod
- Recharts

## Quick start

1. Copy environment variables:

```bash
cp .env.example .env
```

2. Install dependencies:

```bash
npm install
```

3. Generate Prisma client and migrate:

```bash
npm run prisma:generate
npm run prisma:migrate -- --name init
```

4. Seed default categories:

```bash
npm run prisma:seed
```

5. Start development server:

```bash
npm run dev
```

## Important folders

```text
src/app/actions/               # Server actions for family/domain modules
src/app/dashboard/             # Dashboard and family nested pages
src/components/forms/          # Login/register forms
src/components/charts/         # Dashboard charts
src/lib/                       # Auth, Prisma client, validations
prisma/schema.prisma           # Full domain schema
```
