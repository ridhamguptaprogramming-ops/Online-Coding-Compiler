"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { CheckCircle2, ChevronDown, Code2, Play, RotateCcw, Send, Settings2, TerminalSquare } from "lucide-react";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

const starterCode = `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Write your solution here
    cout << "CodeArena ready" << endl;
    return 0;
}`;

export default function CompilerPage() {
  const [code, setCode] = useState(starterCode);
  const [language, setLanguage] = useState("cpp");
  const [output, setOutput] = useState("Run your code to see output here.");
  const [running, setRunning] = useState(false);

  const runCode = () => {
    setRunning(true);
    window.setTimeout(() => {
      setOutput("Process finished successfully.\n\nCodeArena sandbox is ready for your execution API.");
      setRunning(false);
    }, 450);
  };

  return (
    <main className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div><p className="eyebrow mb-2">Practice room</p><h1 className="text-2xl font-bold text-white">Compiler workspace</h1><p className="mt-1 text-sm text-slate-400">A focused place to think, run, and iterate.</p></div>
        <div className="flex items-center gap-2"><button className="btn-secondary text-xs"><Settings2 className="h-4 w-4" /> Settings</button><button className="btn-primary text-xs" onClick={runCode} disabled={running}><Play className="h-4 w-4" /> {running ? "Running..." : "Run code"}</button></div>
      </div>

      <div className="grid min-h-[680px] gap-4 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.6fr)]">
        <section className="card overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><div><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Challenge 01</p><h2 className="mt-1 text-lg font-semibold text-white">Two Sum</h2></div><span className="badge-easy">Easy</span></div>
          <div className="space-y-7 p-5 text-sm leading-6 text-slate-400"><p>Given an array of integers, return indices of the two numbers such that they add up to a target.</p><div><h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Constraints</h3><ul className="list-inside list-disc space-y-1"><li>2 ≤ nums.length ≤ 10,000</li><li>Each input has exactly one solution</li><li>Use each element at most once</li></ul></div><div><h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Example</h3><div className="rounded-xl border border-white/10 bg-black/20 p-3 font-mono text-xs text-slate-300">nums = [2, 7, 11, 15]<br />target = 9<br /><span className="text-emerald-300">output = [0, 1]</span></div></div><button className="flex items-center gap-2 text-xs font-semibold text-indigo-300 hover:text-white"><Code2 className="h-4 w-4" /> View full problem</button></div>
        </section>

        <section className="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1019] shadow-2xl shadow-black/20">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3"><div className="flex items-center gap-3"><div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-200"><span className="h-2 w-2 rounded-full bg-indigo-300" /> solution.cpp <ChevronDown className="h-3.5 w-3.5 text-slate-500" /></div><div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300"><select value={language} onChange={(event) => setLanguage(event.target.value)} className="bg-transparent outline-none"><option value="cpp">C++ 17</option><option value="python">Python 3</option><option value="javascript">JavaScript</option></select></div></div><button className="text-slate-500 transition hover:text-white" aria-label="Reset code" onClick={() => setCode(starterCode)}><RotateCcw className="h-4 w-4" /></button></div>
          <div className="min-h-[400px] flex-1"><Editor height="100%" language={language} theme="vs-dark" value={code} onChange={(value) => setCode(value ?? "")} options={{ minimap: { enabled: false }, fontSize: 14, lineHeight: 23, padding: { top: 18 }, smoothScrolling: true, roundedSelection: false, scrollBeyondLastLine: false, bracketPairColorization: { enabled: true } }} /></div>
          <div className="border-t border-white/10"><div className="flex items-center justify-between border-b border-white/10 px-4 py-3"><div className="flex items-center gap-5 text-xs"><span className="flex items-center gap-2 font-semibold text-white"><TerminalSquare className="h-4 w-4 text-indigo-300" /> Output</span><span className="text-slate-500">Errors</span><span className="text-slate-500">Test cases</span></div><button onClick={runCode} disabled={running} className="btn-primary !px-3 !py-1.5 text-xs"><Send className="h-3.5 w-3.5" /> Submit</button></div><pre className="min-h-28 whitespace-pre-wrap p-4 font-mono text-xs leading-6 text-slate-400">{output}</pre><div className="flex items-center gap-2 border-t border-white/10 px-4 py-2 text-[11px] text-slate-600"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Environment ready · {code.length} characters</div></div>
        </section>
      </div>
    </main>
  );
}