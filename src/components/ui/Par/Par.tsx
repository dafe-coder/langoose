import classNames from 'classnames'
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'

import styles from './par.module.scss'

interface ParProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: string | ReactNode
	size?: 'xs' | 'base'
}

export const Par: FC<ParProps> = ({ children, className, size = 'base' }) => {
	return (
		<div className={classNames(styles.par, styles[size], className)}>
			{children}
		</div>
	)
}
