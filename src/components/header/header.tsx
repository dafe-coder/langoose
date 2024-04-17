import { Eye, Save } from 'lucide-react'
import { FC } from 'react'

import { Button } from '../ui/Button/Button'
import { GoBack } from '../ui/goBack/goBack'

import styles from './header.module.scss'

export const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.actions}>
				<GoBack />
				<div className={styles.title}>Present Simple Pt. 1</div>
			</div>
			<div className={styles.actions}>
				<Button
					icon={Eye}
					className='mr-5'
				>
					Preview
				</Button>
				<Button
					icon={Save}
					variant='primary'
				>
					Save
				</Button>
			</div>
		</div>
	)
}
