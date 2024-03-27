import { FC } from 'react'

import { dashboardDataNavbar } from './dashboardNavbar.data'
import styles from './dashboardNavbar.module.scss'
import { DashboardNavbarItem } from './dashboardNavbarItem/DashboardNavbarItem'

export const DashboardNavBar: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div>
				<div className={styles.mainTitle}>Blocks</div>
				<div className={styles.par}>
					Drag and drop available widgets on to the gray dot area to design your
					layout
				</div>
			</div>
			{dashboardDataNavbar.length &&
				dashboardDataNavbar.map(item => (
					<div
						className={styles.item}
						key={item.category}
					>
						<div className={styles.itemTitle}>{item.category}</div>
						<div className={styles.itemList}>
							{item.items.map(navbarItem => (
								<DashboardNavbarItem
									key={navbarItem.name}
									name={navbarItem.name}
									icon={navbarItem.icon}
								/>
							))}
						</div>
					</div>
				))}
		</div>
	)
}
