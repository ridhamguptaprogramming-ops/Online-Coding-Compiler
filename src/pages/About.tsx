import { A } from '@solidjs/router';
import { ArrowLeft } from 'lucide-solid';
import Navbar from '../ui/Navbar';

const About = () => {
  return (
    <div class="min-h-screen bg-background text-foreground transition-colors duration-500">
      <div class="mesh-bg opacity-50" />
      <div class="noise opacity-5" />
      
      <Navbar />

      <main class="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <A href="/" class="inline-flex items-center gap-2 text-sm font-bold text-brand-secondary hover:text-foreground mb-12 transition-colors">
          <ArrowLeft class="w-4 h-4" /> Back to Home
        </A>

        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
          About <span class="text-accent-gradient">CodeArena</span>
        </h1>
        
        <div class="space-y-8 text-lg text-brand-secondary leading-relaxed font-medium">
          <p>
            CodeArena is an innovative online compiler with multi-language support, beautiful themes, and powerful features. Our mission is to provide a zero-setup, flawless coding environment right in your browser.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-12">
             <div class="bento-card">
               <h3 class="text-xl font-bold text-foreground mb-3">Multi-Language Support</h3>
               <p class="text-sm">Write and compile code seamlessly across Python, JavaScript, Java, C++, and C. Switch contexts instantly.</p>
             </div>
             
             <div class="bento-card">
               <h3 class="text-xl font-bold text-foreground mb-3">Execution Visualizer</h3>
               <p class="text-sm">Trace your code execution step-by-step. Our visualizer builds a timeline of stack frames and variable states so you can understand the logic easily.</p>
             </div>
          </div>
          
          <p>
            Designed with absolute minimalism in mind and built on modern web technologies, CodeArena stands as the ultimate sandbox.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
