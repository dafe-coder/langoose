import { icons } from 'lucide-react'
import { FC } from 'react'

import { IDashboardDataItem } from '../dashboardNavbar.types'

import styles from './dashboardNavbarItem.module.scss'

export const DashboardNavbarItem: FC<IDashboardDataItem> = ({ icon, name }) => {
	// @ts-ignore
	const IconComponent = icons[icon]

	return (
		<div className={styles.item}>
			<div className={styles.icon}>
				<IconComponent
					size='16'
					stroke-width={1}
				/>
			</div>
			<div>{name}</div>
		</div>
	)
}
