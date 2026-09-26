import { A } from '@solidjs/router';
import { createSignal, onCleanup, onMount, Show } from 'solid-js';
import { ArrowRight, Github, Menu, Moon, Sun, X, Zap } from 'lucide-solid';
import { useTheme } from '../utils/theme-signal';
import { cn } from '../utils/cn';

const links = [
  { label: 'Features', href: '/#features' },
  { label: 'Problems', href: '/#problems' },
  { label: 'Contests', href: '/features' },
  { label: 'Visualizer', href: '/visualize' },
  { label: 'About', href: '/about' },
];

const Navbar = () => {
  const [scrollY, setScrollY] = createSignal(0);
  const [menuOpen, setMenuOpen] = createSignal(false);
  const { uiTheme, toggleTheme } = useTheme();

  onMount(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    onCleanup(() => window.removeEventListener('scroll', handleScroll));
  });

  return (
    <nav class={cn('fixed inset-x-0 top-0 z-[100] border-b transition-all duration-300', scrollY() > 24 ? 'border-border bg-background/90 py-3 shadow-sm backdrop-blur-xl' : 'border-transparent bg-background/55 py-4 backdrop-blur-md')} aria-label="Main navigation">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <A href="/" class="group flex items-center gap-2.5" aria-label="CodeArena home">
          <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background transition-transform group-hover:rotate-6"><Zap class="h-4 w-4 fill-current"/></span>
          <span class="text-lg font-bold tracking-tight">CodeArena</span>
        </A>
        <div class="hidden items-center gap-7 lg:flex">
          {links.map((link) => <A href={link.href} class="text-sm font-medium text-brand-secondary transition-colors hover:text-foreground">{link.label}</A>)}
        </div>
        <div class="flex items-center gap-2">
          <a href="https://github.com/ridhamguptaprogramming-ops/Online-Coding-Compiler" target="_blank" rel="noreferrer" class="hidden h-9 items-center gap-2 rounded-lg px-3 text-sm font-medium text-brand-secondary transition hover:bg-foreground/5 hover:text-foreground sm:inline-flex"><Github class="h-4 w-4"/><span class="hidden xl:inline">GitHub</span></a>
          <button type="button" onClick={toggleTheme} aria-label={`Switch to ${uiTheme() === 'light' ? 'dark' : 'light'} theme`} class="flex h-9 w-9 items-center justify-center rounded-lg text-brand-secondary transition hover:bg-foreground/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue">
            <Show when={uiTheme() === 'light'} fallback={<Sun class="h-4 w-4"/>}><Moon class="h-4 w-4"/></Show>
          </button>
          <A href="/editor" class="hidden h-9 items-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 sm:inline-flex">Start Coding <ArrowRight class="h-3.5 w-3.5"/></A>
          <button type="button" aria-label={menuOpen() ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen()} onClick={() => setMenuOpen(!menuOpen())} class="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground lg:hidden">
            <Show when={menuOpen()} fallback={<Menu class="h-4 w-4"/>}><X class="h-4 w-4"/></Show>
          </button>
        </div>
      </div>
      <Show when={menuOpen()}>
        <div class="absolute inset-x-0 top-full border-b border-border bg-background/95 p-4 shadow-xl backdrop-blur-xl lg:hidden">
          <div class="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => <A href={link.href} onClick={() => setMenuOpen(false)} class="rounded-lg px-3 py-3 text-sm font-medium text-brand-secondary hover:bg-foreground/5 hover:text-foreground">{link.label}</A>)}
            <a href="https://github.com/ridhamguptaprogramming-ops/Online-Coding-Compiler" target="_blank" rel="noreferrer" class="rounded-lg px-3 py-3 text-sm font-medium text-brand-secondary hover:bg-foreground/5">GitHub</a>
            <A href="/editor" onClick={() => setMenuOpen(false)} class="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white">Start Coding <ArrowRight class="h-4 w-4"/></A>
          </div>
        </div>
      </Show>
    </nav>
  );
};

export default Navbar;
