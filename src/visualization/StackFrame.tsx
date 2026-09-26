import { For, Show } from 'solid-js';
import { cn } from '../utils/cn';

interface Frame {
  func_name: string;
  line: number;
  locals: Record<string, any>;
}

interface StackFrameProps {
  stack: Frame[];
}

const StackFrame = (props: StackFrameProps) => {
  return (
    <div class="flex flex-col-reverse gap-5">
      <For each={props.stack}>
        {(frame, index) => (
          <div 
            class={cn(
              "group relative overflow-hidden rounded-2xl border transition-all duration-500",
              index() === props.stack.length - 1
                ? "border-accent-blue bg-bg-secondary shadow-premium" 
                : "border-border bg-bg-tertiary/50 opacity-60 hover:opacity-100"
            )}
          >
            {/* Frame Header */}
            <div 
              class={cn(
                "px-5 py-3 flex items-center justify-between border-b transition-colors",
                index() === props.stack.length - 1 ? "bg-accent-blue/5 border-accent-blue/10" : "bg-bg-tertiary border-border"
              )}
            >
              <div class="flex items-center gap-3">
                <div class={cn(
                  "w-2 h-2 rounded-full",
                  index() === props.stack.length - 1 ? "bg-accent-blue shadow-[0_0_10px_rgba(0,112,243,0.5)] animate-pulse" : "bg-brand-muted"
                )} />
                <span class="font-mono text-[12px] font-bold tracking-tight text-foreground">
                    {frame.func_name === '<module>' ? 'Global Context' : frame.func_name}
                </span>
              </div>
              <span class="text-[9px] font-black uppercase tracking-[0.2em] text-brand-muted">
                  Line {frame.line}
              </span>
            </div>

            {/* Frame Body - Variable Table */}
            <div class="p-4">
              <Show when={Object.keys(frame.locals).length > 0} fallback={
                <div class="py-6 flex flex-col items-center justify-center opacity-30">
                   <span class="text-[10px] uppercase font-black tracking-[0.2em] italic text-brand-muted">
                      No locals defined
                   </span>
                </div>
              }>
                <div class="space-y-1.5">
                  <For each={Object.entries(frame.locals)}>
                    {([name, value]) => (
                      <div class="flex items-center justify-between group/var py-2 px-3 rounded-xl hover:bg-foreground/5 transition-all">
                        <span class="font-mono text-[12px] font-bold text-accent-blue">{name}</span>
                        <div class="flex items-center gap-2">
                           <span class="font-mono text-[12px] text-foreground font-medium py-0.5 px-2 bg-foreground/5 rounded-lg border border-border">
                             {renderValue(value)}
                           </span>
                        </div>
                      </div>
                    )}
                  </For>
                </div>
              </Show>
            </div>
            
            {/* Visual indicator for active frame */}
            <Show when={index() === props.stack.length - 1}>
               <div class="absolute inset-y-0 left-0 w-1 bg-accent-blue" />
            </Show>
          </div>
        )}
      </For>
    </div>
  );
};

const renderValue = (value: any): string => {
    if (value === null) return 'None';
    if (value === true) return 'True';
    if (value === false) return 'False';
    if (Array.isArray(value)) return `[${value.map(v => renderValue(v)).join(', ')}]`;
    if (typeof value === 'object') return '{...}';
    if (typeof value === 'string') return `"${value}"`;
    return String(value);
};

export default StackFrame;
