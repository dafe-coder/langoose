import { FC, PropsWithChildren } from 'react'

import styles from './divider.module.scss'

export const Divider: FC<PropsWithChildren> = ({ children }) => {
	return <div className={styles.divider}>{children}</div>
}
