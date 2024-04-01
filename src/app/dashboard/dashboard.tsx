import { FC } from 'react'

import { CanvasBuilder } from '@/components/builder/CanvasBuilder/CanvasBuilder'

import styles from './dashboard.module.scss'

export const Dashboard: FC = () => {
	return (
		<div className={styles.wrapper}>
			<CanvasBuilder />
		</div>
	)
}
