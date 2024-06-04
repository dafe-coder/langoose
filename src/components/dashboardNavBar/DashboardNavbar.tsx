import { FC, useEffect, useState } from 'react'

import { Par } from '@/components/ui'

import { Search } from '../ui'

import styles from './dashboardNavbar.module.scss'
import { IDashboardDataBlock } from './dashboardNavbar.types'
import { DashboardNavbarItem } from './dashboardNavbarItem/DashboardNavbarItem'
import { useDashboard } from './hooks/dashboardData.hook'

export const DashboardNavBar: FC = () => {
	const { data: dataNav } = useDashboard()
	const [data, setData] = useState<IDashboardDataBlock[]>([])
	const [searchValue, setSearchValue] = useState('')

	useEffect(() => {
		if (dataNav) {
			setData(dataNav)
		}
	}, [dataNav])

	useEffect(() => {
		if (dataNav) {
			if (searchValue !== '') {
				setData(
					dataNav.filter((item: IDashboardDataBlock) =>
						item.title.toLowerCase().includes(searchValue.toLowerCase())
					)
				)
			} else {
				setData(dataNav)
			}
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
				{data && data.length ? (
					data.map(item => (
						<div
							className={styles.item}
							key={item.title}
						>
							<div className={styles.itemTitle}>{item.title}</div>
							<div className={styles.itemList}>
								{item.blockItems.map(navbarItem => (
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
