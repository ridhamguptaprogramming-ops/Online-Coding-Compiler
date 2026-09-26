import { A } from '@solidjs/router';
import { Terminal, LineChart, Code2, Zap, Layout } from 'lucide-solid';
import Navbar from '../ui/Navbar';

const Features = () => {
  return (
    <div class="min-h-screen bg-background text-foreground transition-colors duration-500">
      <div class="mesh-bg opacity-50" />
      <div class="noise opacity-5" />
      
      <Navbar />

      <main class="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-16 text-center">
          CodeArena <span class="text-accent-gradient">Features</span>
        </h1>
        
        <div class="space-y-24">
          <section>
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                <Code2 class="w-6 h-6" />
              </div>
              <h2 class="text-3xl font-bold">1️⃣ Powerful Code Editor</h2>
            </div>
            <div class="bento-card bg-bg-secondary">
              <ul class="space-y-4 text-brand-secondary text-lg">
                <li><strong class="text-foreground">Monaco Editor:</strong> VS Code-level editing right in the browser.</li>
                <li><strong class="text-foreground">Multi-Language Support:</strong> Write in Python, JS, Java, C++, and C seamlessly.</li>
                <li><strong class="text-foreground">Smart Coding Tools:</strong> Code folding, brackets matching, autocomplete, and intelligent error highlighting.</li>
              </ul>
            </div>
          </section>

          <section>
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 flex items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                <LineChart class="w-6 h-6" />
              </div>
              <h2 class="text-3xl font-bold">2️⃣ Interactive Visualizer</h2>
            </div>
            <div class="bento-card bg-bg-secondary">
              <ul class="space-y-4 text-brand-secondary text-lg">
                <li><strong class="text-foreground">Step-By-Step Execution:</strong> Play, pause, or step back through code dynamically.</li>
                <li><strong class="text-foreground">Memory & Variable State:</strong> Track local/global variables with their exact addresses dynamically visualized.</li>
                <li><strong class="text-foreground">Stack Tracking:</strong> Visualize function calls recursively as they enter and pop out of the execution stack.</li>
              </ul>
            </div>
          </section>

          <section>
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 flex items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500">
                <Zap class="w-6 h-6" />
              </div>
              <h2 class="text-3xl font-bold">3️⃣ Fast Execution Engine (Future)</h2>
            </div>
            <div class="bento-card bg-bg-secondary">
              <ul class="space-y-4 text-brand-secondary text-lg">
                <li><strong class="text-foreground">Secure Docker Sandboxes:</strong> Fully isolated compilation environments.</li>
                <li><strong class="text-foreground">Timeout & memory caps:</strong> Built-in structural defense to keep loops safe.</li>
              </ul>
            </div>
          </section>

          <section>
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 flex items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500">
                <Layout class="w-6 h-6" />
              </div>
              <h2 class="text-3xl font-bold">4️⃣ Developer Experience</h2>
            </div>
            <div class="bento-card bg-bg-secondary">
              <ul class="space-y-4 text-brand-secondary text-lg">
                <li><strong class="text-foreground">Keyboard Shortcuts:</strong> Native bindings like Ctrl+Enter for power users.</li>
                <li><strong class="text-foreground">Workspace Persistence:</strong> Your files and theme preferences stay cached.</li>
                <li><strong class="text-foreground">Modern UI:</strong> Stunning, accessible design aesthetics leveraging glassmorphism.</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Features;
