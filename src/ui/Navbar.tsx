import { A } from '@solidjs/router';
import { Zap, Github, Sun, Moon } from 'lucide-solid';
import { createSignal, onMount, onCleanup, Show, createEffect } from 'solid-js';
import Button from './Button';
import { cn } from '../utils/cn';
import { storageService } from '../services/storage.service';
import { useTheme } from '../utils/theme-signal';
const Navbar = () => {
  const [scrollY, setScrollY] = createSignal(0);
  const { uiTheme, toggleTheme } = useTheme();

  onMount(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    onCleanup(() => window.removeEventListener('scroll', handleScroll));
  });

  return (
    <nav
      class={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        scrollY() > 20 ? "py-4 bg-background/80 backdrop-blur-xl border-b border-border" : "py-6 bg-transparent"
      )}
    >
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <A href="/" class="flex items-center gap-2 group cursor-pointer">
          <div class={`w-9 h-9 flex items-center justify-center rounded-lg bg-foreground text-background transition-transform group-hover:rotate-12`}>
            <Zap class="w-5 h-5 fill-current" />
          </div>
          <span class="text-xl font-bold tracking-tight">CodeArena</span>
        </A>

        <div class="hidden md:flex items-center gap-8">
          <A href="/about" class="text-sm font-medium text-brand-secondary hover:text-foreground transition-colors">About</A>
          <A href="/editor" class="text-sm font-medium text-brand-secondary hover:text-foreground transition-colors">Editor</A>
          <A href="/visualize" class="text-sm font-medium text-brand-secondary hover:text-foreground transition-colors">Visualizer</A>
          <a href="https://github.com/CodeNinja-194/CodeArena" target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-brand-secondary hover:text-foreground transition-colors flex items-center gap-1.5"><Github class="w-3.5 h-3.5" /> GitHub</a>
        </div>

        <div class="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            class="w-10 h-10 flex items-center justify-center rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground transition-all duration-300"
          >
            <Show when={uiTheme() === 'light'} fallback={<Sun class="w-4 h-4" />}>
              <Moon class="w-4 h-4" />
            </Show>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
