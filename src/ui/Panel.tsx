import { JSX } from 'solid-js';
import { cn } from '../utils/cn';

interface PanelProps {
  title?: string;
  icon?: JSX.Element;
  class?: string;
  children: JSX.Element;
  headerAction?: JSX.Element;
}

export const Panel = (props: PanelProps) => {
  return (
    <div class={cn(
      'flex flex-col overflow-hidden bg-bg-secondary border border-border rounded-2xl shadow-premium transition-all duration-300',
      props.class
    )}>
      {props.title && (
        <div class="flex items-center justify-between px-6 py-4 border-b border-border bg-bg-tertiary">
          <div class="flex items-center gap-3">
            <div class="text-brand-secondary">
              {props.icon}
            </div>
            <span class="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-secondary">
              {props.title}
            </span>
          </div>
          {props.headerAction}
        </div>
      )}
      <div class="flex-1 p-6">
        {props.children}
      </div>
    </div>
  );
};

export default Panel;
