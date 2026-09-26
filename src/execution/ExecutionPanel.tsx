import { For, Show, JSX } from 'solid-js';
import { 
  Clock, 
  Terminal, 
  Copy, 
  Download, 
  Tv, 
  Settings2,
  AlertCircle,
  Zap,
  Trash2
} from 'lucide-solid';
import { codeArenaThemes } from '../utils/themes';
import Button from '../ui/Button';
import { cn } from '../utils/cn';

interface ExecutionPanelProps {
  currentFile: any;
  fontSize: number;
  input: string;
  executing: boolean;
  progress: number;
  isCached: boolean;
  codeStats: { lines: number; words: number };
  showSettings: boolean;
  onLanguageChange: (lang: string) => void;
  onInputChange: (input: string) => void;
  onFontSizeChange: (size: number) => void;
  onClearCache: () => void;
  onVisualize: () => void;
  sidebar?: boolean;
}

const ExecutionPanel = (props: ExecutionPanelProps) => {
  const LANGUAGE_OPTIONS = [
    { value: 'java', label: 'Java' },
    { value: 'python', label: 'Python 3' },
    { value: 'cpp', label: 'C++' },
    { value: 'c', label: 'C' }
  ];

  const copyOutput = async () => {
    const output = props.currentFile?.output;
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
    } catch {}
  };

  return (
    <div class={cn("flex flex-col h-full bg-bg-secondary transition-colors duration-300", props.sidebar ? "w-full" : "w-full overflow-hidden")}>
      <div class="flex-1 overflow-y-auto space-y-8 p-6">
        <Show when={props.showSettings}>
          <section class="animate-in fade-in slide-in-from-top-4 duration-300">
            <h3 class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-secondary mb-4 flex items-center gap-2">
              <Settings2 class="w-3.5 h-3.5" /> Workspace Settings
            </h3>
            <div class="space-y-4 bg-bg-tertiary p-5 rounded-2xl border border-border">
              <div class="space-y-3">
                <div class="flex justify-between text-xs font-bold">
                  <label>Editor Font Size</label>
                  <span class="text-accent-blue">{props.fontSize}px</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={props.fontSize}
                  onInput={(e) => props.onFontSizeChange(parseInt(e.currentTarget.value))}
                  class="w-full accent-accent-blue h-1.5 bg-border rounded-full appearance-none cursor-pointer"
                />
              </div>
              <Button variant="outline" size="sm" class="w-full text-[10px] font-bold uppercase tracking-wider" onClick={props.onClearCache} leftIcon={<Trash2 class="w-3.5 h-3.5" />}>
                Reset Execution Cache
              </Button>
            </div>
          </section>
        </Show>

        <section>
          <h3 class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-secondary mb-4 flex items-center gap-2">
            <Zap class="w-3.5 h-3.5" /> Compiler Config
          </h3>
          <div class="space-y-5">
            <div class="space-y-2">
              <label class="text-[11px] font-bold text-foreground">Active Language</label>
              <select
                class="w-full bg-bg-tertiary border border-border rounded-xl px-4 py-2.5 text-xs font-medium focus:ring-2 focus:ring-accent-blue/10 outline-none transition-all appearance-none cursor-pointer"
                value={props.currentFile?.lang}
                onChange={(e) => props.onLanguageChange(e.currentTarget.value)}
              >
                <For each={LANGUAGE_OPTIONS}>
                  {(lang) => <option value={lang.value}>{lang.label}</option>}
                </For>
              </select>
            </div>

            <div class="space-y-2">
              <label class="text-[11px] font-bold text-foreground">Editor Theme</label>
              <select
                class="w-full bg-bg-tertiary border border-border rounded-xl px-4 py-2.5 text-xs font-medium focus:ring-2 focus:ring-accent-blue/10 outline-none transition-all appearance-none cursor-pointer"
                disabled
              >
                <option value="dark">CodeArena Dark</option>
              </select>
            </div>



            <div class="space-y-2">
              <label class="text-[11px] font-bold text-foreground">Standard Input (stdin)</label>
              <textarea
                class="w-full bg-bg-tertiary border border-border rounded-xl px-4 py-3 text-xs font-mono focus:ring-2 focus:ring-accent-blue/10 outline-none min-h-[100px] resize-none transition-all placeholder:text-muted"
                value={props.input}
                onInput={(e) => props.onInputChange(e.currentTarget.value)}
                placeholder="Data to feed your application..."
              />
            </div>
          </div>
        </section>

        <section class="flex-1 flex flex-col min-h-0">
          <h3 class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-secondary mb-4 flex items-center gap-2">
            <Terminal class="w-3.5 h-3.5" /> Output Streams
          </h3>
          <div class="flex-1 min-h-[250px] bg-bg-tertiary rounded-2xl border border-border flex flex-col overflow-hidden shadow-premium">
            <div class="px-5 py-3 border-b border-border flex items-center justify-between bg-bg-secondary/50">
              <Show when={props.executing} fallback={
                <div class="flex items-center gap-4 text-[10px] font-bold">
                  <Show when={props.currentFile?.executionTime}>
                    <span class="text-brand-secondary flex items-center gap-1.5">
                      <Clock class="w-3.5 h-3.5" /> {props.currentFile.executionTime}s
                    </span>
                    <Show when={props.isCached}>
                      <span class="text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded-full border border-accent-blue/20 tracking-widest">CACHED</span>
                    </Show>
                  </Show>
                </div>
              }>
                <div class="flex-1 pr-6">
                  <div class="h-1.5 w-full bg-border rounded-full overflow-hidden">
                    <div class="h-full bg-accent-blue transition-all duration-300" style={{ width: `${props.progress}%` }} />
                  </div>
                </div>
              </Show>
              
              <div class="flex items-center gap-2">
                <Button variant="ghost" size="icon" class="h-8 w-8" onClick={copyOutput}>
                  <Copy class="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" class="h-8 w-8" onClick={props.onVisualize}>
                  <Tv class="w-4 h-4 text-accent-blue" />
                </Button>
              </div>
            </div>

            <div class="flex-1 p-5 overflow-auto scrollbar-thin">
              <Show when={props.executing || props.currentFile?.output} fallback={
                <div class="h-full flex flex-col items-center justify-center text-brand-secondary gap-3 opacity-30">
                  <Terminal class="w-10 h-10" />
                  <span class="text-[10px] uppercase tracking-[0.2em] font-black text-center leading-loose">
                    Ready to compile<br/>Press Run Command
                  </span>
                </div>
              }>
                <pre class="font-mono text-[13px] leading-relaxed text-foreground whitespace-pre-wrap">
                  <Show when={props.executing} fallback={props.currentFile?.output}>
                    <span class="flex items-center gap-3 text-accent-blue font-bold animate-pulse">
                      <div class="w-2 h-2 rounded-full bg-current" />
                      Allocating resources and executing...
                    </span>
                  </Show>
                </pre>
              </Show>
            </div>
          </div>
        </section>
      </div>

      <div class="p-5 border-t border-border bg-bg-tertiary flex items-center justify-between shrink-0">
        <div class="flex gap-6 text-[10px] font-bold text-brand-secondary uppercase tracking-widest">
          <span>{props.codeStats.lines} Lines</span>
          <span>{props.codeStats.words} Words</span>
        </div>
        <div class="flex items-center gap-2 text-accent-pink">
           <AlertCircle class="w-3.5 h-3.5" />
           <span class="text-[10px] font-black uppercase tracking-widest">Cloud V2.0</span>
        </div>
      </div>
    </div>
  );
};

export default ExecutionPanel;
