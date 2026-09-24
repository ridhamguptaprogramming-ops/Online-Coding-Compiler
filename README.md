# CodeArena — Phase 1: Scaffolding, Auth & Problems

This is **Phase 1** of CodeArena, an online coding compiler and assessment platform.

## What's in this phase

- Next.js 14 (App Router) + TypeScript + Tailwind CSS project, dark developer-themed UI
- Supabase integration: Postgres schema, Row Level Security, auth helpers (browser + server + middleware)
- Auth: email/password signup & login, Google OAuth, session-aware Navbar, protected `/dashboard` and `/admin` routes
- Database schema for the full platform: `profiles`, `problems`, `test_cases`, `submissions`, `execution_jobs`, `user_stats`
- Problems list page and problem detail page (description, constraints, examples) reading live from Supabase
- Dashboard page showing user stats and recent submissions
- Seed data with 3 sample problems

**Not yet included** (coming in later phases): the Monaco code editor / Run & Submit flow, the execution queue and Docker sandbox workers, hidden-test-case grading, the leaderboard, and the admin dashboard.

## Project structure

```
codearena/
├── frontend/           # Next.js app
│   ├── app/             # routes (App Router)
│   ├── components/      # Navbar, etc.
│   ├── lib/supabase/    # browser + server Supabase clients
│   ├── services/        # data-fetching functions
│   ├── types/           # shared TS types
│   └── middleware.ts    # session refresh + route protection
├── supabase/
│   ├── schema.sql        # full DB schema + RLS policies
│   └── seed.sql          # sample problems
└── README.md
```

## Setup

### 1. Create a Supabase project

Go to [supabase.com](https://supabase.com), create a new project, and note your:
- Project URL
- `anon` public key
- `service_role` key (keep this secret — server-side only)

### 2. Run the database schema

In the Supabase dashboard, open the **SQL Editor** and run, in order:

1. `supabase/schema.sql`
2. `supabase/seed.sql` (optional, adds 3 sample problems)

### 3. Enable Google OAuth (optional but recommended)

In Supabase: **Authentication → Providers → Google**, add your Google OAuth client ID/secret. Set the redirect URL to:

```
https://<your-project-ref>.supabase.co/auth/v1/callback
```

And in your Google Cloud Console OAuth client, add your app's callback as an authorized redirect URI:

```
http://localhost:3000/auth/callback   (dev)
https://your-domain.com/auth/callback (prod)
```

### 4. Configure environment variables

```bash
cd frontend
cp ../.env.example .env.local
```

Fill in:

```
NEXT_PUBLIC_SUPABASE_URL=https://<your-project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>
SUPABASE_SERVICE_ROLE_KEY=<service role key>
```

### 5. Install and run

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000`.

## What to try

1. Sign up with email/password (check your inbox for the confirmation link) or with Google.
2. Visit `/problems` — you should see the 3 seeded problems.
3. Click into a problem to see its description, constraints, and examples.
4. Visit `/dashboard` (requires login) to see your stats (all zero until Phase 3/4 grading exists).

## Notes on production requirements from the original spec

- **Row Level Security** is enabled on every table; hidden test cases are only visible to admins.
- **Roles**: `profiles.role` is `student` or `admin`. Promote a user to admin manually in the Supabase table editor for now — an admin management UI comes with the Phase 5 admin dashboard.
- The `execution_jobs`, and the `execution_time`/`memory_used`/`passed_tests` columns on `submissions`, are already in the schema so Phase 3 (execution backend) and Phase 4 (grading) can be added without a migration.

## Next phases

- **Phase 2** — Monaco editor page, Run/Submit/Reset/Format buttons, input/output/error panels, keyboard shortcuts, local draft persistence
- **Phase 3** — `/api/compiler/run` + `/api/submissions`, job queue, per-language Docker sandbox images, worker process, CPU/memory/time/process limits
- **Phase 4** — Hidden test case grading, verdicts, submission history wiring, live user stats
- **Phase 5** — Leaderboard, admin dashboard (problem/test case CRUD, submissions/users view, platform stats)
