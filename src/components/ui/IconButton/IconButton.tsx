import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/twUtils';

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

const buttonVariants = cva('flex items-center rounded-sm p-12', {
	variants: {
		variant: {
			primary: 'bg-neutral-50 opacity-80 hover:bg-neutral-50 hover:text-neutral-600',
			secondary: 'bg-primary-50 opacity-80 hover:bg-primary-50 hover:text-primary-600',
			outline: 'border border-neutral-200 bg-white hover:border-neutral-100 hover:text-neutral-500',
			confirm: 'bg-green-500 text-neutral-50 hover:bg-green-500/80',
			alert: 'bg-warning-400 text-neutral-50 hover:bg-warning-400/80',
			destructive: 'bg-red-500 text-neutral-50 hover:bg-red-500/80',
			ghost: 'hover:bg-neutral-50 hover:text-neutral-600',
		},
		size: {
			sm: 'p-8',
			md: 'p-12',
			lg: 'p-16',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'md',
	},
});

export const IconButton = ({ children, variant, size, className, ...props }: IconButtonProps) => {
	return (
		<button
			{...props}
			className={cn(buttonVariants({ variant, size, className }))}
		>
			{children}
		</button>
	);
};
