import Link from "next/link";
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Code2,
  Gauge,
  LockKeyhole,
  Play,
  Trophy,
  Zap,
} from "lucide-react";

const features = [
  { icon: LockKeyhole, title: "Secure sandbox", description: "Run submissions in isolated environments with predictable limits and clean results." },
  { icon: Braces, title: "Real compilers", description: "Move from idea to verdict with language-aware execution built for practice." },
  { icon: Zap, title: "Multiple languages", description: "Switch between C++, Python, JavaScript, Go, Rust, and more without friction." },
  { icon: Gauge, title: "Fast feedback", description: "See runtime, memory, and test outcomes in a focused workspace." },
  { icon: CheckCircle2, title: "Track progress", description: "Build momentum with solved counts, streaks, and submission history." },
  { icon: Trophy, title: "Climb the board", description: "Compare your craft with a competitive community of builders." },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <section className="grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
        <div>
          <div className="eyebrow mb-5 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_12px_#45d483]" /> The competitive coding workspace</div>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">Build. Compile.<br /><span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-emerald-300 bg-clip-text text-transparent">Compete.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">Solve programming problems, run code in a secure sandbox, and turn every submission into a sharper instinct.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/problems" className="btn-primary"><Code2 className="h-4 w-4" /> Browse problems <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/compiler" className="btn-secondary"><Play className="h-4 w-4" /> Open compiler</Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-6 text-xs text-slate-500"><span>8 languages</span><span>•</span><span>Sandboxed execution</span><span>•</span><span>Live feedback</span></div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-indigo-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1019] shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-slate-500"><div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /></div><span>two-sum.cpp</span><span className="text-emerald-300">● Ready</span></div>
            <div className="grid grid-cols-[2.5rem_1fr] p-5 font-mono text-[11px] leading-7 sm:text-xs"><div className="select-none text-right text-slate-700">1<br />2<br />3<br />4<br />5<br />6<br />7<br />8</div><pre className="pl-4 text-slate-300"><span className="text-violet-300">#include</span> <span className="text-emerald-300">&lt;vector&gt;</span>{"\n"}<span className="text-violet-300">class</span> <span className="text-sky-300">Solution</span> {'{'}{"\n"}  <span className="text-violet-300">public:</span>{"\n"}    <span className="text-sky-300">vector</span>&lt;<span className="text-sky-300">int</span>&gt; twoSum(...){"\n"}    {'{'} <span className="text-slate-500">// solve with intent</span>{"\n"}      <span className="text-violet-300">return</span> result;{"\n"}    {'}'}{"\n"}{'}'}</pre></div>
            <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-3"><span className="flex items-center gap-2 text-xs text-emerald-300"><CheckCircle2 className="h-4 w-4" /> All tests passed</span><span className="font-mono text-[10px] text-slate-500">42ms · 16.2MB</span></div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 pt-14">
        <div className="mb-7 flex items-end justify-between"><div><p className="eyebrow mb-3">Everything you need</p><h2 className="text-2xl font-bold text-white sm:text-3xl">Practice with purpose.</h2></div><Link href="/problems" className="hidden items-center gap-2 text-sm text-indigo-300 hover:text-white sm:flex">Explore problems <ArrowRight className="h-4 w-4" /></Link></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{features.map(({ icon: Icon, title, description }) => <div key={title} className="card group p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-300/30"><div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300 transition group-hover:bg-indigo-400/20"><Icon className="h-5 w-5" /></div><h3 className="mb-2 font-semibold text-white">{title}</h3><p className="text-sm leading-6 text-slate-400">{description}</p></div>)}</div>
      </section>
    </div>
  );
}