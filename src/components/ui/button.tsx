import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-coral-dark shadow-soft hover:shadow-medium hover:-translate-y-0.5',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-teal-dark shadow-soft hover:shadow-medium hover:-translate-y-0.5',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border-primary text-primary hover:bg-primary hover:text-primary-foreground border-2 bg-transparent',
        outlineSecondary:
          'border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground border-2 bg-transparent',
        ghost: 'text-foreground hover:bg-muted hover:text-foreground rounded-lg',
        link: 'text-primary underline-offset-4 hover:underline',
        hero: 'bg-primary text-primary-foreground hover:bg-coral-dark shadow-medium hover:shadow-glow text-lg hover:-translate-y-1',
        heroSecondary:
          'bg-card border-primary text-primary hover:bg-coral-light shadow-soft border-2 text-lg hover:-translate-y-1',
        accent:
          'bg-accent text-accent-foreground hover:bg-sunny shadow-soft hover:shadow-medium hover:-translate-y-0.5',
      },
      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-10 px-4 py-2 text-sm',
        lg: 'h-14 px-8 py-4 text-lg',
        xl: 'h-16 px-10 py-5 text-xl',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
