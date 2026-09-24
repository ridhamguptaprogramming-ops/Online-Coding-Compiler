import { notFound } from "next/navigation";
import { getProblemBySlug } from "../../../services/problems";

const difficultyBadge: Record<string, string> = {
  easy: "badge-easy",
  medium: "badge-medium",
  hard: "badge-hard",
};

export default async function ProblemDetailPage({ params }: { params: { slug: string } }) {
  const problem = await getProblemBySlug(params.slug);
  if (!problem) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-2xl font-semibold">{problem.title}</h1>
        <span className={difficultyBadge[problem.difficulty]}>{problem.difficulty}</span>
      </div>

      <div className="card p-6 space-y-6 whitespace-pre-wrap text-sm leading-relaxed">
        <section>
          <h2 className="text-xs uppercase tracking-wide text-muted mb-2">Description</h2>
          <p>{problem.description}</p>
        </section>

        {problem.constraints && (
          <section>
            <h2 className="text-xs uppercase tracking-wide text-muted mb-2">Constraints</h2>
            <p className="font-mono text-xs text-gray-300">{problem.constraints}</p>
          </section>
        )}

        {problem.input_format && (
          <section>
            <h2 className="text-xs uppercase tracking-wide text-muted mb-2">Input Format</h2>
            <p>{problem.input_format}</p>
          </section>
        )}

        {problem.output_format && (
          <section>
            <h2 className="text-xs uppercase tracking-wide text-muted mb-2">Output Format</h2>
            <p>{problem.output_format}</p>
          </section>
        )}

        {problem.examples?.length > 0 && (
          <section>
            <h2 className="text-xs uppercase tracking-wide text-muted mb-3">Examples</h2>
            <div className="space-y-3">
              {problem.examples.map((ex, i) => (
                <div key={i} className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-[#0d1117] border border-border rounded-md p-3">
                    <div className="text-xs text-muted mb-1">Input</div>
                    <pre className="font-mono text-xs">{ex.input}</pre>
                  </div>
                  <div className="bg-[#0d1117] border border-border rounded-md p-3">
                    <div className="text-xs text-muted mb-1">Output</div>
                    <pre className="font-mono text-xs">{ex.output}</pre>
                  </div>
                  {ex.explanation && (
                    <div className="sm:col-span-2 text-xs text-muted">{ex.explanation}</div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="card p-6 mt-6 text-center text-sm text-muted border-dashed">
        The code editor and Run/Submit flow ship in Phase 2.
      </div>
    </div>
  );
}
