import * as React from 'react';

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = ({ children, ...props }: IconButtonProps) => {
	return (
		<button
			{...props}
			className={`flex items-center rounded-sm bg-neutral-50 p-12 opacity-80 hover:bg-primary-50 hover:text-primary-600`}
		>
			{children}
		</button>
	);
};
