'use client'

import { FC } from 'react'
import { useDrop } from 'react-dnd'

import Icon from '@/components/ui/LucideIcon/LucideIcon'

import { dashboardBlocksDragType } from '@/types/dashboard/dashboard.interface'

import { Divider } from '../../ui/Divider/Divider'

import styles from './sectionCardBuilder.module.scss'

export const SectionCardBuilder: FC = () => {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: dashboardBlocksDragType.textBlock,
		drop: () => ({ name: 'SectionCardBuilder' }),
		collect: (monitor) => ({
		  isOver: monitor.isOver(),
		  canDrop: monitor.canDrop(),
		}),
	}))
	const isActive = canDrop && isOver
	let backgroundColor = ''
	if (isActive) {
	  backgroundColor = 'darkgreen'
	} else if (canDrop) {
	  backgroundColor = 'darkkhaki'
	}
	return (
		<div
			className={styles.card}
			ref={drop}
		>
			<div className={styles.cardInner} style={{  backgroundColor }}>
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
