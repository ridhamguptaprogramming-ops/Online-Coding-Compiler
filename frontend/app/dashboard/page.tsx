import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
  const { data: stats } = await supabase.from("user_stats").select("*").eq("user_id", user.id).single();
  const { data: submissions } = await supabase
    .from("submissions")
    .select("*, problems(title)")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(10);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-1">Welcome back, {profile?.name ?? user.email}</h1>
      <p className="text-muted text-sm mb-8">Here's where things stand.</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <StatCard label="Solved" value={stats?.problems_solved ?? 0} />
        <StatCard label="Submissions" value={stats?.total_submissions ?? 0} />
        <StatCard label="Accepted" value={stats?.accepted_submissions ?? 0} />
        <StatCard label="Streak" value={stats?.current_streak ?? 0} />
      </div>

      <h2 className="text-lg font-medium mb-3">Recent submissions</h2>
      <div className="card divide-y divide-border overflow-hidden">
        {!submissions || submissions.length === 0 ? (
          <p className="p-5 text-sm text-muted">No submissions yet — go solve something.</p>
        ) : (
          submissions.map((s: any) => (
            <div key={s.id} className="flex items-center justify-between px-5 py-3 text-sm">
              <span>{s.problems?.title ?? "Problem"}</span>
              <span className="text-muted">{s.language}</span>
              <span
                className={
                  s.status === "accepted" ? "text-accent" : s.status === "pending" ? "text-muted" : "text-danger"
                }
              >
                {s.status.replace(/_/g, " ")}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="card p-4 text-center">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-xs text-muted mt-1">{label}</div>
    </div>
  );
}
