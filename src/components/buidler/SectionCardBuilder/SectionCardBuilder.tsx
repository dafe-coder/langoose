import { FC } from 'react'

import Icon from '@/components/ui/LucideIcon/LucideIcon'

import { Divider } from '../../ui/Divider/Divider'

import styles from './sectionCardBuilder.module.scss'

export const SectionCardBuilder: FC = () => {
	return (
		<div className={styles.card}>
			<div className={styles.cardInner}>
				<div className={styles.drag}>Drag and drop block here</div>
				<Divider>or</Divider>
				<div className={styles.choose}>
					<Icon
						strokeWidth={3}
						name='plus'
					/>{' '}
					Choose block
				</div>
			</div>
		</div>
	)
}
