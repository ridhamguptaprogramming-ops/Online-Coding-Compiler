export type Difficulty = "easy" | "medium" | "hard";

export type SubmissionStatus =
  | "pending"
  | "running"
  | "accepted"
  | "wrong_answer"
  | "compilation_error"
  | "runtime_error"
  | "time_limit_exceeded"
  | "memory_limit_exceeded"
  | "internal_error";

export type Language =
  | "c"
  | "cpp"
  | "java"
  | "python"
  | "javascript"
  | "typescript"
  | "go"
  | "rust";

export interface Profile {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  role: "student" | "admin";
  created_at: string;
}

export interface ProblemExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface Problem {
  id: string;
  title: string;
  slug: string;
  description: string;
  difficulty: Difficulty;
  constraints: string | null;
  input_format: string | null;
  output_format: string | null;
  starter_code: Partial<Record<Language, string>>;
  examples: ProblemExample[];
  time_limit_ms: number;
  memory_limit_mb: number;
  is_published: boolean;
  created_by: string | null;
  created_at: string;
}

export interface TestCase {
  id: string;
  problem_id: string;
  input: string;
  expected_output: string;
  is_hidden: boolean;
  created_at: string;
}

export interface Submission {
  id: string;
  user_id: string;
  problem_id: string;
  language: Language;
  source_code: string;
  status: SubmissionStatus;
  execution_time: number | null;
  memory_used: number | null;
  passed_tests: number;
  total_tests: number;
  created_at: string;
}

export interface UserStats {
  user_id: string;
  problems_solved: number;
  total_submissions: number;
  accepted_submissions: number;
  easy_solved: number;
  medium_solved: number;
  hard_solved: number;
  current_streak: number;
  updated_at: string;
}

export interface RunResult {
  status: "success" | "compilation_error" | "runtime_error" | "time_limit_exceeded" | "internal_error";
  stdout: string;
  stderr: string;
  executionTime: number;
  memory: number;
  exitCode?: number;
}
