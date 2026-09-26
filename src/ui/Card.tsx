import { JSX } from 'solid-js';
import { cn } from '../utils/cn';

export const Card = (props: { class?: string; children: JSX.Element }) => (
  <div class={cn('rounded-3xl border border-border bg-bg-secondary shadow-premium transition-all duration-300 hover:border-border-bright', props.class)}>
    {props.children}
  </div>
);

export const CardHeader = (props: { class?: string; children: JSX.Element }) => (
  <div class={cn('flex flex-col space-y-1.5 p-8', props.class)}>
    {props.children}
  </div>
);

export const CardTitle = (props: { class?: string; children: JSX.Element }) => (
  <h3 class={cn('text-2xl font-bold text-foreground tracking-tight', props.class)}>
    {props.children}
  </h3>
);

export const CardDescription = (props: { class?: string; children: JSX.Element }) => (
  <p class={cn('text-sm font-medium text-brand-secondary leading-relaxed', props.class)}>
    {props.children}
  </p>
);

export const CardContent = (props: { class?: string; children: JSX.Element }) => (
  <div class={cn('p-8 pt-0', props.class)}>
    {props.children}
  </div>
);

export const CardFooter = (props: { class?: string; children: JSX.Element }) => (
  <div class={cn('flex items-center p-8 pt-0', props.class)}>
    {props.children}
  </div>
);
