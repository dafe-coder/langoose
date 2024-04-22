import { FC, useEffect, useState } from 'react'

import { Par } from '@/components/ui'

import { Search } from '../ui'

import { dashboardDataNavbar } from './dashboardNavbar.data'
import styles from './dashboardNavbar.module.scss'
import { DashboardNavbarItem } from './dashboardNavbarItem/DashboardNavbarItem'

export const DashboardNavBar: FC = () => {
	const [data, setData] = useState(dashboardDataNavbar)
	const [searchValue, setSearchValue] = useState('')

	useEffect(() => {
		if (searchValue !== '') {
			setData(
				data.filter(item =>
					item.category.toLowerCase().includes(searchValue.toLowerCase())
				)
			)
		} else {
			setData(dashboardDataNavbar)
		}
	}, [searchValue])
	return (
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<div>
					<div className={styles.mainTitle}>Blocks</div>
					<Par
						color='dark'
						size='sm'
					>
						Drag and drop available widgets on to the gray dot area to design
						your layout
					</Par>
					<Search
						setValue={setSearchValue}
						value={searchValue}
						placeholder='Search block'
					/>
				</div>
				{data.length ? (
					data.map(item => (
						<div
							className={styles.item}
							key={item.category}
						>
							<div className={styles.itemTitle}>{item.category}</div>
							<div className={styles.itemList}>
								{item.items.map(navbarItem => (
									<DashboardNavbarItem
										item={navbarItem}
										key={navbarItem.name}
									/>
								))}
							</div>
						</div>
					))
				) : (
					<Par size='sm'>Nothing</Par>
				)}
			</div>
		</div>
	)
}
