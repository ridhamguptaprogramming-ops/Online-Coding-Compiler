import Link from "next/link";
import { Code2, Cpu, ShieldCheck, Trophy } from "lucide-react";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted mb-6">
        <Cpu className="h-3.5 w-3.5" /> 8 languages · sandboxed execution
      </div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        Write. Compile. <span className="text-primary">Submit.</span>
      </h1>
      <p className="text-muted max-w-xl mx-auto mb-8">
        CodeArena is an online compiler and assessment platform — solve problems, run your code
        against real test cases, and track your progress on the leaderboard.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Link href="/problems" className="btn-primary">
          <Code2 className="h-4 w-4" /> Browse Problems
        </Link>
        <Link href="/signup" className="btn-secondary">
          Create an account
        </Link>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-16 text-left">
        <div className="card p-5">
          <ShieldCheck className="h-5 w-5 text-accent mb-3" />
          <h3 className="font-medium mb-1">Isolated execution</h3>
          <p className="text-sm text-muted">
            Every submission runs in a sandboxed container with strict CPU, memory, and time limits.
          </p>
        </div>
        <div className="card p-5">
          <Code2 className="h-5 w-5 text-primary mb-3" />
          <h3 className="font-medium mb-1">Real compilers</h3>
          <p className="text-sm text-muted">
            C, C++, Java, Python, JavaScript, TypeScript, Go, and Rust — actually compiled and run.
          </p>
        </div>
        <div className="card p-5">
          <Trophy className="h-5 w-5 text-warning mb-3" />
          <h3 className="font-medium mb-1">Track your rank</h3>
          <p className="text-sm text-muted">
            Submission history, stats by difficulty, and a live leaderboard.
          </p>
        </div>
      </div>
    </div>
  );
}
