import cn from 'classnames'
import { LucideIcon } from 'lucide-react'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { gray } from 'tailwindcss/colors'

import styles from './input.module.scss'

interface Props
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	placeholder?: string
	value: string
	setValue: (value: string) => void
	icon?: LucideIcon
}

export const Input: FC<Props> = ({
	placeholder,
	setValue,
	value,
	icon: Icon,
	className
}) => {
	return (
		<div className={styles.wrap}>
			{Icon && (
				<Icon
					size={18}
					color={gray['300']}
					className={styles.icon}
				/>
			)}
			<input
				className={cn(
					styles.input,
					{
						[styles.inputWithIcon]: Icon
					},
					className
				)}
				placeholder={placeholder}
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</div>
	)
}
