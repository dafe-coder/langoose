import classnames from 'classnames'
import { GripVertical } from 'lucide-react'
import { FC, ReactNode } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { blue } from 'tailwindcss/colors'

import { IDashboardDataItem } from '@/components/dashboardNavBar/dashboardNavbar.types'

import { dashboardBlocksDragType } from '@/types/dashboard/dashboard.interface'

import styles from './dropItem.module.scss'

interface IProps {
	children: ReactNode
	id: string
	moveBlock: (id: string, atIndex: number) => void
	findBlock: (id: string) => { index: number; block: IDashboardDataItem }
}

interface Item {
	id: string
	originalIndex: number
}

export const DropItem: FC<IProps> = ({
	id,
	moveBlock,
	findBlock,
	children
}) => {
	const originalIndex = findBlock(id).index

	const [{ opacity }, drag, preview] = useDrag(
		() => ({
			type: dashboardBlocksDragType.buildBlocks,
			item: { id, originalIndex },
			collect: monitor => ({
				opacity: monitor.isDragging() ? 0.4 : 1
			}),
			end: (item, monitor) => {
				const { id: droppedId, originalIndex } = item
				const didDrop = monitor.didDrop()
				if (!didDrop) {
					moveBlock(droppedId, originalIndex)
				}
			}
		}),
		[id, originalIndex, moveBlock]
	)

	const [, drop] = useDrop(
		() => ({
			accept: dashboardBlocksDragType.buildBlocks,
			hover({ id: draggedId }: Item) {
				if (draggedId !== id) {
					const { index: overIndex } = findBlock(id)
					moveBlock(draggedId, overIndex)
				}
			}
		}),
		[findBlock, moveBlock]
	)

	return (
		<div
			style={{ opacity }}
			// @ts-ignore
			ref={node => drag(drop(node))}
			className={classnames('white-box', styles.box)}
		>
			<div
				className='cursor-pointer'
				// @ts-ignore
				ref={drag}
			>
				<GripVertical color={blue[300]} />
			</div>
			{children}
		</div>
	)
}
