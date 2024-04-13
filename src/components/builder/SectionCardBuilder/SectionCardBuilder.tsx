'use client'

import classNames from 'classnames'
import { FC, useState } from 'react'
import { useDrop } from 'react-dnd'
import { blue } from 'tailwindcss/colors'

import { IDashboardDataItem } from '@/components/dashboardNavBar/dashboardNavbar.types'
import Icon from '@/components/ui/LucideIcon/LucideIcon'

import { dashboardBlocksDragType } from '@/types/dashboard/dashboard.interface'

import { Divider } from '../../ui/Divider/Divider'

import DropList from './drop/DropList'
import styles from './sectionCardBuilder.module.scss'

export const SectionCardBuilder: FC = () => {
	const [items, setItems] = useState<IDashboardDataItem[]>([])
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: dashboardBlocksDragType.navbarBlock,
		drop: (item: IDashboardDataItem, monitor) => {
			addItem({ ...item, id: item.id + Date.now() })

			return { name: 'SectionCardBuilder' }
		},
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	}))

	const addItem = (item: IDashboardDataItem) => {
		setItems(state => [...state, item])
	}

	const isActive = canDrop && isOver
	let backgroundColor = ''
	if (isActive) {
		backgroundColor = blue[200]
	} else if (canDrop) {
		backgroundColor = blue[100]
	}
	return (
		<div className={styles.card}>
			<DropList
				data={items}
				setData={setItems}
			/>
			<div
				style={{ backgroundColor }}
				className={styles.cardInner}
			>
				<div
					className={classNames(styles.drag)}
					style={canDrop ? { marginBottom: 0 } : { marginBottom: '1rem' }}
					// @ts-ignore
					ref={drop}
				>
					Drag and drop block here
				</div>
				{!canDrop && (
					<>
						<Divider>or</Divider>
						<div className={styles.choose}>
							<Icon
								strokeWidth={3}
								name='plus'
							/>
							Choose block
						</div>
					</>
				)}
			</div>
		</div>
	)
}
