import { icons } from 'lucide-react'
import { FC } from 'react'
import { useDrag } from 'react-dnd'

import { dashboardBlocksDragType } from '@/types/dashboard/dashboard.interface'

import { IDashboardDataItem } from '../dashboardNavbar.types'

import styles from './dashboardNavbarItem.module.scss'

export const DashboardNavbarItem: FC<IDashboardDataItem> = ({ icon, name }) => {
	// @ts-ignore
	const IconComponent = icons[icon]

	const [{ isDragging }, drag] = useDrag(() => ({
		type: dashboardBlocksDragType.textBlock,
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	}))

	return (
		<div
			className={styles.item}
			ref={drag}
			style={{
				opacity: isDragging ? 0.5 : 1,
				cursor: 'move'
			}}
		>
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
