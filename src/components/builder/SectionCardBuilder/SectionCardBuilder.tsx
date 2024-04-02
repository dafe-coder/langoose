'use client'

import { FC, useState } from 'react'
import { useDrop } from 'react-dnd'
import { blue } from 'tailwindcss/colors'

import Icon from '@/components/ui/LucideIcon/LucideIcon'

import { dashboardBlocksDragType } from '@/types/dashboard/dashboard.interface'

import { Divider } from '../../ui/Divider/Divider'

import styles from './sectionCardBuilder.module.scss'

export interface DustbinProps {
	accept: string[]
	lastDroppedItem?: any
	onDrop: (item: any) => void
}

export const SectionCardBuilder: FC<DustbinProps> = () => {
	const [items, setItems] = useState([])
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: dashboardBlocksDragType.textBlock,
		drop: (item, monitor) => {
			console.log(item)

			return { name: 'SectionCardBuilder' }
		},
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	}))

	const addItem = (item: string) => {
		// const item =
		// setItems(item)
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
			<div className={styles.cardInner}>
				<div
					style={{ backgroundColor }}
					className={styles.drag}
					// @ts-ignore
					ref={drop}
				>
					Drag and drop block here
				</div>
				<Divider>or</Divider>
				<div className={styles.choose}>
					{/* <Icon
						strokeWidth={3}
						name='plus'
					/> */}
					+ Choose block
				</div>
			</div>
		</div>
	)
}
