import cn from 'classnames'
import { LucideProps } from 'lucide-react'
import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	FC,
	ForwardRefExoticComponent,
	PropsWithChildren
} from 'react'

import styles from './button.module.scss'

type ButtonVariant = 'primary' | 'border' | 'danger'

interface IButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	icon?: ForwardRefExoticComponent<LucideProps> | undefined
	variant?: ButtonVariant
}

export const Button: FC<IButtonProps> = ({
	children,
	icon: Icon,
	variant = 'border',
	className,
	...rest
}) => {
	return (
		<button
			className={cn(styles.button, styles[variant], className)}
			{...rest}
		>
			{children}
			{Icon ? (
				<Icon
					strokeWidth={2}
					size={18}
				/>
			) : (
				<></>
			)}
		</button>
	)
}
