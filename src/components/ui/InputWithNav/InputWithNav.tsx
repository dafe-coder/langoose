import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import styles from './inputWithNav.module.scss'

interface Props extends PropsWithChildren {
	active?: boolean
	placeholder?: string
}

export const InputWithNav: FC<Props> = ({
	active = false,
	children,
	placeholder = 'Option 1'
}) => {
	return (
		<div
			className={cn(styles.inputWrap, {
				[styles.active]: active
			})}
		>
			<input placeholder={placeholder} />
			<div className={styles.nav}>{children}</div>
		</div>
	)
}
