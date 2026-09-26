import { A } from '@solidjs/router';
import { BookOpen } from 'lucide-solid';
import Navbar from '../ui/Navbar';

const Docs = () => {
  return (
    <div class="min-h-screen bg-background text-foreground transition-colors duration-500">
      <div class="mesh-bg opacity-50" />
      <div class="noise opacity-5" />
      
      <Navbar />

      <main class="max-w-4xl mx-auto px-6 py-32 relative z-10">
        <div class="flex flex-col items-center justify-center text-center space-y-6">
            <div class="w-20 h-20 bg-accent-blue/10 rounded-3xl flex items-center justify-center text-accent-blue mb-4 shadow-premium">
                <BookOpen class="w-10 h-10" />
            </div>
            <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">CodeArena <span class="text-accent-gradient">Documentation</span></h1>
            <p class="text-brand-secondary text-lg max-w-xl">
                Comprehensive guides, specifications, and references combining compiler standards with visualizer API schemas to streamline your learning loop.
            </p>

            <div class="mt-12 bg-bg-secondary border border-border rounded-3xl p-10 w-full text-left bento-card">
                 <h2 class="text-2xl font-bold mb-4">Quick Start</h2>
                 <p class="text-brand-secondary mb-4 leading-relaxed">
                     Navigate to the <A href="/editor" class="text-accent-blue hover:underline">Editor</A> to start your environment. Select your target language via the config drop down mapping. Code runs instantly parsing your STDIN buffers to execution output.
                 </p>
                 <h2 class="text-2xl font-bold mt-8 mb-4">Visualizer Reference</h2>
                 <p class="text-brand-secondary leading-relaxed">
                     Press the "Visualizer" action inside the Editor to seamlessly trace execution. The visualization engine statically traces your algorithm providing precise heap mapping, timeline controllers, and stack registries.
                 </p>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Docs;
