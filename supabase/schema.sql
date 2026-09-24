-- CodeArena database schema
-- Run this in the Supabase SQL editor (or via `supabase db push`)

-- ============================================================
-- Extensions
-- ============================================================
create extension if not exists "uuid-ossp";

-- ============================================================
-- profiles  (mirrors auth.users, holds app-level user data)
-- ============================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  email text not null unique,
  avatar text,
  role text not null default 'student' check (role in ('student', 'admin')),
  created_at timestamptz not null default now()
);

-- ============================================================
-- problems
-- ============================================================
create table if not exists public.problems (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  description text not null,
  difficulty text not null check (difficulty in ('easy', 'medium', 'hard')),
  constraints text,
  input_format text,
  output_format text,
  starter_code jsonb not null default '{}'::jsonb, -- { "cpp": "...", "python": "...", ... }
  examples jsonb not null default '[]'::jsonb,      -- [{ "input": "...", "output": "...", "explanation": "..." }]
  time_limit_ms integer not null default 2000,
  memory_limit_mb integer not null default 256,
  is_published boolean not null default false,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create index if not exists idx_problems_slug on public.problems(slug);
create index if not exists idx_problems_difficulty on public.problems(difficulty);

-- ============================================================
-- test_cases
-- ============================================================
create table if not exists public.test_cases (
  id uuid primary key default uuid_generate_v4(),
  problem_id uuid not null references public.problems(id) on delete cascade,
  input text not null,
  expected_output text not null,
  is_hidden boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists idx_test_cases_problem_id on public.test_cases(problem_id);

-- ============================================================
-- submissions
-- ============================================================
create table if not exists public.submissions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  problem_id uuid not null references public.problems(id) on delete cascade,
  language text not null,
  source_code text not null,
  status text not null default 'pending' check (status in (
    'pending', 'running', 'accepted', 'wrong_answer', 'compilation_error',
    'runtime_error', 'time_limit_exceeded', 'memory_limit_exceeded', 'internal_error'
  )),
  execution_time numeric,
  memory_used numeric,
  passed_tests integer not null default 0,
  total_tests integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists idx_submissions_user_id on public.submissions(user_id);
create index if not exists idx_submissions_problem_id on public.submissions(problem_id);
create index if not exists idx_submissions_status on public.submissions(status);

-- ============================================================
-- execution_jobs
-- ============================================================
create table if not exists public.execution_jobs (
  id uuid primary key default uuid_generate_v4(),
  submission_id uuid not null references public.submissions(id) on delete cascade,
  status text not null default 'queued' check (status in ('queued', 'running', 'completed', 'failed')),
  started_at timestamptz,
  completed_at timestamptz,
  error_message text
);

create index if not exists idx_execution_jobs_submission_id on public.execution_jobs(submission_id);

-- ============================================================
-- user_stats
-- ============================================================
create table if not exists public.user_stats (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  problems_solved integer not null default 0,
  total_submissions integer not null default 0,
  accepted_submissions integer not null default 0,
  easy_solved integer not null default 0,
  medium_solved integer not null default 0,
  hard_solved integer not null default 0,
  current_streak integer not null default 0,
  updated_at timestamptz not null default now()
);

-- ============================================================
-- Trigger: create profile + user_stats row on signup
-- ============================================================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, email, avatar)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    new.email,
    new.raw_user_meta_data->>'avatar_url'
  );
  insert into public.user_stats (user_id) values (new.id);
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- Row Level Security
-- ============================================================
alter table public.profiles enable row level security;
alter table public.problems enable row level security;
alter table public.test_cases enable row level security;
alter table public.submissions enable row level security;
alter table public.execution_jobs enable row level security;
alter table public.user_stats enable row level security;

-- profiles: readable by everyone, editable only by owner
create policy "Profiles are viewable by everyone"
  on public.profiles for select using (true);
create policy "Users can update their own profile"
  on public.profiles for update using (auth.uid() = id);

-- problems: published problems readable by everyone; only admins can write
create policy "Published problems are viewable by everyone"
  on public.problems for select using (
    is_published = true
    or exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );
create policy "Admins can manage problems"
  on public.problems for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- test_cases: only non-hidden cases readable by regular users; admins see all
create policy "Non-hidden test cases are viewable by everyone"
  on public.test_cases for select using (
    is_hidden = false
    or exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );
create policy "Admins can manage test cases"
  on public.test_cases for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- submissions: users see their own; admins see all
create policy "Users can view their own submissions"
  on public.submissions for select using (
    auth.uid() = user_id
    or exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );
create policy "Users can create their own submissions"
  on public.submissions for insert with check (auth.uid() = user_id);

-- execution_jobs: tied to submission ownership
create policy "Users can view execution jobs for their submissions"
  on public.execution_jobs for select using (
    exists (
      select 1 from public.submissions s
      where s.id = submission_id
      and (s.user_id = auth.uid() or exists (select 1 from public.profiles where id = auth.uid() and role = 'admin'))
    )
  );

-- user_stats: readable by everyone (for leaderboard), editable by backend only
create policy "User stats are viewable by everyone"
  on public.user_stats for select using (true);
