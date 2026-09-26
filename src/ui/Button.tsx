import { JSX, splitProps, Show } from 'solid-js';
import { cn } from '../utils/cn';

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger' | 'brand';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'icon';
  loading?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

const Button = (props: ButtonProps) => {
  const [local, others] = splitProps(props, [
    'variant',
    'size',
    'loading',
    'leftIcon',
    'rightIcon',
    'class',
    'children',
    'disabled'
  ]);

  const variants = {
    primary: 'bg-foreground text-background hover:opacity-90 shadow-lg active:scale-95',
    secondary: 'bg-bg-tertiary text-foreground border border-border hover:bg-border active:scale-95',
    brand: 'bg-accent-blue text-white hover:opacity-90 shadow-lg shadow-accent-blue/20 active:scale-95',
    outline: 'bg-transparent border border-border hover:border-foreground/20 text-foreground active:scale-95',
    ghost: 'bg-transparent hover:bg-foreground/5 text-brand-secondary hover:text-foreground',
    danger: 'bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20'
  };

  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-6 text-sm',
    lg: 'h-12 px-8 text-base font-semibold',
    xl: 'h-14 px-10 text-lg font-bold tracking-tight',
    icon: 'h-10 w-10 p-0'
  };

  return (
    <button
      class={cn(
        'inline-flex items-center justify-center rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 disabled:opacity-50 disabled:cursor-not-allowed font-medium',
        variants[local.variant || 'secondary'],
        sizes[local.size || 'md'],
        local.class
      )}
      disabled={local.disabled || local.loading}
      {...others}
    >
      <Show when={local.loading}>
        <div class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      </Show>
      
      <Show when={local.leftIcon && !local.loading}>
        <span class="mr-2">{local.leftIcon}</span>
      </Show>
      
      {local.children}
      
      <Show when={local.rightIcon && !local.loading}>
        <span class="ml-2">{local.rightIcon}</span>
      </Show>
    </button>
  );
};

export default Button;
