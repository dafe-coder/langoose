import classNames from 'classnames'
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'

import styles from './par.module.scss'

interface ParProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: string | ReactNode
	size?: 'base' | 'xs' | 'sm' | 'm'
	color?: 'base' | 'black' | 'gray'
	fw?: 'base' | 'semibold'
}

export const Par: FC<ParProps> = ({
	children,
	className,
	size = 'base',
	color = 'base',
	fw = 'base'
}) => {
	return (
		<div
			className={classNames(
				styles.par,
				styles[size],
				styles[color],
				styles[fw],
				className
			)}
		>
			{children}
		</div>
	)
}
