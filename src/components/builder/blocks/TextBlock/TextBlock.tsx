import classnames from 'classnames'
import { GripVertical } from 'lucide-react'
import { FC } from 'react'
import { useDrag } from 'react-dnd'
import { blue } from 'tailwindcss/colors'

import { dashboardBlocksDragType } from '@/types/dashboard/dashboard.interface'

import styles from './textBlock.module.scss'

interface TextBlockProps {
	moveBlock: (id: string, atIndex: number) => void
	findBlock: (id: string) => void
}

export const TextBlock: FC<TextBlockProps> = ({ moveBlock, findBlock }) => {
	const [{ opacity }, drag, preview] = useDrag(() => ({
		type: dashboardBlocksDragType.buildBlocks,
		collect: monitor => ({
			opacity: monitor.isDragging() ? 0.4 : 1
		})
	}))

	return (
		<div
			style={{ opacity }}
			// @ts-ignore
			ref={preview}
			className={classnames('white-box', styles.box)}
		>
			<div
				className='cursor-pointer'
				// @ts-ignore
				ref={drag}
			>
				<GripVertical color={blue[300]} />
			</div>
			<input
				className={styles.input}
				type='text'
				placeholder='Insert your title here'
			/>
		</div>
	)
}
