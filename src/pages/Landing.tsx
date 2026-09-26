import { A } from '@solidjs/router';
import Navbar from '../ui/Navbar';
import {
  Zap,
  Code2,
  Play,
  Layers,
  ArrowRight,
  Github,
  Terminal,
  Cpu,
  Globe,
  Monitor,
  Sparkles,
  Search,
  BookOpen,
  Layout,
  Command,
  Cloud,
  Sun,
  Moon,
  MoveRight,
  ChevronRight,
  Save,
  Share2,
  Shield,
  GitBranch,
  Palette
} from 'lucide-solid';
import { createSignal, onMount, onCleanup, For, Show, createEffect } from 'solid-js';
import { Motion } from 'solid-motionone';
import Button from '../ui/Button';
import { cn } from '../utils/cn';
import { storageService } from '../services/storage.service';

const Landing = () => {
  const [scrollY, setScrollY] = createSignal(0);

  onMount(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    onCleanup(() => window.removeEventListener('scroll', handleScroll));
  });

  const features = [
    {
      icon: Code2,
      title: 'Multi-Language Support',
      description: 'Code in Python, JavaScript, Java, C++, C, and more. Full syntax highlighting and IntelliSense for each language.',
      color: 'bg-blue-500/10 text-blue-500'
    },
    {
      icon: Zap,
      title: 'Instant Execution',
      description: 'Run your code instantly with real-time output. Test algorithms, debug code, and see results immediately.',
      color: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      icon: Palette,
      title: 'Multiple Themes',
      description: 'Choose from beautiful dark and light themes. Customize your coding environment to match your style.',
      color: 'bg-purple-500/10 text-purple-500'
    },
    {
      icon: Save,
      title: 'Save & Download',
      description: 'Save your code locally or download it as files. Never lose your work with automatic local storage.',
      color: 'bg-orange-500/10 text-orange-500'
    },
    {
      icon: Share2,
      title: 'Easy Sharing',
      description: 'Copy code with one click. Share your solutions quickly with teammates and collaborators.',
      color: 'bg-pink-500/10 text-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Sync',
      description: 'Access your code from anywhere. Your projects are automatically saved and synced across devices.',
      color: 'bg-cyan-500/10 text-cyan-500'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your code stays private. We never store or share your code without your explicit permission.',
      color: 'bg-green-500/10 text-green-500'
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Track changes and manage multiple file versions. Work with confidence knowing your history is saved.',
      color: 'bg-indigo-500/10 text-indigo-500'
    }
  ];

  const languages = [
    { id: 'python', name: 'Python', ext: '.py', icon: 'P', color: 'bg-blue-500' },
    { id: 'java', name: 'Java', ext: '.java', icon: 'J', color: 'bg-orange-500' },
    { id: 'cpp', name: 'C++', ext: '.cpp', icon: 'C', color: 'bg-blue-600' },
    { id: 'c', name: 'C', ext: '.c', icon: 'C', color: 'bg-blue-400' },
  ];

  return (
    <div class="relative min-h-screen transition-colors duration-500">
      {/* Background System */}
      <div class="mesh-bg" />
      <div class="noise" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section class="max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-[11px] font-bold tracking-widest uppercase mb-8">
            <Sparkles class="w-3 h-3" />
            <span>Now with Multi-Core Visualization & Premium Online Compiler</span>
          </div>

          <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-8">
            Code, Compile, Execute <br />
            <span class="text-accent-gradient">and Visualize.</span>
          </h1>

          <p class="text-lg md:text-xl text-brand-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Innovative online compiler with multi-language support, beautiful themes, and powerful features.
          </p>

          <div class="flex flex-wrap justify-center gap-4">
            <A href="/editor">
              <Button variant="primary" size="xl" rightIcon={<MoveRight class="w-5 h-5" />}>
                Start Coding Free
              </Button>
            </A>
            <Button variant="secondary" size="xl" leftIcon={<Github class="w-5 h-5" />}>
              GitHub
            </Button>
          </div>
        </Motion.div>

        {/* Hero Illustration - Terminal Mockup */}
        <Motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          class="mt-20 relative mx-auto max-w-5xl group"
        >
          {/* Enhanced Glow Effect */}
          <div class="absolute -inset-10 bg-accent-blue/20 blur-[120px] opacity-40 rounded-[5rem] transition-all duration-700 group-hover:bg-accent-purple/20 group-hover:blur-[150px]" />

          <div class="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0b0e14] backdrop-blur-2xl transition-transform duration-700 hover:scale-[1.02] hover:-rotate-1">
            {/* Glossy Overlay */}
            <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* Terminal Header */}
            <div class="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-white/5 backdrop-blur-md">
              <div class="flex gap-2.5">
                <div class="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.3)] transition-transform hover:scale-125 cursor-pointer" />
                <div class="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.3)] transition-transform hover:scale-125 cursor-pointer" />
                <div class="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.3)] transition-transform hover:scale-125 cursor-pointer" />
              </div>
              <div class="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em] flex items-center gap-3 font-black">
                <div class="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                TERMINAL / LOGIC.PY
              </div>
              <div class="w-16 h-1 bg-transparent" />
            </div>

            <div class="p-10 md:p-14 text-left font-mono text-sm md:text-base leading-[1.8] overflow-x-auto relative bg-[#0b0e14]">
              <div class="flex gap-8 mb-4 animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
                <span class="text-white/20 select-none text-right w-6 font-bold">1</span>
                <span><span class="text-[#60a5fa]">def</span> <span class="text-white font-medium">calculate_flow</span><span class="text-white/80">(input_data):</span></span>
              </div>
              <div class="flex gap-8 mb-4 animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
                <span class="text-white/20 select-none text-right w-6 font-bold">2</span>
                <span class="ml-6"><span class="text-[#4b5563] italic"># Analyzing complexity mapping in real-time</span></span>
              </div>
              <div class="flex gap-8 mb-4 animate-in fade-in slide-in-from-left-4 duration-500 delay-300">
                <span class="text-white/20 select-none text-right w-6 font-bold">3</span>
                <span class="ml-6"><span class="text-white/90">result = [x ** </span><span class="text-[#34d399]">2</span><span class="text-[#60a5fa]"> for</span><span class="text-white/90"> x </span><span class="text-[#60a5fa]">in</span><span class="text-white/90"> input_data]</span></span>
              </div>
              <div class="flex gap-8 mb-4 animate-in fade-in slide-in-from-left-4 duration-500 delay-400">
                <span class="text-white/20 select-none text-right w-6 font-bold">4</span>
                <span class="ml-6"><span class="text-[#60a5fa]">return</span><span class="text-white/90"> result</span></span>
              </div>
              <div class="flex gap-8 mt-12 animate-in fade-in slide-in-from-left-4 duration-500 delay-500">
                <span class="text-white/20 select-none text-right w-6 font-bold">5</span>
                <span><span class="text-[#60a5fa]">print</span><span class="text-white/80">(</span><span class="text-white">calculate_flow</span><span class="text-white/80">([</span><span class="text-[#34d399]">1, 2, 3, 4, 5</span><span class="text-white/80">]))</span></span>
              </div>

              {/* Execution Matrix - Floating Glass Card */}
              <div class="mt-16 p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl relative group-hover:bg-white/[0.05] transition-all duration-500 shadow-2xl overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-transparent opacity-50" />
                <div class="relative z-10">
                  <div class="flex items-center justify-between mb-6">
                    <span class="text-[11px] font-black uppercase tracking-[0.25em] text-white/40">Execution Matrix</span>
                    <div class="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                      <span class="text-[10px] text-emerald-400 font-black tracking-widest">ONLINE</span>
                    </div>
                  </div>
                  <div class="text-[#c3e88d] text-base md:text-lg font-bold tracking-tight mb-3">
                    <span class="text-white/20 mr-4 select-none">{">>>"}</span>
                    [1, 4, 9, 16, 25]
                  </div>
                  <div class="flex items-center gap-4">
                    <div class="h-px flex-1 bg-white/5" />
                    <span class="text-white/20 text-[10px] font-bold italic tracking-widest uppercase">Done in 14ms (0.014s)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Internal Shadow for Depth */}
            <div class="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none" />
          </div>
        </Motion.div>
      </section>

      {/* Features Bento */}
      <section id="features" class="max-w-7xl mx-auto px-6 py-32 border-t border-border">
        <div class="text-center mb-20 space-y-4">
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight">Powerful Features</h2>
          <p class="text-lg text-brand-secondary max-w-xl mx-auto">
            Everything you need to code efficiently and effectively
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <For each={features}>
            {(f) => (
              <div class="bento-card group p-6 hover:-translate-y-2 transition-transform duration-500">
                <div class={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", f.color)}>
                  <f.icon class="w-6 h-6" />
                </div>
                <h3 class="text-lg font-bold mb-3">{f.title}</h3>
                <p class="text-brand-secondary leading-relaxed text-sm font-medium">
                  {f.description}
                </p>
              </div>
            )}
          </For>
        </div>
      </section>

      {/* Supported Languages */}
      <section id="languages" class="max-w-7xl mx-auto px-6 py-32 border-t border-border bg-bg-tertiary/50 relative overflow-hidden">
        <div class="absolute inset-0 bg-accent-blue/5 blur-[100px] rounded-[100%]" />
        <div class="text-center mb-20 space-y-4 relative z-10">
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight">Supported Languages</h2>
          <p class="text-lg text-brand-secondary max-w-xl mx-auto">
            Write code in your favorite programming language
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <For each={languages}>
            {(l) => (
              <div class="group relative overflow-hidden rounded-[2rem] border border-border bg-bg-secondary p-8 transition-all duration-500 hover:shadow-premium hover:-translate-y-2 cursor-pointer">
                <div class={cn("absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-30", l.color)} />
                <div class="flex flex-col items-start gap-8">
                  <div class={cn("w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3", l.color)}>
                    {l.icon}
                  </div>
                  <div class="w-full">
                    <h3 class="text-2xl font-bold text-foreground mb-3 flex items-center justify-between">
                      {l.name}
                      <ArrowRight class="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-secondary" />
                    </h3>
                    <span class="inline-flex text-xs font-mono font-bold text-brand-secondary bg-bg-tertiary px-4 py-1.5 rounded-full border border-border group-hover:border-foreground/20 transition-colors uppercase tracking-widest">{l.ext}</span>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </section>

      {/* CTA Section */}
      <section class="max-w-4xl mx-auto px-6 py-32 text-center border-t border-border">
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to Start Coding?</h2>
        <p class="text-lg text-brand-secondary mb-10">
          Join thousands of developers who trust CodeArena for their coding needs
        </p>
        <A href="/editor">
          <Button variant="primary" size="xl" rightIcon={<MoveRight class="w-5 h-5" />}>
            Launch Editor
          </Button>
        </A>
      </section>

      {/* Footer */}
      <footer class="border-t border-border bg-bg-secondary pt-24 pb-12 mt-32 relative overflow-hidden">
        <div class="absolute inset-0 mesh-bg opacity-30 pointer-events-none" />
        <div class="max-w-7xl mx-auto px-6 relative z-10">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div class="md:col-span-5">
              <div class="flex items-center gap-2 mb-6">
                <div class="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-xl shadow-premium">
                  <Zap class="w-5 h-5 fill-current" />
                </div>
                <span class="font-bold text-2xl tracking-tight">CodeArena</span>
              </div>
              <p class="text-brand-secondary text-sm leading-relaxed max-w-sm mb-8">
                Innovative online compiler with multi-language support, beautiful themes, and powerful features. Built for the elite, by the community.
              </p>
              <div class="flex items-center gap-3 inline-flex px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span class="text-xs font-bold text-emerald-500 uppercase tracking-widest">All Systems Operational</span>
              </div>
            </div>

            <div class="md:col-span-2 md:col-start-7">
              <h4 class="font-bold mb-6 tracking-tight">Platform</h4>
              <div class="flex flex-col gap-4 text-sm text-brand-secondary font-medium">
                <A href="/about" class="hover:text-foreground transition-colors">About</A>
                <A href="/editor" class="hover:text-foreground transition-colors">Editor</A>
                <A href="/visualize" class="hover:text-foreground transition-colors">Visualise</A>

              </div>
            </div>

            <div class="md:col-span-2">
              <h4 class="font-bold mb-6 tracking-tight">Resources</h4>
              <div class="flex flex-col gap-4 text-sm text-brand-secondary font-medium">
                <A href="https://whimsical.com/dsa-roadmap-JegsSL6nFr1b3V25bRzpYA" class="hover:text-foreground transition-colors">DSA Roadmap</A>
              </div>
            </div>

            <div class="md:col-span-2">
              <h4 class="font-bold mb-6 tracking-tight">Contact</h4>
              <div class="flex flex-col gap-4 text-sm text-brand-secondary font-medium">
                <a href="mailto:[EMAIL_ADDRESS]" class="hover:text-foreground transition-colors">Email Me</a>
                <a href="#" class="hover:text-foreground transition-colors">Report Bug</a>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-4 text-sm font-medium text-brand-secondary">
            <p>© 2026 CodeNinja-194. Designed with ❤️ for the community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
