import cn from 'classnames'
import { LucideProps } from 'lucide-react'
import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	FC,
	ForwardRefExoticComponent
} from 'react'

import styles from './button.module.scss'

type ButtonVariant = 'primary' | 'border' | 'danger' | 'inline'

interface IButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	icon?: ForwardRefExoticComponent<LucideProps> | undefined
	variant?: ButtonVariant
	iconPos?: 'left' | 'right'
	color?: 'black' | 'blue'
}

export const Button: FC<IButtonProps> = ({
	children,
	icon: Icon,
	variant = 'border',
	className,
	iconPos = 'right',
	color = 'black',
	...rest
}) => {
	return (
		<button
			className={cn(styles.button, styles[variant], styles[color], className)}
			{...rest}
		>
			{iconPos == 'left' && Icon ? (
				<Icon
					strokeWidth={2}
					size={18}
				/>
			) : (
				<></>
			)}
			{children}
			{iconPos == 'right' && Icon ? (
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
