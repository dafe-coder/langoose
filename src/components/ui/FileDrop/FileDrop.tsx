import { LucideIcon } from 'lucide-react'
import { FC } from 'react'

import { Par } from '../Par/Par'

import styles from './fileDrop.module.scss'

type Props = {
	icon: {
		icon: LucideIcon
	}
	iconText: string
}

export const FileDrop: FC<Props> = ({ icon, iconText }) => {
	return (
		<div className={styles.dropWrapper}>
			<div className={styles.addImages}>
				<icon.icon strokeWidth={1} />
				<Par
					size='sm'
					color='black'
				>
					{iconText}
				</Par>
			</div>
		</div>
	)
}
