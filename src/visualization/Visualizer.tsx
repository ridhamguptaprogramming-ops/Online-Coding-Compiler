import { createSignal, createEffect, Show, For, onMount, onCleanup } from 'solid-js';
import { A } from '@solidjs/router';
import {
  Zap,
  Play,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Terminal,
  AlertTriangle,
  Info,
  Box,
  Cpu,
  History,
  Activity,
  Maximize2,
  FileCode,
  Sun,
  Moon,
  MoveLeft,
  ChevronDown,
  Layers
} from 'lucide-solid';
import MonacoWrapper from '../editor/MonacoWrapper';
import { visualizationService } from '../services/visualization.service';
import { storageService } from '../services/storage.service';
import StackFrame from './StackFrame';
import Button from '../ui/Button';
import Panel from '../ui/Panel';
import { cn } from '../utils/cn';
import { useTheme } from '../utils/theme-signal';

const Visualizer = () => {
  const [code, setCode] = createSignal('class Main {\n    public static void main(String[] args) {\n        System.out.println("Trace me!");\n    }\n}');
  const [snapshots, setSnapshots] = createSignal<any[]>([]);
  const [currentStep, setCurrentStep] = createSignal(0);
  const [loading, setLoading] = createSignal(false);
  const [language, setLanguage] = createSignal('java');
  const [error, setError] = createSignal<string | null>(null);
  const { uiTheme, toggleTheme } = useTheme();

  let editor: any;

  onMount(async () => {
    const handoff = storageService.getActiveFileForVisualization();
    if (handoff) {
      setCode(handoff.code);
      setLanguage(handoff.lang);
      storageService.remove('viz_handoff');
      setTimeout(() => {
        startVisualization();
      }, 600);
    } else {
      startVisualization();
    }
    
    document.documentElement.setAttribute('data-theme', uiTheme());
  });





  const startVisualization = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await visualizationService.getTrace(code(), language());
      if (!data || data.length === 0) throw new Error("No execution steps captured.");
      setSnapshots(data);
      setCurrentStep(0);
      setTimeout(() => highlightLine(data[0].line), 100);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStep = (step: number) => {
    if (!snapshots().length) return;
    const newStep = Math.max(0, Math.min(step, snapshots().length - 1));
    setCurrentStep(newStep);
    highlightLine(snapshots()[newStep].line);
  };

  const highlightLine = (line: number) => {
    if (!editor || !line) return;
    editor.setSelection({
      startLineNumber: line,
      startColumn: 1,
      endLineNumber: line,
      endColumn: 1000
    });
    editor.revealLineInCenterIfOutsideViewport(line);
  };

  const getNextLineTop = () => {
    const line = snapshots()[currentStep()]?.line;
    if (!line) return -100;
    return (line - 1) * 19 + 48;
  };

  const getPrevLineTop = () => {
    if (currentStep() === 0) return -100;
    const line = snapshots()[currentStep() - 1]?.line;
    if (!line) return -100;
    return (line - 1) * 19 + 48;
  };

  return (
    <div class="h-screen flex flex-col bg-background text-foreground overflow-hidden selection:bg-accent-blue/20 transition-colors duration-500">
      {/* Background System */}
      <div class="mesh-bg opacity-30" />
      <div class="noise opacity-[0.03]" />

      {/* Visualizer Navbar */}
      <nav class="h-16 border-b border-border bg-bg-secondary/80 backdrop-blur-xl flex items-center justify-between px-6 z-50">
        <div class="flex items-center gap-8">
          <A href="/" class="flex items-center gap-2 group cursor-pointer mr-2">
            <div class="w-9 h-9 flex items-center justify-center rounded-lg bg-foreground text-background transition-transform group-hover:rotate-12">
              <Zap class="w-5 h-5 fill-current" />
            </div>
            <span class="text-xl font-bold tracking-tight">CodeArena</span>
          </A>
          
          <div class="h-6 w-px bg-border hidden md:block" />

          <A href="/editor" class="flex items-center gap-2 text-brand-secondary hover:text-foreground transition-all group">
            <MoveLeft class="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span class="text-xs font-bold uppercase tracking-widest">Back to Editor</span>
          </A>
        </div>

        <div class="flex items-center gap-4">
          <div class="hidden sm:flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border shadow-sm">
            <div class="w-2 h-2 rounded-full bg-emerald-500" />
            <span class="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-1">Language: </span>
            <span class="text-xs font-black text-foreground">{language().toUpperCase()}</span>
          </div>
          
          <div class="flex items-center gap-2">
            <Button 
                variant="brand" 
                size="md" 
                onClick={startVisualization} 
                disabled={loading()}
                class="px-6 font-bold"
                loading={loading()}
                leftIcon={loading() ? undefined : <Activity class="w-4 h-4" />}
            >
                Start Tracing
            </Button>
          </div>
        </div>
      </nav>

      <main class="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
        <Show when={error()}>
          <div class="bg-red-500/10 border border-red-500/20 text-red-500 text-xs p-4 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
            <AlertTriangle class="w-4 h-4" />
            <span class="font-bold uppercase tracking-wider">{error()}</span>
          </div>
        </Show>

        <div class="flex-1 grid grid-cols-1 xl:grid-cols-12 gap-6 min-h-0">
          {/* Source Pane */}
          <section class="xl:col-span-5 flex flex-col min-h-0">
            <Panel title="Execution Matrix" icon={<FileCode class="w-4 h-4 text-accent-blue" />} class="flex-1">
              <div class="relative w-full h-full rounded-2xl overflow-hidden border border-border bg-bg-tertiary shadow-inner">
                <MonacoWrapper
                  value={code()}
                  language={language()}
                  theme={uiTheme() === 'dark' ? 'vs-dark' : 'github-light'}
                  options={{
                    readOnly: true,
                    lineNumbersMinChars: 3,
                    scrollBeyondLastLine: false,
                    renderLineHighlight: 'all',
                    lineHeight: 20,
                    fontSize: 14,
                    padding: { top: 48, bottom: 48 },
                    fontFamily: '"Geist Mono", "JetBrains Mono", monospace'
                  }}
                  onEditorReady={(e) => {
                    editor = e;
                    if (snapshots().length > 0) highlightLine(snapshots()[currentStep()].line);
                  }}
                />
                
                {/* Visual Indicators for Trace Position */}
                <div class="absolute left-1 pointer-events-none transition-all duration-300 ease-out z-20" style={{ top: `${getNextLineTop()}px` }}>
                   <div class="flex items-center">
                      <ChevronRight class="w-6 h-6 text-accent-pink fill-accent-pink shadow-lg" />
                   </div>
                </div>
                
                <div class="absolute top-0 right-0 p-4 flex gap-2">
                   <div class="px-2 py-1 bg-accent-pink/10 border border-accent-pink/20 rounded-lg text-[9px] font-bold text-accent-pink uppercase tracking-widest shadow-sm backdrop-blur-md">
                      Pending Step
                   </div>
                </div>
              </div>
            </Panel>
          </section>

          {/* Right Data Pane */}
          <section class="xl:col-span-7 flex flex-col gap-6 min-h-0">
            {/* Output Panel */}
            <div class="h-32 shrink-0">
              <Panel title="Kernel Output" icon={<Terminal class="w-4 h-4 text-brand-secondary" />} class="h-full">
                <div class="p-4 bg-bg-tertiary h-full font-mono text-sm text-foreground overflow-auto scrollbar-thin rounded-xl border border-border shadow-inner">
                    <span class="text-accent-blue mr-2 opacity-50">$</span>
                    {snapshots()[currentStep()]?.stdout || 'Execution trace loading...'}
                    <span class="inline-block w-2 h-4 bg-accent-blue/50 ml-1 animate-pulse" />
                </div>
              </Panel>
            </div>

            {/* Memory Panes */}
            <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 min-h-0">
              <Panel title="Stack Registry" icon={<Layers class="w-4 h-4 text-accent-purple" />} class="flex-1">
                 <div class="h-full overflow-y-auto p-4 space-y-4 no-scrollbar bg-background/30 rounded-xl relative">
                    <div class="absolute inset-y-0 left-0 w-1 bg-accent-blue rounded-full" />
                    <div class="pl-3">
                       <StackFrame stack={snapshots()[currentStep()]?.stack || []} />
                    </div>
                 </div>
              </Panel>
              
              <Panel title="Environment Cache" icon={<Box class="w-4 h-4 text-accent-blue" />} class="flex-1">
                 <div class="h-full flex flex-col items-center justify-center text-center p-10 space-y-5">
                    <div class="relative">
                      <div class="w-14 h-14 flex items-center justify-center rounded-2xl bg-accent-blue/5 border border-accent-blue/10">
                        <Cpu class="w-7 h-7 text-accent-blue/40" />
                      </div>
                      <div class="absolute inset-0 bg-accent-blue/20 blur-3xl rounded-full" />
                    </div>
                    <div class="space-y-2">
                      <p class="text-sm font-bold text-foreground">Memory Analyzer Active</p>
                      <p class="text-[10px] uppercase font-black tracking-[0.2em] text-brand-muted">Tracing Reference Hooks</p>
                      <p class="text-[12px] text-brand-secondary leading-relaxed max-w-[220px] pt-4 italic">
                        The visualizer is monitoring garbage collection and memory pointers in real-time.
                      </p>
                    </div>
                 </div>
              </Panel>
            </div>
          </section>
        </div>

        {/* Timeline Controller */}
        <section class="shrink-0 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <div class="bg-bg-secondary/80 border border-border rounded-3xl p-6 shadow-premium backdrop-blur-2xl">
              <div class="flex flex-col md:flex-row items-center gap-8">
                 <div class="flex items-center gap-5 shrink-0 px-4 py-2 bg-bg-tertiary rounded-2xl border border-border">
                    <div class="w-10 h-10 flex items-center justify-center bg-accent-blue/10 rounded-xl text-accent-blue">
                      <Activity class="w-5 h-5" />
                    </div>
                    <div>
                      <h4 class="text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted mb-0.5">Timeline Position</h4>
                      <p class="text-sm font-black flex items-baseline gap-1">
                        NODE <span class="text-accent-blue text-lg">{snapshots().length > 0 ? currentStep() + 1 : 0}</span>
                        <span class="mx-1 opacity-20">/</span>
                        <span class="text-brand-secondary">{snapshots().length}</span>
                      </p>
                    </div>
                 </div>

                 <div class="flex-1 w-full flex flex-col gap-4">
                    <div class="flex items-center justify-between">
                       <div class="flex gap-2">
                          <Button variant="ghost" size="icon" class="w-10 h-10 bg-bg-tertiary border border-border" onClick={() => handleStep(0)}>
                            <ChevronsLeft class="w-4 h-4" />
                          </Button>
                          <Button variant="secondary" size="md" class="h-10 px-6 font-bold text-[11px] uppercase tracking-wider" onClick={() => handleStep(currentStep() - 1)} leftIcon={<ChevronLeft class="w-4 h-4" />}>
                            Prev
                          </Button>
                          <Button variant="brand" size="md" class="h-10 px-8 font-bold text-[11px] uppercase tracking-wider" onClick={() => handleStep(currentStep() + 1)} rightIcon={<ChevronRight class="w-4 h-4" />}>
                            Next Step
                          </Button>
                          <Button variant="ghost" size="icon" class="w-10 h-10 bg-bg-tertiary border border-border" onClick={() => handleStep(snapshots().length - 1)}>
                            <ChevronsRight class="w-4 h-4" />
                          </Button>
                       </div>

                       <div class="hidden lg:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted">
                          <div class="flex items-center gap-2">
                             <div class="w-3 h-1 bg-accent-blue rounded-full" />
                             <span>Traced</span>
                          </div>
                          <div class="flex items-center gap-2">
                             <div class="w-3 h-1 bg-accent-pink rounded-full" />
                             <span>Pending</span>
                          </div>
                       </div>
                    </div>

                    <div class="relative h-2 w-full bg-bg-tertiary rounded-full overflow-hidden group border border-border">
                        <input
                           type="range"
                           class="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
                           min="0"
                           max={snapshots().length - 1}
                           value={currentStep()}
                           onInput={(e) => handleStep(parseInt(e.currentTarget.value))}
                         />
                        <div 
                          class="absolute inset-y-0 left-0 bg-accent-blue transition-all duration-300 shadow-[0_0_20px_rgba(0,112,243,0.3)]" 
                          style={{ width: `${(currentStep() / Math.max(1, snapshots().length - 1)) * 100}%` }} 
                        />
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
};

export default Visualizer;
