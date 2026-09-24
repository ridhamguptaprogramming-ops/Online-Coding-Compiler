import Link from "next/link";
import { getProblems } from "../../services/problems";

const difficultyBadge: Record<string, string> = {
  easy: "badge-easy",
  medium: "badge-medium",
  hard: "badge-hard",
};

export default async function ProblemsPage() {
  const problems = await getProblems();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-1">Problems</h1>
      <p className="text-muted text-sm mb-6">{problems.length} problems available</p>

      {problems.length === 0 ? (
        <div className="card p-8 text-center text-muted text-sm">
          No problems published yet. Check back soon, or seed the database using
          <code className="mx-1 text-gray-300">supabase/seed.sql</code>.
        </div>
      ) : (
        <div className="card divide-y divide-border overflow-hidden">
          {problems.map((p) => (
            <Link
              key={p.id}
              href={`/problems/${p.slug}`}
              className="flex items-center justify-between px-5 py-4 hover:bg-[#1c2128] transition-colors"
            >
              <span className="font-medium text-gray-100">{p.title}</span>
              <span className={difficultyBadge[p.difficulty]}>{p.difficulty}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
